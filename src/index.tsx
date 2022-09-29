import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const tjsRoot = document.createElement('div')
const footer = document.getElementById('footer')
footer?.parentNode?.insertBefore(tjsRoot, footer)

const root = ReactDOM.createRoot(tjsRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);