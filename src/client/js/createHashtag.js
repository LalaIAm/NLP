const resultSection = document.getElementById('results-section');

let heading = document.createElement('h3');
let subHeading = document.createElement('h4');


const changeHeading = (text) => {
	heading.textContent = `Recommended #'s for: ${text}`;
	heading.setAttribute('id', 'hashtag-heading');
	resultSection.appendChild(heading);
};

const createHashtagSection = (list) => {
	let hashDiv = document.createElement('div');
	let hashtagList = document.createElement('ul');
	hashDiv.setAttribute('id', 'hashtag-container');
	subHeading.textContent = 'Recommended Hashtags:';
	hashDiv.appendChild(subHeading);

	for (let i = 0; i < list.length; i++) {
		let li = document.createElement('li');

		li.textContent = list[i];
		hashtagList.appendChild(li);
	}

	subHeading.insertAdjacentElement('afterend', hashtagList);
	document
		.getElementById('hashtag-heading')
		.insertAdjacentElement('afterend', hashDiv);
};

const createHashtags = ( text, list ) => {
	changeHeading( text );
	createHashtagSection( list );
};

export { createHashtags };