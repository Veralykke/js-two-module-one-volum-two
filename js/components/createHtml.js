export function renderHTML(data) {
    const results = document.querySelector(".results");
    results.innerHTML = "";

    data.forEach(product => {
        results.innerHTML += `
        <div class="product">
        <div class="name">${product.name}</div>
        <div class="price">${product.price}</div>
        </div>`;
    });
}
