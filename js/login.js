$(document).ready(function() {
    $('.signup-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $("img").height($(".main-box").height());

    $(".to-signin").on("click", function() {
        $(this)
            .addClass("top-active-button")
            .siblings()
            .removeClass("top-active-button");
        $(".form-signup").slideUp(500);
        $(".form-signin").slideDown(500);
    });

    $(".to-signup").on("click", function() {
        $(this)
            .addClass("top-active-button")
            .siblings()
            .removeClass("top-active-button");
        $(".form-signin").slideUp(500);
        $(".form-signup").slideDown(500);
    });

    $(".to-signin-link").on("click", function() {
        $(".to-signin")
            .addClass("top-active-button")
            .siblings()
            .removeClass("top-active-button");
        $(".form-signup").slideUp(200);
        $(".form-signin").slideDown(200);
    });

    $(".to-signup-link").on("click", function() {
        $(".to-signup")
            .addClass("top-active-button")
            .siblings()
            .removeClass("top-active-button");
        $(".form-signin").slideUp(200);
        $(".form-signup").slideDown(200);
    });
});

$(document).ready(function() {
    $('.input-group input').focus(function() {
        me = $(this);
        $("label[for='" + me.attr('id') + "']").addClass("animate-label");
    });
    $('.input-group input').blur(function() {
        me = $(this);
        if (me.val() == "") {
            $("label[for='" + me.attr('id') + "']").removeClass("animate-label");
        }
    });
})

$('input[type="number"]').each(function() {
    $(this).on('keyup', function() {
        if ($(this).val() > Number($(this).attr("max"))) {
            val = $(this).val().slice(0, $(this).attr("max").length);
            $(this).val(val);
        }
    });
});