import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './contexts/DataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path='/*'
          element={
            <DataProvider>
              <App />
            </DataProvider>
          }
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
