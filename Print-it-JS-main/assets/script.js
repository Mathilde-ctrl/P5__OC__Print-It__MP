
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
// récupération de la flèche gauche
const leftArrow = document.querySelector('.arrow_left');

// récupération de la flèche droite
const rightArrow = document.querySelector('.arrow_right');

// événement d'écoute au clique avec fonction valeur -1 à exécuter 
leftArrow.addEventListener('click', () => {
  changeSlide(-1);
});

// événement d'écoute au clique avec fonction valeur 1 à exécuter 
rightArrow.addEventListener('click', () => {
  changeSlide(1);
});

//= 4 car nombres d'éléments dans tableau slide
const totalSlides = slides.length;

// selectionne un élement html qui à la class dot_container et assigne à la variable dotsContainer. 
const dotsContainer = document.querySelector('.dot-container');

//boucle qui va créer un span à chaque itération 
for (let i = 0; i < totalSlides; i++ ){

  //créer un span et l'assigne à la variable dot
  const dot = document.createElement('span'); 

  //ajoute la classe dot à la variable dot avec classList
  dot.classList.add('dot');

  //Condition si i = index 0 alors ajoute classe dot_selected
	if (i === 0) {
    dot.classList.add('dot_selected');
  }
  //ajoute le span comme enfant de dotsContainer. 
  dotsContainer.appendChild(dot);
}

//initialise la valeur 0 à une variable car premier element dans slide a un index 0
let currentSlideIndex = 0;

//sélectionne les éléments necessaire
const dots = document.querySelectorAll('.dot');
const image = document.querySelector('.banner-img');
const tagline = document.querySelector('#tagline');

//fonction avec un paramètre appelé direction
function changeSlide(direction) {

  //enlève la classe dot_selected
  dots[currentSlideIndex].classList.remove('dot_selected');

  //ajoute les valeurs -1 ou 1 de direction à currentsSlideIndex
  //met à jour l'indice de l'image 
  currentSlideIndex += direction;

  //condition pour contrôler que si currentSlideIndex < 0 alors sa valeur = totalSlide -1.
  //-1 car index de array Slide commence a 0
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;

    //si >= 4 alors retourne à la première slide. 
    //exemple : si click après le dernier slide alors valeur (4 >= 4)
  } else if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  }

  //met à jour la source de l'image, le texte et la classe du bullet point correspondant.  
  image.src = slides[currentSlideIndex].image;
  tagline.innerHTML = slides[currentSlideIndex].tagLine;
  dots[currentSlideIndex].classList.add('dot_selected');
}

