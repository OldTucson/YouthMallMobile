$(function (){
	/*顶部下载点击事件 */
	(function (){
		$('.download-close').click(function (){
			$(this).parents('.top-downloadbar-box').hide()
		})
	})();
	var dir = 0;
	/*cookie性别判断 */
    // setCookie('sex','boy');
    (function (){
        var sex = getCookie('sex')
        if(sex == 'boy'){
            dir = 0;
        }else if(sex == 'girl'){
            dir = 1;
        }else if(sex == 'kid'){
            dir = 2;
        }else if(sex == 'life'){
            dir = 3;
        }else{
			dir = 1;
		}
        // function changeColor(sex){
        //     $('.main-header').addClass(sex)
        //     $('.ul-arr').addClass(sex)
        //     $('.homebutton ul').addClass(sex)
        // }
        // function changeBanner(idx){
        //     $('.top-banner').eq(idx).show()
        // }
        // changeColor(sex)
        // changeBanner(dir)
    })();
    /*侧边导航滑动*/
    (function (){
        $('.nav-btn').click(function (){
            $('.side-nav').show()
            $('.main-content').toggleClass('slide')
            $('.main-content').removeClass('slideBack')
        })
        $('.side-nav').click(function (){
			if($('.side-nav-wrapper>.show')){
				$('.sub-nav').removeClass('show')
			}
            $('.side-nav').hide()
            $(this).hide()
            $('.main-content').toggleClass('slideBack')
            $('.main-content').removeClass('slide')
        })
        $('.side-nav-wrapper').on('click',function (e){
            e.stopPropagation()
        })
        $('.side-list-sin').on('click',function (){
			$('.sub-nav').addClass('show')
		})
		$('.tit').on('click',function (){
			$('.sub-nav').removeClass('show')
		})
	})();
	/*顶部logo特效*/
	(function (){
		var rotateDeg = 180
		var logoTimer = setTimeout(logoAni,4000)
		function logoAni(){
			var rotateStr = 'rotateX(' + rotateDeg + 'deg' + ')'
			$('.box').css('webkitTransform',rotateStr)
			rotateDeg+=180
			clearTimeout(logoTimer)
			logoTimer = setTimeout(logoAni,4000)
		}
	})();
    /*顶部轮播*/
    (function (){
		var mySwiper = new Swiper('.top-banner', {
		loop:true,
		autoplay: {
			disableOnInteraction:false
		},
		pagination:{
			el:'.swiper-pagination',
			type:'bullets',
			clickable :true,
		},
		zoom:true
	})
    })();
    /*中部轮播*/
    (function (){
		var mySwiper = new Swiper('.mid-banner', {
		loop:true,
		autoplay: {
			disableOnInteraction:false
		},
		pagination:{
			el:'.swiper-pagination',
			type:'bullets',
			clickable :true,
		},
		zoom:true
	})
	})();
	/*猜你喜欢商品块*/
	(function (){
		$(document).on('click','.similar-btn',function (e){
			e.stopPropagation()
			var x = $(this).parents('.good-info').find('.similar-c')
            $('.similar-c').not(x).removeClass('show')
            $(this).parents('.good-info').find('.similar-c').toggleClass('show')
		})
	})();
	//猜你喜欢滚动加载
	(function (){
		var page = 1
		var flag = true
		function funcFavo(){
			
			var scollx = $(window).height()-($('.maybe-like').offset().top-$(window).scrollTop())
			var height = $('.maybe-like').height()-500
			
			if(scollx>=height&&flag==true){
				console.log(1)
				flag = false
				$.ajax({
					type: 'get',
					url: 'php/indexGuess.php',
					dataType: 'json',
					data: {
						dir:dir,
						page:page
					},
					success: function (data){
						
						if(data.success){
							var list = data.list
							var idx_guess = $('.goods-list')[0]
							function paintGoods (goodsi){
								var imgUrl = 'img/goods/'+list[i].pic 
								var addStr = "<div class='good-info' goodId=" + list[goodsi].Id + "><div class='tag-container'>"
								if(list[i].new){
									addStr += "<p class='new-tag'>new</p>"
								}
								if(list[i].preSale){
									addStr += "<p class='pre-tag'>预售</p>"
								}
								addStr += "</div><div class='good-detail-img'>"
								if(list[i].saleOut){
									addStr += "<p class='few-tag'>即将售罄</p>"
								}
								addStr += "<a class='good-thumb' href='javascript:;'><img class='lazy' src='" + imgUrl + "'></a><div class='similar-c'><div class='bg'></div><a href='javascript:;'>找相似</a></div></div><div class='good-detail-text'><div class='name'><a href='javascript:;'>" + list[goodsi].goodName + "</a></div><div class='price'>"
								if(list[i].disprice){
									addStr +="<span class='sale-price'>￥" + list[goodsi].price + "</span><span class='market-price'>" + list[goodsi].disprice + "</span>"
								}else{
									addStr +="<span class='sale-price no-price'>￥" + list[goodsi].price + "</span>"
								}
								addStr += "</div><a class='similar-btn iconfont icon-gengduo'></a></div></div>"
								idx_guess.innerHTML += addStr
							}
							for(var i = 0;i<list.length;i++){
								paintGoods(i)
							}
							flag = true
							page++
							
						}
					}
				})
			}
		}
		$(window).on('scroll',funcFavo)
	})();
	/*热门分类跳转 */
	(function (){
		$('.cate-list').on('click','li',function (){
			location.href = 'hot_cate.html?key=' + $(this).attr('cate')
		})
	})();
	/*footer按钮 退出 个人中心 返回顶部 */
	(function (){
		
	})();
	/*跳转详情页 */
	(function (){
		$(document).on('click','.good-info',function (){
			var good_id = $(this).attr('goodid')
			location.href = 'ymGoods.html?goodid=' + good_id
		})
	})();
	/*回到顶部 */
    (function (){
        $('.back-to-top').on('click',function (){
            $('html,body').animate({scrollTop:0})
        })
	})();
	/*用户名判断 */
    (function (){
        var phnum = getCookie('user')
        if(phnum){
            $('.checkInModel').show()
            $('.user-name').html(phnum)
            $('.checkOutModel').hide()
        }else{
            $('.checkOutModel').show()
            $('.checkInModel').hide()
        }
        
        $('.checkOutBtn').on('click',function (){
            $('.checkInModel').hide()
			$('.checkOutModel').show()
			delCookie('user')
        })
	})();
	/*底部按钮 */
	(function (){
		$('.tab-item').on('click',function (){
			$(this).siblings().removeClass('active')
			$(this).addClass('active')
		})
	})();
	/*跳转到搜索页 */
	(function (){
		$('.search-btn').on('click',function (){
			location.href = 'ymSearch.html'
		})
	})();
	/*侧边导航筛选*/
	(function (){
		$('.side-list a').on('click',function (){
			var dirMark = $(this).attr('dirMark')
			setCookie('sex',dirMark)
		})
	})();
})