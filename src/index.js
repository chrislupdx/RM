import { loadCards } from '../src/card-constructor.js';
import './input-to-url.js';
import readFromquery from '../src/add-search-to-query.js';
import updateSearchTerm from './input-to-url.js';

const APIURL = 'https://rickandmortyapi.com/api/character/';

fetch(APIURL).then(response => response.json()).then(body => loadCards(body.results));

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromquery(query);
    updateSearchTerm(queryOptions.name);
    //switch searchTerm for name in ln 13 bc rick+morty api
});