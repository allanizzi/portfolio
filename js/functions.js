// function precedent() {

//     document.getElementsByClassName("carousel-photos")[0].scrollLeft -= 300;
// }

// function suivant() {
//     document.getElementsByClassName("carousel-photos")[0].scrollLeft += 300;
//     alert("hello");
// }

(function($) {
    "use strict"; // Start of use strict

    $('.images').on('click','.suivant', function(e){
        e.preventDefault();
        document.getElementsByClassName("carousel-photos")[0].scrollLeft += 300;
    });

    $('.images').on('click','.precedent', function(e){
        e.preventDefault();
        document.getElementsByClassName("carousel-photos")[0].scrollLeft -= 300;
    });

})(jQuery); // End of use strict