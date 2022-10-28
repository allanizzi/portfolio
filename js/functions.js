// function precedent() {

//     document.getElementsByClassName("carousel-photos")[0].scrollLeft -= 300;
// }

// function suivant() {
//     document.getElementsByClassName("carousel-photos")[0].scrollLeft += 300;
//     alert("hello");
// }

(function($) {
    "use strict"; // Start of use strict

$('.suivant').on('click touchstart', function() {
    document.getElementsByClassName("carousel-photos")[0].scrollLeft += 300;
    console.log("suivant 2");
});

})(jQuery); // End of use strict