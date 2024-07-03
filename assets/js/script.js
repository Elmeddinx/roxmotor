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
player.on('fullscreenchange', function() {
    if (!player.isFullscreen()) {
      player.pause();
      player.currentTime();
      document.getElementById('heroVideoPlayer').style.display = 'none';
    }
  });
// console.log(headerLangDropdown.parentElement)
