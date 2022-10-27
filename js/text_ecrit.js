(function($) {
    "use strict"; // Start of use strict

// counter section first qui se déclanche lorsque la section est affichée à l'écran
    let it = 1;  

    let disp = function($el) {
        // if($el.offset().top <= ((window.scrollY + $(window).height()) - 200) && it == 1) {
        // it = it + 1;
        
        $('.counter-number').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });

    //   } else {
    //   }
    };
    
    $(window).ready(function() {
      disp($("#first"));
    });

    // fin counter

})(jQuery); // End of use strict