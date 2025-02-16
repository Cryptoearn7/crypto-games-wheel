import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // ✅ Only include BrowserRouter here
import App from "./App"; // ✅ App.js will handle all routing
import "./styles.css"; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
