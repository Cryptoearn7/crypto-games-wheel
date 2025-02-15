import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles.css";

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
        Welcome to the <span className="neon-text">Crypto Arcade</span>
      </motion.h1>

      {/* 🔹 3D Arcade Entrance Preview */}
      <motion.div 
        className="arcade-preview"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* This can be replaced with a Three.js scene later */}
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
    </div>
  );
}
