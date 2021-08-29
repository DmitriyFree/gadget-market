
    $('.banner-section__slider').slick({
        dots:true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint:969,
                settings: {
                    arrows:false
                }
            }
        ]
    });


    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').parent().siblings().find('div')).removeClass('tabs-content--active');
        //$(this).addClass('test');
        //$(this).addClass('test');
        //$(this).closest('.tabs-wrapper').addClass('test');
        //$($(this).closest('.tabs-wrapper')).siblings().find('div').addClass('test');
        //$($(this).closest('.tabs-wrapper').siblings().find('div')).addClass('tabs-content--test');
        //console.log($($(this).closest('.tabs-wrapper').siblings().find('div')).target);

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

       // $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint:1301,
                settings: {
                    arrows:false,
                    dots:true
                }
            },
            {
                breakpoint:1201,
                settings: {
                    slidesToShow: 3,
                    dots:true
                }
            },
            {
                breakpoint:870,
                settings: {
                    slidesToShow: 2,
                    dots:true
                }
            },
            {
                breakpoint:590,
                settings: {
                    slidesToShow: 1,
                    dots:true
                }
            }

        ]
    });

