const fetch = require( 'node-fetch' );


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

const getData = async () => {
	const response = await fetch( 'http://localhost:4000/all' );
	const jsonResponse = await response.json();
	console.log( jsonResponse, '= jsonResponse' );
	return jsonResponse;

	
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
	getData().then( ( result ) => {
		console.log( 'updateUI', result );
 }).catch(error => console.error(error))

};

export { handleSubmit };
