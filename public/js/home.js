document.addEventListener('DOMContentLoaded', () => {
  const featuredGrid = document.querySelector('[data-featured-products]');
  const newArrivalsGrid = document.querySelector('[data-new-arrival-products]');
  const brandLinks = document.querySelector('[data-brand-links]');
  const products = window.PHONE_PLUS_PRODUCTS;
  const homeSearch = document.querySelector('[data-home-search]');
  const homeSearchBrand = document.querySelector('#home-phone-type');
  const heroCarousel = document.querySelector('[data-hero-phone-carousel]');
  const displayLimit = 8;
  const brandLogoSources = {
    Apple: 'https://cdn.simpleicons.org/apple', Samsung: 'https://cdn.simpleicons.org/samsung', OPPO: 'https://cdn.simpleicons.org/oppo',
    Infinix: 'https://cdn.worldvectorlogo.com/logos/infinix-1.svg', Redmi: 'https://cdn.simpleicons.org/xiaomi',
    Vivo: 'https://cdn.simpleicons.org/vivo', Tecno: './images/brands/tecno-logo.png', Google: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
  };
  const brandLogoMarks = { Tecno: 'TECNO' };
  if (!featuredGrid || !newArrivalsGrid || !brandLinks) return;

  const availableBrands = [...new Set(products.map((product) => product.category))];
  if (homeSearchBrand) {
    availableBrands.forEach((brand) => homeSearchBrand.insertAdjacentHTML('beforeend', `<option value="${brand}">${brand}</option>`));
  }
  if (homeSearch) {
    homeSearch.addEventListener('submit', (event) => {
      event.preventDefault();
      const params = new URLSearchParams();
      const query = homeSearch.query.value.trim();
      if (query) params.set('search', query);
      if (homeSearch.brand.value) params.set('brand', homeSearch.brand.value);
      window.location.href = `./shop.html${params.toString() ? `?${params}` : ''}`;
    });
  }
  brandLinks.innerHTML = availableBrands.map((brand) => {
    const count = products.filter((product) => product.category === brand).length;
    const fallback = `<span class="brand-card-mark"${brandLogoSources[brand] ? ' hidden' : ''} aria-hidden="true">${brandLogoMarks[brand] || brand.charAt(0)}</span>`;
    const logo = brandLogoSources[brand] ? `<img src="${brandLogoSources[brand]}" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">${fallback}` : fallback;
    return `<a class="brand-card" href="./shop.html?brand=${encodeURIComponent(brand)}"><div class="brand-card-identity">${logo}<span>${brand}</span><small>${count} ${count === 1 ? 'phone' : 'phones'}</small></div><b aria-hidden="true">&rarr;</b></a>`;
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

  if (heroCarousel) {
    const newProducts = products.filter((product) => product.condition === 'Brand New' || product.condition === 'New Arrival');
    const pageSize = 4;
    let currentPage = 0;
    const renderArrivals = () => {
      const pageProducts = newProducts.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
      if (pageProducts.length < pageSize) {
        pageProducts.push(...newProducts.slice(0, pageSize - pageProducts.length));
      }
      heroCarousel.innerHTML = `<div class="arrivals-heading"><div><p class="eyebrow">Just landed</p><h2>New arrivals</h2></div><span>${String(currentPage + 1).padStart(2, '0')} / ${String(Math.max(1, Math.ceil(newProducts.length / pageSize))).padStart(2, '0')}</span></div><div class="arrivals-grid">${pageProducts.map((product) => `<article class="arrival-card"><a href="./product.html?id=${product.id}">${window.productVisual(product)}<div class="arrival-card-info"><span>${product.condition}</span><h3>${product.brand} ${product.model}</h3><strong>${window.formatPrice(product.priceKes)}</strong></div></a><button class="add-product" type="button" data-product-id="${product.id}" ${product.priceKes === null ? 'disabled' : ''}>${product.priceKes === null ? 'Details pending' : `${actionIcon.cart}<span>Add</span>`}</button></article>`).join('')}</div>`;
      window.bindAddButtons();
    };
    renderArrivals();
    if (newProducts.length > pageSize) setInterval(() => {
      currentPage = (currentPage + 1) % Math.ceil(newProducts.length / pageSize);
      heroCarousel.classList.add('is-changing');
      setTimeout(() => { renderArrivals(); heroCarousel.classList.remove('is-changing'); }, 260);
    }, 5000);
  }
});
