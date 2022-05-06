(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(600).fadeOut();
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, #menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        // nice select
        //$('select').niceSelect();

        // slider
        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        var syncedSecondary = true;

        sync1.owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: false,
            dots: true,
            loop: false,
            responsiveRefreshRate: 200,
            navText: [
                '<i class="fal fa-angle-left"></i>',
                '<i class="fal fa-angle-right"></i>'
            ]
        }).on('changed.owl.carousel', syncPosition);

      sync2.on('initialized.owl.carousel', function() {
        sync2.find(".owl-item.center").eq(0).addClass("current");
      })

      /* centered items */
      sync2.find('.owl-item').each(function(index) {
        var item = $(this).attr('data-position', index);
      })

      sync2.owlCarousel({
        margin: 16,
        dots: false,
        nav: false,
        loop: false,
        smartSpeed: 200,
        slideSpeed: 1000,
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 4,
            }
        }
      }).on('click', '.owl-item', function(e) {
            var carouselSync1 = $('#sync1').data('owl.carousel');
            e.preventDefault();

            var current = $(this).index();
            carouselSync1.to(carouselSync1.relative(current));

            /* centered items */
            sync2.trigger('to.owl-carousel', $(this).data('position'));
          });

        function syncPosition(el) {

            var current = el.item.index;

            sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            console.log('currentSync1: ' + current)

            if (current > end) {
              sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
              sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
          if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
          }
        }

        $('#sync2 .owl-item:first-child').addClass('current');
    });

})(jQuery);
