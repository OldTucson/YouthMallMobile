$(function () {

  var username = getCookie('user')
  if(username){
    $('.logOrReg').html('Hi!'+username )
  }
  (function () {
    $('.search-box .searchBtn').on('tap', function () {
      var iptVal = $(this).siblings('input').val();
      location.href = '../goods_list.html?key=' + iptVal
    })
  })();

  (function () {
    $('.channel-list a').on('tap', function () {
      setCookie('sex', $(this).attr('id'))
    })
  })();
})