import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root')); /**root es el id del body en html aca se pone el contenido*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

