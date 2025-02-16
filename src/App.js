import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";  // ✅ Homepage
import CodeBreaker from "./components/CodeBreaker"; // ✅ CodeBreaker game
import ThreeScene from "./components/ThreeScene";  // ✅ Arcade 3D Room
import "./styles.css"; // ✅ Ensure styles are applied

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />   {/* 🔹 Homepage */}
        <Route path="/arcade" element={<ThreeScene />} /> {/* 🔹 Arcade (3D Scene) */}
        <Route path="/codebreaker" element={<CodeBreaker />} /> {/* 🔹 Code Breaker Game */}
      </Routes>
    </Router>
  );
}
