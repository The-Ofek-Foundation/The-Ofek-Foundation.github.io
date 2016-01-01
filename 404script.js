$(document).ready(function() {
  $('#dropdown').css('left', ($(document).outerWidth(true) - $('#dropdown').outerWidth(false)) / 2 + "px");
  $('#dropdown').css('top', '-' + $('#dropdown').outerHeight(false) + "px");
  $('#dropdown').animate({top: ($(document).outerHeight(true) - $('#dropdown').outerHeight(false)) / 2 + "px", opacity: 1}, 2000, function() {
    $('#dropdown a').animate({'margin-left': "0px", opacity: 1}, 2000);
  });
});
