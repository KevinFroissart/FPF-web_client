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
 * Display tag text area the tag checkBox is checked
 */
function displayTextArea() {
	const textArea = document.querySelector(`.etiquetteCheckArea`);

	/* If the checkbox is checked, display the output text */
	if (checkBox.checked == true) {
		textArea.style.display = 'initial';
	} else {
		textArea.style.display = 'none';
	}
}
const checkBox = document.getElementById('etiquetteCheck');
checkBox.addEventListener('click', displayTextArea);

/**
 * Personnalisation save function
 */
function savePersonalisation() {
	localStorage.setItem(
		'color',
		document.getElementById('f-pColorPicker').value
	);
	localStorage.setItem('content', document.getElementById('contentArea').value);
	localStorage.setItem(
		'tag',
		document.getElementById('etiquetteCheck').checked
	);
	localStorage.setItem(
		'tagContent',
		document.getElementById('etiquetteCheck').checked
			? document.getElementById('etiquetteArea').value
			: ''
	);
	const choicesText = [];
	document
		.querySelectorAll('.choiceList .badge')
		.forEach(badge => choicesText.push(badge.textContent));
	localStorage.setItem('ajouts', JSON.stringify(choicesText));
}

window.onbeforeunload = savePersonalisation;

/**
 * Personnalisation load function
 */
function loadPersonnalisation() {
	if (localStorage.getItem('color') != null) {
		document.getElementById('f-pColorPicker').value = localStorage.getItem(
			'color'
		);
	}
	document.getElementById('contentArea').value = localStorage.getItem(
		'content'
	);
	localStorage.getItem('tag') == 'true'
		? (document.getElementById('etiquetteCheck').checked = true)
		: null;
	displayTextArea();
	document.getElementById('etiquetteArea').value = localStorage.getItem(
		'tagContent'
	);
	const choicesText = JSON.parse(localStorage.getItem('ajouts'));
	choicesText.forEach(choice => {
		document.querySelector(
			'.choiceList'
		).innerHTML += `<a href="#" class="badge badge-success" >${choice}</a>`;
	});
}

/** Load personnalisation on window load */
window.onload = loadPersonnalisation;
