function HashtagList ( list ) {
    this.list = list;

    this.createList = function () {
        let ul = document.createElement( 'ul' );
        ul.setAttribute('id', 'hashtag-list')
        for ( let i = 0; i < this.list.length; i++ ){
            let li = document.createElement( 'li' );
            li.textContent = this.list[ i ];
            ul.appendChild( li );
        }

        return ul;

    }

}

module.exports = { HashtagList };