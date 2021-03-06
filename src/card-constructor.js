function cardConstructor(fields) {
    const template = document.createElement('template');
    const html = `
    <div id="card">
    <p>${fields.name}</p>
        <img src=${fields.image}>
        <p>${fields.status}</p></div>
    `;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}
//fields MUST BE AN ARRAY, or at least know that we're taking the JSON and tunneling to data.results before hitting .name/.status/.image tags

const listNode = document.getElementById('cardlist');

export function loadCards(data) {
    cleanGallery();
    data.forEach(function(card) {
        const dom = cardConstructor(card);
        listNode.appendChild(dom);
    });
}

function cleanGallery() {
    while(listNode.children.length > 0) {
        listNode.lastElementChild.remove();
    }
}

export default cardConstructor;