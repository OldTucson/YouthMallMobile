// 顶部广告隐藏
;(function(){
	$(".download-close").click(function(e){
        e.preventDefault();
		$(".top-downloadbar").css("display","none");
	})
})()
;(function(){
	$(".p-level-item").click(function(){
		$(this).addClass("focus").siblings().removeClass("focus");
		var con=$(this).index();
		$(".sub-level").eq(con).removeClass("display").siblings().addClass("display");
	})
})()
;(function(){
	$(".category-nav").children("li").click(function(){
		$(this).addClass("focus").siblings().removeClass("focus");
	})
})()
/*底部按钮 */
;(function(){
	$('.tab-item').on('click',function (){
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
	})
})()
