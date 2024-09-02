import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';
import {Provider } from 'react-redux';
import Store from './features/Store'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>
);
