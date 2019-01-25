//复选框选择
;(function(){
    // 封装价格 总计
     function allprice(){
                    var arr = $('.checked1:visible');
                    var arr2 = [];
                    var c_arr = [];
                    $.each(arr, function (index) {
                        arr2[index] = $(this).siblings().parents(".good-item").find(".market-price").html()*$(this).siblings().parents(".good-item").find(".count span").html()
                        c_arr[index] = $(this).siblings().parents(".good-item").find(".count span").html();
                    })
                    var sum = 0;
                    var n = 0;
                    $.each(arr2, function (index) {
                        if (arr2[index] != "undefined" && arr2[index] != "") {
                            sum += parseFloat(arr2[index]);
                            n += parseFloat(c_arr[index]);
                        }
                    });
                    var pp = sum.toFixed(2);
                $("p.price").html("总计:¥"+pp+"&nbsp;&nbsp;("+n+"件)")
                $(".nav-item span").html("普通商品("+n+")");
                
            }
            $(document).click(function () {
                allprice()
            })
        //显示小复选框操作 
    $(".shopping-cart-page").on("click",".schk",function(){
        $(this).prev().toggle()
        // console.log($('.checked1:visible').size())
        if ($('.checked1:visible').length>=$(".schk").prev().size()) {
            $(".allchk").prev().show();
        }else{
            $(".allchk").prev().hide();
        };
        //num = 单行总价格
         var num = $(this).parents(".good-item").find(".market-price").html()*$(this).parents(".good-item").find(".count span").html();
        //  console.log(num)
         allprice()
    });
    // 全选操作
    $(".allchk").on("click",function(){
        $(this).prev().toggle()
        if($(this).prev().is(":hidden")){
            $(".schk").prev().hide();
        }else{
            $(".schk").prev().show();
        }
        allprice()

    })
})();
var userid = getCookie("id")
// $.ajax({
//     type: 'get',
//     dataType: 'json',
//     url: 'php/adduser.php',
//     data: {
//         userid:userid
//     },
// })

