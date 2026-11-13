export const site = {
  name: 'Studio Name',
  tagline: 'Practical apps, built to last.',
  description: 'We build practical apps for people who keep things running, with a live demo you can try.',
  url: 'https://example.com',
  contactEmail: 'hello@example.com',
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
