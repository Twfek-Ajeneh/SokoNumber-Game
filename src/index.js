//import ract
import React from 'react';
import ReactDOM from 'react-dom/client';

//import components
import App from './App';

//import style sheet
import './index.css';
import './normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);