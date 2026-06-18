const checkoutBtn = document.createElement("button");

checkoutBtn.innerText = "Proceed To Checkout";

checkoutBtn.classList.add("checkout-btn");

checkoutBtn.onclick = () => {
    window.location.href = "checkout.html";
};

const btnContainer = document.createElement("div");
btnContainer.appendChild(checkoutBtn);

container.appendChild(btnContainer);