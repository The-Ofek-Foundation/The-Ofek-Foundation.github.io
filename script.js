$(document).ready(function() {
  $('body').css('margin-bottom', 2 * $('.footer').height() + "px");
  $('.dropdown').css('top', "-" + $('.dropdown').height() + "px");
  $('.info').css('margin-left', "-=25px").css('padding-left', "+=20px").css('padding-right', "+=20px").css('width', "-=40px");
  $('.projects img, .info, img, .projects .container').each(function() {
    $(this).css('height', $(this).outerWidth(false) + "px");
  });
  $('.vert-align').each(function() {
    while($(this).height() > $(this).parent().height()) {
        $(this).css('font-size', (parseInt($(this).css('font-size')) - 1) + "px" );
    }
    $(this).css('margin-top', ($(this).parent().height() - $(this).height()) / 2 + "px");
  });
  $('.link').click(function() {
    redirect($(this).data('url'));
  });
  $('.container').each(function() {
    $(this).hover(function() {
      $(this).children(".flippable").toggleClass("flipped");
    });
  });
  $('.dropdown').animate({'top': "0px"}, "slow", function() {
    $('body').css('margin-top', $('.dropdown').height() + "px");
    $('.dropright').animate({left: $('.dropdown').outerWidth(true) + "px", opacity: 1}, 1000, function() {
      after = true;
      $('.header').css('right', "-" + $('.header').outerWidth(true) + "px");
      $('#games').animate({opacity: 1, 'margin-top': "0px"}, 1000, function() {
        $('.header').animate({right: "0px"}, 1000);
      });
      $(document).scroll();
    });
  });
});

// Animate tools when scrolled to them
var after = false;
$(document).scroll(function() {
  if(after) {
    if (window_at($('#tools')) && !$('#tools').data('animated')) {
      $('#tools').animate({opacity: 1, 'margin-top': "0px"}, 1000);
      $('#tools').data('animated', true);
    }
    if (window_at($('#about')) && !$('#about').data('animated')) {
      $('#about').animate({opacity: 1, 'margin-left': "+=25px"}, 1000);
      $('#about').css('height', 'auto');
      $('#about').data('animated', true);
    }
//     if (window_at($('#contact-me')) && !$('#contact-me').data('animated')) {
//       $('#contact-me').animate({opacity: 1, 'margin-left': "+=25px"}, 1000);
//       $('#contact-me').css('height', 'auto');
//       $('#contact-me').data('animated', true);
//     }
  }
});

function window_at(elem) {
  return $(document).scrollTop() + $(window).height() - $('.footer').outerHeight(true) >= elem.position().top;
}

// Scroll to top on window reload so always show up on top
$(window).on('beforeunload', function() {
  $('*').hide();
  $(window).scrollTop(0);
});

function redirect(url) {
  window.location.href = url;
}
