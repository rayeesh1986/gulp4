$(document).ready(function(){
    $('.mt_tab_c li a').click(function(){
        var indexData = $(this).parent().index();
        var a = $(this).parent().addClass('activeTab').siblings().removeClass('activeTab');
        $(this).parents('.mt_f_c_inner').find('.mt_tab_con_c .mt_tab_i_c').eq(indexData).show().siblings().hide();

    })

    $('.mt_l_c_g_b li a').click(function(){
        $(this).parent().addClass('activeLink').siblings().removeClass('activeLink');
        var mt_l_c = $(this).parent().data('location');
        var mt_location = $('.mt_location_listing_c').data('location');
        var mt_map = $('.mt_location_map_c').data('location');
        if(mt_l_c == mt_location){
            $('.mt_location_listing_c').addClass(mt_location);
            $('.mt_location_map_c').removeClass(mt_location);
        }
        else if(mt_l_c == mt_map){
            $('.mt_location_map_c').addClass(mt_location);
            $('.mt_location_listing_c').removeClass(mt_location);
        }
        
        
    })

if($('.mt_responsive_slider').length){
    $('.mt_responsive_slider').slick({
        dots: false,
        infinite: false,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
}

if ($(".mt_home_slider").length) {
    $(".mt_home_slider .mt_promotion_wrapper_items").slick({
        dots: true,
        autoplay: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        responsive: [
        {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
         {
                breakpoint: 768,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
}

$('.mt_loc_container').on('click', function(){
    $('#time_content').toggle();
});


    $(".reviewloadcontent").slice(0, 4).show();
    $("#mt_loadMore").on('click', function (e) {
        e.preventDefault();
        $(".reviewloadcontent:hidden").slice(0, 4).show();
        if ($(".reviewloadcontent:hidden").length == 0) {
            $("#mt_loadMore").fadeOut('slow').addClass('hidReadmore');
        }else{
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        }
        
    });

    
})