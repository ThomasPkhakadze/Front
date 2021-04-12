$(document).ready(function () {
  $('.menu-btn').click(function () {
    // if object was clicked then execute dis
    if ($(this).attr('data-click-state') == 1) {
      // set to unclicked
      $(this).attr('data-click-state', 0);

      // rotating animation
      //==========================================================
      // bg-color to starting one
      $('.menu-btn span').css('backgroundColor', '#161515');
      // simple animations
      $('.down').animate({ top: '0px', opacity: '1' }, 300);
      $('.up').animate({ top: '16px', opacity: '1' }, 300);
      $('.rotateL, .rotateR').animate(
        {
          borderSpacing: 0,
        },
        {
          step: function (now) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
          },
        },
        1000
      );
      // Sidebar Slide to left
      $('.sidebar-part-2').animate({ left: '-400px' });
      // else dis
    } else {
      // color to active
      $('.menu-btn span').css('backgroundColor', 'crimson');
      //yet again simple animes
      $('.down').animate({ top: '8px', opacity: '0' }, 300);
      $('.up').animate({ top: '8px', opacity: '0' }, 300);
      $('.rotateL').animate(
        {
          borderSpacing: 45,
        },

        {
          step: function (now) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
          },
        }
      );
      $('.rotateR').animate(
        {
          borderSpacing: 135,
        },
        {
          step: function (now) {
            $(this).css('transform', 'rotate(' + now + 'deg)');
          },
        }
      );
      $(this).attr('data-click-state', 1);
      // Sidebar Sliding Right
      $('.sidebar-part-2').animate({ left: '0' });
    }
  });

  // Sub menu fadein-out on hover
  $('.dropdown').hover(function () {
    $(this).addClass('active');
    $('.active').children().fadeIn(300);
  });
  $('.dropdown').mouseleave(function () {
    $(this).removeClass('active');
    $('.sub-menu').fadeOut(300);
  });

  // on hover add effect
  $('.rectangle').hover(
    function () {
      $(this).children(':first-child').addClass('fromLeft');
      $(this).children(':first-child').animate({ right: '0px' }, 800);
    },
    function () {
      $(this).children(':first-child').animate({ right: '350px' }, 500);
      setTimeout(function () {
        $(this).children(':first-child').removeClass('fromLeft');
      }, 1000);
    }
  );
  // on click change slide

  // making first slide & rectangle appear and active on default
  $('.slideshow-container').children(':first-child').show();

  // ////////////////////// SLIDER

  //on click not active rectangle
  $('.rectangle:not(.active)').click(function () {
    // make text disappear
    // $('.slider-text').css('visibility', 'hidden');

    $('.mySlides').css('zIndex', '1');
    // remove rectangle active class
    $('.rectangle.active').removeClass('active');
    // capture id of an rectangle element
    var id = $(this).attr('id');
    // show slide with the same id
    $('.mySlides#' + id).fadeIn(1700);
    // make active slide bellow the upcoming slide
    $('.mySlides#' + id).css('zIndex', '2');

    // setting timeout to maintain previus slide as a background
    setTimeout(function () {
      // then after next slide arrives hiding and removing/adding active classes
      $('.mySlides.active').hide();
      $('.mySlides.active').removeClass('active');

      $('.rectangle#' + id).addClass('active');
      $('.mySlides#' + id).addClass('active');
    }, 1700);
    $('.slider-text').css('visibility', 'visible');
  });

  // repeate variable for number increment function
  var repeate = true;

  // When window top will scroll thru the slider make it blurry
  $(window).scroll(function () {
    var windowScroll = $(window).scrollTop();
    var sliderHeight = $('.mySlides img').innerHeight();
    var blurDistance = sliderHeight - windowScroll;
    if (blurDistance <= 600 && blurDistance > 400) {
      $('.mySlides img').css('filter', 'blur(2px)');
    } else if (blurDistance < 400 && blurDistance > 200) {
      $('.mySlides img').css('filter', 'blur(8px)');
    } else if (blurDistance < 200) {
      $('.mySlides img').css('filter', 'blur(11px)');
    } else {
      $('.mySlides img').css('filter', 'blur(0px)');
    }
    // make animations happen when reaching certain element
    // 1) Make About section appear
    var aboutUs = $('.about-us').offset().top;
    var aboutUsDistance = aboutUs - windowScroll;
    if (aboutUsDistance < 200) {
      $('.about-us').addClass('appear');
      $('.about-us').css('visibility', 'visible');
    }
    // 2) Slide in Services
    var services = $('.services-single-wrapper').offset().top;
    var servicesDistance = services - windowScroll;
    if (servicesDistance < 300) {
      var delay = 0;
      $('.services-single').each(function () {
        $(this).delay(delay).animate(
          {
            left: '0px',
          },
          500
        );
        delay += 500;
      });
    }
    // 3) Increase Num values
    var Numbers = $('.numbers').offset().top;
    var NumberDistance = Numbers - windowScroll;
    // Increase Value function
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const obj1 = document.getElementById('number1');
    const obj2 = document.getElementById('number2');
    const obj3 = document.getElementById('number3');
    const obj4 = document.getElementById('number4');
    if (NumberDistance < 300 && repeate == true) {
      repeate = false;
      $('.number-wrap')
        .animate({ top: '50px', opacity: '1' }, 1500)
        .css('display', 'inline-block');
      animateValue(obj1, 0, 210, 1500);
      animateValue(obj2, 0, 600, 1500);
      animateValue(obj3, 0, 3000, 1500);
      animateValue(obj4, 0, 98, 1500);
    }
  });
});
