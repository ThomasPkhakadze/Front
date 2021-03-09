$(document).ready(function () {
  $('.nav-btn').click(function () {
    $('.menu-nav').css('visibility', 'visible');
    $('.menu-nav').animate({ width: 'toggle' }, 400);
    $('.nav-ul li').mouseover(function () {
      console.log('success');

      $('.menu-nav-2').css('visibility', 'visible');
    });
  });
});
