import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles.css"; // ✅ Ensure styles are imported

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
        </div>
      </div>

      {/* 🔹 Main Content */}
      <motion.div 
        className="homepage-content"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="welcome-text">Step into <span className="neon-text">The Arcade</span></h2>
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

      {/* 🔹 Footer */}
      <div className="footer">
        <p>Crypto Games © 2024 | Built on Solana Blockchain</p>
      </div>
    </div>
  );
}
