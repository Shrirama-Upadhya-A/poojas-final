jQuery(document).ready(function($) {
    'use strict';


    jQuery('nav#site-navigation-pro ul.sf-menu, nav#sidebar-nav ul.sf-menu').superfish({
        popUpSelector: 'ul.sub-menu, .sf-mega',
        delay: 200,
        speed: 0,
        speedOut: 200,
        animation: { opacity: 'show' },
        animationOut: { opacity: 'hide' },
        cssArrows: true,
        autoArrows: true,
        disableHI: true,
    });



    $('header.sticky-header').scrollToFixed({
        minWidth: 768
    });


    $(window).resize(function() {
        var width_progression = $(document).width();
        if (width_progression < 768) {
            $('header.sticky-header').trigger('detach.ScrollToFixed');
        }
    }).resize();

    $('nav#sidebar-nav.sticky-sidebar-js').hcSticky({
        top: 0
    });

    $('#mobile-bars-icon-pro').click(function(e) {
        e.preventDefault();
        $('#mobile-navigation-pro').slideToggle(350);
        $("header#masthead-pro").toggleClass("active-mobile-icon-pro");
        $("header#videohead-pro").toggleClass("active-mobile-icon-pro");
    });


    $('ul#mobile-menu-pro').slimmenu({
        resizeWidth: '90000',
        collapserTitle: 'Menu',
        easingEffect: 'easeInOutQuint',
        animSpeed: 350,
        indentChildren: false,
        childrenIndenter: '- '
    });

    $('.progression-studios-slider').flexslider({
        slideshow: true,
        slideshowSpeed: 8000,
        animation: "fade",
        animationSpeed: 800,
        directionNav: true,
        controlNav: true,
        prevText: "",
        nextText: "",
    });



    var offset = 150,

        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('#pro-scroll-top');

    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: 0, }, scroll_top_duration);
    });



    $("ul.registration-invite-friends-list li").click(function() {
        $(this).closest("ul.registration-invite-friends-list li").toggleClass("active");
    });

    $("ul.registration-genres-choice li").click(function() {
        $(this).closest("ul.registration-genres-choice li").toggleClass("active");
    });

});