import cardConstructor from './card-constructor.js';
import data from '../assets/data.js';
import addSearchToQuery from './add-search-to-query.js';
import makeSearchUrl from '../src/make-search-url.js';
import updateSearchTerm from '../src/make-search-url.js';
const listNode = document.getElementById('cardlist');
const searchForm = document.getElementById('searchBar');
const searchInput = document.querySelector('input');

loadQuery();
window.addEventListener('hashChange', loadQuery);

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = addSearchToQuery(query);
    const apiURL = makeSearchUrl(queryOptions);
    updateSearchTerm(queryOptions.searchTerm);
    
    console.log(apiURL);
}

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = addSearchToEmptyQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
    console.log(newQuery);
});

function modifyExistingSearchTerm(searchTerm) {
    searchInput.value = searchTerm;
}
//onhashchange


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