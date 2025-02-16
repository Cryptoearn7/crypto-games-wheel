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

      {/* 🔹 Hero Section with Background Image */}
      <div className="relative w-full h-[600px]">
        <img 
          src="/images/arcade1.jpg" 
          alt="Arcade Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
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
      </div>

      {/* 🔹 Featured Games Section */}
      <div className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl text-yellow-400 mb-6">🎮 Featured Games</h2>
        <div className="flex justify-center gap-10">
          <motion.div className="p-6 bg-gray-800 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/game1.png" alt="Game 1" className="w-48 mx-auto"/>
            <p className="mt-4 text-lg font-semibold">Code Breaker</p>
          </motion.div>
          <motion.div className="p-6 bg-gray-800 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/images/game2.png" alt="Game 2" className="w-48 mx-auto"/>
            <p className="mt-4 text-lg font-semibold">Wheel of Fortune</p>
          </motion.div>
        </div>
      </div>

      {/* 🔹 Why Play Section */}
      <div className="py-16 bg-gray-800 text-center">
        <h2 className="text-3xl text-yellow-400 mb-6">Why Play at Crypto Arcade?</h2>
        <div className="flex justify-center gap-12 px-6">
          <motion.div 
            className="p-6 bg-gray-700 rounded-lg w-80 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">🤑 Earn Crypto</h3>
            <p className="mt-2 text-sm">Play games and earn rewards directly into your wallet.</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-gray-700 rounded-lg w-80 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">🛡️ Secure & Fair</h3>
            <p className="mt-2 text-sm">Blockchain-based fairness ensures every game is provably random.</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-gray-700 rounded-lg w-80 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">🔥 Huge Prizes</h3>
            <p className="mt-2 text-sm">Win up to $20,000+ in our exclusive gaming events.</p>
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
