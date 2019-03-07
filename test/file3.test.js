const test = QUnit.test; 
QUnit.module('Search Bar');

const searchUrl = 'https://rickandmortyapi.com/api/character/';

export default function makeSearchUrl(fields){
    const searchTerm = fields.searchTerm;
    if(!searchTerm) {
        return '';
    }
    const url = new URL(searchUrl);
    url.searchParams.set('name', fields.searchTerm);
    return url.toString();
}

test('make search url', assert => {
    //arrange
    const queryOptions = {
        name: 'summer',
        page: 1
    };

    //act
    //assert
    const expected = 'https://rickandmortyapi.com/api/character/?name=summer';
    
    const result = makeSearchUrl(queryOptions);

    assert.equal(result, expected);
});
