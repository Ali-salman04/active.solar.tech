// Product data for the catalog
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  price: number;
  rating: number;
  imageSrc: string;
  gallery: string[];
}

// Inverter products
const inverters: Product[] = [
  {
    id: 'inv-solar-edge-3.8k',
    name: '3.8KW SOLAR MPPT INVERTER',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '10000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '300-500V DC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '5 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax0.jpg',
  gallery: [
    '/images/inverter/solarmax/solarmax0.jpg',
    '/images/inverter/solarmax/solarmaxsheet0.jpg',

  ]
  },
   {
    id: 'inv-solar-edge',
    name: '1.5KW SOLAR MPPT INVERTER',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '10000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '300-500V DC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '5 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax1.jpg',
  gallery: [
    '/images/inverter/solarmax/solarmax1.jpg',
    '/images/inverter/solarmax/solarmaxsheet1.jpg',

  ]
},
 {
    id: 'inv-solar-edg',
    name: '3KW SOLAR MPPT INVERTER',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax2.jpg',
  gallery: [
    '/images/inverter/solarmax/solarmax2.jpg',
    '/images/inverter/solarmax/solarmaxsheet2.jpg',
  ]
},
 {
    id: 'inv-solar-6kw',
    name: '6KW SOLAR MPPT INVERTER',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax3.jpg',
  gallery: [
    '/images/inverter/solarmax3.jpg',
    '/images/inverter/solarmaxsheet3.jpg',
  ]
},
 {
    id: 'inv-solar-8kw',
    name: '8KW SOLAR MPPT INVERTER',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax4.jpg',
  gallery: [
    '/images/inverter/solarmax/solarmax4.jpg',
    '/images/inverter/solarmax/solarmaxsheet4.jpg',
  ]
},
 {
    id: 'inv-solar-11kw',
    name: '11KW SOLAR MPPT INVERTER',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax5.jpg',
  gallery: [
    '/images/inverter/solarmax/solarmax5.jpg',
    '/images/inverter/solarmax/solarmaxsheet5.jpg',
  ]
},
 {
    id: 'inv-solar-dual-8kw',
    name: 'SM-ONYX-DUAL-8KW',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax6.jpg',
  gallery: [
    '/images/inverter/solarmax/solarmax6.jpg',
    '/images/inverter/solarmax/solarmaxsheet6.jpg',
  ]
},
 {
    id: 'inv-solar-sm-6kw',
    name: 'SM-SOLON-UL-6KW',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax7.jpg',
  gallery: [
     '/images/inverter/solarmax/solarmax7.jpg',
    '/images/inverter/solarmax/solarextrasheet7.jpg',
    '/images/inverter/solarmax/solarmaxsheet7.jpg',
  ]
},
{
    id: 'inv-solar-hyb-6kw',
    name: '6KW HYBRID INVERTER',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images//inverter/solarmax/solarmax8.jpg',
  gallery: [
     '/images/inverter/solarmax/solarmax8.jpg',
    '/images/inverter/solarmax/solarextrasheet8.jpg',
    '/images/inverter/solarmax/solarmaxsheet8.jpg',
  ]
},
{
    id: 'inv-solar-dual-4kw',
    name: 'HYBRID INVERTER DUAL 4KW',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax9.jpg',
  gallery: [
     '/images/inverter/solarmax/solarmax9.jpg',
    '/images/inverter/solarmax/solarmaxsheet9.jpg',
  ]
},
{
    id: 'inv-solar-dual-pv-6kw',
    name: 'DUAL 6KW MPPT PV HYBRID INVERTER',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax10.jpg',
  gallery: [
     '/images/inverter/solarmax/solarmax10.jpg',
    '/images/inverter/solarmax/solarmaxsheet10.jpg',
  ]
},
{
    id: 'inv-solar-ul-10kw',
    name: 'SM-ONYX-UL-10KW',
    brand: 'SolarMax',
    category: 'inverters',
    description: 'High-efficiency grid-tied inverter with integrated safety features and monitoring capabilities.',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmax11.jpg',
  gallery: [
     '/images/inverter/solarmax/solarmax11.jpg',
    '/images/inverter/solarmax/solarmaxsheet11.jpg',
  ]
},
{
    id: 'inv-solar-b-5.12kw',
    name: 'LiFePO(4) LFP',
    brand: 'SolarMax Battery',
    category: 'inverters',
    description: 'The most advanced Lithium Iron Phosphate Module For home and industrial energy storage',
    features: [
      'HD-Wave technology for high efficiency',
      'Built-in module-level monitoring',
      'Integrated arc fault protection',
      'Compact and lightweight design',
      'Remote monitoring and control via mobile app'
    ],
    specifications: {
      'AC Output Power': '3000W',
      'Maximum Efficiency': '98.3%',
      'Input Voltage Range': '230 VAC',
      'Weight': '21.7 kg',
      'Dimensions': '540 x 315 x 260 mm',
      'Warranty': '2 years'
    },
    price: 2799.99,
    rating: 4.8,
  imageSrc: '/images/inverter/solarmax/solarmaxbatter1.jpg',
  gallery: [
     '/images/inverter/solarmax/solarmaxbatter1.jpg',
    '/images/inverter/solarmax/solarmaxbatterysheet1.jpg',
  ]
},
  {
    id: 'inv-fronius-primo-5',
    name: 'Fronius Primo 5.0-1 5kW Inverter',
    brand: 'Fronius',
    category: 'inverters',
    description: 'Reliable single-phase inverter with smart features for residential solar installations.',
    features: [
      'Integrated data monitoring',
      'Smart Grid Ready',
      'Dynamic Peak Manager',
      'Superflex Design',
      'SnapINverter mounting system'
    ],
    specifications: {
      'AC Output Power': '5000W',
      'Maximum Efficiency': '98.1%',
      'Input Voltage Range': '80-600V DC',
      'Weight': '21.5 kg',
      'Dimensions': '645 x 431 x 204 mm',
      'Warranty': '10 years'
    },
    price: 1899.99,
    rating: 4.7,
    imageSrc: 'https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9875429/pexels-photo-9875429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9875433/pexels-photo-9875433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'inv-enphase-iq7',
    name: 'Enphase IQ7+ Microinverter',
    brand: 'Enphase',
    category: 'inverters',
    description: 'Advanced microinverter that converts DC to AC at the panel level for maximum energy harvest.',
    features: [
      'Module-level power conversion',
      'No single point of failure',
      'Easy system expansion',
      'Rapid shutdown compliance',
      'Detailed panel-level monitoring'
    ],
    specifications: {
      'AC Output Power': '290VA',
      'Maximum Efficiency': '97.6%',
      'Input Voltage Range': '16-60V DC',
      'Weight': '1.08 kg',
      'Dimensions': '212 x 175 x 30 mm',
      'Warranty': '25 years'
    },
    price: 169.99,
    rating: 4.9,
    imageSrc: 'https://images.pexels.com/photos/9875436/pexels-photo-9875436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/9875436/pexels-photo-9875436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9875435/pexels-photo-9875435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9875437/pexels-photo-9875437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
];

// Solar Panel products
const panels: Product[] = [
  {
    id: 'panel-lg-neon-r',
    name: 'LG NeON R 380W Solar Panel',
    brand: 'LG',
    category: 'panels',
    description: 'High-efficiency monocrystalline solar panel with advanced cell technology.',
    features: [
      'High power output up to 380W',
      'Back contact technology',
      'Enhanced performance in high temperatures',
      'Strong wind and snow load resistance',
      'Anti-reflective coating'
    ],
    specifications: {
      'Power Output': '380W',
      'Efficiency': '22.1%',
      'Cell Type': 'Monocrystalline',
      'Weight': '18.5 kg',
      'Dimensions': '1700 x 1016 x 40 mm',
      'Warranty': '25 years production, 25 years performance'
    },
    price: 399.99,
    rating: 4.9,
    imageSrc: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12187193/pexels-photo-12187193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'panel-sunpower-maxeon',
    name: 'SunPower Maxeon 400W Panel',
    brand: 'SunPower',
    category: 'panels',
    description: 'Premium solar panel with industry-leading efficiency and durability.',
    features: [
      'Highest efficiency solar panel on the market',
      'Unique copper foundation for durability',
      'Minimal light-induced degradation',
      'Excellent low-light performance',
      'Sleek all-black design'
    ],
    specifications: {
      'Power Output': '400W',
      'Efficiency': '22.6%',
      'Cell Type': 'Monocrystalline Maxeon',
      'Weight': '19 kg',
      'Dimensions': '1690 x 1046 x 40 mm',
      'Warranty': '25 years production, 25 years performance'
    },
    price: 499.99,
    rating: 5.0,
    imageSrc: 'https://images.pexels.com/photos/9875432/pexels-photo-9875432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/9875432/pexels-photo-9875432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1534913/pexels-photo-1534913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'panel-jinko-tiger',
    name: 'Jinko Solar Tiger 360W Panel',
    brand: 'Jinko Solar',
    category: 'panels',
    description: 'Cost-effective high-performance solar panel with advanced tiling technology.',
    features: [
      'Tiling Ribbon technology',
      'Half-cell design for better shading response',
      'PID resistance',
      'Salt mist and ammonia corrosion resistance',
      'Excellent mechanical load resistance'
    ],
    specifications: {
      'Power Output': '360W',
      'Efficiency': '20.78%',
      'Cell Type': 'Monocrystalline PERC',
      'Weight': '20.5 kg',
      'Dimensions': '1755 x 1038 x 35 mm',
      'Warranty': '12 years production, 25 years performance'
    },
    price: 259.99,
    rating: 4.6,
    imageSrc: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1335849/pexels-photo-1335849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9875404/pexels-photo-9875404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
];

// Accessories products
const accessories: Product[] = [
  {
    id: 'acc-tesla-powerwall',
    name: 'Tesla Powerwall 2',
    brand: 'Tesla',
    category: 'accessories',
    description: 'Rechargeable home battery system that stores solar energy for use anytime.',
    features: [
      'Stores excess solar production for use at night',
      'Provides backup power during outages',
      'Fully automated and maintenance-free',
      'Water-resistant and dust-tight',
      'Mobile app monitoring and control'
    ],
    specifications: {
      'Energy Capacity': '13.5 kWh',
      'Power Output': '5kW continuous, 7kW peak',
      'Round-trip Efficiency': '90%',
      'Weight': '114 kg',
      'Dimensions': '1150 x 755 x 155 mm',
      'Warranty': '10 years'
    },
    price: 7999.99,
    rating: 4.9,
    imageSrc: 'https://images.pexels.com/photos/9875386/pexels-photo-9875386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/9875386/pexels-photo-9875386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6322864/pexels-photo-6322864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6321076/pexels-photo-6321076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'acc-solar-edge-optimizer',
    name: 'SolarEdge P370 Power Optimizer',
    brand: 'SolarEdge',
    category: 'accessories',
    description: 'Module-level power optimizer that maximizes energy production from each panel.',
    features: [
      'Mitigates power loss from module mismatch',
      'Panel-level MPPT (Maximum Power Point Tracking)',
      'SafeDC™ automatic module voltage reduction',
      'Remote monitoring of each panel performance',
      'Compatible with all SolarEdge inverters'
    ],
    specifications: {
      'Maximum Input Power': '370W',
      'Maximum Efficiency': '99.5%',
      'Input Voltage Range': '8-60V DC',
      'Weight': '0.44 kg',
      'Dimensions': '129 x 153 x 30 mm',
      'Warranty': '25 years'
    },
    price: 79.99,
    rating: 4.7,
    imageSrc: 'https://images.pexels.com/photos/5972396/pexels-photo-5972396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/5972396/pexels-photo-5972396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5472594/pexels-photo-5472594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5472598/pexels-photo-5472598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'acc-mounting-system',
    name: 'IronRidge XR100 Mounting System',
    brand: 'IronRidge',
    category: 'accessories',
    description: 'Rugged rail system designed to securely attach solar panels to roofs.',
    features: [
      'Superior structural strength',
      'Certified for extreme wind and snow loads',
      'Universal module compatibility',
      'Integrated grounding',
      'Simple, fast installation'
    ],
    specifications: {
      'Material': 'Aluminum',
      'Max Span': '8 feet',
      'Load Capacity': '4200+ Pa',
      'Rail Length': 'Customizable',
      'Finish': 'Anodized',
      'Warranty': '20 years'
    },
    price: 199.99,
    rating: 4.6,
    imageSrc: 'https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6322829/pexels-photo-6322829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3657141/pexels-photo-3657141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
];

// Export all products
export const products: Product[] = [...inverters, ...panels, ...accessories];

// Get all products
export function getAllProducts(): Product[] {
  return products;
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Get products by brand
export function getProductsByBrand(brand: string): Product[] {
  return products.filter(product => product.brand === brand);
}

// Get unique brands for a category
export function getBrandsForCategory(category: string): string[] {
  const categoryProducts = getProductsByCategory(category);
  return [...new Set(categoryProducts.map(product => product.brand))];
}