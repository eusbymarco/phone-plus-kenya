document.addEventListener('DOMContentLoaded', () => {
  const product = window.getProduct(new URLSearchParams(location.search).get('id'));
  const view = document.querySelector('[data-product-view]');
  if (!product) { view.innerHTML = '<p class="empty-state">This phone could not be found.</p>'; return; }
  const hasValue = (value) => value != null && String(value).trim() !== '' && String(value).trim().toLowerCase() !== 'undefined';
  const specRow = (label, value) => hasValue(value) ? `<div><dt>${label}</dt><dd>${value}</dd></div>` : '';
  const condition = hasValue(product.condition)
    ? `<span class="condition-tag condition-${String(product.condition).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}">${product.condition}</span>`
    : '';
  const brand = hasValue(product.brand) ? `<p class="eyebrow">${product.brand}</p>` : '';
  const description = hasValue(product.shortDescription) ? `<p>${product.shortDescription}</p>` : '';
  const specs = [
    specRow('Storage', product.storage),
    specRow('RAM', product.ram),
    specRow('Color', product.color),
    specRow('Network / SIM', product.network),
    specRow('Battery', product.battery || product.batteryHealth),
    specRow('Warranty', product.warranty)
  ].filter(Boolean).join('');
  view.innerHTML = `<div>${window.productVisual(product)}</div><div class="product-detail-copy">${condition}${brand}<h1>${product.model}</h1><p class="price">${window.formatPrice(product.priceKes)}</p>${description}<button class="button button-accent" type="button" data-add-detail ${product.priceKes === null ? 'disabled' : ''}>${product.priceKes === null ? 'Details pending' : `${actionIcon.cart}<span>Add</span>`}</button>${specs ? `<dl class="spec-list">${specs}</dl>` : ''}</div>`;
  document.querySelector('[data-add-detail]').addEventListener('click', (event) => { window.addToCart(product.id); window.updateCartBadge(); event.currentTarget.innerHTML = `${actionIcon.cart}<span>Added</span>`; });
});
