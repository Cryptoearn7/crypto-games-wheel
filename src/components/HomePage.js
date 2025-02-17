import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* 🔹 Navigation Bar */}
      <nav className="navbar">
        <div className="site-title">Crypto Games Arcade 🎮</div>
        <div className="nav-links">
          <a href="#">FAQ</a>
          <a href="#">Games</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Crypto Games Arcade</h1>
          <p>The ultimate hub for blockchain-powered fun!</p>
          <Link to="/arcade">
            <button className="enter-button">🎮 Enter Arcade</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/arcade1.jpg" alt="Arcade" />
        </div>
      </header>

      {/* 🔹 Featured Games */}
      <section className="featured-games">
        <h2>🔥 Featured Games</h2>
        <div className="game-grid">
          <div className="game-card">
            <h3>🔐 Code Breaker</h3>
            <p>Guess the secret code and unlock big prizes!</p>
            <Link to="/CodeBreaker">
              <button className="play-button">Play Now</button>
            </Link>
          </div>

          <div className="game-card">
            <h3>🎡 Wheel of Fortune</h3>
            <p>Spin and win amazing rewards!</p>
            <button className="play-button">Coming Soon</button>
          </div>

          <div className="game-card">
            <h3>📈 Crypto Predictions</h3>
            <p>Predict market trends and earn rewards!</p>
            <button className="play-button">Coming Soon</button>
          </div>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="about-section">
        <h2>🌍 About Us</h2>
        <p>
          Crypto Games Arcade is the ultimate destination for blockchain-based gaming.
          Play, earn, and have fun with our innovative Web3-powered games.
        </p>
      </section>

      {/* 🔹 Footer */}
      <footer className="footer">
        <p>© 2024 Crypto Games Arcade. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
