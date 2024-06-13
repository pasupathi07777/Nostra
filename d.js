let leftArrow = document.querySelector(".left-icon");
let rightArrow = document.querySelector(".right-icon");
let sectionImages = document.querySelector(".images__box");
let images = sectionImages.querySelectorAll(".image");
let totalImages = images.length;
let currentIndex = 2; // Start with the third image

// Initialize the transform to show the third image initially
sectionImages.style.transform = `translateX(-${currentIndex * 100}%)`;

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Circular decrement
    if (currentIndex === totalImages - 1) {
        sectionImages.prepend(sectionImages.lastElementChild);
        sectionImages.style.transition = 'none';
        sectionImages.style.transform = `translateX(-100%)`;
        setTimeout(() => {
            sectionImages.style.transition = 'transform 0.5s ease';
            sectionImages.style.transform = `translateX(0)`;
        }, 0);
    } else {
        updateTransform();
    }
    console.log("left", currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages; // Circular increment
    if (currentIndex === 0) {
        sectionImages.appendChild(sectionImages.firstElementChild);
        sectionImages.style.transition = 'none';
        sectionImages.style.transform = `translateX(-${(totalImages - 1) * 100}%)`;
        setTimeout(() => {
            sectionImages.style.transition = 'transform 0.5s ease';
            sectionImages.style.transform = `translateX(-${(totalImages - 2) * 100}%)`;
        }, 0);
    } else {
        updateTransform();
    }
    console.log("right", currentIndex);
});

function updateTransform() {
    sectionImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}
