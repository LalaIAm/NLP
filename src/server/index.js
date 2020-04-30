const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const aylien = require('aylien_textapi');
require( 'dotenv' ).config();

let projectData = {};

const textapi = new aylien({
	application_id: process.env.APP_ID,
	application_key: process.env.API_KEY,
});


app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( bodyParser.json() )
app.use( cors() );

app.use(express.static('dist'));

app.get('/', function (req, res) {
	res.sendFile('dist/index.html');
});

app.listen(PORT, () => {
	console.log(`server is running at http://localhost:${PORT}`);
});

const getTextAnalysis = (url) => {
	return textapi.combined(
		{
			url: url,
			endpoint: ['hashtags', 'summarize', 'sentiment'],
		},
		function (err, result) {
			if (err === null) {
				result.results.forEach(function (r) {
					console.log(r.endpoint + ':');
					console.log(r.result);
				});
			} else {
				console.log(err);
			}
		}
	);
};

function callBack ( req, res ) {
    res.send( 'POST received' );
}

const analyzeUrl = async ( req, res ) => {
    const url = req.body.url;
    const result = await getTextAnalysis( url );

    projectData.url = result;
    return projectData;
}

const sendData = ( req, res ) => {
    console.log( 'Data: ', projectData );
    res.send( projectData );
}

app.post( '/add', callBack );
app.post( '/analyze', analyzeUrl );
app.get( '/all', sendData );
