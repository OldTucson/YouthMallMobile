$.each($(".gift-advance-good img"),function(index,ele){
    // console.log(index,value)
    index +=1;
    $(ele).attr({"src":"img/ymBarands/gift"+index+".jpg"})
})
    // $(".gift-advance-good img")
$(".chose").on("click",function(){
    $(".chose-panel").show()
    let index = $(this).parents(".gift-advance-good").index() + 1;
    // console.log($(this).parents(".gift-advance-good").index())
    $(".thumb-img img").attr({"src":"img/ymBarands/gift"+index+".jpg"})
})
$(".close").on("click",function(){
    $(".chose-panel").hide()
    
})