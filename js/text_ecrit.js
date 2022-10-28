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


     // text écrit
     var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 60;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 900;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      $(window).ready(function() {
        var elements = document.getElementsByClassName('txt-write');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-write > .wrap { border-right: 0.12em solid #C0B187 }";
        document.body.appendChild(css);
      });
  
      //fin text écrit

})(jQuery); // End of use strict