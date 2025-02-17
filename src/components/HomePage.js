import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // ✅ Ensure styles are applied

export default function HomePage() {
  return (
    <div className="homepage-container">
      {/* 🔹 Navigation Bar */}
      <nav className="navbar">
        <h1 className="site-title">Crypto Games Arcade</h1>
        <div className="nav-links">
          <a href="#">FAQ</a>
          <a href="#">Games</a>
          <a href="#">Community</a>
        </div>
      </nav>

      {/* 🔹 Main Section */}
      <div className="main-content">
        <h2>Welcome to Crypto Games Arcade</h2>
        <p>Play exciting blockchain-powered games and win real crypto rewards!</p>

        {/* 🔹 Enter Arcade Button */}
        <Link to="/arcade">
          <button className="enter-button">Enter Arcade</button>
        </Link>
      </div>

      {/* 🔹 Featured Games Section */}
      <div className="featured-games">
        <h3>Featured Games</h3>
        <div className="game-grid">
          <div className="game-card">
            <h4>Code Breaker</h4>
            <p>Crack the code and win crypto!</p>
            <Link to="/codebreaker">
              <button className="play-button">Play Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
