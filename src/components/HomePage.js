import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import "../styles.css"; 

export default function HomePage() {
  return (
    <motion.div 
      className="homepage-container"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* 🔹 NAVBAR */}
      <nav className="navbar">
        <div className="logo">Crypto Games</div>
        <div className="nav-links">
          <Link to="/arcade">Arcade</Link>
          <Link to="/games">Games</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* 🔹 HERO SECTION */}
      <div className="hero-section">
        <motion.div 
          className="hero-text"
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Welcome to <span className="highlight">Crypto Games</span></h1>
          <p>Play, Win, and Earn in the Ultimate Web3 Arcade</p>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/arcade">
              <button className="enter-button">Enter the Arcade</button>
            </Link>
          </motion.div>
        </motion.div>

        {/* ✅ FIXED IMAGE PATH */}
        <img 
          src={"/images/arcade1.jpg"} 
          alt="Arcade" 
          className="hero-image" 
        />
      </div>

      {/* 🔹 FEATURED GAMES SECTION */}
      <div className="featured-games">
        <h2>🎮 Featured Games</h2>
        <div className="game-list">
          {/* Code Breaker */}
          <motion.div className="game-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
            <h3>Code Breaker</h3>
            <p>Guess the 5-digit code and unlock huge rewards!</p>
            <Link to="/codebreaker">
              <button className="game-button">Play Now</button>
            </Link>
          </motion.div>

          {/* Wheel of Fortune */}
          <motion.div className="game-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
            <h3>Wheel of Fortune</h3>
            <p>Spin the wheel and win exciting prizes!</p>
            <Link to="/arcade">
              <button className="game-button">Spin Now</button>
            </Link>
          </motion.div>

          {/* Future Games Placeholder */}
          <motion.div className="game-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
            <h3>Coming Soon</h3>
            <p>More games are being added to the Crypto Arcade!</p>
            <button className="game-button" disabled>Stay Tuned</button>
          </motion.div>
        </div>
      </div>

      {/* 🔹 ABOUT SECTION */}
      <div className="about-section">
        <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          🕹 About Crypto Games
        </motion.h2>
        <p>
          Crypto Games is a next-generation web3 arcade where players can win rewards 
          in cryptocurrency. Whether you're spinning the wheel or cracking the code, 
          every game is fair, transparent, and fun!
        </p>
      </div>

      {/* 🔹 FOOTER */}
      <footer className="footer">
        <p>© 2024 Crypto Games. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}
