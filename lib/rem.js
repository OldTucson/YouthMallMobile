
function resize(){
    var dom = document.documentElement;
    var w = dom.getBoundingClientRect().width;
    var fontSize = w/18.75;       //7.5指的是设计稿的尺寸是750px的
    dom.style.fontSize = fontSize+"px";
}
resize();
window.onresize = function(){
    console.log("resize");
    setTimeout(function(){
        resize();
    },16.7);
}