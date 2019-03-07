const searchUrl = 'https://rickandmortyapi.com/api/character/';

export default function makeSearchUrl(queryOptions){
    const searchTerm = queryOptions.searchTerm;
    if(!searchTerm) {
        return '';
    }
    const url = new URL(searchUrl);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}