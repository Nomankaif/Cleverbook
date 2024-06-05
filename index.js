const reviewSlider = document.querySelector('.review-slider');
const changeReviewButton = document.getElementById('changeReviewButton');

let currentSlide = 0;

changeReviewButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % 4;
  reviewSlider.style.transform = `translateX(-${currentSlide * 25}%)`;
});

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlides = 0;

const showSlide = (n) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - n)}%)`;
  });
  currentSlides = n;
};

const nextSlide = () => {
  showSlide((currentSlides + 1) % slides.length);
};

const prevSlide = () => {
  showSlide((currentSlides - 1 + slides.length) % slides.length);
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(0);
const slidesing = document.querySelectorAll('.slide');
let currentSlideing = 0;
let intervalId;

// Function to change the slide
function changeSlide() {
    slidesing[currentSlideing].classList.remove('active');
    slidesing[currentSlideing].classList.add('inactive');

    currentSlideing = (currentSlideing + 1) % slidesing.length;

    slidesing[currentSlideing].classList.remove('inactive');
    slidesing[currentSlideing].classList.add('active');
}

// Start the slideshow on mobile devices
if (window.matchMedia("(max-width: 768px)").matches) {
    intervalId = setInterval(changeSlide, 5000); // Change slide every 5 seconds
}

// Stop the slideshow when the user interacts with the buttons
document.addEventListener('click', () => {
    clearInterval(intervalId);
});