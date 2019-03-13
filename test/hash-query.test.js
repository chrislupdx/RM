const test = QUnit.test; 
QUnit.module('Search Bar');
import addSearchToQuery, { writePageToQuery, readFromquery } from '../src/add-search-to-query.js';

test('add search to empty hash', assert => {
    const existingQuery = '';
    const searchTerm = 'rick sanchez';
    const result = addSearchToQuery(existingQuery, searchTerm);
    assert.equal(result, 'name=rick+sanchez&page=1');
});

test('write page to existing query, changes search and resets page', assert => {
    const existingQuery = 'name=summer&page=1';
    const page = 3;
    const result = writePageToQuery(existingQuery, page);
    const expected = 'name=summer&page=3';
    assert.equal(result, expected);
});


test('update details of existing search', assert => {
    const existingQuery = 'name=summer&page=1';
    const searchTerm = 'morty';
    const result = addSearchToQuery(existingQuery, searchTerm);
    assert.equal(result, 'name=morty&page=1');
});

test('read options from query', assert => {
    const queryOptions = 'name=rick&page=1';
    const expected = {
        name: 'rick',
        page: 1
    };
    const result = readFromquery(queryOptions);
    assert.deepEqual(result, expected);
});