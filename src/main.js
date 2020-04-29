import getApiUrl from './utils/url';

const aboutContainer = document.querySelector('.aboutContainer');

const appContainer = document.querySelector('#appContainer'),
	apiUrl = getApiUrl(window.location);

fetch(apiUrl + '/api/v1/myresource')
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));

aboutContainer.style.display = 'initial';

let oldSection = aboutContainer;

function handleNavClick(event) {
	event.preventDefault();
	const li = event.currentTarget,
		prevActiveLi = document.querySelectorAll('.mainMenu a');

	const liSection = document.querySelector(`.${this.id}Container`);

	prevActiveLi.forEach(link => link?.setAttribute('class', ' '));

	oldSection.style.display = 'none';
	oldSection = liSection;

	li.setAttribute('class', 'selected');
	liSection.style.display = 'initial';
}

const navLinks = document.querySelectorAll('.mainMenu a');
navLinks.forEach(link => link.addEventListener('click', handleNavClick));

const connexionContainer = document.querySelector('.connexionContainer');

connexionContainer.style.display = 'initial';

let oldSignDiv = connexionContainer;

function handleSignClick(event) {
	event.preventDefault();
	const prevActiveButton = document.querySelectorAll('.signContainer button');

	const buttonDiv = document.querySelector(`.${this.class[2]}Container`);

	prevActiveButton.forEach(link => link?.setAttribute('class', ' '));

	oldSignDiv.style.display = 'none';
	oldSignDiv = buttonDiv;

	buttonDiv.style.display = 'initial';
}

const signLinks = document.querySelectorAll('.signContainer button');
signLinks.forEach(link => link.addEventListener('click', handleSignClick));
