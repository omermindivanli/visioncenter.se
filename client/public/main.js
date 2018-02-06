/*  eslint-disable */
// Navbar Collapse Closing JS
$(function() {
  var navMain = $('.navbar-collapse');
  navMain.on('click', 'a', null, function() {
    navMain.collapse('hide');
  });
});

// Navbar Auto Sizing JS
$(window).scroll(function() {
  if ($(document).scrollTop() > 10) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
