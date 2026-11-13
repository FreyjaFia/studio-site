export interface Plan {
  id: string;
  name: string;
  price: string;
  note: string;
  features: string[];
  highlighted: boolean;
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₱0,000',
    note: 'per month, placeholder price',
    features: ['One shop', 'Up to 3 staff accounts', 'Email support'],
    highlighted: false,
  },
  {
    id: 'shop',
    name: 'Shop',
    price: '₱0,000',
    note: 'per month, placeholder price',
    features: ['One shop', 'Unlimited staff accounts', 'Sales reports', 'Priority support'],
    highlighted: true,
  },
  {
    id: 'multi',
    name: 'Multi-shop',
    price: 'Let’s talk',
    note: 'custom pricing',
    features: ['Several shops', 'Shared product catalog', 'Setup help'],
    highlighted: false,
  },
];
