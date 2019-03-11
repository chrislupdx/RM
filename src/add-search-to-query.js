export default function addSearchToQuery(existingQuery, searchTerm){
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

//paging needs explicit/isolated testing for the rick+morty api
export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    console.log(searchParams + ' is writepageToQuery searchparams');
    return searchParams.toString();
}    

//is this function being fed the results array out of the JSON
//do we need a readpagefromquery function?
//if not praram.body, do something
//readfromquery's paging data might need to be a string

export function readFromquery(query){
    const searchParams = new URLSearchParams(query);
    const searchObject = {
        name: searchParams.get('name'),
        page: searchParams.get('page') || '1'
    };
    return searchObject;
//do the searchparams.get() contents need to be a string
}