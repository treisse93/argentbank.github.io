import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

// Create a root for rendering
const root = createRoot(document.getElementById('root'));

// Render the main application
root.render(
  // Wrap the application with a Redux provider to provide the store
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
