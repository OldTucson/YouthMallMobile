$(function () {
  $('.searchBtn').on('tap', function () {
    var iptVal = $('.search-input').val()
    if (iptVal === '') {
      iptVal = $('.search-input').attr('placeholder')
    }
    setCookie('recent', iptVal)
    location.href = '../goods_list.html?key=' + iptVal
  })


  $('.hot-item').on('tap', function () {
    location.href = '../goods_list.html?key=' + $(this).html()
  })

  $('.icon-delete').on('tap', function () {
    $('.lately').remove()
  })
})