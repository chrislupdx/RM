const test = QUnit.test; 
QUnit.module('Search url creator');
import addSearchToQuery from '../src/add-search-to-query.js';

test('make search url', assert => {
    //arrange
    const queryOptions = {
        name: 'summer',
        page: 1
    };

    //act
    //assert
    const expected = 'https://rickandmortyapi.com/api/character/?name=summer';
    
    const result = addSearchToQuery(queryOptions);

    assert.equal(result, expected);
});
