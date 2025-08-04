import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider";
import App from "./App";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
