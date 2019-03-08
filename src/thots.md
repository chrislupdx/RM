window.addEventListener('hashChange', loadQuery);
// loadQuery();

// function loadQuery() {
//     const query = window.location.hash.slice(1);
//     const queryOptions = readFromquery(query);
//     const apiURL = makeSearchUrl(queryOptions);
//     updateSearchTerm(queryOptions.searchTerm);
//     if (apiURL) {
//         return;
//     }
//     else {
//         console.log(apiURL);
//         fetch(apiURL)
//             .then(response => response.json())
//             .then(resultjson => {
//                 loadCards(resultjson.results);
//             });
//     }
// }

function modifyExistingSearchTerm(searchTerm) {
    searchInput.value = searchTerm;
}