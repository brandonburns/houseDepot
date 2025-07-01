export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

export type Category = {
  name: string
  slug: string
  description: string
}

export const productsList: Product[] = [
  // Circular Saws
  {
    id: 'product001',
    name: 'Ryobi One',
    price: 899,
    description: 'Compact brushless 6-1/2 inch circular saw.',
    image: '/images/product001.png',
    category: 'circularsaws',
  },
  {
    id: 'product002',
    name: 'Bauer 20V',
    price: 795,
    description: 'Brushless cordless 7-1/4 inch ciruclar saw.',
    image: '/images/product002.png',
    category: 'circularsaws',
  },
  {
    id: 'product003',
    name: 'DeWalt 15AMP',
    price: 949,
    description: '8-1/4 inch corded circular saw.',
    image: '/images/product003.png',
    category: 'circularsaws',
  },

  // Drills
  {
    id: 'product004',
    name: 'Milwaukee M18',
    price: 499,
    description: 'Lithium-ion cordless 1/2 inch drill.',
    image: '/images/product004.png',
    category: 'drills',
  },
  {
    id: 'product005',
    name: 'DeWalt Atomic 20V MAX',
    price: 699,
    description: 'Cordless brushless compact 1/2 inch drill.',
    image: '/images/product005.png',
    category: 'drills',
  },
  {
    id: 'product006',
    name: 'Craftsman V20 20V MAX',
    price: 599,
    description: 'Keyless cordless 1/2 inch drill.',
    image: '/images/product006.png',
    category: 'drills',
  },

  // Nailers
  {
    id: 'product007',
    name: 'Ridgid R250afe',
    price: 399,
    description: '15-Guage 2-1/2 inch angled finish nailer.',
    image: '/images/product007.png',
    category: 'nailers',
  },
  {
    id: 'product008',
    name: 'DeWalt 18-Gauge',
    price: 499,
    description: 'Pneumatic brad nailer with 2 inch x 18 guage brad nails.',
    image: '/images/product008.png',
    category: 'nailers',
  },
  {
    id: 'product009',
    name: 'Milwaukee M18 Fuel',
    price: 449,
    description: 'Coil roofing nailer Model #2909-20.',
    image: '/images/product009.png',
    category: 'nailers',
  },

  // Socket Wrenches
  {
    id: 'product010',
    name: 'GearWrench 27 piece',
    price: 199,
    description: 'Drive socket wrench set 27 piece.',
    image: '/images/product010.png',
    category: 'socketwrenches',
  },
  {
    id: 'product011',
    name: 'Crescent X6',
    price: 99,
    description: 'Drive pass-thru 3/8 inch adjustable wrench set.',
    image: '/images/product011.png',
    category: 'socketwrenches',
  },
  {
    id: 'product012',
    name: 'Craftsman CMMT12015',
    price: 99,
    description: '3/8 inch drive socket set.',
    image: '/images/product012.png',
    category: 'socketwrenches',
  },

  // Batteries
  {
    id: 'product013',
    name: 'DeWalt DCB606',
    price: 89,
    description: 'FLEXVOLT 20/60V Max Battery Pack.',
    image: '/images/product013.png',
    category: 'batteries',
  },
  {
    id: 'product014',
    name: 'Bauer 20V',
    price: 99,
    description: '20V 8 Ah high capacity lithium-ion battery.',
    image: '/images/product014.png',
    category: 'batteries',
  },
  {
    id: 'product015',
    name: 'Craftsman CMCB202',
    price: 79,
    description: '20V Max 2 ah lithium-ion battery.',
    image: '/images/product015.png',
    category: 'batteries',
  },

  // Table Saws
  {
    id: 'product016',
    name: 'Milwaukee Table Saw',
    price: 499,
    description: 'Cordless M18 Fuel 8-1/4 inch.',
    image: '/images/product016.png',
    category: 'tablesaws',
  },
  {
    id: 'product017',
    name: 'DeWalt Table Saw',
    price: 599,
    description: '15 Amp corded 8-1/4 inch compact table saw.',
    image: '/images/product017.png',
    category: 'tablesaws',
  },
  {
    id: 'product018',
    name: 'Craftsman Table Saw',
    price: 699,
    description: '8 1/4 inch table saw.',
    image: '/images/product018.png',
    category: 'tablesaws',
  },

  // Miter Saws
  {
    id: 'product019',
    name: 'Craftsman Miter Saw',
    price: 349,
    description: 'V20 7-1/4 inch 20V max single bevel cordless miter saw.',
    image: '/images/product019.png',
    category: 'mitersaws',
  },
  {
    id: 'product020',
    name: 'DeWalt Miter Saw',
    price: 299,
    description: 'Single bevel compound 10 inch 15 amp.',
    image: '/images/product020.png',
    category: 'mitersaws',
  },
  {
    id: 'product021',
    name: 'Bauer Miter Saw',
    price: 399,
    description: 'Single-bevel sliding compound miter saw.',
    image: '/images/product021.png',
    category: 'mitersaws',
  },

  // Hammers
  {
    id: 'product022',
    name: 'Milwaukee Hammer',
    price: 39,
    description: 'Straight claw milled face shock shield grip.',
    image: '/images/product022.png',
    category: 'hammers',
  },
  {
    id: 'product023',
    name: 'DeWalt Hammer',
    price: 49,
    description: '28oz steel framing hammer with 8.5 inch handle.',
    image: '/images/product023.png',
    category: 'hammers',
  },
  {
    id: 'product024',
    name: 'Craftsman Hammer',
    price: 29,
    description: 'Fiberglass 20 oz general purpose hammer.',
    image: '/images/product024.png',
    category: 'hammers',
  },
]

// Add categories array
export const categories: Category[] = [
  {
    name: 'Circular Saws',
    slug: 'circularsaws',
    description: 'Top of the line power circular saws',
  },
  {
    name: 'Drills',
    slug: 'drills',
    description: 'Top of the line power drills',
  },
  {
    name: 'Nailers',
    slug: 'nailers',
    description: 'Top of the line nailers',
  },
  {
    name: 'Socket Wrenches',
    slug: 'socketwrenches',
    description: 'Top of the line hand tools',
  },
  {
    name: 'Batteries',
    slug: 'batteries',
    description: 'Top of the line batteries',
  },
  {
    name: 'Table Saws',
    slug: 'tablesaws',
    description: 'Top of the line power table saws',
  },
  {
    name: 'Miter Saws',
    slug: 'mitersaws',
    description: 'Top of the line miter saws',
  },
  {
    name: 'Hammers',
    slug: 'hammers',
    description: 'Top of the line hammers',
  },
]
