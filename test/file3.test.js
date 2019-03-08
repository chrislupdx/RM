const test = QUnit.test; 
QUnit.module('read/write url "optoins" to query');
import makeSearchUrl from '../src/make-search-url.js';

//re-write url write test
test('write query search term makeSearchUrl', assert => {
    //arrange
    const queryOptions = {
        search: {

            name: 'summer',
        }
    };
    const query = makeSearchUrl(queryOptions);

    //act
    //assert
    const expected = '?name=summer';
        //this test does not test for paging
    assert.equal(query, expected);
});

test('writes query for search and paging', assert => {
    const queryOptions = {
        search: {
            search: 'rick',
            page: 3,
        }
    };
    const query = writeOptionsAsQuery(queryOptions);
    assert.equal(query, '?searchTerm')
});
