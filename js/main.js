// Write your DOM code here!

let img, video;
const h1 = document.querySelector("h1")
const p = document.querySelector("p")

const red = document.querySelector(".red");
red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
   h1.textContent = "Color Scheme Switcher"
    p.textContent = "Try clicking on one of the colors above to change the colors on this page!"
      h1.style.color="white"
    p.style.color="white"

  if (img) {
    img.remove();
    img = null;
  }
  if (video){
    video.remove(); video = null;
  }
});

const white = document.querySelector(".white");
white.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
    h1.textContent = "Color Scheme Switcher"
    p.textContent = "Try clicking on one of the colors above to change the colors on this page!"
    h1.style.color="black"
    p.style.color="black"
  
  if (img) {
    img.remove();
    img = null;
  }
  if (video){
    video.remove(); video = null;
  }
});

const blue = document.querySelector(".blue");
blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
  h1.textContent = "Color Scheme Switcher"
    p.textContent = "Try clicking on one of the colors above to change the colors on this page!"
      h1.style.color="white"
    p.style.color="white"
  if (img) {
    img.remove();
    img = null;
  }
  if (video){
    video.remove(); video = null;
  }
});

const yellow = document.querySelector(".yellow");
yellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
  h1.textContent = "Color Scheme Switcher"
  p.textContent = "Try clicking on one of the colors above to change the colors on this page!"
  h1.style.color="black"
  p.style.color="black"
  if (img) {
    img.remove();
    img = null;
  }
  if (video){
    video.remove(); video = null;
  }
});

const picture = document.querySelector(".picture")
picture.addEventListener("click", () => {
    if (img) { 
        img.remove();
      }
    if (video){
        video.remove(); video = null
      }
  img = document.createElement("img")
  img.src = "panorama.png";
  document.body.appendChild(img);
  document.body.style.backgroundColor ="Gray"
  h1.textContent = "This is a picture of Panorama Ridge!"
    p.textContent = "in BC Canada"
    h1.style.color="white"
    p.style.color="white"
});

const videoBtn = document.querySelector(".video")
videoBtn.addEventListener("click",()=>{
    if (img) { 
        img.remove();
      }
    if(video){
        video.remove();
    }
    const youtubeVideoId = "-qzIuvflNAU"
    video = document.createElement("iframe");
    video.src =`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=0`;
    video.width = "560";
    video.height ="315";
    // video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" = true;
    video.allowFullscreen = true
    document.body.appendChild(video)
    document.body.style.backgroundColor ="black"

    h1.textContent = "Now Playing: My YouTube Video!"
    p.textContent = "Enjoy the video!"
    h1.style.color="white"
    p.style.color="white"
});
