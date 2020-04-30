//import { isValidUrl } from './validateUrl';

function handleSubmit(event) {
	event.preventDefault();

	let url = document.getElementById('input').value;

	let isValid = Hashtags.isValidUrl(url);

	console.log('::: Form Submitted :::');
	console.log(url);

	if (isValid) {
		console.log('url is valid!');
	} else {
		console.log('invalid url');
	}
};

export { handleSubmit };
