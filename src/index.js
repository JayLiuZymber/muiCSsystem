import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';

import App from './App';
import Login from './views/Login';
import PageNotFound from './views/404hit';
// import PageNotFound from './views/404neon';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Cookie from "js-cookie";

function isAuth() {
  return (
    Cookie.get("access_token") !== null &&
    Cookie.get("access_token") !== "" &&
    Cookie.get("access_token") !== undefined
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        {/* !isAuth() ? not auth : auth */}
        <Route path="/login"
          element={!isAuth() ? <Login /> : <Navigate from="/login" to="/" />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
