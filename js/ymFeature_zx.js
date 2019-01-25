// 顶部app下载
(function (){
    $('.download-close').click(function (){
        $(this).parents('.top-downloadbar-box').hide()
    })
})();

// 新人专享福利点击说明
(function(){
    var anchor = $('.ymzx-flcon-anchor'),
        modal =$('.modal');
    anchor.on("click","a",function(){
        var index=$(this).index()
        modal.eq(index).show()
    })
    $(".modal-close").click(function(){
        $(".modal").hide()
    })
})();
// 人气单品滚动加载
(function(){
    var page = 1;
    // var flag = true
    // function favoFavo(){
    //     var scollx = $(window).height()-($('.ymzx-goods').offset().top-$(window).scrollTop())
    //     var height = $('.ymzx-goods').height()-500
    //     if(scollx>=height&&flag==true){
				
    //         flag = false
            $.ajax({
                type: 'get',
                url: '../php/ymfeature.php',
                dataType: 'json',
                data: {
                    page:page
                },
                success:function(data){
                   if(data.success ==1){
                        var list1 = data.list1
                        for(var i = 0; i<list1.length;i++){
                            $(".product-detail-imgbox").eq(i).html("<img src='img/goods/"+list1[i].pic+"' alt=''>")
                            $(".sale-price").eq(i).html("￥"+list1[i].price+".00")
                            $(".brand-name").eq(i).html(list1[i].goodName)
                        }
                        flag = true;
                   }
                   page++; 
                }
            })     
})();