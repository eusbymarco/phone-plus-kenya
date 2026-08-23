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
    id: 'pixel-8-128gb', brand: 'Google', category: 'Google', model: 'Pixel 8', storage: '128GB', ram: '8GB',
    color: 'Add color', condition: 'Ex-UK / Used', batteryHealth: 'Add battery health', network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: [],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'samsung-galaxy-a27-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy A27 5G', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-a27-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-a37-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy A37 5G', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-a37-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-a57-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy A57 5G', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-a57-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-m07-4g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy M07 4G', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-m07-4g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-m17e-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy M17e 5G', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-m17e-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-s26-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy S26 5G', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-s26-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-s26-plus-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy S26 Plus 5G', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-s26-plus-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-s26-ultra-5g', brand: 'Samsung', category: 'Samsung', model: 'Galaxy S26 Ultra 5G', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-s26-ultra-5g/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-z-flip8', brand: 'Samsung', category: 'Samsung', model: 'Galaxy Z Flip8', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-z-flip8/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-z-fold8', brand: 'Samsung', category: 'Samsung', model: 'Galaxy Z Fold8', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-z-fold8/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
  },
  {
    id: 'samsung-galaxy-z-fold8-ultra', brand: 'Samsung', category: 'Samsung', model: 'Galaxy Z Fold8 Ultra', storage: 'Details pending', ram: 'Details pending',
    color: 'Details pending', condition: 'Details pending', batteryHealth: 'Details pending', network: 'Details pending', warranty: 'Details pending',
    priceKes: null, stockStatus: 'Details pending', images: ['./images/products/samsung/samsung-galaxy-z-fold8-ultra/1.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Details pending', processor: 'Details pending', camera: 'Details pending', operatingSystem: 'Details pending' }
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
