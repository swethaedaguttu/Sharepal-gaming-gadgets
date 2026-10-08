import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800-italic.css';
import '@fontsource/ubuntu/700.css';
import './styles/base.css';
import './styles/header.css';
import './styles/catalog.css';
import './styles/sections.css';
import './styles/footer.css';
import App from './App.jsx';

const PAGE_PATH = '/bangalore/gaming-gadgets-on-rent';

if (window.location.pathname === '/' || window.location.pathname === '') {
  window.history.replaceState(null, '', PAGE_PATH + window.location.search);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
