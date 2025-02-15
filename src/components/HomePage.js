import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles.css"; // ✅ Corrected import

export default function HomePage() {
  return (
    <div className="homepage">
      {/* 🔹 Animated Background */}
      <div className="animated-bg"></div>

      {/* 🔹 Navigation Bar */}
      <div className="top-navbar">
        <h1 className="site-title">Crypto Games</h1>
        <div className="nav-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/games">Games</Link>
          <Link to="/about">About</Link>
          <Link to="/roadmap">Roadmap</Link>
        </div>
      </div>

      {/* 🔹 Hero Section */}
      <motion.div 
        className="homepage-content"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="welcome-text">
          Step into <span className="neon-text">The Arcade</span>
        </h2>
        <p>Win real crypto rewards in our blockchain-powered gaming arcade!</p>

        {/* 🔹 Arcade Entrance Preview */}
        <motion.div 
          className="arcade-preview"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="/images/arcade-preview.png" alt="Arcade Entrance" className="arcade-image" />
        </motion.div>

        {/* 🔹 Enter Arcade Button */}
        <Link to="/arcade">
          <motion.button 
            className="enter-arcade-button"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px #ffcc00" }}
            whileTap={{ scale: 0.95 }}
          >
            Enter Arcade
          </motion.button>
        </Link>
      </motion.div>

      {/* 🔹 How It Works Section */}
      <div className="info-section">
        <h2>How It Works</h2>
        <div className="info-cards">
          <div className="info-card">
            <img src="/images/connect-wallet.png" alt="Connect Wallet" />
            <h3>1. Connect Wallet</h3>
            <p>Use Phantom or any Solana-compatible wallet to enter the arcade.</p>
          </div>
          <div className="info-card">
            <img src="/images/play-games.png" alt="Play Games" />
            <h3>2. Play Games</h3>
            <p>Choose from a variety of crypto-powered games to win real rewards.</p>
          </div>
          <div className="info-card">
            <img src="/images/claim-rewards.png" alt="Claim Rewards" />
            <h3>3. Claim Rewards</h3>
            <p>Withdraw your winnings instantly to your connected wallet.</p>
          </div>
        </div>
      </div>

      {/* 🔹 Featured Games Section */}
      <div className="featured-games">
        <h2>Featured Games</h2>
        <div className="game-cards">
          <div className="game-card">
            <img src="/images/wheel-game.png" alt="Wheel of Fortune" />
            <h3>Wheel of Fortune</h3>
            <p>Spin the wheel and win prizes in crypto!</p>
          </div>
          <div className="game-card">
            <img src="/images/code-breaker.png" alt="Code Breaker" />
            <h3>Code Breaker</h3>
            <p>Guess the secret code and win big!</p>
          </div>
          <div className="game-card">
            <img src="/images/up-down.png" alt="Up or Down" />
            <h3>Up or Down</h3>
            <p>Predict the market trends and earn rewards.</p>
          </div>
        </div>
      </div>

      {/* 🔹 Tokenomics Section */}
      <div className="tokenomics-section">
        <h2>Crypto Games Token (CRG)</h2>
        <p>The CRG token powers our gaming ecosystem, offering rewards and benefits.</p>
        <ul>
          <li>🔥 Earn CRG by playing games</li>
          <li>🏆 Higher CRG holdings increase winning chances</li>
          <li>🎟️ Use CRG for exclusive in-game features</li>
        </ul>
      </div>

      {/* 🔹 Footer */}
      <div className="footer">
        <p>Crypto Games © 2024 | Built on Solana Blockchain</p>
      </div>
    </div>
  );
}
