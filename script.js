$(document).ready(function () {
  $('.menu-btn').click(function () {
    // if object was clicked then execute dis
    if ($(this).attr('data-click-state') == 1) {
      // set to unclicked
      $(this).attr('data-click-state', 0);
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
    }
  });
});
