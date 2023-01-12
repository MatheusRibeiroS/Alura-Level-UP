import React from 'react';
import ReactDOM from 'react-dom/client';
import Feed from './pages';
import "tailwindcss/tailwind.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>
);
