$(".area").on("click",function(){
    $(".address-select-component").show()
})
$(".close").on("click",function(){
    $(".address-select-component").hide()
})

var userid = getCookie("id")



$(".submit").on("click",function(){
    var username = $(".username input").val();
    var mobile = $(".mobile input").val();
    var area = $(".area input").eq(1).val();
    var address = $(".address textarea").val();
    console.log(username,mobile,address,area)
    if (iphoneCheck(mobile)) {
        
        $(location).attr('href', `location.html?key=998`);
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: 'php/addlocation.php',
            data: {
                username:username,
                mobile: mobile,
                area: area,
                address: address,
                userid:userid
            }
        })
      } else {
        // alert("请输入正确的手机号码")
        $(".yoho-tip").show(500).html("请输入正确的手机号码");
        setTimeout(function(){
            $(".yoho-tip").hide(500);
        },2000)
      }
   

    function iphoneCheck(mobile) {
        var temp = $(".mobile input").val();
        var re = /^1\d{10}$/; //手机号码验证正则表达式
        if (re.test(temp)) {
          return true;
        } else {
          return false;
        }
      }

    
})

$(".pro").on("click","li",function(){
    $(this).parent().hide()
    $(".city").html("")
    $(".city").show().siblings().hide()
    $("<li>"+$(this).html()+"</li>").insertBefore($(".head-address-li"))
    var txt = $(this).html()
    $.each(place[txt][0],function(i){
         $("<li>"+i+"</li>").appendTo($(".city"))
    })
})

$(".city").on("click","li",function(){
    $(this).parent().hide()
    $(".area1").html("")
    console.log($(this).html())
    $(".area1").show().siblings().hide()
     $("<li>"+$(this).html()+"</li>").insertBefore($(".head-address-li"))
    var txt = $(this).html()
    var x =  place[$(".head-address-ul").children().eq(0).html()][0][$(".head-address-ul").children().eq(1).html()]
    $.each(x,function(i,value){
         $.each(value,function(j,val){
            $("<li>"+j+"</li>").appendTo($(".area1"))         
         })
    })
 })

$(".area1").on("click","li",function(){
    $(".town").html("")
    $("<li>"+$(this).html()+"</li>").insertBefore($(".head-address-li"))
    $(".town").show().siblings().hide()
    var txt = $(this).html()
    var num = $(this).index();
    var x =  place[$(".head-address-ul").children().eq(0).html()][0][$(".head-address-ul").children().eq(1).html()]
    $.each(x,function(i,value){
         $.each(value,function(j,val){
           var arrs = val.split("、");
                $("<li>"+arrs[num]+"</li>").appendTo($(".town"))
         })
    })
})
$(".town").on("click","li",function(){
    if($(".head-address-ul").children().size()==4){
        var a0 = $(".head-address-ul").children().eq(0).html()
        var a1 = $(".head-address-ul").children().eq(1).html()
        var a2 = $(".head-address-ul").children().eq(2).html()
        var a3 = $(this).html()
        console.log(11)
        $(".address-select-component").hide()
        $(".area input").eq(1).val(a0+a1+a2+a3)
        return;
    }
})
var a = getCookie("username")
var b = getCookie("tel")
var c = getCookie("address-info")

//  console.log(a,b,c);

$(".username input").val(a);
$(".mobile input").val(b);
$(".area input").eq(1).val(c);
// $(".address textarea").val();
$(".head-address-ul").on("click","li",function(){
    if($(this).index()==2){
        $(".area1").show().siblings().hide();
    }
    if($(this).index()==1){
        $(".city").show().siblings().hide();
    }
    if($(this).index()==0){
        $(".pro").show().siblings().hide();
    }
    $(this).nextAll().remove();
    $(this).remove();

    $("<li>请选择</li>").addClass("head-address-li").appendTo($(".head-address-ul"))
    
})

