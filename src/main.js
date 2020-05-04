import getApiUrl from './utils/url';
require('./utils/badge');

const appContainer = document.querySelector('#appContainer'),
	apiUrl = getApiUrl(window.location);

fetch(apiUrl + '/api/v1/myresource')
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));

/* Allows to switch between connection and registration forms **/
const connectionForm = document.querySelector('.connection');
const registrationForm = document.querySelector('.registration');

connectionForm.style.display = 'initial';

function toggleConnectionMethod(event) {
	event.preventDefault();
	const target = event.target;

	if (target.innerText == "S'inscrire") {
		connectionForm.style.display = 'none';
		registrationForm.style.display = 'initial';
	} else if (target.innerText == 'Se connecter') {
		registrationForm.style.display = 'none';
		connectionForm.style.display = 'initial';
	}
}

const connectionLinks = document.querySelectorAll('#basket button');
connectionLinks.forEach(link =>
	link.addEventListener('click', toggleConnectionMethod)
);
