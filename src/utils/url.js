const url = 'groupe9.azae.eu';

export default function getApiUrl({ protocol, port }) {
	const isProd = port === '';
	const apiPort = isProd ? '' : ':8080';
	const hostname = '192.168.99.100';

	return `${protocol}//${hostname}${apiPort}`;
}
