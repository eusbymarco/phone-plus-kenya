document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('[data-featured-products]');
	const search = document.querySelector('#home-search');
	const brand = document.querySelector('#home-brand');
	if (!grid || !search || !brand) return;

	window.PHONE_PLUS_CATEGORIES.forEach((name) => brand.insertAdjacentHTML('beforeend', `<option>${name}</option>`));
	const render = () => {
		const products = window.filterProducts({ query: search.value, brand: brand.value });
		grid.innerHTML = products.length ? products.map(window.productCard).join('') : '<p class="empty-state">No phones match your search.</p>';
		window.bindAddButtons();
	};
	[search, brand].forEach((control) => control.addEventListener('input', render));
	render();
});
