const test = QUnit.test; 
QUnit.module('DOMcontentTest');


test('Pass data to card constructor', function(assert){
    //arrange
    const

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