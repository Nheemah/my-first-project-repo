// Slideshow Functionality
function moveSlide(direction, slideshowId) {
    let slidesContainer = document.querySelector(`#${slideshowId} .slides`);
    let images = slidesContainer.querySelectorAll("img");
    let index = slidesContainer.dataset.index ? parseInt(slidesContainer.dataset.index) : 0;

    index += direction;
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    slidesContainer.dataset.index = index;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Cart Functionality
let cart = [];

function addToCart(item, price, sizeId, colorId) {
    let size = document.getElementById(sizeId).value;
    let color = document.getElementById(colorId).value;

    cart.push({ item, size, color, price });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${product.item} (Size: ${product.size}, Color: ${product.color}) - $${product.price}
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
        total += product.price;
    });

    document.getElementById("cart-total").textContent = `Total: $${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}


//Product Filtering Functionality
function filterProducts(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all") {
            product.style.display = "block"; // Show all products
        } else if (product.classList.contains(category)) {
            product.style.display = "block"; // Show only the selected category
        } else {
            product.style.display = "none"; // Hide others
        }
    });
}
