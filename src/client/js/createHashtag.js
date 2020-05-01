const urlTitle = document.getElementById('results-title');
const hashtagTitle = document.getElementById('hashtag-title');
const hashtagContainer = document.getElementById('list-container');
const sentimentTitle = document.getElementById('sentiment-title');


const updateTitle = ( title ) => {
	urlTitle.textContent = title;
}

const updateHashtags = (list) => {
	hashtagTitle.textContent = "H#sht#gs's:"

	while (hashtagContainer.hasChildNodes()) {
		hashtagContainer.removeChild(hashtagContainer.firstChild);
	}
	
	for (let i = 0; i < list.length; i++) {
		let li = document.createElement('li');
		li.textContent = list[ i ];
		hashtagContainer.appendChild( li );
	}

};

const updateSentiment = ( sentimentResult ) => {
	const polarity = sentimentResult.polarity;
	const confidence = sentimentResult.polarity_confidence;

	const sentimentText = document.getElementById( 'sentiment' )
	const confidenceText = document.getElementById( 'confidence' );

	sentimentText.textContent = 'Sentiment: ' + polarity;
	confidenceText.textContent = 'Confidence: ' + confidence.toFixed( 2 ) * 100 + '%';
	sentimentTitle.textContent = 'Sentiment'


}


	


const updateUI = ( hashtags, title, sentiment ) => {
	updateHashtags( hashtags );
	updateTitle( title );
	updateSentiment( sentiment );
	
};

module.exports = updateUI