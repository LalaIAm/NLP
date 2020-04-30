//import { isValidUrl } from './validateUrl';

const handleSubmit = (event) => {
	event.preventDefault();

	let url = document.getElementById('input').value;

	const isValid = Hashtags.isValidUrl(url);

	console.log('::: Form Submitted :::');
	console.log(url);

	if (isValid) {
		console.log('url is valid!');
	} else {
		console.log('invalid url');
	}
};

export { handleSubmit };
