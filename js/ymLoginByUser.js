$(function () {
  init()
})

$(function () {

  $('#banner-box .icon-Tip').on('tap', function () {
    $('.mask').show()
  })

  $('.mask .button-group').on('tap', function () {
    $('.mask').hide()
  })

  $('#backPw').on('tap', function (e) {
    e.preventDefault()
    $('.backPassword').show()
  })

  $('.backPassword-mask').on('tap', function () {
    $('.backPassword').hide()
  })

  // 显示密码
  $('.passwordEyeIcon').on('tap', function () {
    var dis = $('.icon-invisible')
    if (dis.hasClass('hide')) {
      dis.removeClass('hide').siblings().addClass('hide')
      $('.password-input').attr('type', 'password')
    } else {
      dis.addClass('hide').siblings().removeClass('hide');
      $('.password-input').attr('type', 'text')
    }
  })


  // 换一批
  $('.in').on('tap', function (e) {
    init()
  })

  // 旋转图片
  $('.img-check-pics').on('tap', 'li', function () {

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
    var res = list.every(function (x) {
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

  $('#user-login-form input').on('keyup', function () {
    var $btn = $('.loginbtn')
    if (btnActive()) {
      $btn.addClass('active')
    } else {
      $btn.removeClass('active')
    }
  })

  $('.loginbtn').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('active')) {
      var RegExp = /^1[3456789]\d{9}$/,
          pwRegExp = /^[0-9a-zA-Z]{6,20}$/
      var userVal = $('.user-input').val(),
          pwVal = $('.password-input').val()
      if (!RegExp.test(userVal)) {
        showError('手机号输入有错误！')
        return
      }
      if (!pwRegExp.test(pwVal)) {
        showError('密码格式错误！')
        return
      }

      $.post('../php/ymLoginByUser.php', {
        mobile: userVal,
        pw: pwVal
      }, function (data) {
        data = JSON.parse(data)
        if (data.success === 0) {
          return showError('密码错误！')
        }
        if (data.success === 1) {
          console.log(111)
          location.href = '../ymWel.html'
          setCookie('id', data.id)
          setCookie('user', userVal)
          setCookie('pw', pwVal)
        }
        if (data.success === 666) {
          return showError('用户不存在！')
        }
      })


    }
  })

})


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

function btnActive() {
  if ($('.user-input').val() === '') {
    return false
  }
  if ($('.password-input').val() === '') {
    return false
  }
  if ($('.img-check').data('flag') === false) {
    return false
  }
  return true
}

// 错误信息
var errorFlag = true;

function showError(error) {
  if (errorFlag) {
    errorFlag = false
    clearTimeout(timer)
    $('.error').html(error).show()
    var timer = setTimeout(function () {
      $('.error').hide()
      errorFlag = true
    }, 3000)
  }

}