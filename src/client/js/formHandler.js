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
	
	console.log( response, '= Response' );

	const jsonResponse = await response.json()
	console.log(jsonResponse, '= jsonResponse')
	return jsonResponse;;

	
};

const getUserInput = () => {
	let urlInput = document.getElementById( 'input' ).value 
	return urlInput;
}

function handleSubmit(event) {
	event.preventDefault();

	let url = getUserInput();

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
		if ( !result || result === undefined ) {
			return;
		} else {
			let url = getUserInput();

			let hashtags = result[ 0 ];
			if ( hashtags === null || hashtags === undefined ) {
				console.log( 'undefined' )
				return;
			}
			console.log( 'hashtags', hashtags.result.hashtags );
			let hashtagList = hashtags.result.hashtags;

			let sentiment = result[ 1 ];
			let sentimentResult = sentiment.result;
			console.log('sentiment', sentimentResult)

			Hashtags.updateUI( hashtagList, url, sentimentResult );

		}
 })

};

export { handleSubmit };
