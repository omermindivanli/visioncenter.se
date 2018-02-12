/*  eslint-disable */
// Navbar Collapse Closing JS
$(function () {
  var navMain = $('.navbar-collapse');
  navMain.on('click', 'a', null, function () {
    navMain.collapse('hide');
    $("html, body").scrollTop({ scrollTop: 0 }, "slow");
  });
});
