import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* 🔹 HEADER (LOGO + NAVIGATION) */}
      <header className="header">
        <div className="logo">Crypto Games</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Games</a>
          <a href="#">How It Works</a>
          <a href="#">FAQ</a>
        </nav>
      </header>

      {/* 🔹 HERO SECTION */}
      <section className="hero">
        <h1>Crypto Games – Play & Earn!</h1>
        <p>Win CRG, USDT, and More with Our Fun Games</p>
        <Link to="/game">
          <button className="enter-button">Enter the App</button>
        </Link>
      </section>

      {/* 🔹 GAMES SHOWCASE */}
      <section className="games-showcase">
        <h2>Our Games</h2>
        <div className="game-card">🎡 Wheel of Fortune</div>
        <Link to="/code-breaker">
          <div className="game-card">🔢 Code Breaker</div>
        </Link>
        <div className="game-card">📉 Price Prediction</div>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="footer">
        <p>Follow us: 
          <a href="#">Twitter</a> | 
          <a href="#">Discord</a> | 
          <a href="#">Telegram</a>
        </p>
        <p>© 2024 Crypto Games. All rights reserved.</p>
      </footer>
    </div>
  );
}
