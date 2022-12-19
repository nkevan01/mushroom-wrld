  import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './Head';
import Choice from './Choice.js'
import Medicinal from './Medicinal.js'
import Trippy from './Trippy.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Head/>
    <Choice/>
    <Medicinal/>
    <Trippy/>
  </React.StrictMode>
);

