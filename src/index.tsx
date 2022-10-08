import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import SignUp from './routes/Register';
import SignIn from './routes/SignIn';
import Dashboard from './routes/Dashboard';
import HomePage from './routes/HomePage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Coming Soon!!</p>
              </main>
            }
          />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
