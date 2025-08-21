let cart = [];

// Add to cart function
function addToCart(name, price, image) {
  cart.push({ name, price, image });
  updateCartCount();
}

// Update cart count in header
function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

// Filter products based on search input
function filterProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Open cart modal and show cart items
document.getElementById("cart-btn").addEventListener("click", () => {
  const cartModal = document.getElementById("cart-modal");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = ""; // Clear existing items
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
        <span>${item.name} - ₹${item.price}</span>
      </div>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.innerText = total;
  cartModal.style.display = "block";
});

// Close cart modal
function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

// Redirect to payment page
document.getElementById("paynow").addEventListener("click", () => {
  window.location.href = "payment.html";
});