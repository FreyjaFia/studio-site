export const site = {
  name: 'Studio Name',
  tagline: 'Simple apps for small businesses.',
  description: 'Apps built for small businesses, with a live demo you can try right now.',
  url: 'https://example.com',
  contactEmail: 'hello@example.com',
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Apps', href: '/apps' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
