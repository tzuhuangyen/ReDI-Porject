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

// Q&A Accordions functionality
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach((title) => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const isOpen = content.style.display === 'block';
    document
      .querySelectorAll('.accordion-content')
      .forEach((c) => (c.style.display = 'none'));
    content.style.display = isOpen ? 'none' : 'block';
  });
});

// Product Data:
// Define an array of objects in your JavaScript file to represent the products. Each product should have properties like id, name, price, description, and image.
// Additional Guidelines:
// Ensure the product elements are created dynamically using JavaScript and not hardcoded in the HTML.
// Make sure to use semantic HTML tags where appropriate.
// Test the dynamic generation of product elements in the browser to ensure everything is displayed correctly.
// Example array of products
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$19.99',
    description: 'Description for product 1.',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$29.99',
    description: 'Description for product 2.',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$39.99',
    description: 'Description for product 3.',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$49.99',
    description: 'Description for product4.',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
  // Add more products as needed
];

// Function to generate product elements
function generateProductElements() {
  const productContainer = document.querySelector('ul.products--list');

  products.forEach((product) => {
    const productElement = document.createElement('li');
    productElement.classList.add('product-card', 'card');

    productElement.innerHTML = `
        <img src='${product.image}' alt='${product.name}'  class='product--image'/>
        <h1>${product.name}</h1>
        <ul class='product--description'>
        <li>${product.description}</li>
        
        </ul> 
        <p class='product--price'>${product.price}</p>
        <button class='product--details'>View Details</button>
        <button class='product--addToCart'>Add to Cart</button>
        `;
    productContainer.appendChild(productElement);
  });
}
document.addEventListener('DOMContentLoaded', generateProductElements);

// sorting
document.addEventListener('DOMContentLoaded', () => {
  const sortDropdown = document.getElementById('sort');
  const productList = document.querySelector('.products--list');
  const products = Array.from(productList.children);

  sortDropdown.addEventListener('change', () => {
    const sortOrder = sortDropdown.value;
    const sortedProducts = products.sort((a, b) => {
      const priceA = parseFloat(
        a.querySelector('.product--price').textContent.replace('$', '')
      );
      const priceB = parseFloat(
        b.querySelector('.product--price').textContent.replace('$', '')
      );

      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    // Clear the product list
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }

    // Append the sorted products
    sortedProducts.forEach((product) => {
      productList.appendChild(product);
    });
  });
});
