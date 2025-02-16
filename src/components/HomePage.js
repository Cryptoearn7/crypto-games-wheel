import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles.css";

export default function HomePage() {
  console.log("✅ HomePage.js Loaded!"); // ✅ Debugging message

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* 🔹 Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-lg">
        <h1 className="text-yellow-400 text-3xl font-bold">Crypto Games</h1>
        <div className="space-x-6">
          <Link to="/arcade" className="text-white hover:text-yellow-400 text-lg">
            🎮 Enter Arcade
          </Link>
          <Link to="/faq" className="text-white hover:text-yellow-400 text-lg">
            FAQ
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 text-lg">
            About Us
          </Link>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-center py-20 bg-gray-800">
        <h2 className="text-5xl font-bold text-yellow-400">🎮 Welcome to Crypto Games Arcade</h2>
        <p className="text-lg text-gray-300 max-w-2xl mt-4">
          The ultimate blockchain gaming experience! Play and win in our **Solana-powered arcade**.
        </p>

        {/* ✅ Enter Arcade Button */}
        <motion.div className="mt-6">
          <Link to="/arcade">
            <motion.button
              className="bg-yellow-500 text-black px-8 py-3 text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🎮 Enter the Arcade
            </motion.button>
          </Link>
        </motion.div>
      </header>

      {/* 🔹 Featured Games Section */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl text-yellow-400 mb-6">🔥 Featured Games</h2>
        <div className="flex justify-center gap-10">
          <motion.div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition">
            <Link to="/CodeBreaker">
              <img src="/images/codebreaker-machine.png" alt="Code Breaker" className="w-48 mx-auto"/>
              <p className="mt-4 text-lg font-semibold text-yellow-400">Code Breaker</p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Footer Section */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
        <p>&copy; 2024 Crypto Games. All rights reserved.</p>
      </footer>
    </div>
  );
}
