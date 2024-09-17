document.addEventListener('DOMContentLoaded', () => {
  const modalCart = document.getElementById('modalCart');
  const cartLinks = document.getElementsByClassName('cartLink');
  const closeBtn = document.getElementsByClassName('modal-cart-close')[0];
  const cartItems = [];
  const cartDisplay = document.querySelector('.modal-cart-content p');

  // cartLink.onclick = function () {
  //     modalCart.style.display = 'block';
  //     setTimeout(() => {
  //     modalCart.classList.add('show');
  //     }, 10);
  //     updateCartDisplay();
  // };
  Array.from(cartLinks).forEach((cartLink) => {
    cartLink.onclick = function () {
      modalCart.style.display = 'block';
      setTimeout(() => {
        modalCart.classList.add('show');
      }, 10);
      updateCartDisplay();
    };
  });

  closeBtn.onclick = function () {
    modalCart.classList.remove('show');
    setTimeout(() => {
      modalCart.style.display = 'none';
    }, 300);
  };
  //   如果用户点击cartModal外部，cartModal也会关闭
  window.onclick = function (event) {
    if (event.target == modalCart) {
      modalCart.classList.remove('show');
      setTimeout(() => {
        modalCart.style.display = 'none';
      }, 300);
    }
  };

  const addToCartButtons = document.querySelectorAll('.product--buy');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const product = event.target.closest('.product.card');
      const productName = product.querySelector('.product--name').textContent;
      const productPrice = product.querySelector('.product--price').textContent;

      cartItems.push({
        name: productName,
        price: productPrice,
      });

      displayConfirmation(productName);
      updateCartDisplay();
    });
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
});
