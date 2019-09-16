var y = document.getElementById("menu");
var video = document.getElementById("video-banner");

function myFunction2(x) {
    if (x.matches) { // If media query matches
        myFunction();
        video.style.display='none';
    }else{
      y.className="navbar";
      video.style.display='block';
    }
  }
  
  var x = window.matchMedia("(max-width: 678px)")
  myFunction2(x) 
  x.addListener(myFunction2) 


function myFunction() {
    if (y.className === "menu") {
      y.className += " responsive";
    } else {
      y.className = "menu";
    }
  }

