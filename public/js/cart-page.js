document.addEventListener('DOMContentLoaded', () => {
  const view = document.querySelector('[data-cart-view]');
  const cartIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 4.5h2l1.7 10.2h10.6l2-7.2H6.3"></path><circle cx="9" cy="19" r="1"></circle><circle cx="17" cy="19" r="1"></circle></svg>';
  const trashIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6.5 7l.7 13h9.6l.7-13M9 7V4h6v3"></path></svg>';
  const render = () => {
    const items = window.cartItems();
    if (!items.length) {
      view.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">${cartIcon}</div><p class="eyebrow">Your selection</p><h2>Your cart is empty</h2><p>Browse phones to add an item.</p><a class="button button-dark" href="./shop.html">${cartIcon}<span>Shop phones</span></a></div>`;
      return;
    }
    const lines = items.map(({ product, quantity }) => `<article class="cart-line"><div class="cart-line-image">${window.productVisual(product)}</div><div class="cart-line-details"><div class="cart-line-heading"><div><span class="condition-tag condition-${product.condition.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}">${product.condition}</span><h2>${product.brand} ${product.model}</h2><p class="cart-line-specs">${product.storage}${product.ram ? ` <span aria-hidden="true">·</span> ${product.ram}` : ''}</p></div><button class="cart-remove" type="button" data-remove-id="${product.id}" aria-label="Remove ${product.brand} ${product.model}" title="Remove item">${trashIcon}</button></div><div class="cart-line-footer"><strong>${window.formatPrice(product.priceKes)}</strong><div class="quantity-control" aria-label="Quantity for ${product.brand} ${product.model}"><button type="button" data-quantity-change="-1" data-id="${product.id}" aria-label="Decrease quantity">−</button><span>${quantity}</span><button type="button" data-quantity-change="1" data-id="${product.id}" aria-label="Increase quantity">+</button></div></div></div></article>`).join('');
    view.innerHTML = `<div class="cart-layout"><section class="cart-items-panel" aria-labelledby="cart-items-title"><div class="cart-section-heading"><div><p class="eyebrow">Your selection</p><h2 id="cart-items-title">Cart items <span>${items.length}</span></h2></div><a class="continue-shopping" href="./shop.html">${cartIcon}<span>Continue shopping</span></a></div><div class="cart-lines">${lines}</div></section><aside class="order-summary" aria-labelledby="order-summary-title"><p class="eyebrow">Order total</p><h2 id="order-summary-title">Summary</h2><dl><div><dt>Subtotal</dt><dd>${window.formatPrice(window.cartTotal())}</dd></div><div><dt>Delivery</dt><dd>Nationwide</dd></div></dl><div class="summary-total"><span>Total</span><strong>${window.formatPrice(window.cartTotal())}</strong></div><a class="button button-accent checkout-button" href="./checkout.html">Checkout <span aria-hidden="true">&nearr;</span></a></aside></div>`;
    view.querySelectorAll('[data-quantity-change]').forEach((button) => button.addEventListener('click', () => {
      const item = items.find(({ product }) => product.id === button.dataset.id);
      window.updateCartQuantity(button.dataset.id, item.quantity + Number(button.dataset.quantityChange));
      window.updateCartBadge();
      render();
    }));
    view.querySelectorAll('[data-remove-id]').forEach((button) => button.addEventListener('click', () => {
      window.updateCartQuantity(button.dataset.removeId, 0);
      window.updateCartBadge();
      render();
    }));
  };
  render();
});
