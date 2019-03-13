const test = QUnit.test;
QUnit.module('search URL constructor test');
import makeSearchUrl from '../src/make-search-url.js';

test('construct search url ', assert => {
    const queryOptions = {
        name: 'rick',
        page: 3
    };
    const expected = 'https://rickandmortyapi.com/api/character/?name=rick&page=3';
    const url = makeSearchUrl(queryOptions);
    assert.equal(url, expected);

});