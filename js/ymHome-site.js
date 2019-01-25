$(window).load(function(){
    $.ajax({
        type:"get",
        url:"../php/ymHomesite.php",
        dataType:"json",
        success:function(data){
            console.log(data);
            if(data["success"]==1){
                for(var i=0;i<data.list.length;i++){
                    console.log(111);
                    $(".page-wrap").append('<div class="address-item"><span class="name">'+data["list"][i]["name1"]+'</span><span class="tel">'+data["list"][i]["tel"]+'</span><p class="address-info">'+data["list"][i]["addressinfo"]+data["list"][i]["address"]+'</p><div class="action iconfont"><a href="ymHomealter.html?id='+data["list"][i]["Id"]+'" class="edit">修</a><i class="icon-laji del"></i></div></div>')
                }
            }      
        },
        error:function(){
            console.log(0);
        }
    });
});