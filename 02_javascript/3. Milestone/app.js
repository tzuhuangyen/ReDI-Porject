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
         <div class="product card">
          <img src='${product.image}' alt='${product.name}'  class='product--image'/>
          <h1 class="product--name">${product.name}</h1>
          <ul class='product--description'>
          <li>${product.description}</li>
          
          </ul> 
          <p class='product--price'>${product.price}</p>
          <button class='product--details'>View Details</button>
          <button class='product--addToCart product--buy cartLink' > Add to Cart</button>
           </div>
          `;
    productContainer.appendChild(productElement);
  });
}
document.addEventListener('DOMContentLoaded', generateProductElements);
