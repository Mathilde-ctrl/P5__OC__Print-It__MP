const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//-------------------------------------------------------------------------
// Evenement d'écoute du Clique : 

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', () => {
  // changeSlide(-1);
	console.log("flèche gauche fonctionne"); // s'affiche dans devtool : console 
});

rightArrow.addEventListener('click', () => {
  // changeSlide(1);
	alert("flèche droite fonctionne"); // s'affiche dans une boite d'alerte
});

//-----------------------------------------------------------------------
// compter les images du tableau slides pour afficher 1 point par image

const numberOfDot = slides.length; 
//calcul le nombre total images

const dotsContainer = document.querySelector('.dots'); 
// selection le conteneur dans HTML

for (let i = 0; i < numberOfDot; i++ ){
	const dot = document.createElement('span');
	//creer un span pour chaque point

	dot.classList.add('dot');
	//Ajoute une class dot aux spans

	dotsContainer.appendChild(dot);
	//Ajoute span a dotsContainer. (ajoute les points sur HTML)
}

//-----------------------------------------------------------------------
//Changer class points quand image visible

let currentSlideIndex = 0; 
// créer une variable pour savoir l'index visible

