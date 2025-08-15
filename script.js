document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
    document
      .querySelectorAll(".navbar .nav-item")
      .forEach(function (everyitem) {
        everyitem.addEventListener("mouseover", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add("show");
            nextEl.classList.add("show");
          }
        });
        everyitem.addEventListener("mouseleave", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove("show");
            nextEl.classList.remove("show");
          }
        });
      });
  }
});
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  window.open("index.html");
}
// var colorChange = document.getElementById("myIcon");
// colorChange.addEventListener("mouseover", () => {
//   colorChange.classList.remove("fa-regular");
//   colorChange.classList.add("fa-solid");
// });
// colorChange.addEventListener("  mouseout", () => {
//   colorChange.classList.remove("fa-solid");
//   colorChange.classList.add("fa-regular");
// });
const myCarouselElement = document.querySelector("#carouselExampleSlidesOnly");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});
