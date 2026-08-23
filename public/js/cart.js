const CART_KEY = 'phone-plus-cart';

window.getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '{}');
window.saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));
window.cartItems = () => Object.entries(window.getCart()).map(([id, quantity]) => ({ product: window.getProduct(id), quantity })).filter((item) => item.product);
window.cartTotal = () => window.cartItems().reduce((total, item) => total + ((item.product.priceKes || 0) * item.quantity), 0);
window.cartCount = () => window.cartItems().reduce((count, item) => count + item.quantity, 0);
window.addToCart = (id) => { const cart = window.getCart(); cart[id] = (cart[id] || 0) + 1; window.saveCart(cart); };
window.updateCartQuantity = (id, quantity) => { const cart = window.getCart(); if (quantity > 0) cart[id] = quantity; else delete cart[id]; window.saveCart(cart); };
window.formatPrice = (price) => price ? `${window.PHONE_PLUS_CONFIG.currency} ${price.toLocaleString('en-KE')}` : 'Price on request';
