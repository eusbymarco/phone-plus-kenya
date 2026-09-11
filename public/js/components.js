const config = window.PHONE_PLUS_CONFIG;

const socialStylesheet = document.createElement('link');
socialStylesheet.rel = 'stylesheet';
socialStylesheet.href = './css/social.css';
document.head.appendChild(socialStylesheet);

const socialIcon = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.2 1.3-4A8 8 0 1 1 20 11.7Z"></path><path d="M8.5 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c.7 1.2 1.6 1.8 2.8 2.2l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.2.6-.2.8-.8 1.3-1.6 1.4-2 .1-5.5-1.7-6.6-4.7-.3-.9.1-1.9.7-2.5Z"></path></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4c.3 2.2 1.5 3.5 3.8 3.7v3a7 7 0 0 1-3.8-1.1v5.7a4.7 4.7 0 1 1-4-4.6v3.1a1.7 1.7 0 1 0 1 1.5V4h3Z"></path></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h2V4.5c-.4-.1-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V12H5.4v3.9h3.1V24h3.9v-8.1H15l.4-3.9h-3v-2.5c0-1.1.3-1.5 1.6-1.5Z"></path></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.1l3.2 4.6L16 4h3l-5.3 6.4L19.5 20h-4.1l-3.7-5.3L7.5 20h-3l5.7-6.9L5 4Zm3.8 2 7.6 12h.9L9.7 6h-.9Z"></path></svg>'
};

const actionIcon = {
  cart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 4.5h2l1.7 10.2h10.6l2-7.2H6.3"></path><circle cx="9" cy="19" r="1"></circle><circle cx="17" cy="19" r="1"></circle></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.2 1.3-4A8 8 0 1 1 20 11.7Z"></path><path d="M8.5 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c.7 1.2 1.6 1.8 2.8 2.2l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.1.1.2.3.2.6-.2.8-.8 1.3-1.6 1.4-2 .1-5.5-1.7-6.6-4.7-.3-.9.1-1.9.7-2.5Z"></path></svg>'
};

window.renderShell = (activePage = '') => {
  const header = document.querySelector('[data-site-header]');
  const footer = document.querySelector('[data-site-footer]');
  const logo = '<img src="./images/logo/phone-plus-logo.png" alt="Phone Plus" width="220" height="157">';
  const messageIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.8 7.5 8.7 8.7 0 0 1-3.2-.6L4 20l1.6-4.2A7.3 7.3 0 0 1 4.5 12a7.5 7.5 0 0 1 15-0.5Z"></path><path d="M8 12h.01M12 12h.01M16 12h.01"></path></svg>';
  const cartIcon = actionIcon.cart;
  const menuIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>';
  const navLinks = `<a class="${activePage === 'shop' ? 'active' : ''}" href="./shop.html">Shop</a><a class="${activePage === 'about' ? 'active' : ''}" href="./about.html">About</a><a class="${activePage === 'contact' ? 'active' : ''}" href="./contact.html">Contact</a>`;
  if (header) {
    header.innerHTML = `<div class="header-inner"><a class="logo" href="./index.html" aria-label="Phone Plus home">${logo}</a><nav class="primary-nav" aria-label="Main navigation">${navLinks}</nav><div class="header-actions"><a class="header-icon" href="./contact.html" aria-label="Contact Phone Plus" title="Contact us">${messageIcon}</a><a class="cart-link" href="./cart.html" aria-label="Shopping cart" title="Cart">${cartIcon}<span data-cart-count>0</span></a><details class="mobile-nav"><summary aria-label="Open navigation" aria-expanded="false">${menuIcon}</summary><nav aria-label="Mobile navigation">${navLinks}</nav></details></div></div>`;
    const mobileNav = header.querySelector('.mobile-nav');
    const summary = mobileNav.querySelector('summary');
    const syncMenu = () => {
      const isOpen = mobileNav.open;
      summary.setAttribute('aria-expanded', String(isOpen));
      summary.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('mobile-menu-open', isOpen);
    };
    mobileNav.addEventListener('toggle', syncMenu);
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { mobileNav.open = false; syncMenu(); }));
    document.addEventListener('pointerdown', (event) => { if (mobileNav.open && !mobileNav.contains(event.target)) { mobileNav.open = false; syncMenu(); } });
    window.addEventListener('resize', () => { if (window.innerWidth > 820 && mobileNav.open) { mobileNav.open = false; syncMenu(); } });
    syncMenu();
  }
  if (footer) footer.innerHTML = `<div><a class="logo" href="./index.html">${logo}</a><p>${config.delivery}</p></div><div class="social-links" aria-label="Social media links"><a href="${config.socialLinks.instagram}" aria-label="Instagram" title="Instagram">${socialIcon.instagram}</a><a href="${config.socialLinks.whatsapp}" aria-label="WhatsApp" title="WhatsApp">${socialIcon.whatsapp}</a><a href="${config.socialLinks.tiktok}" aria-label="TikTok" title="TikTok">${socialIcon.tiktok}</a><a href="${config.socialLinks.facebook}" aria-label="Facebook" title="Facebook">${socialIcon.facebook}</a><a href="${config.socialLinks.x}" aria-label="X" title="X">${socialIcon.x}</a></div><div class="footer-contact"><p>${config.location}</p><a href="./contact.html">Contact</a></div>`;
  window.updateCartBadge();
};
window.updateCartBadge = () => document.querySelectorAll('[data-cart-count]').forEach((badge) => { badge.textContent = window.cartCount(); });
window.productVisual = (product) => `<div class="product-visual ${product.condition === 'Ex-UK' ? 'ex-uk' : ''}" aria-label="${product.brand} ${product.model}">${product.images && product.images[0] ? `<img src="${product.images[0]}" alt="${product.brand} ${product.model}">` : `<div class="phone-shape"><span>${product.brand}</span></div>`}</div>`;
window.productCard = (product) => `<article class="product-card"><a href="./product.html?id=${product.id}">${window.productVisual(product)}<div class="product-card-body"><span class="condition-tag condition-${product.condition.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}">${product.condition}</span><h3>${product.brand} ${product.model}</h3><p>${product.storage}${product.ram ? ` · ${product.ram}` : ''}</p><strong>${window.formatPrice(product.priceKes)}</strong></div></a><button class="text-button add-product" type="button" data-product-id="${product.id}" ${product.priceKes === null ? 'disabled' : ''}>${product.priceKes === null ? 'Details pending' : `${actionIcon.cart}<span>Add</span>`}</button></article>`;
window.bindAddButtons = () => document.querySelectorAll('.add-product').forEach((button) => button.addEventListener('click', () => { window.addToCart(button.dataset.productId); window.updateCartBadge(); button.innerHTML = `${actionIcon.cart}<span>Added</span>`; }));
