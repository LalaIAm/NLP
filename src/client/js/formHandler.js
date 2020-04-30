const fetch = require( 'node-fetch' );

//import { isValidUrl } from './validateUrl';
const sendUrl = async (url = '', data = {}) => {
	console.log('post request data: ', data);
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const urlToSend = JSON.stringify(data);

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlToSend,
		redirect: 'follow',
	};

	return fetch(url, requestOptions)
		.then((response) => response.json())
		.then((jsonResponse) => {
			return jsonResponse;
		})
		.catch((error) => console.log(error));
};

const getData = async (url = '') => {
	fetch( url ).then( ( response ) => {
		return response;
	}).catch(err => console.log(err))

	
};

function handleSubmit(event) {
	event.preventDefault();

	let url = document.getElementById('input').value;

	let isValid = Hashtags.isValidUrl(url);

	console.log('::: Form Submitted :::');

	if (!isValid) {
		console.log('invalid URL');
		return;
	}

	sendUrl('http://localhost:4000/analyzeUrl', { url: url });
	console.log(url);

	updateUI();
}


const updateUI = async () => {
	await getData( 'http://localhost:4000/all' ).then( ( result ) => {
	 const jsonResult = result.json()
 })

	console.log('updated info: ',request);
};

export { handleSubmit };
