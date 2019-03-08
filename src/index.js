import data from '../assets/data.js';
import { loadCards } from '../src/card-constructor.js';
import '../src/browser-to-search.js';
import readFromquery from '../src/add-search-to-query.js';
import makeSearchUrl from './make-search-url.js';
import updateSearchTerm from './browser-to-search.js';

window.addEventListener('hashChange', loadQuery);

loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromquery(query);
    const apiURL = makeSearchUrl(queryOptions);

    console.log(query + ' is query');
    console.log(queryOptions + ' is queryoptions');
    console.log(apiURL + ' is APIURL');
  
    updateSearchTerm(queryOptions.searchTerm);
    if(!apiURL) {
        return;
    }
    else {
        console.log(apiURL);
        fetch(apiURL)
            .then(response => response.json())
            .then(resultjson => {
                loadCards(resultjson.results);
            });
    }
}

// function modifyExistingSearchTerm(searchTerm) {
//     searchInput.value = searchTerm;
// }

(data.results);