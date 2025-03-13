const images = [
    "images/img2.jpg",
    "images/img3.jpg",
    "images/1.jpg",
    "images/2.jpg",
    "images/4.jpg",
    "images/5.jpg",
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Initialize slider with first image
sliderImage.src = images[currentIndex];

function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    sliderImage.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
