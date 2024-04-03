// Ожидание загрузки документа
document.addEventListener("DOMContentLoaded", function () {
  // Получение всех якорей (ссылок с хэшами)
  var links = document.querySelectorAll("a[href^='#']");

  // Обработчик события щелчка по якорю
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", smoothScroll);
  }

  // Плавный скролл до элемента с заданным ID
  function smoothScroll(event) {
    event.preventDefault();

    var targetId = this.getAttribute("href");
    var targetPosition = document.querySelector(targetId).offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1000; // Длительность анимации в миллисекундах
    var start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      );
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    // Функция плавной анимации (ease-in-out)
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }
  }
});