$.ajax({
    type: 'get',
    dataType: 'json',
    url: 'php/shopcar.php',
    data: {
        userid:userid
    },
    success:function(data){
        if(data.success){
            
            var val = data.list;
            
            if(val){
                $(".cart-zero").hide()
                $(".cart-content").show()
                $(".cart-nav").show()
            }else{
                $(".cart-zero").show()
                $(".cart-content").hide()
                $(".cart-nav").hide()
            }
            $.each(val, function (i, value) {
                // console.log(value.Id)
                // var imgurl = 'img/goodsimg/' + value.goodsImg
                // createLi(value.goodsDesc, imgurl, value.price, value.price,value.Id).appendTo($(".smckUl"))
                $(".good-list").append($(`<div class="good-item is-checked" data-promotion="" data-id="${value.Id}" data-skn="51962522"
                data-mnum="1" data-link="//m.yohobuy.com/product/51962522.html" data-activityid=""
                data-poolbatchno="">
                <div class="opt">
                    <i class="iconfont chk select checked1">&#xe634;</i>
                    <i class="chk edit schk"></i>
                </div>
                <div class="good-new-info">
                    <a href="javascript:;" class="img-a">
                        <div class="img">
                            <img class="thumb lazy" data-original="//img12.static.yhbimg.com/goodsimg/2018/11/20/15/0252f014867a5331fca104b6f9390fad75.jpg?imageMogr2/thumbnail/120x160/background/d2hpdGU=/position/center/quality/60/format/webp"
                                alt="" src="img/goods/${value.pic}" style="display: block;">
                        </div>
                    </a>
                    <div class="info">
                        <div class="fixed-height">
                            <div class="intro intro-name">
                                <div class="name-row">
                                    <div class="name">
                                        <a href="javascript:;">${value.goodName}</a>
                                    </div>
                                </div>
                                <p class="color-size-row"><span class="color">颜色:黑色</span><span
                                        class="size">尺码:F</span></p>
                            </div>
                            <div class="intro intro-edit">
                                <div class="edit-box">
                                    <div class="num-opt">
                                        <a href="javascript:;" class="btn btn-opt-minus disabled"><span
                                                class="iconfont">&#xe633;</span></a>
                                        <input type="text" class="good-num" disabled="true" value="1"
                                            data-min="1" data-max="1">
                                        <a href="javascript:;" class="btn btn-opt-plus disabled"><span
                                                class="iconfont">&#xe608;</span></a>
                                    </div>
                                    <div class="edit-size-info  edit-size-info-notop ">
                                        <div class="txt">颜色:黑色 尺码:F</div>
                                        <div class="down">
                                            <i class="iconfont">&#xe60b;</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="count">x<span>1</span></div>
                        </div>
                        <div class="bottom">
                            <div class="price">￥
                                <span class="market-price">${value.price}</span>
                            </div>
                            <div class="tags">


                            </div>
                        </div>
                    </div>
                </div>
            </div>`))
            })
        }
    }
    // success: function (data) {
    //     if (data.success) {
    //        var list=data.list
    //        $.each(list,function(i,value){
    //         var goodsid = value.goodsid;
            
    //         $.ajax({
    //             type:"get",
    //             dataType:"json",
    //             url:"php/detail.php",
    //             data:{
    //                 id:goodsid
    //             },
    //             // success:function(data){
    //             //     if(data.success){
    //             //         if(goodsid){
    //             //             $(".cart-zero").hide()
    //             //             $(".cart-content").show()
    //             //             $(".cart-nav").show()
    //             //         }else{
    //             //             $(".cart-zero").show()
    //             //             $(".cart-content").hide()
    //             //             $(".cart-nav").hide()
    //             //         }
    //             //         var val = data.list;
                        
    //             //         $.each(val, function (i, value) {
    //             //             // console.log(value.Id)
    //             //             // var imgurl = 'img/goodsimg/' + value.goodsImg
    //             //             // createLi(value.goodsDesc, imgurl, value.price, value.price,value.Id).appendTo($(".smckUl"))
    //             //             $(".good-list").append($(`<div class="good-item is-checked" data-promotion="" data-id="${value.Id}" data-skn="51962522"
    //             //             data-mnum="1" data-link="//m.yohobuy.com/product/51962522.html" data-activityid=""
    //             //             data-poolbatchno="">
    //             //             <div class="opt">
    //             //                 <i class="iconfont chk select checked1">&#xe634;</i>
    //             //                 <i class="chk edit schk"></i>
    //             //             </div>
    //             //             <div class="good-new-info">
    //             //                 <a href="javascript:;" class="img-a">
    //             //                     <div class="img">
    //             //                         <img class="thumb lazy" data-original="//img12.static.yhbimg.com/goodsimg/2018/11/20/15/0252f014867a5331fca104b6f9390fad75.jpg?imageMogr2/thumbnail/120x160/background/d2hpdGU=/position/center/quality/60/format/webp"
    //             //                             alt="" src="img/goods/${value.pic}" style="display: block;">
    //             //                     </div>
    //             //                 </a>
    //             //                 <div class="info">
    //             //                     <div class="fixed-height">
    //             //                         <div class="intro intro-name">
    //             //                             <div class="name-row">
    //             //                                 <div class="name">
    //             //                                     <a href="javascript:;">${value.goodName}</a>
    //             //                                 </div>
    //             //                             </div>
    //             //                             <p class="color-size-row"><span class="color">颜色:黑色</span><span
    //             //                                     class="size">尺码:F</span></p>
    //             //                         </div>
    //             //                         <div class="intro intro-edit">
    //             //                             <div class="edit-box">
    //             //                                 <div class="num-opt">
    //             //                                     <a href="javascript:;" class="btn btn-opt-minus disabled"><span
    //             //                                             class="iconfont">&#xe633;</span></a>
    //             //                                     <input type="text" class="good-num" disabled="true" value="1"
    //             //                                         data-min="1" data-max="1">
    //             //                                     <a href="javascript:;" class="btn btn-opt-plus disabled"><span
    //             //                                             class="iconfont">&#xe608;</span></a>
    //             //                                 </div>
    //             //                                 <div class="edit-size-info  edit-size-info-notop ">
    //             //                                     <div class="txt">颜色:黑色 尺码:F</div>
    //             //                                     <div class="down">
    //             //                                         <i class="iconfont">&#xe60b;</i>
    //             //                                     </div>
    //             //                                 </div>
    //             //                             </div>
    //             //                         </div>
    //             //                         <div class="count">x<span>1</span></div>
    //             //                     </div>
    //             //                     <div class="bottom">
    //             //                         <div class="price">￥
    //             //                             <span class="market-price">${value.price}</span>
    //             //                         </div>
    //             //                         <div class="tags">


    //             //                         </div>
    //             //                     </div>
    //             //                 </div>
    //             //             </div>
    //             //         </div>`))
    //             //         })
    //             //     }
    //             // }
    //         })
    //        })
           
            
    //     }
    // }
    
})
;(function(){
    var i;
    var j;
    var x
    $(".chose-panel").on("click","li",function(){
        // $(this).toggleClass("chosed").siblings().removeClass("chosed")
       x = $(this).html();
       
    })
    // 显示选择尺码页面
$(document).on("click",".down",function(){
        $(".chose-panel").show();
        $(".loading-mask").removeClass("hide");
        setTimeout(function(){
            $(".loading-mask").addClass("hide")
        },500)
        j = $(this).parents(".good-item").index();
        var pic1 = $(this).parents(".good-item").find(".img img").attr("src");
        console.log(pic1)
        $(".thumb-img img").attr("src",pic1)
    })
// 点击确定同步数量
    $(".btn-sure").on("click",function(){
        i = $(".infos").find(".good-num").val()
        $(".good-item").eq(j).find(".good-num").val(i)
        $(".good-item").eq(j).find(".count span").html(i)
        $(".chose-panel").hide();
        $(".infos").find(".good-num").val(1);

        $(".txt").eq(j).html("颜色:橘色 尺码"+x)
       
    })

    // 编辑页面 开关
    $(".nav-btn").on("click",function(){
        $(".main-wrap").toggleClass("edit");
        $(".color-size-row .color").eq(j).html("颜色:橘色")
        $(".color-size-row .size").eq(j).html(" 尺码"+x)
    })

    // 两个加法操作
    $(document).on("click",".btn-opt-plus",function(){
        var n = $(this).prev().val();
        n++;
        $(this).parents(".info").find(".good-num").val(n)
        $(this).parents(".info").find(".count span").html(n)
    })
    $(document).on("click",".btn-plus",function(){
        var n = $(this).prev().val();
        n++;
        $(this).parents(".infos ").find(".good-num").val(n)
    })

    // 两个减法操作
    $(".shopping-cart-page").on("click",".btn-opt-minus",function(){
        var n = $(this).next().val();
        n--;
        $(this).parents(".info").find(".good-num").val(n)
        $(this).parents(".info").find(".count span").html(n)
        if (n == 0) {
            $(this).next().val(1)
            $(this).parents(".info").find(".count span").html(1)
            // alert("您选择的数量不能为零~")
            $(".yoho-tip").show(500);
            setTimeout(function(){
                $(".yoho-tip").hide(500);
            },2000)
		} else {
			$(this).next().val(n);
		}
    })
    $(document).on("click",".btn-minus",function(){
        var n = $(this).next().val();
        n--;
        $(this).parents(".infos").find(".good-num").val(n)
        $(this).parents(".infos").find(".count span").html(n)
        if (n == 0) {
            $(this).next().val(1)
            $(this).parents(".infos").find(".count span").html(1)
            // alert("您选择的数量不能为零~")
            $(".yoho-tip").show(500).html("您选择的数量不能为零~");
            setTimeout(function(){
                $(".yoho-tip").hide(500);
            },2000)
		} else {
			$(this).next().val(n);
		}
    })
})();
// 点击关闭时 让选择尺码界面关闭
;(function(){
    $(".close").on("click",function(){
        $(".chose-panel").hide();
    })
})()
//删除操作
;(function(){
   
    $(".btn-del").click(function () {
        
        var arr = $('.checked1:visible');
        $(".dialog-wrapper").fadeIn(500)
        // console.log(data_id)
		
		$("input:checked").prop("checked", false);
		var num = $(".smck:checked").size();
        $(".cloths").html(num);
        $(".dialog-right-btn").on("click",function(){
            $.each(arr,function(){
                console.log($(this))
                var userid = getCookie("id")
                var data_id = $(this).parents(".good-item").attr("data-id")
                // console.log(data_id)
                $.ajax({
                    type: 'get',
                    dataType: 'json',
                    url: 'php/shopcarDel.php',
                    data: {
                        userId:userid,
                        goodsid:data_id
                    }
                    
                })
                $(".dialog-wrapper").fadeOut(500)
                $('.checked1:visible').parents(".good-item").remove();
            })
        })
        
        
        $(".dialog-left-btn").on("click",function(){
            $(".dialog-wrapper").fadeOut(500)
        })
	})
})()
//收藏操作
;(function(){
    $(".btn-gray").click(function () {
        var arr = $('.checked1:visible');
        $(".dialog-content").html("是否移入收藏夹")
        $(".dialog-wrapper").fadeIn(500)
		$("input:checked").prop("checked", false);
		var num = $(".smck:checked").size();
        $(".cloths").html(num);

        $(".dialog-right-btn").on("click",function(){
            $.each(arr,function(){
                var userid = getCookie("id")
                var data_id = $(this).parents(".good-item").attr("data-id")
                console.log(data_id)
                $.ajax({
                    type: 'get',
                    dataType: 'json',
                    url: 'php/shopcarfavo.php',
                    data: {
                        userId:userid,
                        goodsid:data_id
                    }
                    
                })
                $(".dialog-wrapper").fadeOut(500)
                $('.checked1:visible').parents(".good-item").remove();
            })
        })
        

        $(".dialog-left-btn").on("click",function(){
            $(".dialog-wrapper").fadeOut(500)
        })
	})
})()
// 选择尺码
;(function(){
    $(".chose-panel").on("click","li",function(){
        $(this).toggleClass("chosed").siblings().removeClass("chosed")
        console.log($(this).html())
    })
})();
// 点击结算
;(function(){
    $(".btn-balance").on("click",function(){
        setCookie("allprice",$(".total .price").html())
        var storage = window.localStorage;
        var arr = []
        var arr2 = []
        var arr3 = []
        var arr4 = []
        $.each($('.checked1:visible'),function(i){
            var data_id = $(this).parents(".good-item").attr("data-id")
            var cont = $(this).parents(".good-item").find(".count span").html()
            var color = $(this).parents(".good-item").find(".color").html().slice(3,7)
            var size = $(this).parents(".good-item").find(".size").html().slice(3,7)
            arr.push(cont)
            arr2.push(data_id)
            arr3.push(color)
            arr4.push(size)
        })
        storage["a"] = arr
        storage["b"] = arr2
        storage["c"] = arr3
        storage["d"] = arr4
        if($('.checked1:visible').size()==0){
              $(".yoho-tip").show(500).html("请先勾选商品");
            setTimeout(function(){
                $(".yoho-tip").hide(500);
            },2000)
        }else{
             console.log("跳转啦")
             
             $(location).attr('href', 'ymOrder.html?key=997');
             
        }
    })
})()

$(".gift-item").on("click",function(){
    $(location).attr("href","advanceBuy.html")
})

$.each($(".good-thumb img"),function(index,ele){
    // console.log(index,value)
    index +=1;
    $(ele).attr({"src":"img/goods/bGood"+index+".jpg"})
})

$(".similar-btn").on("click",function(){
    $(this).parents(".good-detail-text").prev().find(".similar-c").toggle()
})
$(".nav-back").on("click",function(){
    var sex = getCookie("sex")
    if(sex=="boy"){
        $(location).attr("href","index_boy.html")
    }if(sex=="girl"){
        $(location).attr("href","index_girl.html")
    }
    if(sex=="kid"){
        $(location).attr("href","index_kid.html")
    }
    if(sex=="life"){
        $(location).attr("href","index_life.html")
    }
})


