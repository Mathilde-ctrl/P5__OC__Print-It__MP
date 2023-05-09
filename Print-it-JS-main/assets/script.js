
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
/*
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', () => {
  changeSlide(-1);
});

rightArrow.addEventListener('click', () => {
  changeSlide(1);
});

const totalSlides = slides.length;

const dotsContainer = document.querySelector('.dot-container');

for (let i = 0; i < totalSlides; i++ ){
	const dot = document.createElement('span');

	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
}

let currentSlideIndex = 0;
const dots = document.querySelectorAll('.dot');
dots[currentSlideIndex].classList.add('.dot_selected');

const image = document.querySelector('.banner-img');
const tagline = document.querySelector('#tagline');

function changeSlide(direction) {
  currentSlideIndex += direction;
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
	} 
		else if (currentSlideIndex >= totalSlides) {
    	currentSlideIndex = 0;
  	}
  image.src = slides[currentSlideIndex].image;
  tagline.innerHTML = slides[currentSlideIndex].tagLine;
}
*/
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', () => {
  changeSlide(-1);
});

rightArrow.addEventListener('click', () => {
  changeSlide(1);
});

const totalSlides = slides.length;

const dotsContainer = document.querySelector('.dot-container');

for (let i = 0; i < totalSlides; i++ ){
  const dot = document.createElement('span');

  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
}

let currentSlideIndex = 0;

const dots = document.querySelectorAll('.dot');
const image = document.querySelector('.banner-img');
const tagline = document.querySelector('#tagline');

function changeSlide(direction) {
  dots[currentSlideIndex].classList.remove('dot_selected'); 
  currentSlideIndex += direction;
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  } else if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  }
  image.src = slides[currentSlideIndex].image;
  tagline.innerHTML = slides[currentSlideIndex].tagLine;
  dots[currentSlideIndex].classList.add('dot_selected'); 
}
