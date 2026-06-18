const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        description: "Powerful laptop for work, coding and gaming."
    },
    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        description: "Latest smartphone with amazing camera quality."
    },
    {
        id: 3,
        name: "Headphones",
        price: 5000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        description: "High quality sound with noise cancellation."
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 8000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        description: "Track your fitness and notifications easily."
    }
];

const container = document.getElementById("product-container");

// Render products only if product-container exists
if (container) {
    products.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <p>${product.description}</p>

                    <button class="btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                    <a href="product.html?id=${product.id}">
                        <button class="btn">View Details</button>
                    </a>
                </div>
            </div>
        `;
    });
}

// Add to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}
window.products = products;