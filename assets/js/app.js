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


})

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
        scrollTop: ($('#contact').offset().top)
    },500);
})

// You are smart You can do anything //
//Set time interval for every hour to change background image 

let backgroundChange = setInterval((function (){

}), interval);



});

