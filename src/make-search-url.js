const searchUrl = 'https://rickandmortyapi.com/api/character/';
//re-write this function based on mob function
export default function makeSearchUrl(queryOptions){
    const searchOptions = queryOptions.search;
    if(!searchOptions) {
        return '';
    }
    const searchParams = new URLSearchParams();
    searchParams.set('name', searchOptions.name);
    
    const pagingOptions = queryOptions.page; 
    if(pagingOptions) {
        searchParams.set('page', pagingOptions.page)
    }

    return '?' + searchParams.toString();
}
