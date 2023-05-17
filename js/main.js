//intialization plugins
$(document).ready(function () {
    
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".nabar").css("background" , "transperent");
        }
  
        else{
            $(".navbar").css("background" , "#000");  	
        }
    })
  })
    //animation icon toggler of navbar
    $(`.navbar-toggler`).click(function() {
        $(`.navbar-toggler`).toggleClass(`active`);
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    new WOW().init();
    //smooth_scroll
    smoothScroll.init();
    var amountScrolled = 300;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('#scroll-btn').fadeIn('slow');
        } else {
            $('#scroll-btn').fadeOut('slow');
        }
    });
    // $('#scroll-btn').click(function () {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 1000);
    //     return false;
    // });
    //fancybox
    $("[data-fancybox]").fancybox({
        selector: '[data-fancybox="images"]',
        loop: true
    });
    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    /*Loading page */
    $(window).on("load", function(){
        $(".loading-page")
        .fadeOut(2000 , function(){
            $("body").css("overflow" , "auto");
            $("this").fadeOut(1500 , function(){
                $(this).remove();
            });
        });
    });  
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    direction: 'vertical',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

const swiper = new Swiper('.players-swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.secound-inner i').on("click", function () {
    $('body,html').animate({
      scrollTop:$('.news').offset().top //secound section
    }, 1000);
  });
