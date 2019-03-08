export default function addSearchToQuery(existingQuery, searchTerm){
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readFromquery(queryOptions){
    console.log('hurrdud');
    const searchParams = new URLSearchParams(queryOptions);
    const searchObject = {
        name: searchParams.get('name'),
        page: parseInt(searchParams.get('page'))
    };
    return searchObject;
}