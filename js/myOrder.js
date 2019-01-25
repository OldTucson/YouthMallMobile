$(function (){
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
        function changeColor(sex){
            $('.main-header').addClass(sex)
            $('.ul-arr').addClass(sex)
            $('.homebutton ul').addClass(sex)
        }
        changeColor(sex)
    })();
    /*顶部导航按钮*/
    (function (){
        $('.nav-home').on('click',function (){
            $('.homebutton').toggle()
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
    /*订单筛选nav */
    (function (){
        $('.tap-hightlight').on('click',function (){
            $(this).addClass('active').siblings().removeClass('active')
        })
    })();
    /*订单渲染 */
    var orderStatus = 0;
    var userid = getCookie('id');
    var doOrder = '';
    (function (){
        function navNumber(){
            var all = $('.order').size()
            var pay = $('.pay').size()
            var notice = $('.notice').size()
            var check = $('.check').size()
            $('.order-num').eq(0).html(all)
            $('.order-num').eq(1).html(pay)
            $('.order-num').eq(2).html(notice)
            $('.order-num').eq(3).html(check)
        }
        function orderTime(){
            var overtime = new Date('3018/08/07');
            var hour = $('.hours')
            clearInterval(orderTimmer)
            var orderTimmer = setInterval(handler,1000);
            function handler(){
                var hourt = spaceTime1();
                var mint = spaceTime2();
                var sec = spaceTime3();
                var timeStr = hourt + ':' + mint + ':' +sec
                hour.html(timeStr)
            }
            function spaceTime1(){
                var space = overtime - (+new Date());
                var spaceSeconds = space/1000;
                var hour = parseInt(spaceSeconds/3600)%24;
                return hour;
            }
            function spaceTime2(){
                var space = overtime - (+new Date());
                var spaceSeconds = space/1000;
                var minute = parseInt(spaceSeconds/60)%60;
                return minute;
            }
            function spaceTime3(){
                var space = overtime - (+new Date());
                var spaceSeconds = space/1000;
                
                var seconds = parseInt(spaceSeconds)%60;
                return seconds;
            }
        }
        /*初始渲染 */
        $.ajax({
            type:'get',
            url:'php/myOrder.php',
            dataType:'json',
            data:{
                userid:userid
            },
            success: function (data){
                if(data.success){
                    $('.no-order').hide()
                    var list = data.list
                    var temp = list[0].ordernum
                    var orderCur = 0
                    var orderBlock = []
                    orderBlock[0] = []
                    for(var j = 0;j<list.length;j++){
                        if(list[j].ordernum == temp){
                            orderBlock[orderCur].push(list[j])
                        }else{
                            orderCur++
                            orderBlock[orderCur] = []
                            temp = list[j].ordernum
                            orderBlock[orderCur].push(list[j])
                        }
                    }
                    // console.log(orderBlock.length)
                    var orderContent = $('.firstscreen-orders')[0]
                    function paintOrder (ordersi){
                        var model = orderBlock[ordersi][0]
                        if(!model.Id){
                            return
                        }
                        var addStr = "<div class='order' orderId='"+ model.ordernum +"'><header class='header'>订单编号: <span class='order-number'>"
                        addStr += model.ordernum
                        addStr += "</span><span class='order-status'>"
                        if(model.status == 0){
                            addStr += "待付款</span></header><section class='order-goods'>"
                        }else if(model.status == 1){
                            addStr += "待发货</span></header><section class='order-goods'>"
                        }else if(model.status == 2){
                            addStr += "待收货</span></header><section class='order-goods'>"
                        }else if(model.status == 3){
                            addStr += "已取消</span></header><section class='order-goods'>"
                        }else if(model.status == 4){
                            addStr += "已完成</span></header><section class='order-goods'>"
                        }
                        for(var j =0;j < orderBlock[ordersi].length;j++){
                            addStr += "<div class='order-good'><div class='thumb-wrap'><div class='pic-c'><img class='thumb' src='"
                            addStr += orderBlock[ordersi][j].pic
                            addStr += "'></div><p class='tag'></p></div><div class='deps'><p class='name row'>"
                            addStr += orderBlock[ordersi][j].goodsname
                            addStr += "</p><p class='row'><span class='color'>"
                            addStr += orderBlock[ordersi][j].color
                            addStr += "</span><span class='size'>"
                            addStr += orderBlock[ordersi][j].size
                            addStr += "</span></p><p class='row price-wrap'><span class='price'>"
                            addStr += orderBlock[ordersi][j].price
                            addStr += "</span><span class='sale-price'>"
                            addStr += orderBlock[ordersi][j].oldprice
                            addStr += "</span><span class='count'>"
                            addStr += orderBlock[ordersi][j].num
                            addStr += "</span></p></div></div>"
                        }
                        addStr += "</section><footer class='footer'>共"
                        addStr += model.allnum
                        addStr += "件商品 实付<span class='sum-cost'>"
                        addStr += model.allprice
                        
                        if(model.status == 0){
                            addStr += "</span></footer><div class='order-opt'><ul class='count-down'><li><span class='iconfont cloak'></span></li><li>剩余<span class='hours'></span></li></ul>"
                            addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn pay'>立即付款</span></a></div></div>"
                        }else if(model.status == 1){
                            addStr += "</span></footer><div class='order-opt'>"
                            addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn notice'>提醒发货</span></a></div></div>"
                        }else if(model.status == 2){
                            addStr += "</span></footer><div class='order-opt'>"
                            addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn check'>确认收货</span></a></div></div>"
                        }else{
                            addStr += "</span></footer><div class='order-opt'>"
                            addStr += "<span class='btn delete'>删除订单</span><a class='locHref' href='javascript:;'><span class='btn again'>再次购买</span></a></div></div>"
                        }
                        orderContent.innerHTML += addStr
                    }
                    for(var i = 0;i<orderBlock.length;i++){
                        paintOrder(i)
                    }
                    if($('.firstscreen-orders').html()==''){
                        $('.no-order').show()
                    }
                    orderTime()
                    navNumber()
                }else{
                    $('.no-order').show()
                }
            }
        })
        /*条件筛选 */
        $('.orderfilter').on('click',function (){
            $('.no-order').hide()
            orderStatus = $(this).attr('data-type')
            $('.firstscreen-orders').html('')
            $.ajax({
                type:'get',
                url:'php/myOrderFilter.php',
                dataType:'json',
                data:{
                    userid:userid,
                    status:orderStatus
                },
                success: function (data){
                    if(data.success){
                        $('.no-order').hide()
                        var list = data.list
                        var temp = list[0].ordernum
                        var orderCur = 0
                        var orderBlock = []
                        orderBlock[0] = []
                        for(var j = 0;j<list.length;j++){
                            if(list[j].ordernum == temp){
                                orderBlock[orderCur].push(list[j])
                            }else{
                                orderCur++
                                orderBlock[orderCur] = []
                                temp = list[j].ordernum
                                orderBlock[orderCur].push(list[j])
                            }
                        }
                        // console.log(orderBlock.length)
                        var orderContent = $('.firstscreen-orders')[0]
                        function paintOrder (ordersi){
                            var model = orderBlock[ordersi][0]
                            if(!model.Id){
                                return
                            }
                            
                            var addStr = "<div class='order' orderId='"+ model.ordernum +"'><header class='header'>订单编号: <span class='order-number'>"
                            addStr += model.ordernum
                            addStr += "</span><span class='order-status'>"
                            if(model.status == 0){
                                addStr += "待付款</span></header><section class='order-goods'>"
                            }else if(model.status == 1){
                                addStr += "待发货</span></header><section class='order-goods'>"
                            }else if(model.status == 2){
                                addStr += "待收货</span></header><section class='order-goods'>"
                            }else if(model.status == 3){
                                addStr += "已取消</span></header><section class='order-goods'>"
                            }else if(model.status == 4){
                                addStr += "已完成</span></header><section class='order-goods'>"
                            }
                            for(var j =0;j < orderBlock[ordersi].length;j++){
                                addStr += "<div class='order-good'><div class='thumb-wrap'><div class='pic-c'><img class='thumb' src='"
                                addStr += orderBlock[ordersi][j].pic
                                addStr += "'></div><p class='tag'></p></div><div class='deps'><p class='name row'>"
                                addStr += orderBlock[ordersi][j].goodsname
                                addStr += "</p><p class='row'><span class='color'>"
                                addStr += orderBlock[ordersi][j].color
                                addStr += "</span><span class='size'>"
                                addStr += orderBlock[ordersi][j].size
                                addStr += "</span></p><p class='row price-wrap'><span class='price'>"
                                addStr += orderBlock[ordersi][j].price
                                addStr += "</span><span class='sale-price'>"
                                addStr += orderBlock[ordersi][j].oldprice
                                addStr += "</span><span class='count'>"
                                addStr += orderBlock[ordersi][j].num
                                addStr += "</span></p></div></div>"
                            }
                            addStr += "</section><footer class='footer'>共"
                            addStr += model.allnum
                            addStr += "件商品 实付<span class='sum-cost'>"
                            addStr += model.allprice
                            
                            if(model.status == 0){
                                addStr += "</span></footer><div class='order-opt'><ul class='count-down'><li><span class='iconfont cloak'></span></li><li>剩余<span class='hours'></span></li></ul>"
                                addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn pay'>立即付款</span></a></div></div>"
                            }else if(model.status == 1){
                                addStr += "</span></footer><div class='order-opt'>"
                                addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn notice'>提醒发货</span></a></div></div>"
                            }else if(model.status == 2){
                                addStr += "</span></footer><div class='order-opt'>"
                                addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn check'>确认收货</span></a></div></div>"
                            }else{
                                addStr += "</span></footer><div class='order-opt'>"
                                addStr += "<span class='btn delete'>删除订单</span><a class='locHref' href='javascript:;'><span class='btn again'>再次购买</span></a></div></div>"
                            }
                            orderContent.innerHTML += addStr
                        }
                        for(var i = 0;i<orderBlock.length;i++){
                            paintOrder(i)
                        }
                        if($('.firstscreen-orders').html()==''){
                            $('.no-order').show()
                        }
                        orderTime()
                        
                    }else{
                        $('.no-order').show()
                    }
                }
            })
        })
        /*全部订单点击 */
        $('.allorder').on('click',function (){
            $('.no-order').hide()
            $('.firstscreen-orders').html('')
            $.ajax({
                type:'get',
                url:'php/myOrder.php',
                dataType:'json',
                data:{
                    userid:userid
                },
                success: function (data){
                    if(data.success){
                        $('.no-order').hide()
                        var list = data.list
                        var temp = list[0].ordernum
                        var orderCur = 0
                        var orderBlock = []
                        orderBlock[0] = []
                        for(var j = 0;j<list.length;j++){
                            if(list[j].ordernum == temp){
                                orderBlock[orderCur].push(list[j])
                            }else{
                                orderCur++
                                orderBlock[orderCur] = []
                                temp = list[j].ordernum
                                orderBlock[orderCur].push(list[j])
                            }
                        }
                        // console.log(orderBlock.length)
                        var orderContent = $('.firstscreen-orders')[0]
                        function paintOrder (ordersi){
                            var model = orderBlock[ordersi][0]
                            if(!model.Id){
                                return
                            }
                            var addStr = "<div class='order' orderId='"+ model.ordernum +"'><header class='header'>订单编号: <span class='order-number'>"
                            addStr += model.ordernum
                            addStr += "</span><span class='order-status'>"
                            if(model.status == 0){
                                addStr += "待付款</span></header><section class='order-goods'>"
                            }else if(model.status == 1){
                                addStr += "待发货</span></header><section class='order-goods'>"
                            }else if(model.status == 2){
                                addStr += "待收货</span></header><section class='order-goods'>"
                            }else if(model.status == 3){
                                addStr += "已取消</span></header><section class='order-goods'>"
                            }else if(model.status == 4){
                                addStr += "已完成</span></header><section class='order-goods'>"
                            }
                            for(var j =0;j < orderBlock[ordersi].length;j++){
                                addStr += "<div class='order-good'><div class='thumb-wrap'><div class='pic-c'><img class='thumb' src='"
                                addStr += orderBlock[ordersi][j].pic
                                addStr += "'></div><p class='tag'></p></div><div class='deps'><p class='name row'>"
                                addStr += orderBlock[ordersi][j].goodsname
                                addStr += "</p><p class='row'><span class='color'>"
                                addStr += orderBlock[ordersi][j].color
                                addStr += "</span><span class='size'>"
                                addStr += orderBlock[ordersi][j].size
                                addStr += "</span></p><p class='row price-wrap'><span class='price'>"
                                addStr += orderBlock[ordersi][j].price
                                addStr += "</span><span class='sale-price'>"
                                addStr += orderBlock[ordersi][j].oldprice
                                addStr += "</span><span class='count'>"
                                addStr += orderBlock[ordersi][j].num
                                addStr += "</span></p></div></div>"
                            }
                            addStr += "</section><footer class='footer'>共"
                            addStr += model.allnum
                            addStr += "件商品 实付<span class='sum-cost'>"
                            addStr += model.allprice
                            if(model.status == 0){
                                addStr += "</span></footer><div class='order-opt'><ul class='count-down'><li><span class='iconfont cloak'></span></li><li>剩余<span class='hours'></span></li></ul>"
                                addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn pay'>立即付款</span></a></div></div>"
                            }else if(model.status == 1){
                                addStr += "</span></footer><div class='order-opt'>"
                                addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn notice'>提醒发货</span></a></div></div>"
                            }else if(model.status == 2){
                                addStr += "</span></footer><div class='order-opt'>"
                                addStr += "<span class='btn cancel'>取消订单</span><a class='locHref' href='javascript:;'><span class='btn check'>确认收货</span></a></div></div>"
                            }else{
                                addStr += "</span></footer><div class='order-opt'>"
                                addStr += "<span class='btn delete'>删除订单</span><a class='locHref' href='javascript:;'><span class='btn again'>再次购买</span></a></div></div>"
                            }
                            orderContent.innerHTML += addStr
                        }
                        for(var i = 0;i<orderBlock.length;i++){
                            paintOrder(i)
                        }
                        if($('.firstscreen-orders').html()==''){
                            $('.no-order').show()
                        }
                        orderTime()
                        navNumber()
                    }else{
                        $('.no-order').show()
                    }
                }
            })
        })
        /*订单取消按钮*/
        $(document).on('click','.cancel',function (){
            doOrder = $(this).parents('.order').attr('orderid')
            $('.reason-mask').show()
        })
        $('.swiper-slide').on('click',function (){
            $(this).addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active')
        })
        $('.box-cmp').on('click',function (){
            $('.reason-mask').hide()
            $.ajax({
                type:'get',
                url:'php/myOrderBtn.php',
                dataType:'json',
                data:{
                    status:3,
                    ordernum:doOrder
                },
                success: function (data){
                    window.location.reload()
                }
            })
            
        })
        /*订单删除按钮*/
        $(document).on('click','.delete',function (){
            doOrder = $(this).parents('.order').attr('orderid')
            $('.delete-order').show()
        })
        $('.delete-order .dialog-left-btn').on('click',function (){
            $('.delete-order').hide()
        })
        $('.delete-order .dialog-right-btn').on('click',function (){
            
            $('.delete-order').hide()
            $.ajax({
                type:'get',
                url:'php/myOrderDelete.php',
                dataType:'json',
                data:{
                    ordernum:doOrder
                },
                success: function (data){
                    window.location.reload()
                }
            })
        })
        /*订单付款按钮*/
        $(document).on('click','.pay',function (){
            doOrder = $(this).parents('.order').attr('orderid')
            location.href = "myOrderPay.html?ordernum=" + doOrder
           
        })
        /*订单提醒发货按钮*/
        $(document).on('click','.notice',function (){
            doOrder = $(this).parents('.order').attr('orderid')
            $('.notice-wrapper').stop().show(0,function (){
                $(this).stop().fadeOut(2000)
                $.ajax({
                    type:'get',
                    url:'php/myOrderBtn.php',
                    dataType:'json',
                    data:{
                        status:2,
                        ordernum:doOrder
                    },
                    success: function (data){
                        window.location.reload()
                    }
                })
            })
        })
        /*订单确认收货按钮*/
        $(document).on('click','.check',function (){
            doOrder = $(this).parents('.order').attr('orderid')
            $('.check-order').show()
        })
        $('.check-order .dialog-left-btn').on('click',function (){
            $('.check-order').hide()
        })
        $('.check-order .dialog-right-btn').on('click',function (){
            $('.check-order').hide()
            $.ajax({
                type:'get',
                url:'php/myOrderBtn.php',
                dataType:'json',
                data:{
                    status:4,
                    ordernum:doOrder
                },
                success: function (data){
                    window.location.reload()
                }
            })
        })
        /*订单再次购买按钮*/
        $(document).on('click','.again',function (){
            location.href = "ymHotRank.html"
        })
    })();
    //extraTimer
    (function (){
        // var overtime = new Date('3018/08/07');
        // var hour = $('.hours')
        // setInterval(handler,1000);
        // function handler(){
        //     var hourt = spaceTime1();
        //     var mint = spaceTime2();
        //     var sec = spaceTime3();
        //     var timeStr = hourt + ':' + mint + ':' +sec
        //     hour.html(timeStr)
        // }
        // function spaceTime1(){
        //     var space = overtime - (+new Date());
        //     var spaceSeconds = space/1000;
        //     var hour = parseInt(spaceSeconds/3600)%24;
        //     return hour;
        // }
        // function spaceTime2(){
        //     var space = overtime - (+new Date());
        //     var spaceSeconds = space/1000;
        //     var minute = parseInt(spaceSeconds/60)%60;
        //     return minute;
        // }
        // function spaceTime3(){
        //     var space = overtime - (+new Date());
        //     var spaceSeconds = space/1000;
            
        //     var seconds = parseInt(spaceSeconds)%60;
        //     return seconds;
        // }
    })();
})