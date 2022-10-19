
  function handle(evnt){
    let cardsProjets = document.getElementsByClassName("card-projet");

    if ( document.documentElement.clientWidth >= 780 && document.documentElement.clientWidth < 1700) {
      for (let i = 0; i < cardsProjets.length; i++) {
        document.getElementsByClassName("card-projet")[i].style.width = parseInt((((document.getElementById("cards").offsetWidth - 20) / 2) - 6)) + "px";
      } 
    }
    else if ( document.documentElement.clientWidth >= 1700) {
        for (let i = 0; i < cardsProjets.length; i++) {
          document.getElementsByClassName("card-projet")[i].style.width = parseInt((((document.getElementById("cards").offsetWidth - 40) / 3) - 8)) + "px";
        } 
      }
    else {
        for (let i = 0; i < cardsProjets.length; i++) {
            document.getElementsByClassName("card-projet")[i].style.width = "100%";
        }
    }
  }

    window.onresize = handle;
    window.onload = handle;


