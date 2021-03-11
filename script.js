$(document).ready(function () {
  $('.menu-btn').click(function () {
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
      },
      1000
    );
    $('.rotateR').animate(
      {
        borderSpacing: -45,
      },
      {
        step: function (now) {
          $(this).css('transform', 'rotate(' + now + 'deg)');
        },
      },
      1000
    );
    $('.menu-btn').addClass('clicked');
  });

  if ($('.menu-btn').has('.clicked')) {
    $('.menu-btn').click(function () {
      // $('.down').animate({ top: '0px', opacity: '1' }, 300);
      // $('.up').animate({ top: '16px', opacity: '1' }, 300);
      // $('.rotateL').animate(
      //   {
      //     borderSpacing: 0,
      //   },
      //   {
      //     step: function (now) {
      //       $(this).css('transform', 'rotate(' + now + 'deg)');
      //     },
      //   },
      //   1000
      // );
      // $('.rotateR').animate(
      //   {
      //     borderSpacing: 0,
      //   },
      //   {
      //     step: function (now) {
      //       $(this).css('transform', 'rotate(' + now + 'deg)');
      //     },
      //   },
      //   1000
      // );
      $('.menu-btn').removeClass('clicked');
    });
  }
});
