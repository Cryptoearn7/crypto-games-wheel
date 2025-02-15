import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // ✅ Use correct path

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Crypto Games</h1>
      <p>The best place for fun crypto-based games and rewards!</p>

      {/* 🚀 Enter the App Button */}
      <Link to="/game">
        <button className="enter-button">Enter the App</button>
      </Link>
    </div>
  );
}
