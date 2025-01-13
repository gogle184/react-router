import { Page2 } from '../Page2';
import { UrlParameter } from '../UrlParameter';

export const Page2Routes = [
  {
    path: '',
    exact: true,
    element: <Page2 />,
  },
  {
    path: ':id',
    exact: false,
    element: <UrlParameter />,
  },
];
