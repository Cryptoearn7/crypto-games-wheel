import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CodeBreaker from "./components/CodeBreaker";
import ThreeScene from "./components/ThreeScene";
import GamePage from "./components/GamePage";
import "./styles.css"; // ✅ Ensure styles are imported

export default function App() {
  console.log("✅ Routing is working"); // ✅ Debugging message

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/arcade" element={<ThreeScene />} />
        <Route path="/CodeBreaker" element={<CodeBreaker />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}
