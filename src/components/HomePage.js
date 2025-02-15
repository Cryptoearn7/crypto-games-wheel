import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles.css"; // ✅ Use correct path

export default function HomePage() {
  return (
    <div className="homepage">
      {/* 🔹 Animated Background */}
      <div className="animated-bg"></div>

      {/* 🔹 Crypto Arcade Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="arcade-title"
      >
        Welcome to <span className="neon-text">Crypto Arcade</span>
      </motion.h1>

      {/* 🔹 Project Introduction Section */}
      <div className="info-section">
        <p>
          Crypto Arcade is a cutting-edge blockchain gaming platform where you can play and win real crypto prizes! 
          Connect your wallet, enter the arcade, and test your skills in our exciting Web3 games.
        </p>
      </div>

      {/* 🔹 3D Arcade Entrance Preview */}
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

      {/* 🔹 Games Showcase Section */}
      <div className="games-showcase">
        <h2>Available Games</h2>
        <div className="game-card">🎡 Wheel of Fortune – Spin & Win Crypto!</div>
        <div className="game-card">🔢 Code Breaker – Crack the Code for Huge Prizes!</div>
        <div className="game-card">💰 More Games Coming Soon!</div>
      </div>

      {/* 🔹 Features Section */}
      <div className="features-section">
        <h2>Why Play at Crypto Arcade?</h2>
        <ul>
          <li>🔹 **Win Real Crypto Rewards**</li>
          <li>🔹 **Provably Fair & Transparent Games**</li>
          <li>🔹 **Powered by Solana Blockchain**</li>
          <li>🔹 **No Registration Needed – Just Connect Wallet!**</li>
        </ul>
      </div>

      {/* 🔹 Footer */}
      <div className="footer">
        <p>Crypto Arcade © 2024 | Built on Solana Blockchain</p>
      </div>
    </div>
  );
}
