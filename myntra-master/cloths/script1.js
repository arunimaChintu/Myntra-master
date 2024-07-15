document.addEventListener('DOMContentLoaded', function() {
    const wishlistIcons = document.querySelectorAll('.wishlist-img');
  
    wishlistIcons.forEach(icon => {
      icon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click from being registered on the product image
        const product = this.closest('.product');
        product.classList.toggle('wishlist-added');
      });
    });
  });
  