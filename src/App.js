import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import CodeBreaker from "./components/CodeBreaker"; // ✅ New Game
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/code-breaker" element={<CodeBreaker />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}
