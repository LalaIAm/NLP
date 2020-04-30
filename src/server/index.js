const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 4000;
const aylien = require('aylien_textapi');
require( 'dotenv' ).config();


let projectData = {};


const textapi = new aylien({
	application_id: process.env.APP_ID,
	application_key: process.env.API_KEY,
} );



app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( bodyParser.json() )
app.use(cors());

app.use(express.static('dist'));
app.get('/', function (req, res) {
	res.sendFile('dist/index.html');
});

app.listen(PORT, () => {
	console.log(`server is running at http://localhost:${PORT}`);
});

function callBack ( req, res ) {
	res.send( 'POST received' );
}

app.post( '/add', callBack );

const addData = async  ( req, res ) => {
	const newUrl = req.body.url
	textapi.combined( {
		"url": newUrl,
		"endpoint": ["hashtags", "sentiment"]
	}, function ( err, result ) {
			if ( err === null ) {
				projectData[ newUrl ] = result.results;
				console.log('fresh', projectData );
				return projectData;
			} else {
				console.log( err );
			}
			return projectData;
	} )
	return projectData;
}



app.get( '/all', async function ( req, res ) {
	let asyncData = JSON.stringify( projectData );
	res.send( asyncData );
} );
app.post( '/analyzeUrl', addData );


