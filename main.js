let togle = document.getElementById("toggle");
const span = document.querySelector(".span");
const light = document.querySelector(".light");
const navigasi = document.querySelector("ul");
const close = document.querySelector(".close");
const lampContent = document.querySelector(".lamp-container");
const hamburger = document.querySelector(".hamburger");



// TOGGLE FUNCTION
function toggleBtn() {
  togle.classList.toggle("active");
  light.classList.toggle("on");
  span.classList.toggle("geser");
}



// HAMBURGER FUNCTION
hamburger.addEventListener("click", function () {
  navigasi.classList.toggle("down");
  lampContent.classList.add("index");
});


// TOGLE FUNCTION
close.addEventListener("click", function () {
  navigasi.classList.toggle("down");
  lampContent.classList.remove("index");
});


close.addEventListener("click",()=>{
  navigasi.classList("down")
})