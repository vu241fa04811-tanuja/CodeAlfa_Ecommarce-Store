const cart =
JSON.parse(localStorage.getItem("cart")) || [];

const container =
document.getElementById("cart-container");

let total = 0;

cart.forEach((product,index) => {

    total += product.price;

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
    <img src="${product.image}">
    
    <div class="card-content">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>

        <button class="btn"
        onclick="removeItem(${index})">
            Remove
        </button>
    </div>
`;

    container.appendChild(card);
});

const totalElement =
document.createElement("h2");

totalElement.innerText =
`Total: ₹${total}`;

container.appendChild(totalElement);
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}
const checkoutBtn =
document.createElement("button");

checkoutBtn.innerText = "Proceed To Checkout";

checkoutBtn.classList.add("checkout-btn");
checkoutBtn.onclick = () => {
    window.location.href = "checkout.html";
};

container.appendChild(checkoutBtn);