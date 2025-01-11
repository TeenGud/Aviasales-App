import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
import { createRoot } from 'react-dom/client';
import App from './components/App/index.js';
import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
