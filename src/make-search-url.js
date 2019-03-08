export default function makeSearchUrl(queryOptions) {
const SEARCH_MOVIE_URL = 'https://rickandmortyapi.com/api/character/';

    const url = new URL(SEARCH_MOVIE_URL);
//this .set pattern got you last time, slow down+figure it out
//Q: what're the key/val relations that happen in set that needs to occur
    url.searchParams.set('name', queryOptions.name);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}