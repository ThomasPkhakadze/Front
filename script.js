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

  //on click not active rectangle
  $('.rectangle:not(.active)').click(function () {
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
  });
});
