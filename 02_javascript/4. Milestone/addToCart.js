document.addEventListener('DOMContentLoaded', () => {
  const modalCart = document.getElementById('modalCart');
  const closeBtn = document.getElementsByClassName('modal-cart-close')[0];
  const cartDisplay = document.querySelector('.modal-cart-content p');
  let cartItems = [];

  // Listen for the custom 'addToCart' event
  document.addEventListener('addToCart', (event) => {
    const { name, price } = event.detail;
    cartItems.push({ name, price });
    displayConfirmation(name);
    updateCartDisplay();
    showModal();
  });

  function updateCartDisplay() {
    if (cartItems.length === 0) {
      cartDisplay.textContent = 'Your cart is empty.';
    } else {
      cartDisplay.innerHTML =
        '<ul>' +
        cartItems
          .map((item) => `<li>${item.name} - ${item.price}</li>`)
          .join('') +
        '</ul>';
    }
  }

  function displayConfirmation(productName) {
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation-message';
    confirmation.textContent = `${productName} has been added to the cart.`;
    document.body.appendChild(confirmation);

    setTimeout(() => {
      confirmation.remove();
    }, 3000);
  }
  function showModal() {
    modalCart.style.display = 'block';
    setTimeout(() => {
      modalCart.classList.add('show');
    }, 10);
  }
  closeBtn.onclick = function () {
    modalCart.classList.remove('show');
    setTimeout(() => {
      modalCart.style.display = 'none';
    }, 300);
  };

  window.onclick = function (event) {
    if (event.target == modalCart) {
      modalCart.classList.remove('show');
      setTimeout(() => {
        modalCart.style.display = 'none';
      }, 300);
    }
  };
});
