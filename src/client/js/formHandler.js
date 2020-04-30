//import { isValidUrl } from './validateUrl';
const sendUrl = async (url = '', data = {}) => {
	const response = await fetch( 'http://localhost:4000/analyze', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( data ),
	} );

	try {
		const newData = await response.json();
		return newData;
	} catch ( error ) {
		console.log( 'error', error );
	}
}

const getData = async ( url = '' ) => {
	const request = await fetch( url );

	try {
		const response = await request.json();
		console.log( 'response: ', response );
	} catch ( error ) {
		console.log(error)
	}
}




function handleSubmit ( event ) {
	event.preventDefault();

	let url = document.getElementById('input').value;

	let isValid = Hashtags.isValidUrl(url);

	console.log('::: Form Submitted :::');
	console.log(url);

	if (!isValid) {
		console.log('invalid URL');
		return;
	}

	console.log( 'url is valid!' );
	
	sendUrl( 'api/analyze', url );

	updateUI()
}

const updateUI = async () => {
	const request = await getData( 'http://localhost:4000/all' )

	console.log('updated info: ', request)
}

export { handleSubmit };
