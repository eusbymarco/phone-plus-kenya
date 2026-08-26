window.PHONE_PLUS_CATEGORIES = [
  'Samsung', 'Apple', 'Tecno', 'Infinix', 'OPPO', 'Xiaomi', 'Redmi', 'Itel', 'Vivo', 'Nokia', 'Google'
];

window.PHONE_PLUS_FILTERS = {
  conditions: ['Brand New', 'Ex-UK / Used'],
  prices: [
    { value: '0-20000', label: 'Under KSh 20,000', min: 0, max: 20000 },
    { value: '20000-50000', label: 'KSh 20,000 - 50,000', min: 20000, max: 50000 },
    { value: '50000-plus', label: 'Over KSh 50,000', min: 50000, max: Infinity }
  ],
  storages: ['64GB', '128GB', '256GB', '512GB'],
  rams: ['4GB', '6GB', '8GB', '12GB']
};

window.PHONE_PLUS_PRODUCTS = [
  {
    id: 'iphone-15-128gb', brand: 'Apple', category: 'Apple', model: 'iPhone 15', storage: '128GB', ram: null,
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: [],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'samsung-s24-256gb', brand: 'Samsung', category: 'Samsung', model: 'Galaxy S24', storage: '256GB', ram: '8GB',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-s24-256gb/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-reno-15f-5g', brand: 'OPPO', category: 'OPPO', model: 'Reno 15F 5G', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-reno-15f-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-reno-15-pro', brand: 'OPPO', category: 'OPPO', model: 'Reno 15 Pro', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-reno-15-pro/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-reno-15-5g', brand: 'OPPO', category: 'OPPO', model: 'Reno 15 5G', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-reno-15-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-find-x9', brand: 'OPPO', category: 'OPPO', model: 'Find X9', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-find-x9/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-find-x9-ultra', brand: 'OPPO', category: 'OPPO', model: 'Find X9 Ultra', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-find-x9-ultra/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-find-x9-pro', brand: 'OPPO', category: 'OPPO', model: 'Find X9 Pro', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-find-x9-pro/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-a78-4g', brand: 'OPPO', category: 'OPPO', model: 'A78 4G', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-a78-4g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-a6x-4g', brand: 'OPPO', category: 'OPPO', model: 'A6X 4G', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-a6x-4g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-a6-pro-5g', brand: 'OPPO', category: 'OPPO', model: 'A6 Pro 5G', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-a6-pro-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-a6-4g', brand: 'OPPO', category: 'OPPO', model: 'A6 4G', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-a6-4g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-a58-5g', brand: 'OPPO', category: 'OPPO', model: 'A58 5G', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-a58-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'oppo-a18', brand: 'OPPO', category: 'OPPO', model: 'A18', storage: 'Add storage details', ram: 'Add RAM details',
    color: 'Add color', condition: 'Brand New', batteryHealth: null, network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/oppo/oppo-a18/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'pixel-8-128gb', brand: 'Google', category: 'Google', model: 'Pixel 8', storage: '128GB', ram: '8GB',
    color: 'Add color', condition: 'Ex-UK / Used', batteryHealth: 'Add battery health', network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: [],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'samsung-galaxy-a27-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy A27 5G', storage: '128GB, 256GB', ram: '6GB, 8GB',
    color: 'Black, Blue, Light Green, Light Pink', condition: 'new', battery: '5000mAh, 25W', network: '5G', warranty: '1 Year Manufacturer Warranty',
    priceKes: 35000, stockStatus: 'in stock', images: ['./images/products/samsung/samsung-galaxy-a27-5g/1.jpeg'],
    specifications: { display: '6.7 inches, Super AMOLED', processor: 'Qualcomm Snapdragon 6 Gen 3 (4 nm)', camera: '12 MP Selfie lens; 50 MP + 5MP + 2 MP Primary Camera', operatingSystem: 'Android 16' }
  },
  {
    id: 'samsung-galaxy-a37-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy A37 5G', storage: '128GB, 256GB', ram: '6GB, 8GB, 12GB',
    color: 'Graygreen, Charcoal, White, Light Violet', condition: 'New', battery: '5000mAh, 45W', network: '5G', warranty: '1 Year Manufacturer Warranty',
    priceKes: 43000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-a37-5g/1.jpeg'],
    specifications: { display: '6.7-inch, Super AMOLED', processor: 'Exynos 1480 (4 nm)', camera: '50MP + 8MP + 5MP', operatingSystem: 'Android 16, up to 6 major Android upgrades, One UI 8.5' }
  },
  {
    id: 'samsung-galaxy-a57-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy A57 5G', storage: '128GB / 256GB', ram: '8GB, 12GB',
    color: 'Navy, Gray, Icyblue, Lilac', condition: 'New', battery: '5000mAh, 45W Super Fast Charging', network: '5G', warranty: '1 Year Manufacturer Warranty',
    priceKes: 46000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-a57-5g/1.jpeg'],
    specifications: { display: '6.7-inch FHD+ Super AMOLED Plus, 120Hz, Vision Booster', processor: 'Exynos 1680 (4nm), Xclipse 550 GPU', camera: '50MP (OIS) + 12MP (ultra-wide) + 5MP (macro)', operatingSystem: 'Android 16, One UI 8.5' }
  },
  {
    id: 'samsung-galaxy-m07-4g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy M07 4G', storage: 'Details pending', ram: '4GB',
    color: 'Details pending', condition: 'New', battery: '5,000mAh with 25W wired fast charger.', network: '4G', warranty: 'NO LOCAL WARRANTY',
    priceKes: 15000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-m07-4g/1.jpeg'],
    specifications: { display: 'Mint Green', processor: 'MediaTek Helio G99 (6 nm)', camera: '50MP main dual camera', operatingSystem: 'Mediatek Helio G85 (12 nm)' }
  },
  {
    id: 'samsung-galaxy-m17e-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy M17e 5G', storage: '128GB', ram: '4G,6GB',
    color: 'Blitz Blue, Vibe Violet', condition: 'New', battery: '6000mAh, 25W', network: '5G', warranty: 'NO LOCAL WARRANTY',
    priceKes: 20500, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-m17e-5g/1.jpeg'],
    specifications: { display: '6.7-inch PLS LCD screen with a 120Hz refresh rate.', processor: 'MediaTek Dimensity 6300 (6 nm).', camera: '50MP main rear camera with an auxiliary lens, plus an 8MP front selfie camera.', operatingSystem: 'Android 16, One UI 8' }
  },
  {
    id: 'samsung-galaxy-s26-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy S26 5G', storage: '256GB', ram: '12GB',
    color: 'Cobalt Violet, Sky Blue, Black, White, Silver Shadow, Pink Gold', condition: 'New', battery: '4300mAh, 25W', network: '5G', warranty: '1 Year Manufacturer Warranty',
    priceKes: 100000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-s26-5g/1.jpeg'],
    specifications: { display: '6.3 inches, Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)', processor: 'Snapdragon 8 Elite Gen 5 (or Exynos 2600 depending on region)', camera: '50MP main, 10MP telephoto (3x optical zoom), and 12MP ultra-wide', operatingSystem: 'Android 16' }
  },
  {
    id: 'samsung-galaxy-s26-plus-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy S26 Plus 5G', storage: '256GB, 512GB', ram: '12GB',
    color: 'Cobalt Violet, Sky Blue, Black, White, Silver Shadow, Pink Gold', condition: 'New', battery: '4900mAh, 25W', network: ' 5G', warranty: '1 Year Manufacturer Warranty',
    priceKes: 111000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-s26-plus-5g/1.jpeg'],
    specifications: { display: '6.7 inches, Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)', processor: 'Qualcomm Snapdragon 8 Elite Gen 5 (or Exynos 2600 depending on region)', camera: '50MP main, 10MP telephoto (3x optical zoom), and 12MP ultra-wide', operatingSystem: 'Android 16' }
  },
  {
    id: 'samsung-galaxy-s26-ultra-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy S26 Ultra 5G', storage: '256GB, 512GB, 1TB', ram: '12GB, 16GB',
    color: 'Cobalt Violet, Sky Blue, Black, White', condition: 'New', battery: '5000mAh, 60W', network: '5G', warranty: '1 Year Manufacturer Warranty',
    priceKes: 122000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-s26-ultra-5g/1.jpeg'],
    specifications: { display: '6.9 inches, Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)', processor: 'Qualcomm Snapdragon 8 Elite Gen 5.', operatingSystem: 'Android 16' }
  },
  {
    id: 'samsung-galaxy-z-flip8', brand: 'Samsung', category: 'Samsung', model: 'Galaxy Z Flip8', storage: '256GB', ram: '12GB',
    color: 'Graphite, Cream, Pink, Mint', condition: 'New', battery: '4,300mAh, 25W wired fast charging, 15W wireless charging, 4.5W reverse wireless charging', network: 'Details pending', warranty: '5G',
    priceKes: 143000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-z-flip8/1.jpeg'],
    specifications: { display: ' 6.9-inch Dynamic LTPO AMOLED 2X, 120Hz refresh rate, peak brightness of 2,600 nits,Cover: 4.1-inch Super AMOLED FlexWindow', processor: 'Qualcomm Snapdragon 8 Elite Gen 5 for Galaxy (or Exynos 2600 depending on the region).', camera: 'Dual 50MP wide (OIS) + 12MP ultra-wide rear cameras, and a 10MP front selfie camera.', operatingSystem: 'Android 16' }
  },
  {
    id: 'samsung-galaxy-z-fold8', brand: 'Samsung', category: 'Samsung', model: 'Galaxy Z Fold8', storage: '256GB, 512GB, 1TB', ram: '12GB, 16GB',
    color: 'Graphite, Cream, Violet, Shadow Blue', condition: 'New', batteryHealth: 'Detailed', network: '5G', warranty: '1 Year Manufacturer Warranty',
    priceKes: 210000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-z-fold8/1.jpeg'],
    specifications: { display: '5.5 (Folded) 7.6 inches (Unfolded), Foldable Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)', processor: 'Qualcomm Snapdragon 8 Elite Gen 5 for Galaxy', camera: ' 50MP dual main camera setup and a 10MP front lens (with the Fold 8 Ultra variant offering an upgraded 200MP main camera', operatingSystem: 'Android 17, up to 7 major Android upgrades, One UI 9' }
  },
  {
    id: 'samsung-galaxy-z-fold8-ultra', brand: 'Samsung', category: 'Samsung', model: 'Galaxy Z Fold8 Ultra', storage: '256GB, 512GB, 1TB', ram: '12GB, 16GB',
    color: 'Graphite, Cream, Violet, Shadow Blue', condition: 'New', battery: '5,000mAh Silicon-Carbon Battery, 45W wired, 20W wireless, 4.5W reverse wireless charging', network: ' 5G', warranty: '1 Year Manufacturer Warranty',
    priceKes: 225000, stockStatus: 'In stock', images: ['./images/products/samsung/samsung-galaxy-z-fold8-ultra/1.jpeg'],
    specifications: { display: '6.5-inch (Folded), 8.0-inch (Unfolded), Foldable Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 3,000 nits (peak)', processor: 'Qualcomm Snapdragon 8 Elite Gen 5 (3nm)', camera: '200MP main rear camera, 50MP ultra-wide sensor (F1.9), and a 10MP telephoto lens with 3x optical zoom.', operatingSystem: ' Android 17 with One UI 9' }
  }
];

window.getProduct = (id) => window.PHONE_PLUS_PRODUCTS.find((product) => product.id === id);

window.filterProducts = ({ query = '', brand = '', condition = '', price = '', storage = '', ram = '' } = {}) => {
  const normalizedQuery = query.trim().toLowerCase();
  const priceRange = window.PHONE_PLUS_FILTERS.prices.find((option) => option.value === price);
  return window.PHONE_PLUS_PRODUCTS.filter((product) => {
    const matchesQuery = !normalizedQuery || `${product.brand} ${product.model}`.toLowerCase().includes(normalizedQuery);
    const matchesBrand = !brand || product.category === brand;
    const matchesCondition = !condition || product.condition === condition;
    const matchesPrice = !priceRange || (product.priceKes !== null && product.priceKes >= priceRange.min && product.priceKes < priceRange.max);
    const matchesStorage = !storage || product.storage === storage;
    const matchesRam = !ram || product.ram === ram;
    return matchesQuery && matchesBrand && matchesCondition && matchesPrice && matchesStorage && matchesRam;
  });
};
