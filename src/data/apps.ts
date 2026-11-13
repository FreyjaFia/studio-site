export type AppStatus = 'live' | 'soon';

export interface App {
  slug: string;
  name: string;
  category: string;
  status: AppStatus;
  accent: string;
  tagline: string;
  pitch: string;
  features: string[];
  screenshots: string[];
  demoUrl?: string;
}

export const apps: App[] = [
  {
    slug: 'wtf',
    name: 'WTF POS',
    category: 'Point of sale',
    status: 'live',
    accent: '#d9480f',
    tagline: 'A point of sale for coffee shops.',
    pitch: 'Take orders, track sales and run the counter, even offline.',
    features: [
      'Works offline as an installable app',
      'Fast order entry with products, add-ons and promotions',
      'Sales reports grouped by your shop day',
      'Separate shops, each with their own staff and data',
    ],
    screenshots: ['Order screen', 'Sales report', 'Product list'],
  },
];
