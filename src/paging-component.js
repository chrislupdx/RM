import { writePageToQuery } from './add-search-to-query.js';
const pageButtonsNode = document.getElementById('page-buttons');
const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPageNode = document.getElementById('total-pages');

let currentPageNumber = '1';

//this functions assignment is going to ride on API pagination
export function updatePagingInfo(pagingInfo){
    currentPageNumber = parseInt(pagingInfo.page);
    console.log(currentPageNumber + " is currentPageNumber");
    currentPageNode.textContent = currentPageNumber;
    totalPageNode.textContent = pagingInfo.pages;
    nextButtonNode.disabled = currentPageNode === pagingInfo.totalPageNode;
    previousButtonNode.disabled = currentPageNumber === 1;
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    console.log(existingQuery + ' is existingQuery');
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

nextButtonNode.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
    console.log(currentPageNumber + 'nexbutton');

});

previousButtonNode.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
    console.log(currentPageNumber + 'previousbtnnode');
});