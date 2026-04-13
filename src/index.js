import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./features/auth/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Uncaught Error: useRoutes() may be used only in the context of a <Router> component - se soluciona agregando BrowserRouter

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);