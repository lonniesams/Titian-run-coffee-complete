document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const checkoutItems = document.getElementById("checkout-items");
    const totalPriceElement = document.getElementById("total-price");

    let total = 0;

    cart.forEach((order) => {
        const item = document.createElement("li");
        item.textContent = `${order.quantity}x ${order.size} ${order.product.name} - $${order.totalPrice.toFixed(
            2
        )}`;
        checkoutItems.appendChild(item);

        total += order.totalPrice;
    });

    totalPriceElement.textContent = total.toFixed(2);
});
