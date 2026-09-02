document.addEventListener('DOMContentLoaded', () => {
  const featuredGrid = document.querySelector('[data-featured-products]');
  const newArrivalsGrid = document.querySelector('[data-new-arrival-products]');
  const brandLinks = document.querySelector('[data-brand-links]');
  const products = window.PHONE_PLUS_PRODUCTS;
  const displayLimit = 8;
  if (!featuredGrid || !newArrivalsGrid || !brandLinks) return;

  const availableBrands = [...new Set(products.map((product) => product.category))];
  brandLinks.innerHTML = availableBrands.map((brand) => {
    const count = products.filter((product) => product.category === brand).length;
    return `<a class="brand-card" href="./shop.html?brand=${encodeURIComponent(brand)}"><span>${brand}</span><small>${count} ${count === 1 ? 'phone' : 'phones'}</small><b aria-hidden="true">&rarr;</b></a>`;
  }).join('');

  const featuredProducts = products
    .filter((product) => product.priceKes !== null)
    .slice()
    .sort((a, b) => a.priceKes - b.priceKes)
    .slice(0, displayLimit);
  const newArrivals = products.slice(-displayLimit).reverse();
  featuredGrid.innerHTML = featuredProducts.map(window.productCard).join('');
  newArrivalsGrid.innerHTML = newArrivals.map(window.productCard).join('');
  window.bindAddButtons();
});
