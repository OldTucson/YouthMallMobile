$(function (){
    /*商品dir筛选条件 */
    
    /*顶部下载点击事件 */
	(function (){
		$('.download-close').click(function (){
			$(this).parents('.top-downloadbar-box').hide()
		})
	})();
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
        }else{
            dir = 3;
        }
        function blockShow(n){
            $('.dirBlock').eq(n).show()
            $('.dirBlock').eq(n).siblings('.dirBlock').hide()
        }
        function changeColor(sex){
            $('.main-header').addClass(sex)
            $('.homebutton').addClass(sex)
        }
        function removeColor(sex){
            $('.main-header').removeClass(sex)
            $('.homebutton').removeClass(sex)
        }
        function changeTime(){
            var myDate = new Date();
            var hours = myDate.getHours()
            hours = 24 - hours
            var timeStr = '剩' + hours + '小时'
            $('.discount-time').html(timeStr)
        }
        changeTime()
        blockShow(dir)
        changeColor(sex)
        $('.homebutton a').on('click',function (){
            removeColor(sex)
            var sexCur = $(this).html()
            $('.sexDir').html(sexCur)
            sex = sexCur
            changeColor(sexCur)
            dir = $(this).attr('dir')
            changeTime()
            blockShow(dir)
            $('.goods-list').html('')
            $('.homebutton').hide()
            DisAjax()
        })
    })();
    
    var keywords = '折';
    
    /*顶部导航按钮*/
    (function (){
        $('.nav-home').on('click',function (){
            $('.homebutton').toggle()
        })
    })();
    /*筛选按钮 */
    (function (){
        $('.default').on('click',function (){
            $('.drop-list').toggle()
        })
        $('.list-nav>li').on('click',function (){
            $(this).addClass('active').siblings().removeClass('active')
        })
        $('.list-nav>li:first').siblings().on('click',function (){
            $('.drop-list').hide()
        })
        $('.drop-list>li').on('click',function (){
            $(this).addClass('active').siblings().removeClass('active')
            if($(this).index()>0){
                $('.default-txt').html('折扣')
            }else{
                $('.default-txt').html('默认')
            }
            $('.drop-list').hide()
        })
        $('.list-nav .price').on('click',function (){
            $(this).find('.icon').children('i').toggleClass('cur')
        })
        $('.classify-item').on('click',function (){
            $(this).addClass('active').siblings().removeClass('active')
        })
        function removeAllSpace(str) {
            return str.replace(/\s+/g, "");
        };
        $('.sub-item').on('click',function (){
            var txt = $(this).text()
            txt = removeAllSpace(txt)
            $(this).parents('.classify-item').find('.select_title').html(txt)
            $(this).addClass('chosed').siblings().removeClass('chosed')
            $('.filter-mask').hide()
        })
        $('.list-nav .filter').on('click',function (){
            $('.filter-mask').toggle()
        })
        $('.list-nav>li:last').siblings().on('click',function (){
            $('.filter-mask').hide()
        })
    })();
    /*商品块遮罩层 */
    (function (){
		$(document).on('click','.similar-btn',function (e){
            e.stopPropagation()
            var x = $(this).parents('.good-info').find('.similar-c')
            $('.similar-c').not(x).removeClass('show')
            $(this).parents('.good-info').find('.similar-c').toggleClass('show')
		})
    })();
    //滚动加载
    var page = 2
    var flag = false
	function DisAjax(){
        page = 2
        /*商品预加载 */
        $.ajax({
            type: 'get',
            url: 'php/preload.php',
            dataType: 'json',
            data: {
                dir:dir,
                keywords:keywords,
            },
            success: function (data){
                if(data.success){
                    console.log(1)
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
                    
                    
                }else{
                    $('.goods-list').html('<div class="no-result-new"><p>没有找到相关商品</p><p>试试搜索别的看看</p></div>')
                }
            }
        })
    
    }
    function funcFavo(){
        var scollx = $(window).height()-($('.goods-container').offset().top-$(window).scrollTop())
        var height = $('.goods-container').height()-500
        
        if(scollx>=height&&flag==true){
            
            flag = false
            $.ajax({
                type: 'get',
                url: 'php/hot_cate.php',
                dataType: 'json',
                data: {
                    dir:dir,
                    keywords:keywords,
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
    };
    $(window).on('scroll',funcFavo);
    
    /*点击条件筛选 */
    function filterSort(sort,filterKey){
        flag = false
        page = 2
        
        
        $.ajax({
            type: 'get',
            url: 'php/filter.php',
            dataType: 'json',
            data: {
                dir:dir,
                sort:sort||'desc',
                filter:filterKey,
                keywords:keywords,
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
                    $('.goods-list').html('')
                    for(var i = 0;i<list.length;i++){
                        paintGoods(i)
                    }
                    flag = true
                    page++
                }else{
                    $('.goods-list').html('<div class="no-result-new"><p>没有找到相关商品</p><p>试试搜索别的看看</p></div>')
                }
            }
        })
    };
    var tapnum = 2
    $('.list-nav .filterbtn').on('click',function (){
        // $(window).off('scroll',funcFavo);
        var sortKey = $(this).attr('filter')
        filterSort('',sortKey)
    })
    $('.drop-list .filterbtn').on('click',function (){
        // $(window).off('scroll',funcFavo);
        var sortKey = $(this).attr('filter')
        filterSort('',sortKey)
    })
    $('.list-nav .priceSort').on('click',function (){
        // $(window).off('scroll',funcFavo);
        var sortKey = $(this).attr('filter')
        if(tapnum%2 == 0){
            filterSort('desc',sortKey)
        }else{
            filterSort('asc',sortKey)
        }
        tapnum++
    });
    DisAjax();
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
})