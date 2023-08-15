import './index.css';

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import i18n from './i18n';
import ErrorPage from './pages/ErrorPage';
import { persistor, store } from './utils/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <React.StrictMode>
          <Suspense fallback={<h1>Loading...</h1>}>
            <RouterProvider router={router} />
          </Suspense>
        </React.StrictMode>
      </I18nextProvider>
    </PersistGate>
  </Provider>
);
