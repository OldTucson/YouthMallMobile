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
    /*完成付款 */
    (function (){
        function getUrlVars() {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        } 
        var params = getUrlVars();
        var ordernum = decodeURI(params.ordernum);
        $('.box').on('click',function (){
            $.ajax({
                type:'get',
                url:'php/myOrderBtn.php',
                dataType:'json',
                data:{
                    status:1,
                    ordernum:ordernum
                },
                success: function (data){
                    location.href = "myOrder.html"
                }
            })
        })
    })();
})