import { writePageToQuery } from './add-search-to-query.js';
// const pageButtonsNode = document.getElementById('page-buttons');
const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPageNode = document.getElementById('total-pages');

//are we showing this in the dom?
let currentPageNumber = 1;

//this functions assignment is going to ride on API pagination
export const updatePagingInfo = (pagingInfo) => {
    currentPageNumber = pagingInfo.page;
    currentPageNode.textContent = currentPageNumber;
    totalPageNode.textContent = pagingInfo.totalPages;  
    nextButtonNode.disabled = currentPageNumber === pagingInfo.totalPages;
    previousButtonNode.disabled = currentPageNumber === 1;
}
//17:25 update query appears to be retuning NaN page.  Would stringifying via parseInt() existing query be necessary?
function updateQuery() {
//u
    const existingQuery = window.location.hash.slice(1);
    console.log(existingQuery + ' is existingQuery');
    //i don't know if adding parseInt there is legal, but its worth a shot
    //tried parsing after receiving NaN, no luck
    const newQuery = writePageToQuery(existingQuery, parseInt(currentPageNumber));
    window.location.hash = newQuery;
}

nextButtonNode.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();

});

previousButtonNode.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});