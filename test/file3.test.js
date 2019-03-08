const test = QUnit.test; 
QUnit.module('read/write url "optoins" to query');
import makeSearchUrl from '../src/make-search-url.js';


test('write query search term makeSearchUrl', assert => {
    //arrange
    const queryOptions = {
        search: {

            name: 'summer',
            page: 1
        }
    };
    const query = makeSearchUrl(queryOptions);

    //act
    //assert
    const expected = '?page=1&name=summer';
        
    assert.equal(query, expected);
});
