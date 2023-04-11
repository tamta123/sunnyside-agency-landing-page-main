const nav = document.getElementById("myLinks");
const triangle = document.querySelector('.triangle')
function myFunction() {
    if (nav.style.display === "block") {
      nav.style.display = "none";
      triangle.style.display = 'none'
    } else {
      nav.style.display = "block";
      triangle.style.display = 'block'
    }
  }