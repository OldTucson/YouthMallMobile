<?php

class ihuyi_sms{

	public $log_file = 'log.txt';

	public function __construct(){
		header("Content-type:text/html; charset=UTF-8");
		require_once 'config.ihuyi.php';
	}

	//请求数据到短信接口，检查环境是否 开启 curl init。
	private function post($curlPost,$url){
			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, $url);
			curl_setopt($curl, CURLOPT_HEADER, false);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($curl, CURLOPT_NOBODY, true);
			curl_setopt($curl, CURLOPT_POST, true);
			curl_setopt($curl, CURLOPT_POSTFIELDS, $curlPost);
			$return_str = curl_exec($curl);
			curl_close($curl);
			return $return_str;
	}

	//将 xml数据转换为数组格式。
	private function xml_to_array($xml){
		$reg = "/<(\w+)[^>]*>([\\x00-\\xFF]*)<\\/\\1>/";
		if(preg_match_all($reg, $xml, $matches)){
			$count = count($matches[0]);
			for($i = 0; $i < $count; $i++){
			$subxml= $matches[2][$i];
			$key = $matches[1][$i];
				if(preg_match( $reg, $subxml )){
					$arr[$key] = $this-> xml_to_array( $subxml );
				}else{
					$arr[$key] = $subxml;
				}
			}
		}
		return $arr;
	}

	//random() 函数返回随机整数。
	private function random($length = 6 , $numeric = 0) {
		PHP_VERSION < '4.2.0' && mt_srand((double)microtime() * 1000000);
		if($numeric) {
			$hash = sprintf('%0'.$length.'d', mt_rand(0, pow(10, $length) - 1));
		} else {
			$hash = '';
			$chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789abcdefghjkmnpqrstuvwxyz';
			$max = strlen($chars) - 1;
			for($i = 0; $i < $length; $i++) {
				$hash .= $chars[mt_rand(0, $max)];
			}
		}
		return $hash;
	}

	//防止恶意攻击
	private function sms_safe(){
		if($GLOBALS['ihuyi']['is_open_send_limit']!=1){
			return;
		}
		if (!empty($_SESSION['sms_send_black']) && $_SESSION['sms_send_black'] + $GLOBALS['ihuyi']['sms_send_black_time'] > time()) {
			exit('操作频繁,请'.ceil(($_SESSION['sms_send_black'] + $GLOBALS['ihuyi']['sms_send_black_time'] - time())/60).'分钟后重试');
		}

		if (empty($_SESSION['sms_send_num'])) {
			$_SESSION['sms_send_num'] = 1;
		}

		if(!empty($_SESSION['sms_send_time']) && $_SESSION['sms_send_time'] + $GLOBALS['ihuyi']['sms_send_time'] > time()){
			exit('操作频繁,请'.($_SESSION['sms_send_time'] + $GLOBALS['ihuyi']['sms_send_time'] - time()).'秒后重试');
		}

		if ($_SESSION['sms_send_num'] > $GLOBALS['ihuyi']['sms_send_num']) {
			$_SESSION['sms_send_black'] = time();
			unset($_SESSION['sms_send_num']);
			unset($_SESSION['sms_send_time']);
			exit('发送次数超过限制');
		}
	}

	//发送短信验证码
	public function send_sms($mobile){
		// 短信接口地址
		$target = $GLOBALS['ihuyi']['url'];
		//获取手机号
		$mobile = $mobile;
	
		//生成的随机数
		$mobile_code = $this->random(4,1);
		
		//防止恶意攻击 session 部分代码最好通过redis代替session实现
		$this->sms_safe();
		$content = "您的验证码是：".$mobile_code."。请不要把验证码泄露给其他人。" ; 
		$post_data = "account=".$GLOBALS['ihuyi']['appid'] ."&password=".$GLOBALS['ihuyi']['appkey'] ."&mobile=".$mobile."&content=".rawurlencode($content);
		$gets = $this-> xml_to_array($this->post($post_data, $target));
		if($gets['SubmitResult']['code']==2){
			$_SESSION['mobile']			= $mobile;
			$_SESSION['mobile_code']	= $mobile_code;
			$_SESSION['sms_send_time']	= time();
			$_SESSION['sms_send_num']	+= 1;
		}
		echo $gets['SubmitResult']['msg'];
	}
}

?>