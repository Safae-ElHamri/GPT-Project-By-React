import React from 'react';

import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
// const root = ReactDOM.createPortal(document.getElementById('root'));
// root.render( < React.StrictMode > 
// <App />
// </React.StrictMode>)

import ReactDOM from 'react-dom/client'; // Notice the '/client' here
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);