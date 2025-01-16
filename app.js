const trailerContainer = document.querySelector(".trailer-container");
const img = document.querySelector("img");
const closeBtn = document.querySelector(".closeBtn");
const video = document.querySelector("video");

img.addEventListener("click", () => {
  trailerContainer.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
  video.pause();
  video.currentTime = 0;
});
