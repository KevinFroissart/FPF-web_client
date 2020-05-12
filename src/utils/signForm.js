import getApiUrl from './url';

function createNewUser() {
	const firstName = document.getElementById('firstName').value,
		lastName = document.getElementById('lastName').value,
		mail = document.getElementById('mail').value,
		password = document.getElementById('password').value;

	const user = {
		firstName: firstName,
		lastName: lastName,
		email: mail,
		password: password,
	};

	fetch(`${getApiUrl(window.location)}/api/users/create`, {
		method: 'PUT',
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify(user),
	}).then(response => response.json());
	console.log(JSON.stringify(user));
}
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', createNewUser);
