const url = 'groupe9.azae.eu';
const localUrl = 'localhost';

export default function getApiUrl({ protocol, port }) {
	const isProd = port === '';
	const apiPort = isProd ? '' : ':8080';
	const hostname = localUrl;

	return `${protocol}//${hostname}${apiPort}`;
}
