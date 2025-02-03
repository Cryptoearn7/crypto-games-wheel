import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThreeScene from "./components/ThreeScene"; // Import the 3D scene component

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <ThreeScene />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
