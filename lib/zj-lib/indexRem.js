(function () {
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 640) {
            a = 640;
        }
        rem = a / 16;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    // 移动端注册事件的标准写法
    window.addEventListener("resize", function () {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
    
})();