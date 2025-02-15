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

      {/* 🔹 FEATURES SECTION */}
      <section className="features">
        <div className="feature">
          <h3>🎮 Play-to-Earn</h3>
          <p>Enjoy fun and engaging games while earning real crypto rewards.</p>
        </div>
        <div className="feature">
          <h3>🔄 Fair & Transparent</h3>
          <p>All games are secured on the Solana blockchain for transparency.</p>
        </div>
        <div className="feature">
          <h3>⚡ Solana-Powered</h3>
          <p>Fast and low-cost transactions with Solana's blockchain.</p>
        </div>
      </section>

      {/* 🔹 HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">1️⃣ Connect Wallet</div>
          <div className="step">2️⃣ Choose a Game</div>
          <div className="step">3️⃣ Spin, Play & Win</div>
          <div className="step">4️⃣ Claim Rewards</div>
        </div>
      </section>

      {/* 🔹 GAMES SHOWCASE */}
      <section className="games-showcase">
        <h2>Our Games</h2>
        <div className="game-card">🎡 Wheel of Fortune</div>
        <div className="game-card">🕹️ Button Clicker</div>
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
