import React, { useState } from "react";
import "../styles.css";

export default function CodeBreaker() {
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const [guessedNumbers, setGuessedNumbers] = useState([]); // Track previous guesses
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
        setMessage("🎉 Congratulations! You won $20,000!");
      } else {
        setGuessedNumbers([...guessedNumbers, userGuess]); // Add to guessed list
        setMessage("❌ Incorrect! Number removed from available guesses.");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="code-breaker-container">
      <h1>🔢 Code Breaker</h1>
      <p>Enter a 5-digit code for a chance to win $20,000!</p>

      <input
        type="text"
        maxLength="5"
        placeholder="Enter your guess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        className="code-input"
      />

      <button onClick={handleGuess} disabled={isSubmitting} className="guess-button">
        {isSubmitting ? "Checking..." : "Submit Guess ($1)"}
      </button>

      {message && <p className="result-message">{message}</p>}

      {/* ✅ Show all previously guessed numbers */}
      {guessedNumbers.length > 0 && (
        <div className="guessed-numbers">
          <h3>❌ Guessed Numbers:</h3>
          <div className="number-grid">
            {guessedNumbers.map((num, index) => (
              <span key={index} className="guessed-number">{num}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
