// --------->

// Play trailer on hover

let trailerVideo = document.querySelectorAll(".trailer-video video");

console.log(trailerVideo);
// trailerVideo.addEventListener('mouseenter', () => {
//     trailerVideo.play();
// })

trailerVideo.forEach((trailer) => {
  trailer.addEventListener("mouseenter", () => {
    trailer.play();
  });
});

// Image Coursel at top

let headerContainer = document.querySelector(".headerImg-container");

let headerImages = [
  "images/headerImages/new0.png",
  "images/headerImages/new1.jpg",
  "images/headerImages/new2.jpg",
  "images/headerImages/new3.jpg",
];
let i = 0;

function headerImgCarousel() {
  if (i < headerImages.length) {
    console.log(i);
    console.log(headerImages[i]);
    headerContainer.style.backgroundImage = "url(" + headerImages[i] + ")";
    i++;
  } else {
    i = 0;
    headerContainer.style.backgroundImage = "url(" + headerImages[i] + ")";
    i++;
  }
}

setInterval(headerImgCarousel, 3000);

// Clicking on video to preview

let allProjects = document.querySelectorAll(".project");
const overlay = document.getElementById("overlay");
let previewContainer = document.querySelector(".previewContainer");

allProjects.forEach((project) => {
  project.addEventListener("click", (e) => {
    overlay.style.display = "block";
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
    previewContainer.innerHTML =
      '<iframe width="640" height="360" src="https://www.youtube.com/embed/KBR_LzSGtyE?si=nseiG7ixUHNBfjze" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  window.onscroll = function () {};
  previewContainer.innerHTML = "";
});

// Calling functions on load
// document.addEventListener("DOMContentLoaded", function() {
//     headerImgCarousel();
//   });
