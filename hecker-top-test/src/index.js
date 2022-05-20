import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/style.scss';
import AppRouter from './Routers/AppRouter';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<AppRouter />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();
