window.PHONE_PLUS_CATEGORIES = [
  'Samsung', 'Apple', 'Tecno', 'Infinix', 'OPPO', 'Xiaomi', 'Redmi', 'Itel', 'Vivo', 'Nokia', 'Google'
];

window.PHONE_PLUS_FILTERS = {
  conditions: ['Brand New', 'Ex-UK'],
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
    id: 'iphone-17', brand: 'Apple', category: 'Apple', model: 'iPhone 17', storage: '256GB,512GB', ram: '8GB',
    color: 'Black, White, Mist Blue, Sage, Lavender.', condition: 'Brand New', batteryHealth:'3692mAh,Wired, PD2.0, 50% in 20 min' , network: '5G (Nano-SIM + eSIM + eSIM), Wifi 7, Bluetooth 6.0, NFC, GPS',
    warranty: 'Warranty registration is the customer\'s responsibility', priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/iPhone 17.jpeg'],
    shortDescription: 'A premium next-generation iPhone featuring a powerful performance, advanced camera system, vibrant display, and all-day battery life. Designed for smooth everyday use, photography, gaming, and entertainment.',
    specifications: { display: '6.3-inch LTPO Super Retina XDR OLED', processor: 'Apple A19 (3 nm)', camera: '48M + 48MP Selfie Lens: 18MP', operatingSystem: 'iOS 26' }
  },
  {
    id: 'iphone-17-pro', brand: 'Apple', category: 'Apple', model: 'iPhone 17 Pro', storage: '256GB, 512GB, 1TB', ram: '12GB',
    color: 'Silver, Cosmic Orange, Deep Blue.', condition: 'Brand New', batteryHealth:'3988 mAh' , network: '5G, Nano-SIM, eSIM, Wi-Fi 7',
    warranty: 'Warranty registration is the customer\'s responsibility', priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/iPhone 17 Pro.jpeg'],
    shortDescription: 'A powerful premium iPhone designed for high performance, advanced photography, smooth everyday use, gaming, and all-day productivity',
    specifications: { display: '6.3-inch LTPO Super Retina XDR OLED', processor: 'Apple A19 pro (3 nm)', camera: '48M + 48MP Selfie Lens: 18MP', operatingSystem: 'iOS 26' }
  },
  {
    id: 'iphone-17-pro-max', brand: 'Apple', category: 'Apple', model: 'iPhone 17 Pro Max', storage: '256GB, 512GB, 1TB, 2TB', ram: '12GB',
    color: 'Silver, Cosmic Orange, Deep Blue.', condition: 'Brand New', batteryHealth:'Li-Ion 4832 mAh – Nano SIM model; 5088 mAh – eSIM only model Wired, PD2.0, 50% in 20 min 25W wireless MagSafe/Qi2, 50% in 30 min (15W – China)' , network: '5G (Nano-SIM + eSIM + eSIM), Wifi 7, Bluetooth 6.0, NFC, GPS',
    warranty: 'Warranty registration is the customer\'s responsibility', priceKes: 163000, stockStatus: 'in stock', images: ['./images/products/apple/iPhone 17 Pro Max.jpeg'],
    shortDescription: 'The ultimate iPhone for performance and power, featuring a stunning display, advanced camera system, powerful performance, and exceptional battery life. Perfect for photography, gaming, entertainment, and demanding everyday use.',
    specifications: { display: '6.9-inch LTPO Super Retina XDR OLED', processor: 'Apple A19 pro (3 nm)', camera: '48M + 48MP + 48MP Selfie Lens: 18MP', operatingSystem: 'iOS 26' }
  },
  {
    id: 'ex-uk-iphone-16-pro', brand: 'Apple', category: 'Apple', model: 'iPhone 16 Pro', storage: '128GB, 256GB', ram: '8GB',
    color: 'Black Titanium, White Titanium, Natural Titanium, Desert Titanium', condition: 'Ex-UK', batteryHealth: '3,582 mAh', network: '5G, Nano-SIM, eSIM, Wi-Fi 7',
    warranty: 'Warranty registration is the customer\'s responsibility', priceKes: 114000, stockStatus: 'in stock', images: ['./images/products/apple/ex uk/iPhone 16 pro.jpeg'],
    shortDescription: 'A premium iPhone built for powerful performance, advanced photography, a stunning display, and smooth everyday use. Ideal for gaming, content creation, entertainment, and productivity.',
    specifications: { display: '6.3 inches', processor: 'Apple A18 Pro (3 nm)', camera: '48MP + 12 MP + 48MP Selfie: 12MP + SL 3D', operatingSystem: 'iOS 26' }
  },
  {
    id: 'ex-uk-iphone-16-pro-max', brand: 'Apple', category: 'Apple', model: 'iPhone 16 Pro Max', storage: '256GB', ram: '8GB',
    color: 'Black Titanium, White Titanium, Natural Titanium, Desert Titanium', condition: 'Ex-UK', batteryHealth: '4,685mAh (29 hours of video playback, 95 hours of audio playback)', network: '5G, Nano-SIM, eSIM, Wi-Fi 7',
    warranty: 'Warranty registration is the customer\'s responsibility', priceKes: 155000, stockStatus: 'in stock', images: ['./images/products/apple/ex uk/iPhone 16 pro max.jpeg'],
    shortDescription: 'A premium flagship iPhone featuring powerful performance, a stunning large display, advanced camera capabilities, and exceptional battery life. Perfect for photography, gaming, content creation, and everyday productivity.',
    specifications: { display: '6.9 inches', processor: 'Apple A18 Pro Bionic', camera: '48MP + 12 MP + 48MP Selfie: 12MP + SL 3D', operatingSystem: 'iOS 26' }
  },
  {
    id: 'ex-uk-iphone-15-pro', brand: 'Apple', category: 'Apple', model: 'iPhone 15 Pro', storage: '256GB', ram: '8GB',
    color: 'Black Titanium, White Titanium, Natural Titanium, ', condition: 'Ex-UK', batteryHealth: '3274 mAh', network: '5G, Nano-SIM, eSIM, Wi-Fi',
    warranty: '1 year', priceKes: 86000, stockStatus: 'in stock', images: ['./images/products/apple/ex uk/iPhone 15 pro.jpeg'],
    shortDescription: 'A powerful premium iPhone featuring a stunning Pro display, advanced camera system, fast performance, and a sleek titanium design. Perfect for photography, gaming, content creation, and everyday productivity.',
    specifications: { display: '6.1 inches, OLED, 120Hz', processor: 'Apple A17 Pro (3 nm)', camera: '48MP + 12MP + 12MP + TOF 3D LiDAR Selfie: 12MP + SL 3D', operatingSystem: 'iOS 26' }
  },
  {
    id: 'ex-uk-iphone-15-pro-max', brand: 'Apple', category: 'Apple', model: 'iPhone 15 Pro Max', storage: '256GB', ram: '8GB',
    color: 'Black Titanium, White Titanium, Natural Titanium, ', condition: 'Ex-UK', batteryHealth: '4323 mAh', network: '5G, Nano-SIM, eSIM, Wi-Fi',
    warranty: '1 year', priceKes: 94000, stockStatus: 'in stock', images: ['./images/products/apple/ex uk/iPhone 15 pro max.jpeg'],
    shortDescription: 'A premium flagship iPhone with powerful performance, a large Pro display, advanced camera system, and excellent battery life. Perfect for photography, gaming, content creation, and demanding everyday use.',
    specifications: { display: '6.7 inches, OLED, 120Hz', processor: 'Apple A17 Pro', camera: '48MP + 12MP + 12MP + TOF 3D LiDAR Selfie: 12MP + SL 3D', operatingSystem: 'iOS 26' }
  },
  {
    id: 'ex-uk-iphone-14-pro', brand: 'Apple', category: 'Apple', model: 'iPhone 14 Pro', storage: '256GB', ram: '8GB',
    color: 'Space Black, Silver, Gold, Deep Purple ', condition: 'Ex-UK', batteryHealth: '3Li-Ion 3200 mAh (12.38 Wh)', network: '5G, Nano-SIM, eSIM, Wi-Fi 6',
    warranty: '1 year', priceKes: 69000, stockStatus: 'in stock', images: ['./images/products/apple/ex uk/iPhone 14 pro.jpeg'],
    shortDescription: 'A refined flagship smartphone offering a bright Dynamic Island display, professional-grade cameras, and smooth, responsive performance. A great choice for users who want premium features in a compact Pro design.',
    specifications: { display: '6.1-inch Super Retina XDR OLED (120Hz)', processor: 'Apple A16 Bionic', camera: '12MP + 12MP + TOF 3D LiDAR Selfie: 12MP + SL 3D', operatingSystem: 'iOS 26' }
  },
  {
    id: 'ex-uk-iphone-14-pro-max', brand: 'Apple', category: 'Apple', model: 'iPhone 14 Pro Max', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iPhone 14 pro max.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'ex-uk-iphone-13', brand: 'Apple', category: 'Apple', model: 'iPhone 13', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iPhone 13.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'ex-uk-iphone-13-pro', brand: 'Apple', category: 'Apple', model: 'iPhone 13 Pro', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iPhone 13 pro.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'ex-uk-iphone-13-pro-max', brand: 'Apple', category: 'Apple', model: 'iPhone 13 Pro Max', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iPhone 13 pro max.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'ex-uk-iphone-12', brand: 'Apple', category: 'Apple', model: 'iPhone 12', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iPhone 12.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'ex-uk-iphone-12-pro', brand: 'Apple', category: 'Apple', model: 'iPhone 12 Pro', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iPhone 12 pro.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'ex-uk-iphone-12-pro-max', brand: 'Apple', category: 'Apple', model: 'iPhone 12 Pro Max', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iphone 12 pro max.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'ex-uk-iphone-11', brand: 'Apple', category: 'Apple', model: 'iPhone 11', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iphone 11.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'iOS' }
  },
  {
    id: 'ex-uk-iphone-11-pro', brand: 'Apple', category: 'Apple', model: 'iPhone 11 Pro', storage: 'Details pending', ram: null,
    color: 'Details pending', condition: 'Ex-UK', batteryHealth: 'Details pending', network: 'Details pending',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/apple/ex uk/iphone 11 pro.jpeg'],
    shortDescription: 'Ex-UK iPhone. Product information will be added after stock is confirmed.',
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
    id: 'oppo-reno-15f-5g', brand: 'OPPO', category: 'OPPO', model: 'Reno 15F 5G', storage: '512GB', ram: '12GB',
    color: 'Afterglow Pink, Twilight Blue, Aurora Blue', condition: 'Brand New', batteryHealth: '7000mAh, 80W', network: 'Wi-Fi, Bluetooth  v5.1, USB Type-C 2.0',
    warranty:'1 Year Manufacturer Warranty' , priceKes: 56000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-reno-15f-5g/1.jpeg'],
    shortDescription: '5G Phones, Best Camera Phone, Best Phone for Content Creators, Best Phones Under 60000 in Kenya, Best Value Mid-Rangers, Ksh 50000 to Ksh 55000.',
    specifications: { display: '6.57 MP AMOLED, 120Hz', processor: 'Qualcomm Snapdragon 6 Gen 1 (4 nm)', camera: '50MP main (with OIS) + 8MP ultrawide + 2MP macroFront Camera: 50MP selfie lens', operatingSystem: 'Android 16, ColorOS 16' }
  },
  {
    id: 'oppo-reno-15-pro', brand: 'OPPO', category: 'OPPO', model: 'Reno 15 Pro', storage: ' 512GB', ram: '12GB',
    color: 'Dusk Brown, Aurora Blue', condition: 'Brand New', battery: '6,200mAh, 80W-100%  in 53 minutes.', network: '5G, Wi-Fi 6, Bluetooth 5.4, USB Type-C 2.0',
    warranty: '1 Year Manufacturer Warranty', priceKes: 78000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-reno-15-pro/1.jpeg'],
    shortDescription: '5G Phones, Best Battery Phone, Best Camera Phone, Best Phone for Content Creators, Ksh 65000 to Ksh 85000, Ksh 75000 to Ksh 80000',
    specifications: { display: '6.32-inch LTPO AMOLED, 120Hz refresh rate, 1216 x 2640 resolution', processor: 'MediaTek Dimensity 8450 (4 nm)', camera: 'Rear Cameras: 200MP main (OIS) + 50MP periscope telephoto (3.5x optical zoom, OIS) + 50MP ultra-wideFront Camera: 50MP selfie shooter with autofocus', operatingSystem: 'Android 16, ColorOS 16' }
  },
  {
    id: 'oppo-reno-15-5g', brand: 'OPPO', category: 'OPPO', model: 'Reno 15 5G', storage: '512GB', ram: '12GB',
    color: 'Aurora Blue, Twilight Blue, Aurora White', condition: 'Brand New', battery: '6,500mAh, 80W', network: '5G, Wi-Fi 6, Bluetooth 5.4, USB Type-C 2.0',
    warranty: '1 Year Manufacturer Warranty', priceKes: 65000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-reno-15-5g/1.jpeg'],
    shortDescription: '5G Phones, Best Camera Phone, Best Phone for Content Creators,  IP68 and IP69 water and dust resistance with an aluminum alloy frame',
    specifications: { display: '6.59-inch AMOLED, 120Hz refresh rate, FHD+ resolution (2760 × 1256 pixels)', processor: 'Qualcomm Snapdragon 7 Gen 4 (4 nm)', camera: 'Rear Cameras: 50MP main (OIS) + 50MP periscope telephoto (3.5x optical zoom, OIS) + 8MP ultra-wideFront Camera: 50MP auto-focus selfie camera', operatingSystem: 'Android 16, ColorOS 16' }
  },
  {
    id: 'oppo-find-x9', brand: 'OPPO', category: 'OPPO', model: 'Find X9', storage: '512GB', ram: '16GB',
    color: 'Space Black, Titanium Grey, Velvet Red, White', condition: 'Brand New', battery: '7025mAh, 80W', network: '5G, Wi-Fi 7, Bluetooth 6.0, USB Type-C 3.0',
    warranty: '1 Year Manufacturer Warranty', priceKes: 125000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-find-x9/1.jpeg'],
    shortDescription: 'Best Camera Phone, Best Flagship Performers, Best Phone for Content Creators, Ksh 100000 to Ksh 150000',
    specifications: { display: '6.59-inch AMOLED, 1.5K resolution (2760 × 1256), 120Hz, up to 3,600 nits peak brightness', processor: 'Mediatek Dimensity 9500 (3 nm)', camera: '50MP + 50MP + 50MP Selfie Lens: 32MP', operatingSystem: 'Android 16, up to 5 major Android upgrades, ColorOS 16' }
  },
  {
    id: 'oppo-find-x9-ultra', brand: 'OPPO', category: 'OPPO', model: 'Find X9 Ultra', storage: '1TB (UFS 4.1)', ram: '16GB',
    color: 'Tundra Umber, Canyon Orange, Polar Glacier', condition: 'Brand New', battery: '7050mAh, 100W SUPERVOOC fast charging, 50W wireless charging', network: '5G, Wi-Fi, Bluetooth, GPS, USB Type-C, OTG',
    warranty: '1 Year Manufacturer Warranty', priceKes: 180000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-find-x9-ultra/1.jpeg'],
    shortDescription: 'Stereo speakers,Best Camera Phone, Ksh 150000 to Ksh 200000',
    specifications: { display: '6.82-inch QHD+ LTPO AMOLED, 144Hz adaptive refresh rate', processor: 'Qualcomm Snapdragon 8 Elite Gen 5 (3 nm)', camera: '50MP + 50MP + 50MP Selfie Lens: 32MP', operatingSystem: 'Android 16 with ColorOS 16' }
  },
  {
    id: 'oppo-find-x9-pro', brand: 'OPPO', category: 'OPPO', model: 'Find X9 Pro', storage: '512GB', ram: '16GB',
    color: 'Silk White, Titanium Charcoal, Velvet Red', condition: 'Brand New', battery: ' 7500mAh, 80W', network: '5G, Wi-Fi 7, Bluetooth 6.0, USB Type-C 3.0',
    warranty: '1 Year Manufacturer Warranty', priceKes: 164000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-find-x9-pro/1.jpeg'],
    specifications: { display: '6.78-inch AMOLED', processor: 'Mediatek Dimensity 9500 (3 nm)', camera: '50MP + 200MP + 50MP Selfie Lens: 50MP', operatingSystem: 'Android 16, up to 5 major Android upgrades, ColorOS 16' }
  },
  {
    id: 'oppo-a78-4g', brand: 'OPPO', category: 'OPPO', model: 'A78 4G', storage: '256GB', ram: '8GB',
    color: 'Mist Black, Aqua Green', condition: 'Brand New', battery: '5,000 mAh, 67W', network: 'Dual sim, 4G, Wi-Fi',
    warranty: '1 Year Manufacturer Warranty', priceKes: 35000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-a78-4g/1.jpeg'],
    shortDescription: 'Affordable smartphone with good performance and camera capabilities.',
    specifications: { display: 'Add display details', processor: 'Qualcomm SM6225 Snapdragon 680 4G (6 nm)', camera: '50MP + 2MP Selfie: 8MP', operatingSystem: 'Android 13, ColorOS 13.1' }
  },
  {
    id: 'oppo-a6x-4g', brand: 'OPPO', category: 'OPPO', model: 'A6X 4G', storage: '64GB, 128GB, 256GB', ram: '4GB',
    color: 'Plum Purple, Ice Blue', condition: 'Brand New', battery: '5,000 mAh, 67W', network: '4G LTE, Wi-Fi, Bluetooth 5.0, USB Type-C 2.0',
    warranty: '1 Year Manufacturer Warranty', priceKes: 20500, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-a6x-4g/1.jpeg'],
    shortDescription: '4GB RAM /256GB, Best Phones Under 30k in Kenya, Best Student Phone, Ksh 20000 to Ksh 25000, samsung phones under 25k in kenya',
    specifications: { display: 'Add display details', processor: 'Qualcomm Snapdragon 685 (6 nm)', camera: '13MP Selfie Lens: 5MP', operatingSystem: 'Android 15, ColorOS 15' }
  },
  {
    id: 'oppo-a6-pro-5g', brand: 'OPPO', category: 'OPPO', model: 'A6 Pro 5G', storage: '256GB', ram: ' 8GB',
    color: 'Stellar Blue, Rosewood Red', condition: 'Brand New', battery: '6500mAh, 80W wired', network: '5G, Bluetooth 5.4, GPS, NFC, USB 2.0',
    warranty: '1 Year Manufacturer Warranty', priceKes: 51000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-a6-pro-5g/1.jpeg'],
    shortDescription: 'highly dependable mid-range smartphone if you prioritize extreme battery life, extreme physical durability, and a smooth display over heavy gaming or advanced camera features..',
    specifications: { display: '6.57-inch AMOLED', processor: 'Octa-core Mediatek Dimensity 6300 (6nm)', camera: '50MP + 2MP Selfie lens: 16MP', operatingSystem: 'Android 15, ColorOS 15' }
  },
  {
    id: 'oppo-a6-4g', brand: 'OPPO', category: 'OPPO', model: 'A6 4G', storage: '64GB, 128GB, 256GB', ram: ' 4GB',
    color: 'Plum Purple, Ice Blue', condition: 'Brand New', battery: '6100mAh, 5W Reverse Wired', network: '4G LTE, Wi-Fi, Bluetooth 5.0, USB Type-C 2.0',
    warranty: '1 Year Manufacturer Warranty', priceKes: 20500, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-a6-4g/1.jpeg'],
    shortDescription: '4GB RAM /256GB, Best Phones Under 30k in Kenya, Best Student Phone, Ksh 20000 to Ksh 25000, samsung phones under 25k in kenya',
    specifications: { display: '6.75-inch IPS LCD, 120Hz', processor: 'Qualcomm Snapdragon 685 (6 nm)', camera: '13MP Selfie Lens: 5MP', operatingSystem: 'Android 15, ColorOS 15' }
  },
  {
    id: 'oppo-a58-5g', brand: 'OPPO', category: 'OPPO', model: 'A58 5G', storage: '128GB', ram: '8GB',
    color: 'Glowing Black, Dazzling Green', condition: 'Brand New', battery: '5000mAh, 33W', network: 'Dual sim, 4G, Wi-Fi',
    warranty: '1 Year Manufacturer Warranty', priceKes: 29000, stockStatus: 'In Stock', images: ['./images/products/oppo/oppo-a58-5g/1.jpeg'],
    shortDescription: 'a good budget phone for everyday tasks like calling, texting, social media, and light streaming.',
    specifications: { display: '6.72 inch, IPS LCD, 90Hz', processor: 'MediaTek Helio G85', camera: '50MP + 2MP Selfie: 8MP', operatingSystem: 'Android 13, ColorOS 13.1' }
  },
  {
    id: 'oppo-a18', brand: 'OPPO', category: 'OPPO', model: 'A18', storage: '64GB, 128GB', ram: ' 4GB',
    color: 'Glowing Black and Glowing Blue', condition: 'Brand New', battery: '5000mAh, 33W', network: 'Add SIM details',
    warranty: 'No Warranty', priceKes: 16500, stockStatus: 'in stock', images: ['./images/products/oppo/oppo-a18/1.jpeg'],
    shortDescription: 'a good phone only if you need a very cheap device for basic daily tasks like calling, texting, and light social media.',
    specifications: { display: '6.56-inch HD+ IPS LCD with a 90Hz refresh rate', processor: 'MediaTek Helio G85 (12nm)', camera: '8MP main sensor and 2MP portrait lensFront Camera: 5MP selfie shooter', operatingSystem: 'Android 13,ColorOS 13.1' }
  },
  {
    id: 'infinix-smart-20', brand: 'Infinix', category: 'Infinix', model: 'Smart 20', storage: '64GB, 128GB', ram: '4GB',
    color: 'Shadow Black, Cloudline Blue, Polaris Titanium, Sunlike Orange', condition: 'Brand New', battery: '5200mAh, 15W wired', network: '4G, Wi-Fi, 3.5mm jack port, FM Radio, Bluetooth, NFC, Infrared port',
    warranty: '1 Year Manufacturer Warranty', priceKes: 16000, stockStatus: 'In Stock', images: ['./images/products/infinix/infinix Smart 20.jpeg'],
    shortDescription: 'A stylish and affordable smartphone made for everyday life, delivering smooth performance, a vibrant display, reliable cameras, and dependable battery life. Perfect for social media, entertainment, and staying connected without breaking the budget.',
    specifications: { display: '6.78-inch IPS LCD', processor: 'Mediatek Helio G81 Ultimate (12 nm)', camera: ' 8MP Primary lens, 8MP selfie lens', operatingSystem: 'Android 16, XOS 16' }
  },
  {
    id: 'infinix-note-edge', brand: 'Infinix', category: 'Infinix', model: 'Note Edge', storage: '256GB', ram: '8GB',
    color: 'Silk Green, Lunar titanium, Shadow Black, Stellar Blue', condition: 'Brand New', battery: '6,150 mAh, 45W wired', network: '5G, Wi-Fi 6, Bluetooth 5.4, USB Type-C, Infrared Port',
    warranty: '1 Year Manufacturer Warranty', priceKes: 34500, stockStatus: 'In Stock', images: ['./images/products/infinix/infinix Note EDGE.jpeg'],
    shortDescription: 'delivers a strong balance of modern design, durability, performance, and long-lasting power, making it a competitive mid-range option in 2026.',
    specifications: { display: '6.67-inch IPS LCD, 120Hz, 4500 nits', processor: 'Mediatek Dimensity 7100 (6nm)', camera: ' 50MP Primary lens, 13MP selfie lens', operatingSystem: 'Android 16, XOS 16 Upgradable up to 3 Versions' }
  },
  {
    id: 'infinix-note-60-pro', brand: 'Infinix', category: 'Infinix', model: 'Note 60 Pro', storage: '256GB', ram: '8GB',
    color: ' Mist Titanium, Deep Ocean Blue, Solar Orange, Mocha Brown, Torino Black, Frost Silver', condition: 'Brand New', battery: '6000mAh 90W wired', network: '5G, Wi-Fi 6, Bluetooth 5.4, USB Type-C, Infrared Port',
    warranty: '1 Year Manufacturer Warranty', priceKes: 34500, stockStatus: 'In Stock', images: ['./images/products/infinix/infinix note 60 pro.jpeg'],
    shortDescription: 'A powerful and versatile smartphone designed for users who demand high performance and advanced features.',
    specifications: { display: '6.78-inch IPS LCD, 120Hz, 4500 nits', processor: ' Qualcomm SM7635-AC Snapdragon 7s Gen 4 (4 nm)', camera: ' 50MP +8MP  Secondary lens, 13MP selfie lens', operatingSystem: 'Android 16, up to 3 major Android upgrades, XOS 16' }
  },
  {
    id: 'infinix-note-50-pro', brand: 'Infinix', category: 'Infinix', model: 'Note 50 Pro', storage: '256GB', ram: ' 8GB',
    color: 'Titanium Grey, Enchanted Purple, Racing Edition, Shadow Black', condition: 'Brand New', battery: '5200mAh, 90W', network: 'G, Wi-Fi, Bluetooth 5.4, GPS, NFC, Infrared port, FM Radio',
    warranty: '1 Year Manufacturer Warranty', priceKes: 32000, stockStatus: 'In Stock', images: ['./images/products/infinix/infinix note 50 pro.jpeg'],
    shortDescription: 'When it comes to performance, it delivers! Running on Android 15, up to 2 major Android upgrades, XOS 15, this phone will serve you right. Friendly UI and the latest Android apps are readily available for your exploration and use.',
    specifications: { display: '6.78 inches, AMOLED', processor: 'Mediatek Helio G100 Ultimate (6nm)', camera: ' 50MP +8MP Secondary lens, 32MP selfie lens', operatingSystem: 'Android 15, up to 2 major Android upgrades, XOS 15' }
  },
  {
    id: 'infinix-hot-70', brand: 'Infinix', category: 'Infinix', model: 'Hot 70', storage: '128GB, 256GB', ram: '4GB, 6GB',
    color: 'Night Pulse, Dive Blue, Silver Dancer, Thermo Orange, Green Texture, Quiet Violet', condition: 'Brand New', battery: '6000mAh, 45W', network: '4G,Bluetooth 5.4, GPS, NFC, FM Radio, Infrared port',
    warranty: '1 Year Manufacturer Warranty', priceKes: 19000, stockStatus: 'In Stock', images: ['./images/products/infinix/Infinix Hot 70.jpeg'],
    shortDescription: 'Powered by the MediaTek Helio G100 Ultimate processor, the Infinix Hot 70 4G handles multitasking, entertainment, and daily applications efficiently.',
    specifications: { display: '6.78-inch, IPS LCD', processor: 'Mediatek Helio G100 Ultimate (6nm)', camera: ' 50MP + Secondary lens, 8MP selfie lens', operatingSystem: 'Android 16, up to 3 major Android upgrades, XOS 16' }
  },
  {
    id: 'infinix-hot-70-pro-5g', brand: 'Infinix', category: 'Infinix', model: 'Hot 70 Pro 5G', storage: '256GB', ram: '8GB',
    color: 'Night Pulse, Dive Blue, Silver Dancer, Thermo Orange, Green Texture, Quiet Violet', condition: 'Brand New', battery: '6000mAh, 45W', network: '5G, Bluetooth 5.4, GPS, NFC, FM Radio, Infrared port',
    warranty: '1 Year Manufacturer Warranty', priceKes: 36500, stockStatus: 'In Stock', images: ['./images/products/infinix/infinix Hot 70 Pro 5G.jpeg'],
    shortDescription: 'Experience fast 5G connectivity, smooth performance, and immersive entertainment with the Infinix Hot 70 Pro 5G. Built for gaming, streaming, social media, and everyday multitasking, it delivers the power and style you want at a competitive price.',
    specifications: { display: '144Hz Smooth Display for Gaming and Entertainment', processor: 'MediaTek Dimensity 7100 5G Performance', camera: ' 50MP Sony IMX882 main AI camera.Front Camera: 13MP selfie lens.', operatingSystem: 'Android 16 with XOS 16' }
  },
  {
    id: 'redmi-17-pro-max', brand: 'Redmi', category: 'Redmi', model: '17 Pro Max', storage: '512GB', ram: '12GB, 16GB',
    color: 'Black, White, Purple, Green', condition: 'Brand New', battery: '7500mAh, 100W wired+ 50W wireless + 22.5W Reverse wired', network: '5G, Bluetooth 5.4, USB-C 3.2, NFC, Infrared port',
    warranty: '1 Year Manufacturer Warranty', priceKes: 129000, stockStatus: 'In Stock', images: ['./images/products/Redmi/Redmi 17 pro max.jpeg'],
    shortDescription: 'Power through your day with the Redmi 17 Pro Max, combining powerful performance, a vibrant display, advanced cameras, and impressive battery endurance. A great choice for gaming, entertainment, photography, and demanding everyday use.',
    specifications: { display: '6.9-inch LTPO AMOLED', processor: 'Qualcomm SM8850-AC Snapdragon 8 Elite Gen 5 (3 nm)', camera: '50MP + 50MP + 50MP Selfie lens: 50MP (wide)', operatingSystem: 'Android 16, HyperOS 3' }
  },
  {
    id: 'redmi-17-4g', brand: 'Redmi', category: 'Redmi', model: '17 4G', storage: ' 128/256GB', ram: '4/6GB',
    color: 'Black, Deep Blue, Lotus Purple, and Oak Green', condition: 'Brand New', battery: 'Si/C Li-Ion 7500 mAh, 45W', network: '4G, WI-FI, Bluetooth 5.4, USB Type-C, NFC, IR',
    warranty: '1 Year Manufacturer Warranty', priceKes: 25000, stockStatus: 'In Stock', images: ['./images/products/Redmi/Redmi 17 4G.jpeg'],
    shortDescription: 'suits users who prioritize large-screen entertainment, exceptional battery endurance, expandable storage, and practical everyday functionality',
    specifications: { display: '6.9-inch IPS LCD', processor: 'Mediatek Helio G91 Ultra (12 nm)', camera: '50MP + 48MP + 48MP Selfie lens: 42MP (wide)', operatingSystem: 'Android 16, HyperOS 3' }
  },
  {
    id: 'redmi-15c', brand: 'Redmi', category: 'Redmi', model: '15C', storage: '128GB, 256GB', ram: '4/6/8GB',
    color: 'Moonlight Blue, Mint Green, Midnight Gray, Twilight Orange', condition: 'Brand New', battery: ' 6,000mAh, 33W.', network: '4G, Wi-fi, 3.5mm jack port, Bluetooth 5.4, NFC',
    warranty: '1 Year Manufacturer Warranty', priceKes: 18500, stockStatus: 'In Stock', images: ['./images/products/Redmi/Redmi 15C.jpeg'],
    shortDescription: ' It redefines what you should expect from a budget smartphone. Built for users who demand speed, stamina, and style, this device delivers exceptional value without cutting corners. Whether you’re a multitasker, gamer, or content creator, the Redmi 15C gives you the tools to do more—faster.',
    specifications: { display: '6.9-inch IPS LCD', processor: 'Mediatek Helio G81 Ultra (12 nm)', camera: ' 50MP + QVGA Selfie Lens: 8MP', operatingSystem: 'Android 15, HyperOS 3' }
  },
  {
    id: 'redmi-a7-pro', brand: 'Redmi', category: 'Redmi', model: 'A7 Pro', storage: '64GB, 128GB', ram: '4GB',
    color: ' Black, Mist Blue, Palm Green, Sunset Orange.', condition: 'Brand New', battery: '6000mAh with 15W fast charging', network: 'G, Wi-Fi, Bluetooth 5.2, USB-C',
    warranty: '1 Year Manufacturer Warranty', priceKes: 15500, stockStatus: 'In Stock', images: ['./images/products/Redmi/redmi a7 pro.jpeg'],
    shortDescription: 'For users in Kenya looking for a budget smartphone with a large display, long battery life, and smooth performance, the Redmi A7 Pro stands out as a reliable, value-driven choice.',
    specifications: { display: '6.9-inch IPS LCD', processor: 'Unisoc T7250 (12 nm)', camera: '13MP Selfie Lens: 8MP', operatingSystem: 'Android 16, HyperOS 3' }
  },
  {
    id: 'redmi-Note-17-pro', brand: 'Redmi', category: 'Redmi', model: 'Note 17 Pro', storage: '128GB, 256GB', ram: '6GB, 8GB, 12GB',
    color: 'Black, White, Blue.', condition: 'Brand New', battery: 'Li-Ion 5800mAh', network: '5G, Wi-Fi, Bluetooth 5.1, NFC, Infrared',
    warranty: '1 Year Manufacturer Warranty', priceKes: 42000, stockStatus: 'In Stock', images: ['./images/products/Redmi/Redmi 17 pro.jpeg'],
    shortDescription: 'Experience rugged brilliance and flagship-grade performance with the Redmi Note 17 Pro—a mid-range marvel built to endure and impress.',
    specifications: { display: '6.77-inch AMOLED', processor: 'Qualcomm SM6475-AB Snapdragon 6 Gen 3 (4 nm)', camera: '50MP + Auxiliary lens, 8MP selfie lens', operatingSystem: 'Android 15, HyperOS 2' }
  },
  {
    id: 'redmi-a7', brand: 'Redmi', category: 'Redmi', model: 'A7', storage: '4GB, with MicroSD option', ram: '3GB',
    color: 'Black, Sky Blue, Orchid Purple.', condition: 'Brand New', battery: ' 5,200mAh', network: '4G',
    warranty: '1 Year Manufacturer Warranty', priceKes: 14000, stockStatus: 'In Stock', images: ['./images/products/Redmi/Redmi A7.jpeg'],
    shortDescription: 'For users in Kenya looking for a budget smartphone with a large display, long battery life, and smooth performance, the Redmi A7 stands out as a reliable, value-driven choice.',
    specifications: { display: '6.88 inches, IPS LCD', processor: 'Octa-core Unisoc T7250 (12nm) chipset.', camera: '3MP AI rear main camera and an 8MP front-facing selfie shooter.', operatingSystem: 'Android 15, HyperOS 2' }
  },
  {
    id: 'redmi-note-15', brand: 'Redmi', category: 'Redmi', model: 'Note 15', storage: '256GB', ram: '8GB',
    color: 'Black, Forest Green, Glacier Blue, Purple', condition: 'Brand New', battery: '6000mAh, 33W', network: 'Wi-Fi, Bluetooth v5.3, USB Type-C 2.0, NFC',
    warranty: '1 Year Manufacturer Warranty', priceKes: 31500, stockStatus: 'In Stock', images: ['./images/products/Redmi/Redmi Note 15.jpeg'],
    shortDescription: 'Designed for users seeking a reliable mid-range phone with strong performance, a premium display, and long battery life, the Redmi Note 15 4G delivers excellent value for money in its segment.',
    specifications: { display: '6.77 MP AMOLED', processor: 'Mediatek Helio G100 Ultra (6 nm)', camera: '108MP + Auxiliary Lens Selfie Lens: 20MP', operatingSystem: 'Android 15, up to 4 major Android upgrades, HyperOS 2' }
  },
  {
    id: 'redmi-note-15-pro', brand: 'Redmi', category: 'Redmi', model: 'Note 15 Pro', storage: ' 256GB', ram: '8GB',
    color: 'Black, Glacier Blue, Mist Purple, Titanium', condition: 'Brand New', battery: '6500mAh, 45W', network: 'Wi-Fi, Bluetooth v5.3, USB Type-C 2.0, NFC',
    warranty: '1 Year Manufacturer Warranty', priceKes: 39000, stockStatus: 'In Stock', images: ['./images/products/Redmi/Redmi Note 15 Pro.jpeg'],
    shortDescription: 'Designed for users seeking a reliable mid-range phone with strong performance, a premium display, and long battery life, the Redmi Note 15 Pro delivers excellent value for money in its segment.',
    specifications: { display: '6.77 MP AMOLED', processor: 'Mediatek Helio G100 Ultra (4 nm)', camera: '200MP + 8MP Selfie Lens: 32MP', operatingSystem: 'Android 15, up to 4 major Android upgrades, HyperOS 2' }
  },
  {
    id: 'redmi-note-15-pro-plus', brand: 'Redmi', category: 'Redmi', model: 'Note 15 Pro Plus', storage: '256GB , 512GB', ram: '8gb,12gb',
    color: 'Glacier Blue, Mocha Brown, Black', condition: 'Brand New', battery: '6500mAh, 100W', network: '5G, Wi-Fi, Bluetooth v5.4, USB Type-C 2.0, NFC',
    warranty: '1 Year Manufacturer Warranty', priceKes: 53000, stockStatus: 'In Stock', images: ['./images/products/Redmi/Redmi Note 15 Pro plus.jpeg'],
    shortDescription: 'The Note is designed for users who want flagship-level performance, advanced photography, and long-lasting reliability in one powerful smartphone. ',
    specifications: { display: '6.83 MP AMOLED', processor: 'Snapdragon 7s Gen 4 (4 nm)', camera: '200MP + 8MP Selfie Lens: 32MP', operatingSystem: 'Android 15, up to 4 major Android upgrades, HyperOS 2' }
  },
  {
    id: 'vivo-v70-5g', brand: 'Vivo', category: 'Vivo', model: 'V70 5G', storage: '256GB, 512GB', ram: '8GB, 12GB',
    color: 'Golden Hour, Alpine Gray (Sand Beige), Sandalwood Brown, Canary (Lemon) Yellow, Authentic Black, Passion Red', condition: 'Brand New', battery: '6500mAh, 90W FlashCharge', network: '5G, NFC, Bluetooth 5.4, GPS, Wi-Fi',
    warranty: '1 Year Manufacturer Warranty', priceKes: 73000, stockStatus: 'In Stock', images: ['./images/products/vivo/Vivo V70 5G.jpeg'],
    shortDescription: '5G Phones, Best Camera Phone, Best Phone for Content Creators, Ksh 65000 to Ksh 85000, Ksh 70000 to Ksh 73000.',
    specifications: { display: '6.59-inch AMOLED, 120Hz, 1260 × 2750 resolution', processor: 'Qualcomm Snapdragon 7 Gen 4 (4 nm)', camera: ' 50MP (wide) + 50MP (telephoto) + 8MP (ultrawide) main lens; 50MP autofocus selfie camera', operatingSystem: 'Android 16, up to 4 major Android upgrades, OriginOS 6' }
  },
  {
    id: 'vivo-v70-fe-5G', brand: 'Vivo', category: 'Vivo', model: 'V70 FE 5G', storage: '256GB, 512GB', ram: '8GB',
    color: 'Ocean Blue, Monsoon Blue, Muse Purple, Northern Lights Purple, Titanium Silver', condition: 'Brand New', battery: '7000mAh, 90W fast charging', network: '5G, Wi-Fi, Bluetooth, GPS, USB Type-C, OTG',
    warranty: '1 Year Manufacturer Warranty', priceKes: 54000, stockStatus: 'In Stock', images: ['./images/products/vivo/Vivo V70 FE 512 gb.jpeg'],
    shortDescription: 'Best Battery Phone, Best Camera Phone, Best Phones Under 60000 in Kenya, Ksh 50000 to Ksh 55000.',
    specifications: { display: '6.83-inch AMOLED, 120Hz refresh rate, 1.5K resolution, up to 1900 nits brightness', processor: 'Slim premium finish with flagship-grade build', camera: 'Primary – 200MP (OIS) + 8MP (ultra-wide); Selfie – up to 32MP', operatingSystem: 'Android 16, OriginOS 6' }
  },
  {
    id: 'vivo-x300-pro', brand: 'Vivo', category: 'Vivo', model: 'X300 Pro', storage: '512GB', ram: '16GB',
    color: 'ABlack, Blue, White, Brown', condition: 'Brand New', battery: '6510mAh, 90W wired', network: '5G, Wi-Fi, Bluetooth 5.4, GPS, NFC, USB 2.0.',
    warranty: '1 Year Manufacturer Warranty', priceKes: 152000, stockStatus: 'In Stock', images: ['./images/products/vivo/Vivo X300 Pro.jpeg'],
    shortDescription: 'The phone is a powerhouse of innovation, blending cutting-edge design with elite performance.',
    specifications: { display: '6.78-inch LTPO AMOLED', processor: 'Mediatek Dimensity 9500 (3 nm)', camera: ' 50MP + 200MP + 50MP Selfie Lens: 50MP', operatingSystem: 'Android 16, up to 4 major Android upgrades, OriginOS 6' }
  },
  {
    id: 'vivo-y05', brand: 'Vivo', category: 'Vivo', model: 'Y05', storage: '64GB, 128GB', ram: '4GB',
    color: 'Voyage Black, Haze Blue, Summit Platinum', condition: 'Brand New', battery: '6500mAh, 15W', network: '4G, 3.5mm jack port, USB-C, Bluetooth 5.2',
    warranty: '1 Year Manufacturer Warranty', priceKes: 18500, stockStatus: 'In Stock', images: ['./images/products/vivo/Vivo Y05.jpeg'],
    shortDescription: 'Best Battery Phone, Best Student Phone, Ksh 15000 to Ksh 20000.',
    specifications: { display: '6.74-inches, IPS LCD', processor: 'Unisoc T7225 (12 nm)', camera: '5MP Selfie, 8MP primary lens', operatingSystem: 'Android 16, OriginOS 6' }
  },
  {
    id: 'vivo-y21d', brand: 'Vivo', category: 'Vivo', model: 'Y21d', storage: '128GB, 256GB', ram: '4GB, 6GB, 8GB',
    color: 'Jade Green, Coral Red', condition: 'Brand New', battery: '6500mAh, 44W', network: '4G, Bluetooth 5.2, USB-C',
    warranty: '1 Year Manufacturer Warranty', priceKes: 22000, stockStatus: 'In Stock', images: ['./images/products/vivo/Vivo Y21d.jpeg'],
    shortDescription: ' It is a rugged smartphone built for real-world resilience, combining military-grade durability with modern design and smart performance.',
    specifications: { display: '6.68-inch IPS LCD', processor: 'T7225 (12nm)', camera: ' 50MP + 0.08MP Auxiliary Lens Selfie lens: 8MP', operatingSystem: 'Android 15, Funtouch OS 15' }
  },
  {
    id: 'vivo-y31d', brand: 'Vivo', category: 'Vivo', model: 'Y31d', storage: '128GB, 256GB', ram: '4GB, 6GB',
    color: 'Feather Gold, Glow White, Starlight Grey', condition: 'Brand New', battery: '7200mAh, 44W', network: '4G, Wi-Fi, Bluetooth 5.1, USB Type-C 2.0',
    warranty: 'No Warranty', priceKes: 28500, stockStatus: 'In Stock', images: ['./images/products/vivo/Vivo Y31d.jpeg'],
    shortDescription: 'Best Phones Under 30k in Kenya, Best Student Phone.',
    specifications: { display: '6.75-inches, IPS', processor: 'Qualcomm Snapdragon 6s 4G Gen 2)', camera: '50MP + Auxiliary Lens Selfie Lens: 8MP', operatingSystem: 'Android 16, OriginOS 6' }
  },
  {
    id: 'vivo-y500-5g', brand: 'Vivo', category: 'Vivo', model: 'Y500 5G', storage: '256GB', ram: '12GB/8GB',
    color: 'Black, Blue, Purple', condition: 'Brand New', battery: '8200mAh, 90W', network: '5G, Wi-Fi 6, Bluetooth 5.4, NFC, GPS, optical under-display fingerprint reader, IP69',
    warranty: '1 Year Manufacturer Warranty', priceKes: 50000, stockStatus: 'In Stock', images: ['./images/products/vivo/Vivo Y500 5g.jpeg'],
    shortDescription: '5G Phones, IP68/IP69+ dust tight and water resistant (high pressure water jets; immersible up to 1.5m for 24 hours).',
    specifications: { display: '6.77-inch AMOLED screen with 1080 × 2392 pixel resolution and a 120Hz refresh rate.', processor: 'MediaTek Dimensity 7300 octa-core chipset', camera: '50MP + Auxiliary Lens Selfie Lens: 8MP', operatingSystem: 'Android 15, OriginOS 5' }
  },
  {
    id: 'vivo-y500', brand: 'Vivo', category: 'Vivo', model: 'Y5004G', storage: '256GB', ram: '6/8GB',
    color: 'Midnight Blue, Pearl White', condition: 'Brand New', battery: '8,100mAh BlueVolt Silicon-Carbon Battery, 44W FlashCharge, Reverse Wired Charging, Bypass Charging', network: '4G LTE, Bluetooth 5.4, USB Type-C 2.0, GPS, Dual-Band Wi-Fi',
    warranty: '1 Year Manufacturer Warranty', priceKes: 43000, stockStatus: 'In Stock', images: ['./images/products/vivo/Vivo Y500.jpeg'],
    shortDescription: '4G Phones, Best Battery Phone, Ksh 30000 to Ksh 42000, Ksh 40000 to Ksh 45000.',
    specifications: { display: 'Add display details', processor: 'Unisoc T7300 (6nm)', camera: ' 50MP Main Camera + Auxiliary Lens, 32MP Front Camera', operatingSystem: 'Android 16, OriginOS 6' }
  },
  {
    id: 'tecno-spark-50', brand: 'Tecno', category: 'Tecno', model: 'Spark 50', storage: '128GB,256GB', ram: '4GB',
    color: 'Ink Black, Titanium Grey, Midnight Blue, Dynamic Orange', condition: 'Brand New', battery: 'Dual cell 5600mAh, 60W Super Charging', network: '4G / 4.5G LTE',
    warranty: '1 Year Manufacturer Warranty', priceKes: 19500, stockStatus: 'In Stock', images: ['./images/products/Tecno/Tecno Spark 50.jpeg'],
    shortDescription: 'A stylish everyday smartphone offering reliable performance, a smooth display, capable cameras,IP64 water and dust resistance and long-lasting battery life. A great choice for entertainment, social media, and daily use.',
    specifications: { display: '6.78-inch IPS LCD', processor: 'Helio G81', camera: ' 50MP primary camera, 8MP selfie lens', operatingSystem: 'Android 16, HIOS 16' }
  },
  {
    id: 'tecno-spark-50-pro', brand: 'Tecno', category: 'Tecno', model: 'Spark 50 Pro', storage: '128GB,256GB', ram: '4GB',
    color: 'Halo Blue / Titanium Grey / Ink Black / Aurora Purple / Bloom Pink', condition: 'Brand New', battery: '6700mAh with 18W fast wired charging', network: '4G / 4.5G LTE Connectivity: Wi-Fi, Bluetooth 5.4, GPS/GNSS, NFC, FM Radio, Infrared, USB Type-C',
    warranty: '1 Year Manufacturer Warranty', priceKes: 25000, stockStatus: 'In Stock', images: ['./images/products/Tecno/Tecno Spark 50 Pro.jpeg'],
    shortDescription: 'A sleek and capable smartphone built for smooth everyday performance, vibrant entertainment, and reliable photography. With generous storage and memory, it’s a great choice for users who want strong features at an affordable price.',
    specifications: { display: '6.78-inch HD+ IPS LCD, 120Hz refresh rate', processor: 'MediaTek Helio G100 Ultimate', camera: ' 8MP selfie camera; 50MP Sony LYTIA 600 main camera lens', operatingSystem: 'Android 16, HIOS 16' }
  },
  {
    id: 'tecno-pova-curve-2-5g', brand: 'Tecno', category: 'Tecno', model: 'POVA Curve 2 5G', storage: '256GB', ram: '12GB',
    color: 'Mystic purple,melting silver,storm Titanium', condition: 'Brand New', battery: '8000mAh, 45W fast charging.', network: '5G, Wi-Fi 6, Bluetooth 5.4, GPS, NFC',
    warranty: '1 Year Manufacturer Warranty', priceKes: 60000, stockStatus: 'In Stock', images: ['./images/products/Tecno/Tecno POVA Curve 2 5G.jpeg'],
    shortDescription: 'A performance-focused 5G smartphone built for fast connectivity, smooth multitasking, immersive entertainment, and gaming.IP64 dust and splash resistance Its generous memory and storage make it ideal for users who want powerful everyday performance.',
    specifications: { display: '6.78-inch 144Hz curved AMOLED', processor: 'MediaTek Dimensity 7100 (6nm)', camera: '50MP + 2MP Front Camera: 13MP', operatingSystem: 'Android 16, HIOS 16' }
  },
  {
    id: 'tecno-pop-20', brand: 'Tecno', category: 'Tecno', model: 'Pop 20', storage: '64GB, 128GB', ram: '4GB',
    color: 'Ink Black, Titanium Grey, Aurora Purple, Galaxy Blue', condition: 'Brand New', battery: '5000mAh', network: 'Dual Nano SIM, 4G LTE, Wi-Fi, Bluetooth, GPS',
    warranty: '1 Year Manufacturer Warranty', priceKes: 15500, stockStatus: 'In Stock', images: ['./images/products/Tecno/Tecno Pop 20.jpeg'],
    shortDescription: 'A practical and affordable smartphone designed for everyday essentials, with dependable performance, a clear display, capable cameras, and a battery built to keep you connected throughout the day.',
    specifications: { display: 'Quad-core UNISOC T7250 processor', processor: 'Quad-core UNISOC T7250 processor', camera: ' 5MP selfie camera; 13MP main camera lens', operatingSystem: 'Android 15, HIOS 15' }
  },
  {
    id: 'tecno-camon-50', brand: 'Tecno', category: 'Tecno', model: 'Camon 50', storage: '256GB', ram: '8GB',
    color: 'Moonlight black, Malachite green, Nebula titanium, Fir green, Lavender mist, Mint', condition: 'Brand New', battery: '6150mAh with 45W fast charging', network: 'Dual Nano SIM, 4G LTE, Wi-Fi, Bluetooth, GPS, USB-C',
    warranty: '1 Year Manufacturer Warranty', priceKes: 35000, stockStatus: 'In Stock', images: ['./images/products/Tecno/Tecno Camon 50.jpeg'],
    shortDescription: 'A stylish camera-focused smartphone designed for everyday creativity, with smooth performance, immersive entertainment, and versatile photography. A strong option for users who value both looks and camera capabilities.',
    specifications: { display: '6.78-inch AMOLED, 1.5K resolution, 144Hz refresh rate', processor: 'MediaTek Helio G100 Ultimate processor', camera: '50MP Front Camera: 32MP', operatingSystem: 'Android 15, HIOS 16' }
  },
  {
    id: 'tecno-camon-50-pro', brand: 'Tecno', category: 'Tecno', model: 'Camon 50 Pro', storage: '256GB', ram: '8GB',
    color: 'Moonlight Black, Nebula Titanium, Malachite Green, Fir Green, Lavender Mist, Ethereal Blue', condition: 'Brand New', battery: '6150mAh battery with 45W fast charging', network: 'Dual Nano SIM, 4G LTE, Wi-Fi, Bluetooth, GPS, USB-C',
    warranty: '1 Year Manufacturer Warranty', priceKes: 42500, stockStatus: 'In Stock', images: ['./images/products/Tecno/Tecno Camon 50 Pro.jpeg'],
    shortDescription: 'A premium camera-focused smartphone combining powerful performance, impressive photography, a vibrant display, and ample storage. Designed for users who want a stylish device for capturing content, gaming, and everyday entertainment.',
    specifications: { display: '6.78-inch AMOLED, 1.5K resolution, 144Hz refresh rate', processor: 'MediaTek Helio G200 Ultimate processor', camera: '50MP main + 50MP telephoto camera (3x optical zoom, 60x AI zoom) + 8MP ultra-wide camera Front Camera: 32MP', operatingSystem: 'Android 15, HIOS 16' }
  },
  {
    id: 'pixel-7', brand: 'Google', category: 'Google', model: 'Pixel 7', storage: 'Add storage', ram: 'Add RAM',
    color: 'Add color', condition: 'Details pending', batteryHealth: 'Add battery health', network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/google/Google Pixel 7.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'pixel-7a', brand: 'Google', category: 'Google', model: 'Pixel 7a', storage: 'Add storage', ram: 'Add RAM',
    color: 'Add color', condition: 'Details pending', batteryHealth: 'Add battery health', network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/google/Google Pixel 7a.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'pixel-8-pro', brand: 'Google', category: 'Google', model: 'Pixel 8 Pro', storage: 'Add storage', ram: 'Add RAM',
    color: 'Add color', condition: 'Details pending', batteryHealth: 'Add battery health', network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/google/Google Pixel 8 Pro.jpeg'],
    shortDescription: 'Product information will be added after stock is confirmed.',
    specifications: { display: 'Add display details', processor: 'Add processor details', camera: 'Add camera details', operatingSystem: 'Android' }
  },
  {
    id: 'pixel-8a', brand: 'Google', category: 'Google', model: 'Pixel 8a', storage: 'Add storage', ram: 'Add RAM',
    color: 'Add color', condition: 'Details pending', batteryHealth: 'Add battery health', network: 'Add SIM details',
    warranty: null, priceKes: null, stockStatus: 'Details pending', images: ['./images/products/google/Google Pixel 8a.jpeg'],
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
