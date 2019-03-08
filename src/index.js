import { loadCards } from '../src/card-constructor.js';

const APIURL = 'https://rickandmortyapi.com/api/character/';

fetch(APIURL).then(response => response.json()).then(body => loadCards(body.results));