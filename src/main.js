import getApiUrl from './utils/url';
import badge from './utils/badge';

const appContainer = document.querySelector('#appContainer'),
	apiUrl = getApiUrl(window.location);

fetch(apiUrl + '/api/v1/myresource')
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));

/**
 *  Allows to switch between connection and registration forms
 */
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

/**
 * Display text area when the corresponding checkBox is checked
 */
function displayTextArea(event) {
	const checkBox = event.target;
	const textArea = document.querySelector(`.${this.id}Area`);

	/* If the checkbox is checked, display the output text */
	if (checkBox.checked == true) {
		textArea.style.display = 'initial';
	} else {
		textArea.style.display = 'none';
	}
}

const checkBox = document.querySelectorAll(
	".personnalisation input[type='checkbox']"
);
checkBox.forEach(checkBox =>
	checkBox.addEventListener('click', displayTextArea)
);
