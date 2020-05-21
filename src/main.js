require('./utils/image-preview');

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


// /**
//  * Personnalisation save function
//  */
// function savePersonalisation() {
// 	localStorage.setItem(
// 		'color',
// 		document.getElementById('f-pColorPicker').value
// 	);
// 	localStorage.setItem('content', document.getElementById('contentArea').value);
// 	localStorage.setItem(
// 		'tag',
// 		document.getElementById('etiquetteCheck').checked
// 	);
// 	localStorage.setItem(
// 		'tagContent',
// 		document.getElementById('etiquetteCheck').checked
// 			? document.getElementById('etiquetteArea').value
// 			: ''
// 	);
// 	const choicesText = [];
// 	document
// 		.querySelectorAll('.choiceList .badge')
// 		.forEach(badge => choicesText.push(badge.textContent));
// 	localStorage.setItem('ajouts', JSON.stringify(choicesText));
// }

// window.onbeforeunload = savePersonalisation;

// /**
//  * Personnalisation load function
//  */
// function loadPersonnalisation() {
// 	if (localStorage.getItem('color') != null) {
// 		document.getElementById('f-pColorPicker').value = localStorage.getItem(
// 			'color'
// 		);
// 	}
// 	document.getElementById('contentArea').value = localStorage.getItem(
// 		'content'
// 	);
// 	localStorage.getItem('tag') == 'true'
// 		? (document.getElementById('etiquetteCheck').checked = true)
// 		: null;
// 	displayTextArea();
// 	document.getElementById('etiquetteArea').value = localStorage.getItem(
// 		'tagContent'
// 	);
// 	const choicesText = JSON.parse(localStorage.getItem('ajouts'));
// 	choicesText.forEach(choice => {
// 		document.querySelector(
// 			'.choiceList'
// 		).innerHTML += `<a href="#" class="badge badge-success" >${choice}</a>`;
// 	});
// }

// /** Load personnalisation on window load */
// window.onload = loadPersonnalisation;

// /**
//  * Personalisation reset function
//  */
// function resetPersonnalisation() {
// 	document.getElementById('f-pColorPicker').value = '#9C8867';
// 	document.getElementById('contentArea').value = '';
// 	document.getElementById('etiquetteCheck').checked = false;
// 	displayTextArea();
// 	document.getElementById('etiquetteArea').value = '';
// 	document.querySelector('.choiceList').innerHTML = null;
// }
// const resetButton = document.querySelector('.resetButton');
// resetButton.addEventListener('click', resetPersonnalisation);
