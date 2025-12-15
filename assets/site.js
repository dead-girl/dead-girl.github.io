(function () {
  // Mark active nav tab automatically using <body data-page="home|chatrooms|chatnow|chatters|quotes">
  function setActiveNav() {
    var page = (document.body.getAttribute("data-page") || "").trim();
    if (!page) return;

    var links = document.querySelectorAll(".nav a[data-page]");
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute("data-page") === page) links[i].classList.add("active");
      else links[i].classList.remove("active");
    }
  }

  // Simple hero slider for elements: .slide + .dot
  function initSlider() {
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    if (!slides.length || !dots.length) return;

    var idx = 0;

    function show(n) {
      idx = (n + slides.length) % slides.length;
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.toggle("active", i === idx);
        dots[i].classList.toggle("active", i === idx);
      }
    }

    for (var d = 0; d < dots.length; d++) {
      (function (k) {
        dots[k].addEventListener("click", function () {
          show(k);
        });
      })(d);
    }

    show(0);
    setInterval(function () { show(idx + 1); }, 6000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    initSlider();
  });
})();
