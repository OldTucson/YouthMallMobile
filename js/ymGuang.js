//banner部分
(function(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
       mousewheel:true,
       autoplay: {
       delay: 2500,
       disableOnInteraction: false,
    },
       pagination: {
       el: '.swiper-pagination',
       clickable: true,
    }
    
    });
})();
//顶部切换页面
(function(){
    var box=$('.box'),
        list=box.children('ul'),
        content=$('.content')
    function init(){ 
       list.children("li").eq(0).css({
           color:"#444"
       }).siblings().css({
            color:"#ccc"
       })
       list.children("li").eq(0).children('span').addClass('text')

       content.children('div').eq(0).show().siblings().hide()
    }
    init();


    list.on('click','li',function(){
        $(this).css({
            color:"#444"
        }).siblings().css({"color":"#ccc"})
        $(this).children('span').addClass('text').parent().siblings().children("span").removeClass('text')
        var index=$(this).index();
        content.children("div").eq(index).show().siblings().hide()
    })
})();

// 渲染页面
(function(){
    var page=5;
    // var flag=true;
    $.ajax({ 
        type:"get",
        url:"php/ymGuang.php",
        dataType:"json",
        data:{				
            page:page	
        },
        success:function(data){
            if(data.success == 1){
                var list = data.list
                for(var i=0;i<list.length;i++){
                    $(".goods-list li").eq(i).attr({"goodid":list[i].Id})
                    $(".goods-img a").eq(i).html("<img src='img/goods/"+list[i].pic +"' alt=''>")
                    $(".goods-desc").eq(i).html(list[i].desc)
                    $(".goods-price").eq(i).html("￥"+list[i].price+".00")
                }
                flag=true;
            }
           page++;
        }
    })
})();
(function(){
    var page=3;
    // var flag=true;
    $.ajax({ 
        type:"get",
        url:"php/ymGuang.php",
        dataType:"json",
        data:{	
            page:page,
        },
        success:function(data){
            if(data.success == 1){
                var list = data.list
                for(var i=0;i<list.length;i++){
                    $(".cont-cont").eq(i).attr({"goodid":list[i].Id})
                    $(".cont-pic").eq(i).html("<img src='img/goods/"+list[i].pic +"' alt=''>")
                    $(".cont-title").eq(i).html(list[i].title)
                    $(".cont-pp").eq(i).html(list[i].old)
                }
                flag=true;
            }
           page++;
        }
    })
})();
/*顶部下载点击事件 */
(function (){
    $('.download-close').click(function (){
        $(this).parents('.top-downloadbar-box').hide()
    })
})();

/*底部按钮 */
(function (){
    $('footer-tab .tab-item').on('click',function (){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })
})();


//滚动加载
// (function(){
//     $(window).scroll(function(){
        
//         var scrollTop = $(this).scrollTop();    //滚动条距离顶部的高度
//         var scrollHeight = $(document).height();   //当前页面的总高度
//         var clientHeight = $(this).height();    //当前可视的页面高度
//         // console.log("top:"+scrollTop+",doc:"+scrollHeight+",client:"+clientHeight);
//         if(scrollTop + clientHeight >= scrollHeight){   //距离顶部+当前高度 >=文档总高度 即代表滑动到底部 
//             (function(){
//                 var page=5;
            
//                 $.ajax({
//                     type:"get",
//                     url:"php/ymguang.php",
//                     dataType:"json",
//                     data:{
//                         page:page
//                     },
//                     success:function(data){
//                         if(data.success == 1){
//                             var list=data.list
//                             var ymG = $(".goods-list")
//                             function fun(i){
//                                 // var imgUrl = 'img/goods'+list[i].pic
//                                 var add ="<li class='goods-box' goodid='"+list[i].Id+"'>"
//                                 add +="<div class='goods-img'><a href='javascript:;'><img src='img/goods/"+list[i].pic+"' alt=''></a></div>"
//                                 add +="<div class='goods-info'><a href='javascript:;'>"
//                                 add +="<p class='goods-desc'>"+list[i].desc+"</p></a>"
//                                 add +="<p class='price'>￥"+list[i].price+"</p></div></li>"
//                                 ymG.eq(i).append(add)
                            
//                             }
                            
//                             for(i=0;i<list.length;i++){
//                                 fun(i)
//                             }
//                             page++;
                            
//                         }
//                     }
                    
//                 })
//             })();
//             console.log("111")
//         }
//     });
// })();
/*跳转详情页 */
(function (){
    $(document).on('click','.goods-box',function (){
        var good_id = $(this).attr('goodid')
        location.href = 'ymGoods.html?goodid=' + good_id
    })
})();

// (function(){
//     var page=5;
   
//     $.ajax({
//         type:"get",
//         url:"php/ymguang.php",
//         dataType:"json",
//         data:{
//             page:page
//         },
//         success:function(data){
//             if(data.success == 1){
//                 var list=data.list
//                 var ymG = $(".goods-list")
//                 function fun(i){
//                     // var imgUrl = 'img/goods'+list[i].pic
//                     var add ="<li class='goods-box' goodid='"+list[i].Id+"'>"
//                     add +="<div class='goods-img'><a href='javascript:;'><img src='img/goods/"+list[i].pic+"' alt=''></a></div>"
//                     add +="<div class='goods-info'><a href='javascript:;'>"
//                     add +="<p class='goods-desc'>"+list[i].desc+"</p></a>"
//                     add +="<p class='price'>￥"+list[i].price+"</p></div></li>"
//                     ymG.eq(i).append(add)
                   
//                 }
                
//                 for(i=0;i<list.length;i++){
//                     fun(i)
//                 }
//                 page++;
                
//             }
//         }
        
//     })
// })();
