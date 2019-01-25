;
(function () {
    var userid = getCookie("id")
    // var Id = $(".address-item").attr("id")
    // console.log(Id)
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'php/location.php',
        data: {
            userId: userid
        },
        success: function (data) {
            if (data.success) {
                var list = data.list
                $.each(list, function (i,value) {
                    console.log(value)
                    // $(".name").html(value.username);
                    // $(".address-item").attr({
                    //     "id": value.Id
                    // })
                    console.log(value.Id)
                    var phone = value.mobile;
                    var myphone = phone.substr(3, 4);
                    var lphone = phone.replace(myphone, "****");
                    // $(".tel").html(lphone);
                    // $(".address-info").html(value.area + value.address);
                    // $(".address-info").html(list[i].address);
                    $(".page-wrap").prepend($(`<div class="address-item" id="${value.Id}" data-is-support="Y" data-href="https://m.yohobuy.com/cart/index/new/orderEnsure?cartType=ordinary">
       <span class="name">${value.username}</span>
       <span class="tel">${lphone}</span>
       <p class="address-info">${value.area + value.address}</p>
       <div class="action iconfont">
           <span class="edit" data-href="/home/addressAct?id=xA14KmEUuvVEHtQSpKs1lA%3D%3D&amp;refer=shopping"></span>
           <span class="del" data-id="xA14KmEUuvVEHtQSpKs1lA%3D%3D"></span>
       </div>
   </div>`))
                })

            }
        }
    })
    $(document).on("click", ".address-item", function () {
        var username = $(this).find(".name").html()
        console.log($(this).parents(".page-wrap").children(".address-item"))
        console.log($(this).index())
        var Id = $(this).attr("id")
        $(location).attr("href", "ymOrder.html?key="+Id)
        delCookie("username",username)
        delCookie("tel")
        delCookie("address-info")
    })

})();
// (function () {
//     (function ($) {
//         $.getUrlParam = function (name) {
//             var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//             var r = window.location.search.substr(1).match(reg);
//             if (r != null) return unescape(r[2]);
//             return null;
//         }
//     })(jQuery);
//     var xx = $.getUrlParam('key');
//     if (xx == 998) {

//         $(".page-wrap").prepend($(`<div class="address-item" data-address-id="xA14KmEUuvVEHtQSpKs1lA%3D%3D" data-is-support="Y" data-href="https://m.yohobuy.com/cart/index/new/orderEnsure?cartType=ordinary">
//        <span class="name">张三</span>
//        <span class="tel">150****9831</span>
//        <p class="address-info" data-address="天津市 天津市 滨海新区 杭州道街道 锦州里">河北省唐山市乐亭县野鸡坨镇哈哈</p>
//        <div class="action iconfont">
//            <span class="edit" data-href="/home/addressAct?id=xA14KmEUuvVEHtQSpKs1lA%3D%3D&amp;refer=shopping"></span>
//            <span class="del" data-id="xA14KmEUuvVEHtQSpKs1lA%3D%3D"></span>
//        </div>
//    </div>`))
//     }
// })()
$(".nav-back").on("click", function () {
    if ($(".address-item").size() >= 1) {
        $(location).attr("href", "ymOrder.html?key=999")
    } else {
        $(location).attr("href", "ymOrder.html?key=997")
    }
})
$(document).on("click", ".del", function (e) {
    e.stopPropagation()
    console.log($(".confim-mask"))
    $(".confim-mask").fadeIn(500)
    var _this = this;
    $(".confim").on("click", function () {
        var id = $(_this).parents(".address-item").attr("id");
        console.log(id)
        var userid = getCookie("id")
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: 'php/locationdel.php',
            data: {
                userId: userid,
                id: id
            },
            success: function (data) {
                if (data.success) {
                    // console.log("删除成功")
                }
            }
        })
        $(_this).parents(".address-item").remove()
        $(".confim-mask").fadeOut(500)
    })
    $(".cancel").on("click",function(){
        $(".confim-mask").fadeOut(500)
    })
})

$(document).on("click", ".edit", function (event) {
    event.stopPropagation(); // do something
    // setCookie("username", $(".name").html())
    var id = $(this).parents(".address-item").attr("id")
    console.log(id)
    // setCookie("tel", $(".tel").html())
    // setCookie("address-info", $(".address-info").html())
    // setCookie("username",$(".name").html())
    $(location).attr("href", "templates/ymHomealter.html?id="+id)

})