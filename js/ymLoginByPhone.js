$(function() {
    init()
        // RemainTime()
});

(function() {
    $('#banner-box .icon-Tip').on('tap', function() {
        $('.mask').show()
    })

    $('.mask .button-group').on('tap', function() {
        $('.mask').hide()
    })

    $('#backPw').on('tap', function(e) {
        e.preventDefault()
        $('.backPassword').show()
    })

    $('.backPassword-mask').on('tap', function() {
        $('.backPassword').hide()
    })


    // 给发送验证码 添加样式
    $('.phone-input').on('keyup', function() {
            var $getCodeBtn = $('.get-verification-code')
            $(this).val() === '' ? $getCodeBtn.removeClass('active') : $getCodeBtn.addClass('active')
        })
        // 旋转验证码图片
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

        var $btn = $('.loginbtn')
        if (btnActive()) {
            $btn.addClass('active')
        } else {
            $btn.removeClass('active')
        }

    })

    $('#phone-login-form input').on('keyup', function() {
        var $btn = $('.loginbtn')
        if (btnActive()) {
            $btn.addClass('active')
        } else {
            $btn.removeClass('active')
        }

    })

    // 换一批
    $('.in').on('tap', function(e) {
        init()
    })
})();


// 获取验证码
(function() {
    var $getCodeBtn = $('.get-verification-code'),
        RegExp = /^1[3456789]\d{9}$/

    // 点击按钮获取验证码
    $getCodeBtn.on('tap', function() {
        var phoneVal = $('.phone-input').val()
        if (RegExp.test(phoneVal)) {
            if ($('.img-check').data('flag') == true) {
                $.post('../php/ymRegister.php?send_sms=1', {
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

(function() {
    $('.loginbtn').on('click', function(e) {
        e.preventDefault()
        if ($(this).hasClass('active')) {
            var RegExp = /^1[3456789]\d{9}$/,
                userVal = $('.phone-input').val()
            var code = $('.code-input').val()
            if (!RegExp.test(userVal)) {
                return showError('手机号输入有错误！')
            }
            $.post('../php/ymLoginByPhone.php', {
                mobile: userVal,
                mobile_code: code
            }, function(data) {
                data = JSON.parse(data)
                if (data.success === 'error') {
                    return showError('验证码错误！')
                }
                if (data.success === 'success') {
                    setCookie('id', data.id)
                    setCookie('user', userVal)
                    location.href = '../ymWel.html'
                }
                if (data.success === 'none') {
                    return showError('用户不存在！')
                }

            })
        }
    })
})()


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
    if ($('.phone-input').val() === '') {
        return false
    }
    if ($('.code-input').val() === '') {
        return false
    }
    if ($('.img-check').data('flag') == false) {
        return false
    }
    return true
}

//  错误信息
var errorFlag = true;

function showError(error) {
    if (errorFlag) {
        errorFlag = false
        clearTimeout(timer)
        $('.error').html(error).show()
        var timer = setTimeout(function() {
            $('.error').hide()
            errorFlag = true
        }, 3000)
    }

}