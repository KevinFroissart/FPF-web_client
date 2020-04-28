import getApiUrl from './utils/url';

const aboutContainer = document.querySelector('.aboutContainer');

const appContainer = document.querySelector('#appContainer'),
	apiUrl = getApiUrl(window.location);

fetch(apiUrl + '/api/v1/myresource')
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));


aboutContainer.style.display = 'initial';

var oldSection = aboutContainer;

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
