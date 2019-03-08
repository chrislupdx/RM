const test = QUnit.test;
QUnit.module('search URL constructor test');
// import makeSearchUrl from '../src/make-search-url.js';

const SEARCH_MOVIE_URL = 'https://rickandmortyapi.com/api/character/';

function makeSearchUrl(queryOptions) {
    const url = new URL(SEARCH_MOVIE_URL);
//this .set pattern got you last time, slow down+figure it out
//Q: what're the key/val relations that happen in set that needs to occur
    url.searchParams.set('name', queryOptions.name);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
    console.log(url);
}


test('construct search url ', assert => {
    //arrange
    // you need to figure out what the searchobject for the rick+morty api looks like
    const queryOptions = {
        name: 'rick',
        page: 3
    };
    const expected = 'https://rickandmortyapi.com/api/character/?name=rick&page=3';
    //act
    const url = makeSearchUrl(queryOptions);
    //assert
    assert.equal(url, expected);

});