import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Headerbar from './homePage/Header/Header';
import TabBar from './homePage/tabbar/tabBar'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Headerbar/>
        <div className='bang ' >
          <TabBar/>
          <App />
        </div>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
reportWebVitals();
