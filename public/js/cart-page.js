document.addEventListener('DOMContentLoaded', () => {
  const view = document.querySelector('[data-cart-view]');
  const render = () => {
    const items = window.cartItems();
    if (!items.length) {
      view.innerHTML = '<div class="empty-state"><h2>Your cart is empty.</h2><p>Browse the current phone catalog to get started.</p><a class="button button-dark" href="./shop.html">Shop phones</a></div>';
      return;
    }
    const lines = items.map(({ product, quantity }) => `<article class="cart-line"><div>${window.productVisual(product)}</div><div><span class="condition-tag">${product.condition}</span><h2>${product.brand} ${product.model}</h2><p>${window.formatPrice(product.priceKes)}</p><label>Quantity <input class="quantity" data-id="${product.id}" type="number" min="0" value="${quantity}"></label></div></article>`).join('');
    view.innerHTML = `<div class="cart-lines">${lines}</div><aside class="order-summary"><p>Order total</p><strong>${window.formatPrice(window.cartTotal())}</strong><a class="button button-accent" href="./checkout.html">Continue to checkout</a></aside>`;
    view.querySelectorAll('.quantity').forEach((input) => input.addEventListener('change', () => {
      window.updateCartQuantity(input.dataset.id, Number(input.value));
      window.updateCartBadge();
      render();
    }));
  };
  render();
});
