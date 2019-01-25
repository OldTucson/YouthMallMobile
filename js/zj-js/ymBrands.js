var myPlugin = {
   name: 'debugger',
   params: {
       debugger: false,
   },
   on: {
       init: function () {
           if (!this.params.debugger) return;
         //   console.log('init');
       },
       click: function (e) {
           if (!this.params.debugger) return;
         //   console.log('click');
       },
       tap: function (e) {
           if (!this.params.debugger) return;
         //   console.log('tap');
       },
       doubleTap: function (e) {
           if (!this.params.debugger) return;
         //   console.log('doubleTap');
       },
       sliderMove: function (e) {
           if (!this.params.debugger) return;
         //   console.log('sliderMove');
       },
       slideChange: function () {
           if (!this.params.debugger) return;
         //   console.log('slideChange', this.previousIndex, '->', this.activeIndex);
       },
       slideChangeTransitionStart: function () {
           if (!this.params.debugger) return;
         //   console.log('slideChangeTransitionStart');
       },
       slideChangeTransitionEnd: function () {
           if (!this.params.debugger) return;
         //   console.log('slideChangeTransitionEnd');
       },
       transitionStart: function () {
           if (!this.params.debugger) return;
         //   console.log('transitionStart');
       },
       transitionEnd: function () {
           if (!this.params.debugger) return;
         //   console.log('transitionEnd');
       },
       fromEdge: function () {
           if (!this.params.debugger) return;
         //   console.log('fromEdge');
       },
       reachBeginning: function () {
           if (!this.params.debugger) return;
         //   console.log('reachBeginning');
       },
       reachEnd: function () {
           if (!this.params.debugger) return;
         //   console.log('reachEnd');
       },
   },
};

// Install Plugin To Swiper
Swiper.use(myPlugin);

// Init Swiper
var swiper = new Swiper('.swiper-container', {
   pagination: {
       el: '.swiper-pagination',
   },
   // Enable debugger
   debugger: true,
   loop: true,
   speed: 500,
   autoplay: true,
   autoplay: {
       disableOnInteraction: false,
   },

});
var swiper = new Swiper('.brands-swiper', {
   slidesPerView: 4.6,
   spaceBetween: 5,
   // pagination: {
   //     el: '.swiper-pagination',
   //     clickable: true,
   // },
});
// $("a").on("click",function(e){
//    e.preventDefault();
// })
$(".brand-nav").on("click","li",function(){
   $(this).addClass("active").siblings().removeClass("active")
   if($(this).index()==0){
      $(".brand-list").removeClass("hide")
      $(".new-brand-wall").addClass("hide")
      $(".recommand-brand-wall").addClass("hide")
   }
   if($(this).index()==1){
      $(".new-brand-wall").removeClass("hide")
      $(".brand-list").addClass("hide")
      $(".recommand-brand-wall").addClass("hide")
   }
   if($(this).index()==2){
      $(".recommand-brand-wall").removeClass("hide")
      $(".brand-list").addClass("hide")
      $(".new-brand-wall").addClass("hide")
   }

})

$.each($(".new-brand-wall img"),function(index,ele){
   // console.log(index,value)
   index +=1;
   $(ele).attr({"src":"img/ymBarands/new"+index+".webp"})
})


var num=0;
$.each($(".recommand-brand-wall img"),function(index,ele){
   // console.log(index,value)
   num++;
   if(num > 20){
      num=1;
   }
   index +=1;
   $(ele).attr({"src":"img/ymBarands/hot"+num+".webp"})
})

$(".gender-nav ul").on("click","li",function(){
   var index = $(this).index()+1;
      $(location).attr("href","ymBrands.html?channel="+index)

})
function removeAllSpace(str) {
   return str.replace(/\s+/g, "");
};
$(".brand-list").on("click","a",function(e){
  
   e.preventDefault();
   var name = $(this).text().slice(0,27)
   var names =  removeAllSpace(name)
   $(location).attr("href","hot_cate.html?key="+names)


})


$(".new-brand-wall").on("click","a",function(e){
   e.preventDefault();
   var name = $(this).children(".brand-name").text()
   var names =  removeAllSpace(name)
   $(location).attr("href","hot_cate.html?key="+names)
})
$(".recommand-brand-wall").on("click","a",function(e){
   e.preventDefault();
   var name = $(this).children(".brand-name").text()
   var names =  removeAllSpace(name)
   $(location).attr("href","hot_cate.html?key="+names)
})
$(".hot-brands li").on("click","a",function(e){
   e.preventDefault();
   var name = $(this).next().text()
   console.log(name)
   var names =  removeAllSpace(name)
   $(location).attr("href","hot_cate.html?key="+names)
})
;(function(){
   (function ($) {
      $.getUrlParam = function (name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if (r != null) return unescape(r[2]); return null;
      }
   })(jQuery);
   var xx = $.getUrlParam('channel');
   if(xx==1){
      $(".gender-nav ul li").eq(0).addClass("active").siblings().removeClass("active")
   }
   if(xx==2){
      $(".gender-nav ul li").eq(1).addClass("active").siblings().removeClass("active")
      var num = 0;
      $.each($(".banner-top .swiper-wrapper .swiper-slide img"),function(index,ele){
         num++;
         if(num > 3){
            num=1;
         }
         $(ele).attr({"src":"img/ymBarands/swiper2-"+num+".jpg"})
      })

      $.each($(".hot-brands .swiper-wrapper .swiper-slide img"),function(index,ele){
         num++;
         if(num > 5){
            num=1;
         }
         $(ele).attr({"src":"img/ymBarands/small2-"+num+".jpg"})
      })
   }
   if(xx==3){
      $(".gender-nav ul li").eq(2).addClass("active").siblings().removeClass("active")
      var num = 0;
      $.each($(".banner-top .swiper-wrapper .swiper-slide img"),function(index,ele){
         num++;
         if(num > 3){
            num=1;
         }
         $(ele).attr({"src":"img/ymBarands/swiper3-"+num+".jpg"})
      })
      $.each($(".hot-brands .swiper-wrapper .swiper-slide img"),function(index,ele){
         num++;
         if(num > 5){
            num=1;
         }
         $(ele).attr({"src":"img/ymBarands/small3-"+num+".jpg"})
      })
   }
   if(xx==4){
      $(".gender-nav ul li").eq(3).addClass("active").siblings().removeClass("active")
      var num = 0;
      $.each($(".banner-top .swiper-wrapper .swiper-slide img"),function(index,ele){
         num++;
         if(num > 3){
            num=1;
         }
         $(ele).attr({"src":"img/ymBarands/swiper4-"+num+".jpg"})
      })
      $.each($(".hot-brands .swiper-wrapper .swiper-slide img"),function(index,ele){
         num++;
         if(num > 5){
            num=1;
         }
         $(ele).attr({"src":"img/ymBarands/small4-"+num+".jpg"})
      })
   }
})()