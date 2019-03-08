const test = QUnit.test; 
QUnit.module('read/write url "optoins" to query');
import makeSearchUrl from '../src/make-search-url.js';
import writePageToQuery, { readFromquery } from '../src/add-search-to-query.js';

//https://rickandmortyapi.com/api/character/#?name=rick+sanchez&page=1
//re-write url write test
test('write page to exisiting query ', assert => {
    //arrange
    const existingQuery = 'name=rick+sanchez&page=1';
    const page = 1;
    //act
    const result = writePageToQuery(existingQuery, page);
    const expected = 'name=rick+sanchez&page=1';
    //assert
    assert.equal(result, expected);
});

test('read options  from query ', assert => {
    //arrange
    const queryOptions = 'name=rick+sanchez&page=1';
    const expected = {
        name: 'summer',
        page: 2
    };
    //act
    const result = readFromquery(queryOptions);
    assert.deepEqual(result, expected);
});