import { Page1 } from '../Page1';
import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';

export const Page1Routes = [
  {
    path: '',
    exact: true,
    element: <Page1 />,
  },
  {
    path: 'detailA',
    exact: false,
    element: <Page1DetailA />,
  },
  {
    path: 'detailB',
    exact: false,
    element: <Page1DetailB />,
  },
];
