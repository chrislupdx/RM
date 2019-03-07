const test = QUnit.test; 
QUnit.module('Search url creator');
import makeSearchUrl from '../src/make-search-url.js';


test('make search url', assert => {
    //arrange
    const queryOptions = {
        name: 'summer',
        page: 1
    };

    //act
    //assert
    const expected = 'https://rickandmortyapi.com/api/character/?page=1&name=summer';
    
    const result = makeSearchUrl(queryOptions);

    assert.equal(result, expected);
});
