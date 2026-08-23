# Phone Plus

Mobile-first storefront foundation for Phone Plus, a phone retailer based in Mombasa Town, Kenya.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000` in a browser.

## Pages

The V1 foundation includes home, shop phones, product details, cart, checkout, about, and contact pages. The cart uses browser `localStorage`; checkout prepares an order for WhatsApp.

## Add business data

- Set the official WhatsApp number and `whatsappConfigured` in `public/js/config.js`.
- Replace the five `#` values in `public/js/config.js` with the official Instagram, WhatsApp, TikTok, Facebook, and X profile links.
- Replace the placeholder catalog entries and `null` prices in `public/js/products.js`.
- Add optimized product images under `public/images/products/` and reference them in the catalog.
- Add confirmed warranty, delivery, contact, and opening-hour details to the relevant page/configuration.

Until these values are supplied, products intentionally show `Price on request` and cannot be added to cart.
