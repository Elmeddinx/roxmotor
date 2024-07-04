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

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel1-item");
const captions = document.querySelectorAll(".caption1");

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentIndex].classList.add("active");

  // Update captions display

  updateCaptions();
}

function updateCaptions() {
  // Hide all caption images
  captions.forEach((caption) => {
    const img = caption.querySelector(".caption1-top img");
    const hr = caption.querySelector(".caption1 hr");
    if (img) {
      img.style.display = "none";
    }
    if (hr) {
      hr.style.backgroundColor = "#999";
    }
  });

  const activeCaption = captions[currentIndex].querySelector(".caption1-top img");
  const activeCaptionHr = captions[currentIndex].querySelector(".caption1 hr");
  if (activeCaption) {
    activeCaption.style.display = "block";
  }
  if (activeCaptionHr) {
    activeCaptionHr.style.backgroundColor = "#6e1013";
  }
}

function startCarousel() {
  setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
  }, 3000); // Change slide every 3 seconds
}

captions.forEach((caption, index) => {
  caption.addEventListener("mouseover", () => {
    showSlide(index);
  });
  caption.addEventListener("click", () => {
    showSlide(index);
  });
});

// Initialize the carousel
showSlide(currentIndex);
startCarousel();
