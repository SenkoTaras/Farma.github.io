$(function() { var logo = $(".section_header");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500 && $(window).width() > 1200) {
        if(!logo.hasClass("section_header__small")) {
            logo.hide();
            logo.removeClass('section_header').addClass("section_header__small").fadeIn( "slow");
        }
    } else {
        if(!logo.hasClass("section_header")) {
            logo.hide();
            logo.removeClass("section_header__small").addClass('section_header').fadeIn( "slow");
        }
    }

});
});

$('.burger, .header_menu').click(function(){
    $('.burger').toggleClass('burger_active');
    $('.header_menu').toggleClass('header_menu_active');

});

$('.lang_item_active').click(function(){
    $('.lang_wrapper').toggleClass('lang_wrapper_active');
    $('.lang_item').toggleClass('lang_item_open');
});

$(function () {
    $('.menu_links').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('menu_links_active');
        }
    });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        item: 1
    });
});

