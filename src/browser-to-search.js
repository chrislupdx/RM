import addSearchToQuery from '../src/add-search-to-query.js';

const searchForm = document.getElementById('searchBar');
const searchTermInput = document.querySelector('input');
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchTermInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = addSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
    console.log('heyyy');
});

export default function updateSearchTerm(searchTerm){
    searchTermInput.value = searchTerm;
}