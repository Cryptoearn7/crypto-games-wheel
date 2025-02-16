import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles.css"; // Ensure Tailwind is applied

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* 🔹 Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
        <h1 className="text-yellow-400 text-3xl font-bold">Crypto Games</h1>
        <div className="space-x-6">
          <Link to="/games" className="text-white hover:text-yellow-400 text-lg">
            Games
          </Link>
          <Link to="/faq" className="text-white hover:text-yellow-400 text-lg">
            FAQ
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 text-lg">
            About
          </Link>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <div className="relative w-full h-[600px] flex flex-col justify-center items-center text-center text-white bg-gradient-to-b from-gray-900 to-black">
        <motion.h1 
          className="text-5xl font-bold text-yellow-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Crypto Arcade
        </motion.h1>
        <p className="mt-4 text-lg max-w-xl px-4">
          Play, Earn, and Compete in the first blockchain-powered gaming experience.
        </p>
        <Link to="/arcade">
          <motion.button 
            className="mt-6 px-6 py-3 bg-yellow-500 rounded-lg text-black text-lg font-bold shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter the Arcade
          </motion.button>
        </Link>
      </div>

      {/* 🔹 Featured Games Section */}
      <div className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl text-yellow-400 mb-6">🎮 Featured Games</h2>
        <div className="flex justify-center gap-10">
          
          {/* CodeBreaker - Clickable Card */}
          <motion.div 
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/code-breaker">
              <img src="/images/codebreaker-machine.png" alt="Code Breaker" className="w-48 mx-auto"/>
              <p className="mt-4 text-lg font-semibold text-yellow-400">Code Breaker</p>
            </Link>
          </motion.div>

          {/* Wheel of Fortune (Placeholder) */}
          <motion.div 
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/wheel-machine.png" alt="Wheel of Fortune" className="w-48 mx-auto"/>
            <p className="mt-4 text-lg font-semibold">Wheel of Fortune</p>
          </motion.div>
        </div>
      </div>

      {/* 🔹 Footer */}
      <footer className="text-center py-6 bg-gray-900">
        <p>Crypto Games © 2024 | Powered by Solana Blockchain</p>
      </footer>

    </div>
  );
}
