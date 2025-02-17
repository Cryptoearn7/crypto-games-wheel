import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"; // ✅ Correct import
import CodeBreaker from "./components/CodeBreaker"; // ✅ Correct import
import ThreeScene from "./components/ThreeScene"; // ✅ Correct import
import "./styles.css"; // ✅ Ensure styles are applied

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* ✅ Homepage */}
      <Route path="/arcade" element={<ThreeScene />} /> {/* ✅ Arcade (3D Scene) */}
      <Route path="/codebreaker" element={<CodeBreaker />} /> {/* ✅ Code Breaker Game */}
    </Routes>
  );
}
