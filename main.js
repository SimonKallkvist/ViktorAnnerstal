// ---------> 

// Play trailer on hover

let trailerVideo = document.querySelectorAll('.trailer-video video');


console.log(trailerVideo);
// trailerVideo.addEventListener('mouseenter', () => {
//     trailerVideo.play();
// })

trailerVideo.forEach((trailer) => {
    trailer.addEventListener('mouseenter', () => {
        trailer.play();
    })
});




// Image Coursel at top 

let headerContainer = document.querySelector('.headerImg-container')

let headerImages = [
   "images/headerImages/new0.png", 
   "images/headerImages/new1.jpg", 
   "images/headerImages/new2.jpg",
   "images/headerImages/new3.jpg"
]; 
let i = 0;

function headerImgCarousel() {
    
    if(i < headerImages.length){
    console.log(i);
    console.log(headerImages[i]);
    headerContainer.style.backgroundImage = 'url(' + headerImages[i] + ')';
    i++;
    }else {
        i = 0;
        headerContainer.style.backgroundImage = 'url(' + headerImages[i] + ')';
        i++;
    }
};

setInterval(headerImgCarousel, 3000);




// Calling functions on load
// document.addEventListener("DOMContentLoaded", function() {
//     headerImgCarousel();
//   });

