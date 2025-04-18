import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import * as Views from 'views';

const ROUTES = Object.freeze({
  home: '/',
  createInfluencer: '/create-influencer',
  errorLogs: '/error-logs',
  notFound: '*',
});

const router = createBrowserRouter([
  { path: ROUTES.home, element: <Views.Home /> },
  { path: ROUTES.createInfluencer, element: <Views.CreateInfluencer /> },
  { path: ROUTES.errorLogs, element: <Views.Observability /> },
  { path: ROUTES.notFound, element: <Views.NotFound /> },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export { ROUTES, Routes };
