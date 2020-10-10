
(function ($) {
	"use strict";
   $(document).ready(function($){

    // Preloader
    $(window).on('load',function(){

        $('.preloader').delay(300).fadeOut(300);
    
    
    });
   

    // Sticky Menu
        $('.js--sticky-menu').waypoint(function(direction){
            if(direction == 'down'){
                $('#sticky-menu').addClass('sticky');
            } else {
                $('#sticky-menu').removeClass('sticky');
            }
        });


      // Mini Cart Show
      $('.header-area .mini-cart> a, .header-area.sticky .mini-cart> a').on('click', function(){
         $('ul.cart-hover').toggleClass('show');
      });
     //   Search Active
      $('.search-click a').on('click', function(){
         $('.search-hover').toggleClass('active');
      });

     //   Left Side Active
      $('.sidebar-toggle').on('click', function(){
         $('.left-side-bar').toggleClass('show');
      });

      // Start Owl-carousel
        // Slider Home 1
        $('.slider-carousel, .slider-carousel-v-2').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            thumbs: false,
            nav: true,
            navText:['back','next'],
            autoplay: true,
                    autoplayTimeout:3000,
                autoplayHoverPause:true,
        });

        // Product Carousel
        $('.tab-product-carousel').owlCarousel({
            loop: false,
            dots: false,
            thumbs: false,
            nav: true,
            navText:['back','next'],
            autoplay: false,
                    autoplayTimeout:3000,
                autoplayHoverPause:true,
                margin: 30,
                responsive: {
                   0:{
                       items:1
                   },
                   767:{
                       items: 3
                   },
                   992:{
                       items:3
                   },
                   1200:{
                       items:4
                   },
               },
        });

        // Brands Carousel
        $('.brands-carousel').owlCarousel ({
            loop: true,
            dots: false,
            thumbs: false,
            nav: false,
            autoplay: true,
                    autoplayTimeout:3000,
                autoplayHoverPause:true,
            margin: 30,
            responsive: {
                0:{
                    items:2
                },
                768:{
                    items: 3
                },
                992:{
                    items: 5
                },
                1200:{
                    items: 6
                },
            },
        });

        // Category Carousel
        $('.category-carousel').owlCarousel ({
            loop: false,
            dots: false,
            thumbs: false,
            nav: true,
            navText:['back','next'],
            autoplay: false,
                    autoplayTimeout:3000,
                autoplayHoverPause:true,
            margin: 30,
            responsive: {
                0:{
                    items:1
                },
                767:{
                    items: 2
                },
                992:{
                    items: 4
                },
            },
        });

        // Catalog Carousel
        $('.catalog-carousel').owlCarousel ({
            loop: false,
            dots: false,
            thumbs: false,
            nav: true,
            navText:['back','next'],
            autoplay: false,
                    autoplayTimeout:3000,
                autoplayHoverPause:true,
            margin: 30,
            responsive: {
                0:{
                    items:1
                },
                767:{
                    items: 2
                },
                992:{
                    items: 1
                },
            },
        });
        // Blog Carousel
        $('.blog-carousel').owlCarousel ({
            loop: false,
            dots: false,
            thumbs: false,
            nav: true,
            navText:['back','next'],
            autoplay: false,
                    autoplayTimeout:3000,
                autoplayHoverPause:true,
            margin: 30,
            responsive: {
                0:{
                    items:1
                },
                767:{
                    items: 2
                },
                992:{
                    items: 3
                },
            },
        });
      // End Owl-carousel //

    //   CountDown
    $('#clock').countdown('2020/04/10', function(event) {
        var $this = $(this).html(event.strftime(''
        
          + '<span>%-D Days</span>'
          + '<span>%H Hours</span> '
          + '<span>%M Mins</span> '
          + '<span>%S Secs</span> '));
      });

    //   Slick Nav
    $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true
     });
    $('#mobile-menu-2').slicknav({
        prependTo: '.show-mobile-menu-2',
        allowParentLinks: true
     });

     
    // Start  Price Range Slider
     $( "#mySlider" ).slider({
        range: true,
        orientation: 'horizontal',
        min: 0,
        max: 1000,
        values: [ 0, 500 ],
        step: 1,
        slide:function (event, ui) {
                if (ui.values[0] == ui.values[1]) {
                  return false;
                }
                 
                $("#min_price").val(ui.values[0]);
                $("#max_price").val(ui.values[1]);
              }
    });
        
    $("#min_price").val($("#mySlider").slider("values", 0));
    $("#max_price").val($("#mySlider").slider("values", 1));
    // End Price Range Slider

    // Select Js
    $('select').niceSelect();

    // Zoom Img
    $(".zoom-1").elevateZoom({});


       //  back to top start

       $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop: 0}, 2000);
      });

      //  back to top end



   });

})(jQuery);
