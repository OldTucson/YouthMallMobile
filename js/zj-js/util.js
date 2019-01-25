//获取ＤＯＭ
function $(selector){
	return document.querySelector(selector);
}
//简单封装ajax
function ajax(url,callback){
	var xhr = new XMLHttpRequest();
		xhr.open("get",url,true);
		xhr.send();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				var data = JSON.parse(xhr.responseText);
				callback(data);
			}
		}
}