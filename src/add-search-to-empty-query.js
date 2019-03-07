export default function addSearchToQuery(existingQuery, searchTerm){
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}