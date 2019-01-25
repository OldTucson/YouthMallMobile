// 页面加载完毕 初始化图片验证码
$(function() {
    init()
});

// 获取验证码
(function() {
    var $getCodeBtn = $('.get-verification-code'),
        RegExp = /^1[3456789]\d{9}$/

    // 点击按钮获取验证码
    $getCodeBtn.on('tap', function() {
        var phoneVal = $('.phone-input').val()
        if (RegExp.test(phoneVal)) {
            if ($('.img-check').data('flag') == true) {
                $.post('../php/ymLoginByPhone.php?send_sms=1', {
                    mobile: phoneVal
                }, function(msg) {
                    console.log($.trim(unescape(msg)))
                    if (msg == '提交成功') {
                        RemainTime();
                    }
                })
            } else {
                showError('请将图片旋转朝上！')
            }
        } else {
            showError('手机号输入有错误！')
        }
    })

    //  验证码按钮 样式
    function RemainTime() {
        var iTime = 60
        $getCodeBtn.prop('disabled', true)
        $getCodeBtn.html('60S')
        var timer = setInterval(function() {
            iTime--
            $getCodeBtn.html(iTime + 'S')
            if (iTime <= 0) {
                clearInterval(timer)
                $getCodeBtn.html('重新发送')
                $getCodeBtn.prop('disabled', false)
            }
        }, 1000)
    }

})();

//  文本输入 旋转图片验证
(function() {

    //当手机号码输入时 给发送验证码添加颜色
    $('.phone-input').on('keyup', function() {
        var $getCodeBtn = $('.get-verification-code')
        $(this).val() === '' ? $getCodeBtn.removeClass('active') : $getCodeBtn.addClass('active')
    })

    // 显示密码
    $('.passwordEyeIcon').on('tap', function() {
        var dis = $('.icon-invisible')
        if (dis.hasClass('hide')) {
            dis.removeClass('hide').siblings().addClass('hide')
            $('.password-input').attr('type', 'password')
        } else {
            dis.addClass('hide').siblings().removeClass('hide');
            $('.password-input').attr('type', 'text')
        }
    })


    // 旋转图片
    $('.img-check-pics').on('tap', 'li', function() {

        var rotateNum = parseInt($(this).children('img').css('-webkit-transform').slice(7, 10))
        var flag = true;
        rotateNum += 90;
        if (rotateNum === 360) {
            rotateNum = 0
            $(this).data('checked', '1')
        } else {
            $(this).data('checked', '0')
        }

        $(this).children('img').css('-webkit-transform', 'rotate(' + rotateNum + 'deg)')

        var list = $(this).parent('ul').children().get();
        var res = list.every(function(x) {
            return $(x).data('checked') == '1'
        })

        if (res) {
            $(this).parents('.img-check').data('flag', 'true')
        } else {
            $(this).parents('.img-check').data('flag', 'false')
        }


        // 当所有文本框输入有值时并且图像验证正确 给注册按钮更改颜色
        if (btnActive()) {
            $('.registerbtn').addClass('active')
        } else {
            $('.registerbtn').removeClass('active')
        }

    })

    // 换一批
    $('.in').on('tap', function(e) {
        stopDefault(e)
        init()
    })


    // 当所有文本框输入有值时并且图像验证正确 给注册按钮更改颜色

    $('#reg-form input').on('keyup', function() {
        if (btnActive()) {
            $('.registerbtn').addClass('active')
        } else {
            $('.registerbtn').removeClass('active')
        }

    })

})();

//  点击注册按钮
(function() {
    $('.registerbtn').on('click', function(e) {
        stopDefault(e)
        if ($(this).hasClass('active')) {
            // 手机号码
            var RegExp = /^1[3456789]\d{9}$/,
                userVal = $('.phone-input').val()
                // 密码
            var pwRegExp = /^[0-9a-zA-Z]{6,20}$/,
                pwVal = $('.password-input').val()

            // 验证码
            var code = $('.code-input').val()

            // 验证手机号
            if (!RegExp.test(userVal)) {
                showError('手机号输入有错误！')
                return
            }
            // 验证密码
            if (!pwRegExp.test(pwVal)) {
                showError('密码必须由字母和数字组成！')
                return
            }
            //  发送请求
            $.post('../php/ymRegister.php', {
                mobile: userVal,
                pw: pwVal,
                mobile_code: code
            }, function(data) {
                if (data === 'error') {
                    showError('验证码输入有误！')
                } else if (data === 'repeat') {
                    showError('手机号已存在！')
                } else if (data === 'success') {
                    location.href = '../ymLoginByPhone.html'
                }
            })

        }
    })
})();


(function() {
    $('.check').on('tap', function() {
        var $checked = $('.icon-checked')
        $checked.hasClass('hide') ? $checked.removeClass('hide') : $checked.addClass('hide')
    })

    $('.check-info p').on('click', function(e) {
        stopDefault(e)
        showError('别瞎点！')
    })
})()


//  阻止浏览器默认行为
function stopDefault(e) {
    if (e && e.preventDefault) {
        e.preventDefault(); //防止浏览器默认行为(W3C)
    } else {
        window.event.returnValue = false; //IE中阻止浏览器行为
    }
    return false;
}

// 初始化图片验证码角度
function init() {
    var list = $('.img-check-pics').children();
    var x = 0;
    var imgNum=[]
    for(var i=0;i<4;i++){
        var img = Math.ceil(Math.random()*20)
        if(imgNum.indexOf(img) === -1){
            imgNum.push(img)
        }else{
            i--
        }
    }
    $.each(list, function(index, element) {
        var deg = [0, 90, 180, 270]
        var num = Math.floor(Math.random() * (0, 4))
        if (deg[num] == 0) {
            $(element).data('checked', '1')
        }
        $(element).children('img').attr('src','img/goods/hotgoods'+imgNum[index]+'.jpg').css('-webkit-transform', 'rotate(' + deg[num] + 'deg)');
    })

    var listD = list.get()
    var res = listD.every(function(x) {
        return $(x).data('checked') == '1'
    })
    if (res) {
        $('.img-check').data('flag', 'true')
    } else {
        $('.img-check').data('flag', 'false')

    }

}

// 当文本框为空时 返回false
function btnActive() {
    if ($('.mobile-input').val() === '') {
        return false
    }
    if ($('.verify-code-input').val() === '') {
        return false
    }
    if ($('.password-input').val() === '') {
        return false
    }
    if ($('.img-check').data('flag') == false) {
        return false
    }
    return true
}

//  错误信息
function showError(error) {
    $('.error').html(error).show()
    setTimeout(function() {
        $('.error').hide()
    }, 3000)
}