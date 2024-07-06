var headerLang = document.getElementById("headerLang");
var headerLangDropdown = document.querySelector("#headerLangDropdown");
var hamburgerMenuBtn = document.getElementById("hamburgerMenuBtn");
var hamburgerMenu = document.getElementById("hamburgerMenu");
var player = videojs("heroVideoPlayer");
var heroBtn = document.getElementById("heroBtn");
var heroBgVideo = document.getElementById("heroBgVideo");

headerLang.addEventListener("click", (e) => {
  headerLangDropdown.classList.toggle("activeLang");
});

document.addEventListener("click", (e) => {
  if (
    !headerLang.contains(e.target) &&
    !headerLangDropdown.contains(e.target)
  ) {
    headerLangDropdown.classList.remove("activeLang");
  }
});

hamburgerMenuBtn.addEventListener("click", (e) => {
  hamburgerMenu.classList.toggle("activeMenu");
});

heroBtn.addEventListener("click", function () {
  var videoPlayerElement = document.getElementById("heroVideoPlayer");
  var currentTime = heroBgVideo.currentTime;
  videoPlayerElement.style.display = "block";
  player.currentTime(currentTime);
  player.requestFullscreen();
  player.play();
});
player.on("fullscreenchange", function () {
  if (!player.isFullscreen()) {
    player.pause();
    player.currentTime();
    document.getElementById("heroVideoPlayer").style.display = "none";
  }
});

// Section1
function createCarousel(carouselId, itemClass, captionClass, captionMbClass, captionTitleClass, captionDescClass, captionHrClass, mbTitleClass, mbDescClass) {
  let currentIndex = 0;
  let intervalId;
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelectorAll(`.${itemClass}`);
  const captions = carousel.querySelectorAll(`.${captionClass}`);
  const captionsMb = carousel.querySelectorAll(`.${captionMbClass}`);
  const activeCaptionMbTitle = carousel.querySelector(`.${mbTitleClass}`);
  const activeCaptionMbDesc = carousel.querySelector(`.${mbDescClass}`);

  function showSlide(index) {
      if (index >= slides.length) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = slides.length - 1;
      } else {
          currentIndex = index;
      }

      slides.forEach((slide) => slide.classList.remove("active"));
      captionsMb.forEach((slide) => slide.classList.remove("active"));

      slides[currentIndex].classList.add("active");
      captionsMb[currentIndex].classList.add("active");

      updateCaptions();
  }

  function updateCaptions() {
      captions.forEach((caption) => {
          const img = caption.querySelector("img");
          const hr = caption.querySelector("hr");
          if (img) {
              img.style.display = "none";
          }
          if (hr) {
              hr.style.backgroundColor = "#999";
          }
      });

      const activeCaptionImg = captions[currentIndex].querySelector("img");
      const activeCaptionTitle = captions[currentIndex].querySelector(`.${captionTitleClass}`);
      const activeCaptionDesc = captions[currentIndex].querySelector(`.${captionDescClass}`);
      const activeCaptionHr = captions[currentIndex].querySelector(`.${captionHrClass}`);

      if (activeCaptionImg) {
          activeCaptionImg.style.display = "block";
      }
      if (activeCaptionHr) {
          activeCaptionHr.style.backgroundColor = "#6e1013";
      }
      if (activeCaptionTitle && activeCaptionDesc) {
          activeCaptionMbTitle.innerHTML = activeCaptionTitle.textContent;
          activeCaptionMbDesc.innerHTML = activeCaptionDesc.textContent;
      }
  }

  function startCarousel() {
      intervalId = setInterval(() => {
          currentIndex++;
          showSlide(currentIndex);
      }, 3000);
  }

  function stopCarousel() {
      clearInterval(intervalId);
  }

  captions.forEach((caption, index) => {
      caption.addEventListener("mouseover", () => {
          stopCarousel();
          showSlide(index);
      });
      caption.addEventListener("mouseout", () => {
          startCarousel();
      });
      caption.addEventListener("click", () => {
          showSlide(index);
      });
  });

  captionsMb.forEach((caption, index) => {
      caption.addEventListener("mouseover", () => {
          stopCarousel();
          showSlide(index);
      });
      caption.addEventListener("mouseout", () => {
          startCarousel();
      });
      caption.addEventListener("click", () => {
          showSlide(index);
      });
  });

  showSlide(currentIndex);
  startCarousel();
}

createCarousel('carousel1', 'carousel1-item', 'caption1', 'captions1-mb__pagination-item', 'caption1-title', 'caption1-desc', 'caption1 hr', 'captions1-mb__title', 'captions1-mb__desc');
createCarousel('carousel2', 'carousel2-item', 'caption2', 'captions2-mb__pagination-item', 'caption2-title', 'caption2-desc', 'caption2 hr', 'captions2-mb__title', 'captions2-mb__desc');
createCarousel('carousel3', 'carousel3-item', 'caption3', 'captions3-mb__pagination-item', 'caption3-title', 'caption3-desc', 'caption3 hr', 'captions3-mb__title', 'captions3-mb__desc');