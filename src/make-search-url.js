export default function makeSearchUrl(queryOptions) {
    const SEARCH_MOVIE_URL = 'https://rickandmortyapi.com/api/character/';
    const searchTerm = queryOptions.name;
    if(!searchTerm) {
        return '';
    }
    
    const url = new URL(SEARCH_MOVIE_URL);
    url.searchParams.set('name', queryOptions.name);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}   