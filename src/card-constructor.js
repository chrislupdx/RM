export default function cardConstructor(fields) {
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