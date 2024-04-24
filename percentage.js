// Function to render product cards
function renderProducts(products) {
    const productCardsContainer = document.querySelector('.product-cards');
    productCardsContainer.innerHTML = '';
    products.forEach(product => {
      const price = parseFloat(product.price) || 0;
      const comparePrice = parseFloat(product.compare_at_price) || 0;
      const priceText = `Rs ${price.toFixed(2)}`;
      
      let compareText = '';
      if (comparePrice > 0 && comparePrice > price) {
        const discountPercent = Math.round(((comparePrice - price) / comparePrice) * 100);
        compareText = `Compare_at_price: Rs ${comparePrice.toFixed(2)} marked with ${discountPercent}% Off`;
      }
  
      const card = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <div class="product-info">
            <div class="product-title-vendor">
              <h3 class="product-title">${product.title}</h3>
              <p class="product-vendor">${product.vendor}</p>
            </div>
            <div class="product-prices">
              <p class="product-price">${priceText} <span class="product-compare">${compareText}</span></p>
            </div>
            <button class="add-to-cart">Add to Cart</button>
            ${product.badge_text ? `<span class="product-badge">${product.badge_text}</span>` : ''}
          </div>
        </div>
      `;
      productCardsContainer.innerHTML += card;
    });
  }
  