import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import * as Views from 'views';

const ROUTES = Object.freeze({
  home: '/',
  addInfluencer: '/create-influencer',
  notFound: '*',
});

const router = createBrowserRouter([
  { path: ROUTES.home, element: <Views.Home /> },
  { path: ROUTES.notFound, element: <Views.NotFound /> },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export { ROUTES, Routes };
