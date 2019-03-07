const test = QUnit.test; 
QUnit.module('Search Bar');
import addSearchToQuery, { writePageToQuery } from '../src/add-search-to-query.js';



test('add search to empty search', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'rick sanchez';
    //act
    //assert
    const result = addSearchToQuery(existingQuery, searchTerm);

    assert.equal(result, 'name=rick+sanchez&page=1');
});

test('write page to existing query', assert => {
    //arrange
    const existingQuery = 'name=summer&page=1';
    const page = 3;
    //act
    const result = writePageToQuery(existingQuery, page);
    const expected = 'name=summer&page=3';
    //assert
    assert.equal(result, expected);
});


test('update details of existing search', assert => {
    //arrange
    const existingQuery = 'name=summer&page=1';
    const searchTerm = 'morty';
    //act
    const result = addSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, 'name=morty&page=1');
});