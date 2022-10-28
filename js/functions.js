function precedent() {

    document.getElementsByClassName("carousel-photos")[0].scrollLeft -= 300;
}

function suivant() {
    document.getElementsByClassName("carousel-photos")[0].scrollLeft += 300;
}

// (function($) {
//     "use strict"; // Start of use strict

// $('.suivant').on('click touchstart', function() {
//     alert("allan");
// });

// })(jQuery); // End of use strict