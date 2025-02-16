import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles.css";

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
        </div>
      </nav>

      {/* 🔹 Featured Games Section */}
      <div className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl text-yellow-400 mb-6">🎮 Featured Games</h2>
        <div className="flex justify-center gap-10">
          
          {/* CodeBreaker - Clickable Card */}
          <motion.div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition">
            <Link to="/code-breaker">
              <img src="/images/codebreaker-machine.png" alt="Code Breaker" className="w-48 mx-auto"/>
              <p className="mt-4 text-lg font-semibold text-yellow-400">Code Breaker</p>
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
