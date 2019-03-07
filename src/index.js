import cardConstructor from './card-constructor.js';
import data from '../assets/data.js';

console.log(data.results[0].name);

const listNode = document.getElementById('cardlist');

function cleanGallery(){
    while(listNode.children.length > 0){
        listNode.lastElementChild.remove();
    }
}

function loadCards(data) {
    cleanGallery();
    data.forEach(function(card){
        const dom = cardConstructor(card);
        listNode.appendChild(dom);
    });
}


loadCards(data.results);