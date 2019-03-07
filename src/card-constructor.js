function cardConstructor(fields) {
    const template = document.createElement('template');
    const html = `
    <div id="card">
        <p>${fields.name}</p>
        <p>${fields.status}</p>
        <img src=${fields.image}></div>
    `;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

export default cardConstructor;