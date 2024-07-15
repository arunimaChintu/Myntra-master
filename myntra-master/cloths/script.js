// Add event listeners for filter checkboxes
const filterCheckboxes = document.querySelectorAll('.filter-list input[type="checkbox"]');
filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // Update product display based on selected filters
    // ...
  });
});

// Add event listeners for filter selects
const filterSelects = document.querySelectorAll('.filters select');
filterSelects.forEach(select => {
  select.addEventListener('change', () => {
    // Update product display based on selected filters
    // ...
  });
});

// Example: Filter by brand
function filterByBrand(brand) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    if (product.querySelector('.product-title').textContent === brand) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Example: Filter by price
function filterByPrice(minPrice, maxPrice) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const priceText = product.querySelector('.product-price').textContent;
    const price = parseFloat(priceText.replace('₹', ''));
    if (price >= minPrice && price <= maxPrice) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// ... Add more filter functions for other filter criteria