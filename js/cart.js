class Product {
    constructor(name, price) {
        this.name = name;
        this.price = parseFloat(price);
    }
}

class Order {
    constructor(product, size, quantity, date = new Date()) {
        this.product = product;
        this.size = size;
        this.quantity = parseInt(quantity, 10);
        this.date = date;
        this.sizePrice = this.getSizePrice();
        this.totalPrice = this.calculateTotal();
    }

    getSizePrice() {
        const sizePriceMap = {
            Small: 0,
            Medium: 0.5,
            Large: 1.0,
        };
        return sizePriceMap[this.size] || 0;
    }

    calculateTotal() {
        return (this.product.price + this.sizePrice) * this.quantity;
    }
}

const cart = [];

document.getElementById("add-to-cart").addEventListener("click", function () {
    const coffeeName = document.getElementById("coffee-name");
    const coffeeSize = document.getElementById("coffee-size").value;
    const coffeeQuantity = document.getElementById("coffee-quantity").value;

    const product = new Product(
        coffeeName.value,
        coffeeName.options[coffeeName.selectedIndex].dataset.price
    );

    const order = new Order(product, coffeeSize, coffeeQuantity);

    cart.push(order);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
});

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((order, index) => {
        const item = document.createElement("li");
        item.textContent = `${order.quantity}x ${order.size} ${order.product.name} - $${order.totalPrice.toFixed(
            2
        )}`;
        cartItems.appendChild(item);
    });
}

document.getElementById("checkout").addEventListener("click", function () {
    window.location.href = "checkout.html";
});
