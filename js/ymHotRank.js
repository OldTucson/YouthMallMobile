$(function (){
    /*swiper */
    (function (){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    })();
    /*商品dir筛选条件 */
    var dir = 0;
    /*顶部下载点击事件 */
	(function (){
		$('.download-close').click(function (){
			$(this).parents('.top-downloadbar-box').hide()
		})
	})();
    /*cookie性别判断 */
    // setCookie('sex','boy');
    (function (){
        var sex = getCookie('sex') || 'boy'
        if(sex == 'boy'){
            dir = 0;
        }else if(sex == 'girl'){
            dir = 1;
        }else if(sex == 'kid'){
            dir = 2;
        }else{
            dir = 3;
        }
        function changeColor(sex){
            $('.main-header').addClass(sex)
            $('.ul-arr').addClass(sex)
            $('.homebutton ul').addClass(sex)
        }
        function changeBanner(idx){
            $('.top-banner').eq(idx).show()
        }
        function changeNav(idx){
            $('.swiper-container').eq(idx).siblings('.swiper-container').hide()
        }
        changeColor(sex)
        changeBanner(dir)
        changeNav(dir)
    })();
    
    /*顶部导航按钮*/
    (function (){
        $('.nav-home').on('click',function (){
            $('.homebutton').toggle()
        })
    })();
    /*ajax */
    var keywords = ' ';
	(function (){ 
        var flag = false;
        function rankPreload(){
            /*商品预加载 */
            $('.goods-list').html('')
            $.ajax({
                type: 'get',
                url: 'php/hotrank_preload.php',
                dataType: 'json',
                data: {
                    dir:dir,
                },
                success: function (data){
                    if(data.success){
                        var list = data.list
                        var idx_guess = $('.goods-list')[0]
                        function paintGoods (goodsi){
                            var imgUrl = 'img/goods/'+list[i].pic
                            var addStr = "<div class='good-info' goodId=" + list[goodsi].Id + "><a class='clearfix' href='javascript:;'><div class='item-img'><img class='lazy' src='" + imgUrl + "'></div><div class='item-content'>"
                            if(goodsi<=10){
                                addStr += "<span class='rank-icon top'>" + (goodsi+1) +"</span>"
                            }else{
                                addStr += "<span class='rank-icon'>" + (goodsi+1) +"</span>"
                            }
                            addStr += "<h2>" + list[goodsi].goodName +"</h2><p>￥" + list[goodsi].price + "</p></div></a></div>"
                            idx_guess.innerHTML += addStr
                        }
                        for(var i = 0;i<list.length;i++){
                            paintGoods(i)
                        }
                        flag = true
                    }else{
                        $('.goods-list').html('<div class="no-result-new"><p>没有找到相关商品</p><p>试试搜索别的看看</p></div>')
                    }
                }
            });
        }
        rankPreload()
        // /*点击条件筛选 */
        function filterSort(){
            flag = false
            $('.goods-list').html('')
            
            $.ajax({
                type: 'get',
                url: 'php/hot_rank.php',
                dataType: 'json',
                data: {
                    dir:dir,
                    keywords:keywords
                },
                success: function (data){
                    if(data.success){
                        var list = data.list
                        var idx_guess = $('.goods-list')[0]
                        function paintGoods (goodsi){
                            var imgUrl = 'img/goods/'+list[i].pic
                            var addStr = "<div class='good-info' goodId=" + list[goodsi].Id + "><a class='clearfix' href='javascript:;'><div class='item-img'><img class='lazy' src='" + imgUrl + "'></div><div class='item-content'>"
                            if(goodsi<=10){
                                addStr += "<span class='rank-icon top'>" + (goodsi+1) +"</span>"
                            }else{
                                addStr += "<span class='rank-icon'>" + (goodsi+1) +"</span>"
                            }
                            addStr += "<h2>" + list[goodsi].goodName +"</h2><p>￥" + list[goodsi].price + "</p></div></a></div>"
                            idx_guess.innerHTML += addStr
                        }
                        for(var i = 0;i<list.length;i++){
                            paintGoods(i)
                        }
                        flag = true
                        
                    }else{
                        $('.goods-list').html('<div class="no-result-new"><p>没有找到相关商品</p><p>试试搜索别的看看</p></div>')
                    }
                }
            })
        };
        $('.swiper-wrapper li').not('.topbtn').on('click',function (){
            keywords = $(this).children('span').html()
            filterSort()
        })
        $('.swiper-wrapper .topbtn').on('click',function (){
            rankPreload()
        })
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
    /*筛选按钮点击 */
    (function (){
        $(document).on('click','.nav-item',function (){
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
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
    /*购物车商品数量*/
    (function (){
        $('.shopcar').on('click',function (){
            location.href = "ymCart.html"
        })
        var userid = getCookie('id')
        $.ajax({
            type: 'get',
            url: 'php/shopCarCount.php',
            dataType: 'json',
            data: {
                userid:userid
            },
            success: function (data){
                if(data.success){
                    var goodsNum = data.goodsNum
                    $('.cart-count').html(goodsNum)
                }
            }
        })
    })();
    /*顶部导航按钮 */
    (function (){
        $('.homebutton li').on('click',function (){
            var x = $(this).index()
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
    })();
})