import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🔹 Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* 🔹 Game Page */}
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}
