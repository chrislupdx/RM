import { writePageToQuery } from './add-search-to-query.js';

const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPageNode = document.getElementById('total-pages');

let currentPageNumber = 1;

export const updatePagingInfo = (pagingInfo) => {
    currentPageNode.textContent = currentPageNumber;
    totalPageNode.textContent = pagingInfo.totalPages;  
    nextButtonNode.disabled = currentPageNumber === pagingInfo.totalPages;
    previousButtonNode.disabled = currentPageNumber === 1;
};
function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
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