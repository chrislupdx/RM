const test = QUnit.test; 
QUnit.module('DOMcontentTest');
import cardConstructor from '../src/card-constructor.js';


test('Render Card Test', function(assert){
    //arrange
    const fields = {
        name : "Rick Sanchez",
        status : "Alive",
        image : "https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
    };

    const expected = `<div id="card">
    <p>Rick Sanchez</p>
    <p>Alive</p>
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg">
</div>`;

    //act
    const result = cardConstructor(fields);
    
    //assert
    assert.htmlEqual(result, expected);
});