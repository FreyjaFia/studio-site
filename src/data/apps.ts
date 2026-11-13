export interface App {
  slug: string;
  name: string;
  pitch: string;
  features: string[];
}

export const apps: App[] = [
  {
    slug: 'wtf',
    name: 'WTF POS',
    pitch: 'A point of sale for coffee shops. Take orders, track sales and run the counter, even offline.',
    features: [
      'Works offline as an installable app',
      'Fast order entry with products, add-ons and promotions',
      'Sales reports grouped by your shop day',
      'Separate shops, each with their own staff and data',
    ],
  },
];
