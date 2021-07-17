function __(selector) {
  return document.querySelectorAll(selector);
}
function _(selector) {
  return document.querySelector(selector);
}

_("#menu-icon").addEventListener("click", function () {
  _("#menu-icon").classList.toggle("menu-close");
  _("#navigation").classList.toggle("nav-open");
});

const routes = __("#route");
const routesLength = routes.length;

routes.forEach(function (route) {
  route.addEventListener("click", (e) => {
    e.preventDefault();
    // Remove active-route class from all routes and add
    // to the clicked route
    for (let i = 0; i < routesLength; i++) {
      routes[i].classList.remove("active-route");
    }
    route === e.target && route.classList.add("active-route");
    // Close menu list
    _("#menu-icon").classList.remove("menu-close");
    _("nav").classList.remove("nav-open");
    // TODO: navigate to the corresponding route
  });
});

// let currentSlide = 1;
// const slideChangeInterval = 3000;

// let loop;
// function showSlides() {
//   const slides = __(".slide");
//   const slidesIndicator = __("#slide-indicator");
//   const slidesCount = slides.length;
//   const slidesIndicatorCount = slidesIndicator.length;

//   if (currentSlide > slidesCount) {
//     currentSlide = 1;
//   }
//   if (currentSlide < 1) {
//     currentSlide = slidesCount;
//   }

//   for (let i = 0; i < slidesCount; i++) {
//     slides[i].style.display = "none";
//   }
//   for (let i = 0; i < slidesIndicatorCount; i++) {
//     slidesIndicator[i].classList.remove("current-slide");
//   }
//   slides[currentSlide - 1].style.display = "block";
//   slidesIndicator[currentSlide - 1].classList.add("current-slide");

//   loop = setTimeout(function () {
//     currentSlide++;
//     showSlides();
//   }, slideChangeInterval);
// }

// _("#next").addEventListener("click", function () {
//   clearTimeout(loop);
//   currentSlide++;
//   showSlides();
// });
// _("#prev").addEventListener("click", function () {
//   clearTimeout(loop);
//   currentSlide--;
//   showSlides();
// });

// showSlides();

// FETCH REQUESTS
// fetch github profile and set profile avatar.
(async () => {
  const response = await fetch("https://api.github.com/users/oseunabiola");
  const body = await response.json();
  _("#avatar").style.backgroundImage = `url(${body.avatar_url})`;
  // rgb(9, 119, 112)
  _(
    "#hero"
  ).style.backgroundImage = `linear-gradient(rgba(9, 119, 112, 0.9), rgba(9, 119, 112, 0.95)), url(${body.avatar_url})`;
})();
