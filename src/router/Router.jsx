import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Page1Routes } from './Page1Routes';
import { Page2Routes } from './Page2Routes';
import { Page404 } from '../Page404';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1/*">
        {Page1Routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.element}
          />
        ))}
      </Route>
      <Route path="/page2/*">
        {Page2Routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.element}
          />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
