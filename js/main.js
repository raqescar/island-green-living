console.log("test");

function showReef() {
  var x = document.getElementById("coralReef");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  console.log("it worked");
}
