const searchUrl = 'https://rickandmortyapi.com/api/character/';

export default function makeSearchUrl(queryOptions){
    const searchOptions = queryOptions.search;
    if(!searchOptions) {
        return '';
    }
    const searchParams = new URLSearchParams();
    searchParams.set('name', searchOptions.name);
    
    const paginOptions = queryOptions.page; 
    if(paginOptions) {
        searchParams.set('page', paginOptions.page)
    }

    return '?' + searchParams.toString();
}