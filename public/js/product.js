document.addEventListener('DOMContentLoaded', () => {
  const product = window.getProduct(new URLSearchParams(location.search).get('id'));
  const view = document.querySelector('[data-product-view]');
  if (!product) { view.innerHTML = '<p class="empty-state">This phone could not be found.</p>'; return; }
  view.innerHTML = `<div>${window.productVisual(product)}</div><div class="product-detail-copy"><span class="condition-tag">${product.condition}</span><p class="eyebrow">${product.brand}</p><h1>${product.model}</h1><p class="price">${window.formatPrice(product.priceKes)}</p><p>${product.shortDescription}</p><button class="button button-accent" type="button" data-add-detail ${product.priceKes === null ? 'disabled' : ''}>${product.priceKes === null ? 'Details pending' : 'Add to cart'}</button><dl class="spec-list"><div><dt>Storage</dt><dd>${product.storage}</dd></div><div><dt>RAM</dt><dd>${product.ram || 'Not applicable'}</dd></div><div><dt>Color</dt><dd>${product.color}</dd></div><div><dt>Network / SIM</dt><dd>${product.network}</dd></div><div><dt>Battery health</dt><dd>${product.batteryHealth || 'Not applicable'}</dd></div><div><dt>Warranty</dt><dd>${product.warranty || 'Add warranty details'}</dd></div></dl></div>`;
  document.querySelector('[data-add-detail]').addEventListener('click', () => { window.addToCart(product.id); window.updateCartBadge(); });
});
