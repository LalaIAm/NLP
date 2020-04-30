const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const app = express();
const PORT = process.env.PORT || 4000;
require( 'dotenv' ).config();

app.use( express.static( 'dist' ) );


app.get( '/', function ( req, res ) {
    res.sendFile('dist/index.html')
})

app.listen( PORT, () => {
    console.log( `running at http://localhost:${ PORT }` );
})