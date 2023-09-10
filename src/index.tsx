import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from './redux/provider';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
    <BrowserRouter >
      <App />
    </BrowserRouter>
    </Providers>
  </React.StrictMode>
);

