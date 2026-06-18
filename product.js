const productContainer = document.getElementById("product-details");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = window.products.find(p => p.id === id);

if (!product) {
    productContainer.innerHTML = "<h2>Product Not Found</h2>";
} else {
    productContainer.innerHTML = `
        <img src="${product.image}" width="300" alt="${product.name}">

        <div class="details">
            <h1>${product.name}</h1>
            <p class="price">₹${product.price}</p>
            <p>${product.description}</p>

            <button class="btn" onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        </div>
    `;
}
