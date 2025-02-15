import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles.css"; // ✅ Use correct path

export default function HomePage() {
  return (
    <div className="homepage">
      {/* 🔹 Animated Background */}
      <div className="animated-bg"></div>

      {/* 🔹 Crypto Games Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="arcade-title"
      >
        Welcome to <span className="neon-text">Crypto Games</span>
      </motion.h1>

      {/* 🔹 Project Introduction Section */}
      <div className="info-section">
        <p>
          Play & Win Real Crypto Rewards! Step into <span className="neon-text">The Arcade</span>,
          where blockchain meets gaming. Connect your wallet and start playing!
        </p>
      </div>

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

      {/* 🔹 Features Section */}
      <div className="features-section">
        <h2>Why Play at Crypto Games?</h2>
        <ul>
          <li>🔹 **Win Real Crypto Rewards**</li>
          <li>🔹 **Provably Fair & Transparent Games**</li>
          <li>🔹 **Powered by Solana Blockchain**</li>
          <li>🔹 **No Registration Needed – Just Connect Wallet!**</li>
        </ul>
      </div>

      {/* 🔹 Footer */}
      <div className="footer">
        <p>Crypto Games © 2024 | Built on Solana Blockchain</p>
      </div>
    </div>
  );
}
