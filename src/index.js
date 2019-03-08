import { loadCards } from '../src/card-constructor.js';
import '../src/browser-to-search.js';

const APIURL = 'https://rickandmortyapi.com/api/character/';

fetch(APIURL).then(response => response.json()).then(body => loadCards(body.results));

//get a hash change listener di


window.addEventListener('hashChange', loadQuery);
