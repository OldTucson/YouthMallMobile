(function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3.2,
        spaceBetween: 8,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
})();

// 顶部app下载
(function (){
    $('.download-close').click(function (){
        $(this).parents('.top-downloadbar-box').hide()
    })
})();

(function(){
    $(".per-click").eq(0).click(function(){
        $('body,html').animate({scrollTop: $('#a1').offset().top},0);
        return false;
    })
    $(".per-click").eq(1).click(function(){
        $('body,html').animate({scrollTop: $('#a2').offset().top},0);
        return false;
    })
    $(".per-click").eq(2).click(function(){
        $('body,html').animate({scrollTop: $('#a3').offset().top},0);
        return false;
    })
    $(".per-click").eq(3).click(function(){
        $('body,html').animate({scrollTop: $('#a4').offset().top},0);
        return false;
    })
})();

(function(){
    var page = 1;
        $.ajax({
            type: 'get',
            url: '../php/ymfeature.php',
            dataType: 'json',
            data: {
                page:page
            },
            success:function(data){
                if(data.success ==1){
                    var list = data.list;
                    var list1 = data.list1;
                    for(var i = 0; i<list.length;i++){
                    	$(".swiper-slide").eq(i).html("<img src='img/goods/"+list[i].pic+"' alt=''><a class='anchor' href='javaScript:;'></a>")
                    }
                    for(var i = 0; i<list1.length;i++){
//                      $('.feature-product-info').eq(i).attr({"goodid":list[i].Id})
                        $(".product-detail-imgbox").eq(i).html("<img src='img/goods/"+list1[i].pic+"' alt=''>")
                        $(".sale-price").eq(i).html("￥"+list1[i].price+".00")
                        $(".market-price").eq(i).html("￥"+list1[i].disprice+".00")
                        $(".brand-name").eq(i).html(list1[i].goodName)
                    }
                    flag = true;
                }
                page++; 
            }
        })     
})();
/*跳转详情页 */
(function (){
    $(document).on('click','.feature-product-info',function (){
        var good_id = $(this).attr('goodid')
        location.href = 'ymGoods.html?goodid=' + good_id
    })
})();