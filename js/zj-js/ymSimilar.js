$.each($(".good-item img"),function(index,ele){
    // console.log(index,value)
    // index +=1;
    $(ele).attr({"src":"img/ymBarands/similar"+index+".jpg"})
})
$(".nav-home").on("click",function(){
    $(".homebuttom").toggle();
})