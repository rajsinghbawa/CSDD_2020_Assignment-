import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Portfolio_Flex from './Pages/Portfolio_Flex';
import Portfolio_Grid from './Pages/Portfolio_Grid';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App /> }> </Route>
        <Route path="/portfolio_Flex" element={<Portfolio_Flex/>} />
        <Route path="/portfolio_Grid" element={<Portfolio_Grid />} />
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
