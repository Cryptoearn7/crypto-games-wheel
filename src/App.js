import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"; // New Landing Page
import GamePage from "./components/GamePage"; // Game Page
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🔹 Landing Page (Default) */}
        <Route path="/" element={<HomePage />} />

        {/* 🔹 Game Page (3D Room) */}
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

  );
}
