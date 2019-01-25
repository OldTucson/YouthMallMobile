$("h3").on("click", function () {
    $(this).next().toggle().parent().siblings().find("ul").hide();
    $(this).toggleClass("border-none");
    $(this).children(".down").toggle().next().show()
    $(this).parents(".sub-block").siblings().find(".up").hide().prev().show()
})
// 支付方式，配送方式，送货时间

$(".download-close").on("click", function () {
    $(".top-downloadbar").parent().hide();
})
$(".schk").on("click", function () {
    $(this).prev().toggle().parents("li").siblings().find(".schk").prev().hide()

})



function show() {
    $(".first").show()
    $(".checkbox ").hide()
}
show();

// 获取url值
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
var xx = $.getUrlParam('key');
// console.log(xx)
if (xx == 997) {
    var userid = getCookie("id")
    console.log(userid)
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'php/location.php',
        data: {
            userId: userid
            // Id: xx
        },
        success: function (data) {
            console.log(data)
            if (data.success) {
                var list = data.list
                
                $(".choose").hide()
                $(".choose").prev().hide()
                $(".info").append($(`<span class="info-name">歘歘</span>
                <span class="info-phone">150****9831</span>
                <a href="location.html"><span class="info-address">海南省 省直辖县级行政区划 乐东黎族自治县 国营乐光农场 艾欧尼亚</span></a>
                <i class="iconfont"></i>`))
                $.each(list, function (i) {
                    $(".info-name").html(list[i].username);
                    // $(".info-phone").html(list[i].mobile);
                    // $(".info-address").html(list[i].address);
                    console.log(1)
                    var phone = list[i].mobile;
                    var myphone = phone.substr(3, 4);
                    var lphone = phone.replace(myphone, "****");
                    $(".info-phone").html(lphone);
                    $(".info-address").html(list[i].area + list[i].address);
                })
            }else{
                $(".info").hide()
            }
        }
    })
    
}else{
    // 点击某个地址渲染那个地址
    var userid = getCookie("id")
$.ajax({
    
    type: 'post',
    dataType: 'json',
    url: 'php/location.php',
    data: {
        // userId: userid,
        Id: xx
    },
    success: function (data) {
        console.log(data)
        if (data.success) {
            var list = data.list
            
            $(".choose").hide()
            $(".choose").prev().hide()
            $(".info").append($(`<span class="info-name">歘歘</span>
            <span class="info-phone">150****9831</span>
            <a href="location.html"><span class="info-address">海南省 省直辖县级行政区划 乐东黎族自治县 国营乐光农场 艾欧尼亚</span></a>
            <i class="iconfont"></i>`))
            $.each(list, function (i) {
                $(".info-name").html(list[i].username);
                // $(".info-phone").html(list[i].mobile);
                // $(".info-address").html(list[i].address);
                console.log(1)
                var phone = list[i].mobile;
                var myphone = phone.substr(3, 4);
                var lphone = phone.replace(myphone, "****");
                $(".info-phone").html(lphone);
                $(".info-address").html(list[i].area + list[i].address);
            })
        }else{
            $(".info").hide()
        }
    }
})
}




// 跳转到地址页面
$(".info").on("click", function () {
    $(location).attr("href", "location.html")
})

var storage = window.localStorage;
var b = storage["b"];
var arr2 = b.split(",")

// 渲染商品各种详情
$.each(arr2, function (i, value) {
    var goodsid = value;
    // console.log(list)
    $.ajax({
        type: "get",
        dataType: "json",
        url: "php/detail.php",
        data: {
            id: goodsid
        },
        success: function (data) {
            if (data.success) {
                var val = data.list;
                console.log(val)
                $(".goods-bottom").prepend($(`<div class="order-good" data-id="${val[0].Id}">
                    <div class="thumb-wrap">
                        <img class="thumb lazy"  src="img/goods/${val[0].pic}" style="display: block;">
                        <p class="tag"></p>
                    </div>
                    <div class="deps">
                        <p class="name row">${val[0].goodName}</p>
                        <p class="row">
                            <span class="color">
                                颜色:白
                            </span>

                            <span class="size">
                                尺码:F
                            </span>

                        </p>


                        <p class="row price-wrap">
                            <span class="price">${val[0].price}</span>
                            <span class="count">
                                1
                            </span>
                        </p>
                    </div>
                </div>`))
                var p = getCookie("allprice")
                $(".goods-num span").html("￥" + parseFloat(p.slice(4, 12)))
                var cont = p.split(";")[2].slice(1, 2)

                $(".goods-num i").html(cont)
                $(".total li .s-1").html("￥" + parseFloat(p.slice(4, 12)))
                $(".price-cost .s-1").html("￥" + parseFloat(p.slice(4, 12)))
                $(".bill .s-1").html(parseFloat(p.slice(4, 12)))
                var storage = window.localStorage;
                var a = storage["a"];
                // var a = storage["a"];
                var c = storage["c"];
                var d = storage["d"];
                var arr = a.split(",").reverse()
                var arr3 = c.split(",").reverse()
                var arr4 = d.split(",").reverse()

                // console.log(arr)
                $.each($(".order-good"), function (i) {
                    $(".count").eq(i).html("×" + arr[i])
                    $(".color").eq(i).html("颜色：" + arr3[i])
                    $(".size").eq(i).html("尺码：" + arr4[i])
                })

            }
        }
    })
})


// 提交订单所有详情插入数据库
$(".bill a").on("click",function(){
    var time = +new Date()
    // console.log(time)
    var ordernum = time
    var allprice = $(".s-1").html();
    var allnum = $(".goods-num i").html()
    var status = 0;
    var goodsnum = $(".order-good").size();
    $.each($(".order-good"),function(i){
        var goodsname = $(this).find(".name").html();
        var color = $(this).find(".color").html()
        var size = $(this).find(".size").html()
        var num = $(this).find(".count").html()
        var price = "￥"+$(this).find(".price").html()
        var price2 =$(this).find(".price").html()
        var oldprice = "￥"+(parseInt(price2)+100)
        var pic = $(this).find(".thumb").attr("src")
        // console.log(oldprice)
        var goodsid =$(".order-good").eq(i).attr("data-id")
        console.log(userid,goodsid)
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: 'php/addOrder.php',
            data: {
                ordernum1:ordernum,
                
                goodsname: goodsname,
                color: color,
                size: size,
                num: num,
                price: price,
                oldprice: oldprice,
                pic: pic,
                
                userid:userid,
                goodsid:goodsid
            }
        })
        
    })
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'php/addOrder.php',
        data: {
            ordernum:ordernum,
            userid: userid,
            allprice: allprice,
            allnum: allnum,
            status: status,
            goodsnum: goodsnum,
            
        }
    })
    
    
})

