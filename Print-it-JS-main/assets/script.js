
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
//-------------------------------------------------------------------------
//  Add event listeners
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', () => {
  changeSlide(-1);
});
//When left arrow click = -1
rightArrow.addEventListener('click', () => {
  changeSlide(1);
});
//When right arrow click = 1

//-------------------------------------------------------------------------
//Create a dot for each element in the slides []

const totalSlides = slides.length;
//give the total number of elements in the slides array

const dotsContainer = document.querySelector('.dot-container');
//searches the HTML class= dot-container

for (let i = 0; i < totalSlides; i++ ){
//Loop that repeat totalSlides as long as "i" is less than "totalSlides"

  const dot = document.createElement('span');
	//create a span to represent each dot

  dot.classList.add('dot');
	//adds the class dot to the html element reprented by the dot variable

  dotsContainer.appendChild(dot);
	//appendChild() is used to add dot as a child of the dotsContainer. 
	//That will create a new dot element for each slide and add it to the dotsContainer.
}


//-----------------------------------------------------------------------------------------
//Function to change images, tagline and bullet point class when click on arrows. 

let currentSlideIndex = 0;
//initializes variable to 0 to keep track of the currient slide displayed.

const dots = document.querySelectorAll('.dot');
const image = document.querySelector('.banner-img');
const tagline = document.querySelector('#tagline');
//select all elements dots and first element banner-life and id tagline. 

function changeSlide(direction) {
// fonction that takes the direction parameter 

  dots[currentSlideIndex].classList.remove('dot_selected'); 
	//remove the class dot_selected

  currentSlideIndex += direction;
	//update the variable to add the value of the direction parameter 1 or -1
	//if direction 1 advanced to the next slide. if -1 goes back. Connected with arrow value

  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
		//array first element has index 0 so total number of slides in totalSlides need -1. 

  } else if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
		//goes back at the beginning of the slide when click on the last one. 
  }
	//
  image.src = slides[currentSlideIndex].image;
	//update the src of the image stored in the slides with currentSlideIndex that access the appropriate image.

  tagline.innerHTML = slides[currentSlideIndex].tagLine;
	//update the innerHtml text of the tagline stored in the slides.

  dots[currentSlideIndex].classList.add('dot_selected'); 
	//adds the class to the new current slide with currentSlideIndex. 
}
