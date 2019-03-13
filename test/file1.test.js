const test = QUnit.test; 
QUnit.module('DOMcontentTest');
import cardConstructor from '../src/card-constructor.js';
import data from '../assets/data.js';

test('Render Card Test', function(assert){
    //arrange
    const fields = data.results[0];
    const expected = `<div id="card">
    <p>Rick Sanchez</p>
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg">
    <p>Unknown</p></div>`;

    //act
    const result = cardConstructor(fields);
    
    //assert
    assert.htmlEqual(result, expected);
});