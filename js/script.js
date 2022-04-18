
    
    $(document).ready(function(){
        $('.carousel-wrapper').slick({
            infinite: true,
            fade: false,
            autoplay: true,
            speed: 400,
            cssEase: 'linear',
            prevArrow: '<div class="btn prev"><i class="fas fa-angle-left"></i></div>',
            nextArrow: '<div class="btn next"><i class="fas fa-angle-right"></i></div>',
            
        });


        $('.products').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="btn prod-prev"><i class="fas fa-angle-left"></i></div>',
            nextArrow: '<div class="btn prod-next"><i class="fas fa-angle-right"></i></div>',
            responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });



       


      $('.deals-slick').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="btn main-deal-prev"><i class="fas fa-angle-left"></i></div>',
            nextArrow: '<div class="btn main-deal-next"><i class="fas fa-angle-right"></i></div>',
        });


      $('.mini-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="btn mini-deal-prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="btn mini-deal-next"><i class="fas fa-angle-right"></i></div>',
        });



    $('.special-products').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="btn prod-prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="btn prod-next"><i class="fas fa-angle-right"></i></div>',
        
    });


    $('.mini-slick').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<div class="btn mini-slick-prev"><i class="fas fa-angle-left"></i></div>',
      nextArrow: '<div class="btn mini-slick-next"><i class="fas fa-angle-right"></i></div>',
      });


      $('.related-products').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="btn prod-prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="btn prod-next"><i class="fas fa-angle-right"></i></div>',
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });


    });
          
   

