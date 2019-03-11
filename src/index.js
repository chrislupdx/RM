import { loadCards } from '../src/card-constructor.js';
import './input-to-url.js';
import { readFromquery } from '../src/add-search-to-query.js';
import updateSearchTerm from './input-to-url.js';
import makeSearchUrl from './make-search-url.js';
import { updatePagingInfo } from './paging-component.js';


const APIURL = 'https://rickandmortyapi.com/api/character/';

fetch(APIURL).then(response => response.json()).then(body => loadCards(body.results));

//in thefucntion when it comes back undefined
//if the thing comes back undefined -> do something
//throw an error message


window.addEventListener('hashchange', function() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromquery(query);
    const apiURL = makeSearchUrl(queryOptions);
    updateSearchTerm(queryOptions.name);

    fetch(apiURL)
        .then(response => response.json())
        .then(body => {
            loadCards(body.results);
            const pagingInfo = {
                page: body.page,
                totalPages: body.pages
                //i don't know if this is named right
            };
            console.log(pagingInfo + " at the end of fetch");     
            updatePagingInfo(pagingInfo);   
        });
});