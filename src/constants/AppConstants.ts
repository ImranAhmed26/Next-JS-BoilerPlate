import { NavLink } from '@/types/Home/banner';

export const metadataConst = {
  title: 'Add Title',
  description:
    'Add Description',
};

export const navLinkData: NavLink[] = [
  { name: 'home', id: 1, value: 'home', link: '/', dropdown: false },
  {
    name: 'Service',
    id: 2,
    value: 'app',
    link: '/app',
    dropdown: true,
    options: [
      {
        name: 'App',
        link: '/',
        details:
          'Add app details',
      },
    ],
  },
];

export const brandData = {
  name: `Brand Name`,
  slogan: `. . .`,
  address: `Add Address`,
};
