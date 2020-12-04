console.log("test");

var showReef = function () {
  var x = document.getElementById("coralReef");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  console.log("it worked");
}

function showNav() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    console.log("menu open");
  } else {
    x.style.display = "block";
    console.log("menu closed");
  }
}
