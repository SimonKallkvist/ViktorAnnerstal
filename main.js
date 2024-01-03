// --------->

// videoSources

let videos = [
  {
    src: "https://www.youtube.com/embed/KBR_LzSGtyE?si=nseiG7ixUHNBfjze",
    project: "BRAVE",
  },
  {
    src: "https://www.youtube.com/embed/dNgzK7YueJ0?si=kg3tRJNmtL5JF-t-",
    project: "MOONICA",
  },
  {
    src: "https://www.youtube.com/embed/Bkh8cQox32A?si=Dwh9koOhCiXZYo9o",
    project: "BILSKÅDAREN",
  },
  {
    src: "https://www.youtube.com/embed/vLGFC38azKs?si=Nax-0rmX-qQfEK0O",
    project: "DISTRESSED",
  },
  {
    src: "https://player.vimeo.com/video/892623875?h=809de96b00",
    project: "SOLSIDAN",
  },
  {
    src: "https://www.youtube.com/embed/5g6zZ7bPJqg?si=5IZ6raOro4h45FiC",
    project: "HAGLÖFS",
  },
  {
    src: "https://www.youtube.com/embed/L-5jderNQ78?si=gcLGuRn0AXt320K9",
    project: "FUNGI",
  },
  {
    src: "https://www.youtube.com/embed/KBR_LzSGtyE?si=nseiG7ixUHNBfjze",
    project: "MAGGIOBRYANT",
  },
  {
    src: "https://www.youtube.com/embed/mywAUVX8KeA?si=CMU0y35_szWMQGbf",
    project: "LETSDANCE",
  },
  {
    src: "https://player.vimeo.com/video/892625163?h=ed90dc04e4",
    project: "BÄSTITEST",
  },
  {
    src: "https://player.vimeo.com/video/811279975?h=62a1ad5165",
    project: "ADDDHOC",
  },
  {
    src: "https://player.vimeo.com/video/350575397?h=7ffd1eb867",
    project: "FILMSTADEN",
  },
  {
    src: "https://www.youtube.com/embed/BRLgm-uudaE?si=p_hj7xGVZPhCrLDB",
    project: "LUCASSTEVE1",
  },
  {
    src: "https://www.youtube.com/embed/KBR_LzSGtyE?si=nseiG7ixUHNBfjze",
    project: "WELAND",
  },
];

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

    let iFrame = document.createElement("iframe");
    iFrame.style.width = "100%";
    iFrame.style.height = "316px";
    iFrame.setAttribute("allow", "fullscreen");
    iFrame.src = videos[Number(project.dataset.video)].src;

    console.log(Number(project.dataset.video));
    previewContainer.appendChild(iFrame);
    console.log(project.dataset.video);
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
