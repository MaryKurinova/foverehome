(function () {
  "use strict";

  var backToTopBtn = document.querySelector(".back_to_top");
  var isHidden = true;
  var scrollTimeout;

  function scrollToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      requestAnimationFrame(scrollToTop);
    }
  }

  function showBackToTop() {
    if (isHidden) {
      backToTopBtn.style.display = "block";
      isHidden = false;
    }
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(hideBackToTop, 2000); // Время задержки перед исчезновением кнопки (в миллисекундах)
  }

  function hideBackToTop() {
    if (!isHidden) {
      backToTopBtn.style.display = "none";
      isHidden = true;
    }
  }

  window.addEventListener("scroll", function () {
    var scrolledAmount = window.pageYOffset,
      clientHeight = document.documentElement.clientHeight;

    if (scrolledAmount > clientHeight) {
      showBackToTop();
    } else {
      hideBackToTop();
    }
  });

  backToTopBtn.addEventListener("click", scrollToTop);
})();
