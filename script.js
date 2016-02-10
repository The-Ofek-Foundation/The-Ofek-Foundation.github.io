$(document).ready(function() {
  $('body').css('margin-bottom', 2 * $('.footer').height() + "px");
  $('.dropdown').css({'top': "-" + $('.dropdown').height() + "px", 'margin-top': $('.dropdown').height() + "px"});
  $('.dropright').css({left: $('.dropdown').outerWidth(true) + "px", opacity: 1});
  
  $('.info').css('margin-left', "-=25px").css('padding-left', "+=20px").css('padding-right', "+=20px").css('width', "-=40px");
  
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++)
    $(squares[i]).css('height', $(squares[i]).outerWidth(false) + "px");
    
//   $('.link').each(function() {
//     $("#links").append($('<a href="' + $(this).data("url") + '"></a>'));
//   });

  var prev_container = false, prev_dp = false;
  document.onmousemove = function (e) {
    var target = e.target;
    if (!target.parentElement)
      return;
    var doub_par = target.parentElement.parentElement;
    if (doub_par === prev_dp || (target.tagName === "SECTION"));
    else if (target.parentElement.tagName === "FIGURE") {
      var tp = target.parentElement.parentElement.parentElement;
      $(prev_container).children(".flippable").removeClass("flipped");
      prev_container = tp;
      prev_dp = doub_par;
      $(prev_container).children(".flippable").addClass("flipped");
    }
    else if (target.tagName === "DIV") {
      $(prev_container).children(".flippable").removeClass("flipped");
      prev_container = prev_dp = target;
    }
  };
  $('body').css('margin-top', $('.dropdown').height() + "px");
});

function indexOf(list, item) {
  for (var i = 0; i < list.length; i++)
    if (list[i] === item)
      return i;
  return -1;
}

$(".dropright").on("transitionend", function() {
  if (!after) {
    after = true;
    fit_parent();
    vert_align();
    $('#games').animate({opacity: 1, 'margin-top': "0px"}, 1000, function() {
      $('.header').css('right', "-" + $('.header').outerWidth(true) + "px");
      $('.header').animate({right: "0px"}, 1000);
    });
    $(document).scroll();
  }
});

var fit_parents = document.getElementsByClassName("fit-parent");
function fit_parent() {
  var fp = fit_parents, elem;
  for (var i = 0; i < fp.length; i++) {
    elem = $(fp[i]);
    while (elem.height() > elem.parent().height())
        elem.css('font-size', (parseInt(elem.css('font-size')) - 1) + "px" );
  }
}

var vert_aligns = document.getElementsByClassName("vert-align");
function vert_align() {
  var va = vert_aligns, elem;
  for (var i = 0; i < va.length; i++) {
    elem = $(va[i]);
    elem.css('margin-top', (elem.parent().height() - elem.height()) / 2 + "px");
  }
}

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
