import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Build from './Build';

const tjsRoot = document.createElement('div')
const footer = document.getElementById('footer')
footer?.parentNode?.insertBefore(tjsRoot, footer)
const root = ReactDOM.createRoot(tjsRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const buildingRoot = document.createElement('div')
const upgradeBuilding = document.getElementsByClassName('upgradeBuilding')[0]
upgradeBuilding?.parentNode?.insertBefore(buildingRoot, upgradeBuilding)
const broot = ReactDOM.createRoot(buildingRoot);
broot.render(
  <React.StrictMode>
    <Build />
  </React.StrictMode>
)