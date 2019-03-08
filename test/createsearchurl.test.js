const test = QUnit.test;
QUnit.module('search URL constructor test');
import makeSearchUrl from '../src/make-search-url.js';




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