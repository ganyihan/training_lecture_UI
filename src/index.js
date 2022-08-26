import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //concurrent模式
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();//react脚手架的指标
