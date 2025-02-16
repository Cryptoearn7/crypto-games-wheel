import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CodeBreaker from "./components/CodeBreaker";
import ThreeScene from "./components/ThreeScene";
import "./styles.css"; // ✅ Ensure styles are applied

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/arcade" element={<ThreeScene />} />
        <Route path="/codebreaker" element={<CodeBreaker />} />
      </Routes>
    </Router>
  );
}
