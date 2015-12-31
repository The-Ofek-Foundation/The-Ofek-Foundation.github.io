$(document).ready(function() {
  $('body').css('margin-bottom', 2 * $('.footer').outerHeight(true) + "px");
  $('.dropdown').css('margin-top', "-" + $('.dropdown').outerHeight(false) + "px");
  $('.projects img').each(function() {
    $(this).css('height', $(this).outerWidth(false) + "px");
  });
  $('.dropdown').animate({'margin-top': "0px"}, "slow", function() {
    $('#games').animate({opacity: 1, 'margin-top': "0px"}, 1000, function() {
      $('#tools').animate({opacity: 1, 'margin-top': "0px"}, 1000);
    });
  });
});
