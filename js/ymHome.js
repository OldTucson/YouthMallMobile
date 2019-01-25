


// 顶部广告隐藏
;(function(){
	$(".download-close").click(function(e){
        e.preventDefault();
		$(".top-downloadbar").css("display","none");
	})
})()

// 隐藏导航
;(function(){
	$(".nav-home").click(function(){
		$(".header-nav").toggleClass("display");
	})
})()

// 我的消息删除
;(function(){
	$(".icon-laji").click(function(){
		$(".dialog-wrapper").toggleClass("display");
	})
	$(".dialog-right-btn").click(function(){
		console.log(1)
		$(".dialog-wrapper").toggleClass("display");
		$(".massage-page").toggleClass("display");
	})
	$(".dialog-left-btn").click(function(){
		console.log(0)
		$(".dialog-wrapper").toggleClass("display");
	})
})()

// 购物车
;(function(){
	$(".order-nav").children("li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})()

// 优惠券
;(function(){
	$(".a1").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".coupon-list").removeClass("display");
		$(".no-conpon-now").addClass("display");
	})
	$(".a2").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".coupon-list").addClass("display");
		$(".no-conpon-now").removeClass("display");
	})
	$(".a3").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".coupon-list").addClass("display");
		$(".no-conpon-now").removeClass("display");
	})
})()

// 顶部导航
;(function(){
	var dir;
	var idCookie = getCookie("sex");
	console.log(idCookie);
	if (idCookie=='boy') {
		dir=0;
	}else if(idCookie=='girl'){
		dir=1;
	}else if(idCookie=='kid'){
		dir=2;
	}else if(idCookie=='life'){
		dir=3;
	}
	console.log(dir);
    function getCookie(name){
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	    if(arr=document.cookie.match(reg))
	    return unescape(arr[2]);
	    else
	    return null;
    }
    $('.header').find("li").on('click',function (){
        var x = $(this).index()
        console.log(x);
        console.log(1111);
        if(x == 0){
            if(dir == 0){
                location.href = "index_boy.html"
            }else if(dir == 1){
                location.href = "index_girl.html"
            }else if(dir == 2){
                location.href = "index_kid.html"
            }else if(dir == 3){
                location.href = "index_life.html"
            }
        }else if(x == 1){
            location.href = "ymCate.html"
        }else if(x == 2){
            location.href = "ymCart.html"
        }else if(x == 3){
            location.href = "ymHome.html"
        }
    })
})()