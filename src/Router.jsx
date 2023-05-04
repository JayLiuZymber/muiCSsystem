import React from 'react';
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

function RequireAuth({ children }) {
  let location = useLocation();

  if (!isAuth()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <RequireAuth>
              {" "}
              <App />
            </RequireAuth>
          }
        >
        </Route>
        {/* !isAuth() ? not auth : auth */}
        <Route path="/login"
          element={!isAuth() ? <Login /> : <Navigate from="/login" to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
