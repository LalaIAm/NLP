
const form = document.getElementById( 'form-section' );
const resultsSection = document.createElement( 'section' );
resultsSection.setAttribute( 'id', 'results-section' );
let heading = document.createElement('h2');
let subHeading = document.createElement('h3');


const changeHeading = (text) => {
	heading.textContent = `${text}`;
	heading.setAttribute('id', 'url-heading');
	resultsSection.appendChild( heading );
	const resultsDiv = document.createElement('div');
	resultsDiv.setAttribute('id', 'results-container');
	heading.insertAdjacentElement('afterend', resultsDiv);
};



const createHashtagSection = ( list ) => {
	
	let hashDiv = document.createElement('div');
	let hashtagList = document.createElement('ul');
	hashDiv.setAttribute('id', 'hashtag-container');
	subHeading.textContent = 'Recommended Hashtags:'
	hashDiv.appendChild( subHeading );
	

	for (let i = 0; i < list.length; i++) {
		let li = document.createElement('li');

		li.textContent = list[i];
		hashtagList.appendChild(li);
	}

	hashDiv.appendChild( hashtagList );
	document.getElementById( 'results-container' ).appendChild( hashDiv );


};

const createSentimentSection = (result) => {
	const sentiment = result.polarity;
	const confidence = result.polarity_confidence;

	let sentimentDiv = document.createElement( 'div' );
	sentimentDiv.setAttribute( 'id', 'sentiment-container' )
	let sentimentTitle = document.createElement( 'h3' );
	sentimentTitle.textContent = 'Sentiment:';
	sentimentDiv.appendChild( sentimentTitle );

	let sentimentList = document.createElement('ul')

	let sLi = document.createElement( 'li' );
	sLi.textContent = 'Sentiment: ' + sentiment;
	let cLi = document.createElement( 'li' )
	cLi.textContent = 'Confidence: ' + confidence.toFixed(2)

	sentimentList.appendChild( sLi );
	sentimentList.appendChild( cLi );

	sentimentDiv.appendChild( sentimentList );

	document.getElementById( 'results-container' ).appendChild( sentimentDiv );
	

}

const createHashtags = ( text, list, result ) => {
	let section = document.getElementById( 'results-section' );

	if ( section ) {
		section.remove();
		section = null;
	}

	form.insertAdjacentElement( 'afterend', resultsSection );
	changeHeading( text );
	createHashtagSection( list );
	createSentimentSection( result );
};

export { createHashtags };