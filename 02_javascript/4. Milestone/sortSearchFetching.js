document.addEventListener('DOMContentLoaded', () => {
  const sortDropdown = document.getElementById('sort');
  const productList = document.querySelector('.products--list');
  const searchInput = document.querySelector('.navbar--search');
  let products = [];

  // Fetch products from the API and display them
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      products = data;
      displayProducts(products);
      console.log(products);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });

  // Sorting logic when dropdown changes
  sortDropdown.addEventListener('change', () => {
    const sortOrder = sortDropdown.value;
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    displayProducts(sortedProducts); // Re-render sorted products
  });

  // Function to display products in the UI
  function displayProducts(productsToDisplay) {
    productList.innerHTML = '';
    productsToDisplay.forEach((product) => {
      const productItem = document.createElement('li');
      productItem.innerHTML = `
        <div class="product card">
          <img src='${product.image}' alt='${product.title}' class='product--image'/>
          <h1 class="product--name">${product.title}</h1>
          <ul class='product--description'>
            <li>${product.description}</li>
          </ul> 
          <p class='product--price'>${product.price}</p>
          <div class='product--buttons'>
            <button class='product--details'>View Details</button>
            <button class='product--addToCart product--buy cartLink'>Add to Cart</button>
          </div>
        </div>
      `;
      productList.appendChild(productItem);
    });

    // After adding products to the DOM, update the Add to Cart functionality
    updateAddToCartButtons();
  }

  // Function to filter and display products based on search input
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
  });

  // Function to update Add to Cart button functionality
  function updateAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.product--buy');
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        console.log('Add to Cart clicked:', event.target);
        // Dispatch a custom event to notify other scripts
        const product = event.target.closest('.product.card');
        if (product) {
          const productName =
            product.querySelector('.product--name').textContent;
          const productPrice =
            product.querySelector('.product--price').textContent;

          const cartEvent = new CustomEvent('addToCart', {
            detail: {
              name: productName,
              price: productPrice,
            },
          });
          document.dispatchEvent(cartEvent);
        }
      });
    });
  }
});
