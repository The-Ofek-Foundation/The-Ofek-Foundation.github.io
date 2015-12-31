$(document).ready(function() {
  $('body').css('margin-bottom', 2 * $('.footer').outerHeight(true) + "px");
  $('.dropdown').css('top', "-" + $('.dropdown').outerHeight(false) + "px");
  $('.projects img').each(function() {
    $(this).css('height', $(this).outerWidth(false) + "px");
  });
  $('.dropdown').animate({'top': "0px"}, "slow", function() {
    $('body').css('margin-top', $('.dropdown').outerHeight(true) + "px");
    $('.dropright').animate({left: $('.dropdown').outerWidth(true) + "px", opacity: 1}, 1000, function() {
      $('#games').animate({opacity: 1, 'margin-top': "0px"}, 1000);
    });
  });
});

$(document).scroll(function() {
  if($(this).scrollTop() + $(window).height() - $('.footer').outerHeight(true) >= $('#tools').position().top)
    $('#tools').animate({opacity: 1, 'margin-top': "0px"}, 1000);
});
