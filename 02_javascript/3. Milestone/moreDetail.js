// Get the modal
const modals = document.querySelectorAll('.modal');

// Get the button that opens the modal
const btns = document.querySelectorAll('.product--details');

// Get the <span> element that closes the modal
const closeButtons = document.querySelectorAll('.close');

// When the user clicks the button, open the modal
btns.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = 'block';
    const modal = this.closest('.product-card').querySelector('.modal');
    modal.style.display = 'block';

    // Populate modal content based on the product details
    const product = this.closest('.product-card');
    modal.querySelector('.modalProductImage').src =
      product.querySelector('.product--image').src;
    modal.querySelector('.modalProductDescription').innerText =
      product.querySelector('.product--description').innerText;
    modal.querySelector('.modalProductPrice').innerText =
      product.querySelector('.product--price').innerText;
  };
});

// When the user clicks on <span> (x), close the modal
closeButtons.forEach((span) => {
  span.onclick = function () {
    this.closest('.modal').style.display = 'none';
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};
