// var Flickr = require("flickrapi"),
//     flickrOptions = {
//       api_key: "58bd3aae7fb29603935cfa0a6f21a222",
//       secret: "8fcc2965bb9ff059"
//     };

// Flickr.tokenOnly(flickrOptions, function(error, flickr) {
//     //https://www.flickr.com/photos/cadampol/16783837234/
//   // we can now use "flickr" as our API object,
//   // but we can only call public methods and access public data
// });

//Document Ready Function 
$(document).ready(function(){

    var $animation_elements = $('.animation-element');
    var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
    //About Button Function
    $('#btn-1').click(function () { 
        //Setting Animation for About
        $('html, body').animate({
            scrollTop: ($('#about').offset().top)
        },500);
})
    // Resume Animation
    $('#btn-2').click(function () { 
        //Setting Animation for Resume
        $('html, body').animate({
            scrollTop: ($('#resume').offset().top)
        },500);


});

// Resume Animation
$('#btn-3').click(function () { 
    //Setting Animation for Resume
    $('html, body').animate({
        scrollTop: ($('#portfolio').offset().top)
    },500);
})
// Resume Animation
$('#btn-4').click(function () { 
    //Setting Animation for Resume
    $('html, body').animate({
        scrollTop: ($('#about-arrow').offset().top)
    },500);
})

$('#btn-4').click(function () { 
    //Setting Animation for Resume
    $('html, body').animate({
        scrollTop: ($('#about-arrow').offset().top)
    },500);
})

$('#btn-5').click(function () { 
    //Setting Animation for Resume
    $('html, body').animate({
        scrollTop: ($('#resume-arrow').offset().top)
    },500);
})

});
