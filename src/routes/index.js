import { lazy } from 'react';

const MainPage = lazy(() => import('../pages/Main'));
const Privacy = lazy(() => import('../pages/Privacy'));

const pages = [
  {
    path: '/',
    name: 'Feed 64',
    element: MainPage,
  },
  {
    path: 'privacy',
    name: 'Pricacy Policy',
    element: Privacy,
  },
];

export default pages;
