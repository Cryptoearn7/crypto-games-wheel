import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles.css";

export default function CodeBreaker() {
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const [guessedNumbers, setGuessedNumbers] = useState([]); // Track previous guesses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Used for animations

  // ✅ Mocked random 5-digit number (Replace with blockchain logic later)
  const correctNumber = "34567";

  const handleGuess = () => {
    if (userGuess.length !== 5 || isNaN(userGuess)) {
      setMessage("⚠️ Please enter a valid 5-digit number.");
      return;
    }

    if (guessedNumbers.includes(userGuess)) {
      setMessage("⚠️ This number has already been guessed! Try another.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (userGuess === correctNumber) {
        setMessage("🎉 Congratulations! You cracked the code! 💰");
        // Trigger explosion effect
      } else {
        setGuessedNumbers([...guessedNumbers, userGuess]); // Add to guessed list
        setMessage("❌ Incorrect! Code locked.");
      }
      setAnimationKey((prev) => prev + 1); // Refresh animation
      setIsSubmitting(false);
    }, 1000);
  };

  // Virtual Keypad Functionality
  const handleKeypadClick = (digit) => {
    if (userGuess.length < 5) {
      setUserGuess(userGuess + digit);
    }
  };

  const handleBackspace = () => {
    setUserGuess(userGuess.slice(0, -1));
  };

  return (
    <div className="code-breaker-layout">
      {/* ✅ Animated Background */}
      <div className="animated-bg"></div>

      {/* ✅ Main Game Container */}
      <motion.div
        key={animationKey}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="code-breaker-container"
      >
        <h1>🔢 Code Breaker</h1>
        <p>Crack the 5-digit code & win big!</p>

        {/* Animated Guess Box */}
        <motion.div className="guess-box" animate={{ scale: [0.9, 1.1, 1] }}>
          {userGuess || "?????"}
        </motion.div>

        {/* Virtual Keypad */}
        <div className="keypad">
          {[..."1234567890"].map((num) => (
            <button key={num} onClick={() => handleKeypadClick(num)}>{num}</button>
          ))}
          <button className="backspace" onClick={handleBackspace}>⌫</button>
          <button className="submit-guess" onClick={handleGuess} disabled={isSubmitting}>
            {isSubmitting ? "🔄 Checking..." : "✅ Submit"}
          </button>
        </div>

        {message && <p className="result-message">{message}</p>}
      </motion.div>

      {/* ✅ Incorrect Guesses Section (Right Side) */}
      <div className="guessed-numbers-container">
        <h3>❌ Previous Guesses:</h3>
        <div className="number-list">
          {guessedNumbers.map((num, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="guessed-number"
            >
              {num}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
