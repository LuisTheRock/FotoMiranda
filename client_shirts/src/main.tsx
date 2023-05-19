import './index.css';

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import i18n from './i18n';
import About from './pages/aboutCompany/About';
import Contacts from './pages/contacts/Contacts';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Portfolio2 from './pages/portfolio/Portfolio2';
import { persistor, store } from './utils/store';

const AdminHome = lazy(() => import('./pages/admin/AdminHome'));
const Profile = lazy(() => import('./pages/profile/Profile'));

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio2 />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
  {
    path: '/adminHome',
    element: <AdminHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/albumProfile/:id',
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <React.StrictMode>
            <Suspense fallback={<h1>Loading...</h1>}>
              <RouterProvider router={router} />
            </Suspense>
          </React.StrictMode>
        </QueryClientProvider>
      </I18nextProvider>
    </PersistGate>
  </Provider>
);
