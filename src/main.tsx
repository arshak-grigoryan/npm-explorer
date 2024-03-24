// import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './main.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
