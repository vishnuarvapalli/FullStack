let cart = [];

function addToCart(productName, productPrice) {
  const product = { name: productName, price: productPrice };
  cart.push(product);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product-name');
      const productPrice = parseFloat(button.getAttribute('data-product-price').replace('₹', ''));
      addToCart(productName, productPrice);
    });
  });

  updateCartDisplay();
});