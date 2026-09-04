document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('[data-products]');
  const search = document.querySelector('#search');
  const brand = document.querySelector('#brand');
  const condition = document.querySelector('#condition');
  const price = document.querySelector('#price');
  const storage = document.querySelector('#storage');
  const ram = document.querySelector('#ram');
  const params = new URLSearchParams(window.location.search);
  const render = () => {
    const products = window.filterProducts({ query: search.value, brand: brand.value, condition: condition.value, price: price.value, storage: storage.value, ram: ram.value });
    grid.innerHTML = products.length ? products.map(window.productCard).join('') : '<p class="empty-state">No phones match those filters.</p>';
    window.bindAddButtons();
  };
  window.PHONE_PLUS_CATEGORIES.forEach((name) => brand.insertAdjacentHTML('beforeend', `<option>${name}</option>`));
  window.PHONE_PLUS_FILTERS.conditions.forEach((option) => condition.insertAdjacentHTML('beforeend', `<option>${option}</option>`));
  window.PHONE_PLUS_FILTERS.prices.forEach((option) => price.insertAdjacentHTML('beforeend', `<option value="${option.value}">${option.label}</option>`));
  window.PHONE_PLUS_FILTERS.storages.forEach((option) => storage.insertAdjacentHTML('beforeend', `<option>${option}</option>`));
  window.PHONE_PLUS_FILTERS.rams.forEach((option) => ram.insertAdjacentHTML('beforeend', `<option>${option}</option>`));
  const requestedBrand = params.get('brand');
  const requestedSearch = params.get('search');
  if (requestedSearch) search.value = requestedSearch;
  if (requestedBrand && window.PHONE_PLUS_CATEGORIES.includes(requestedBrand)) brand.value = requestedBrand;
  [search, brand, condition, price, storage, ram].forEach((control) => control.addEventListener('input', render));
  render();
});
