const textapi = require('./index')

const analyzeText = ( url ) => {
    let newAnalysis = []
    return textapi.combined( {
        "url": url,
        "endpoint": [ "hashtags", "sentiment" ]
    }, ( err, result ) => {
        if ( err === null ) {
            result.results.forEach( function ( r ) {
                newAnalysis.push( r.result );
                console.log( 'A:', newAnalysis );
            } );

        } else {
            console.log( err );
        }
    } );

    return newAnalysis;
};

module.exports = analyzeText;