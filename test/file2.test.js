const test = QUnit.test; 
QUnit.module('Search Bar');
import addSearchToQuery from '../src/add-search-to-empty-query.js';



test('add search to empty search', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'rick sanchez';
    //act
    //assert
    const result = addSearchToQuery(existingQuery, searchTerm);

    assert.equal(result, 'searchTerm=rick+sanchez&page=1');
});


test('update details of existing search', assert => {
    //arrange
    const existingQuery = 'searchTerm=summer&page=1';
    const searchTerm = 'morty';
    //act
    const result = addSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, 'searchTerm=morty&page=1');
});