import { loadCards } from '../src/card-constructor.js';
import './input-to-url.js';
import { readFromquery } from '../src/add-search-to-query.js';
import updateSearchTerm from './input-to-url.js';
import makeSearchUrl from './make-search-url.js';
import { updatePagingInfo } from './paging-component.js';

const pageButtons = document.getElementById('paging');

loadQuery();
window.addEventListener('hashchange', loadQuery); 

// fetch(APIURL).then(response => response.json()).then(body => loadCards(body.results));
// const APIURL = 'https://rickandmortyapi.com/api/character/';

//in thefucntion when it comes back undefined
//if the thing comes back undefined -> do something
//throw an error message

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromquery(query);
    const apiURL = makeSearchUrl(queryOptions);
    updateSearchTerm(queryOptions.name);

    if(!apiURL) {
        pageButtons.classList.add('hidden');
        return;
    }
    else {
        pageButtons.classList.remove('hidden');
        fetch(apiURL)
            .then(response => response.json())
            .then(body => {
                loadCards(body.results);
                const pagingInfo = {
                    // page: body.info.page,
                    totalPages: body.info.pages,
                };
                //how is this even supposed to wwork rn lol
                //wait I think that page is the bad one\we generate page internally
                updatePagingInfo(pagingInfo);   
            });
    }
}