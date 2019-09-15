function myFunction2(x) {
    if (x.matches) { // If media query matches
        myFunction();
    }
  }
  
  var x = window.matchMedia("(max-width: 678px)")
  myFunction2(x) 
  x.addListener(myFunction2) 


function myFunction() {
    var y = document.getElementById("menu");
    if (y.className === "menu") {
      y.className += " responsive";
    } else {
      y.className = "menu";
    }
  }