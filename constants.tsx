
import { FabricCategory, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Mulberry Silk',
    category: FabricCategory.SILK,
    price: 45.99,
    image: 'https://picsum.photos/seed/silk1/600/800',
    description: '100% pure mulberry silk with a lustrous sheen.'
  },
  {
    id: '2',
    name: 'Egyptian Cotton Voile',
    category: FabricCategory.COTTON,
    price: 22.50,
    image: 'https://picsum.photos/seed/cotton1/600/800',
    description: 'Soft, breathable high-thread-count cotton.'
  },
  {
    id: '3',
    name: 'Merino Wool Twill',
    category: FabricCategory.WOOL,
    price: 38.00,
    image: 'https://picsum.photos/seed/wool1/600/800',
    description: 'Warm and durable wool perfect for tailoring.'
  },
  {
    id: '4',
    name: 'Ankara Heritage Print',
    category: FabricCategory.PRINTS,
    price: 15.75,
    image: 'https://picsum.photos/seed/print1/600/800',
    description: 'Vibrant authentic African wax print.'
  },
  {
    id: '5',
    name: 'Classic Belgian Linen',
    category: FabricCategory.LINEN,
    price: 29.00,
    image: 'https://picsum.photos/seed/linen1/600/800',
    description: 'Premium heavy-weight linen for home and apparel.'
  },
  {
    id: '6',
    name: 'Gold Embroidered Tulle',
    category: FabricCategory.SILK,
    price: 85.00,
    image: 'https://picsum.photos/seed/silk2/600/800',
    description: 'Exquisite bridal-grade embroidered silk.'
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#/' },
  { label: 'Shop All', href: '#/shop' },
  { label: 'Collections', href: '#/collections' },
  { label: 'About Us', href: '#/about' },
  { label: 'Contact', href: '#/contact' }
];
