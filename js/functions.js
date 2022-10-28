// function precedent() {

//     document.getElementsByClassName("carousel-photos")[0].scrollLeft -= 300;
// }

// function suivant() {
//     document.getElementsByClassName("carousel-photos")[0].scrollLeft += 300;
//     alert("hello");
// }

(function($) {
    "use strict"; // Start of use strict

    $('.suivant').bind('tap',function() {  alert('Tap event triggered'); });
    $('.suivant').bind('click',function() {  console.log('Tap event triggered'); });

})(jQuery); // End of use strict