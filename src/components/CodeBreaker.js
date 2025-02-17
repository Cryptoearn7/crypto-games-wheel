import React, { useState } from "react";
import "../styles.css"; // Ensure styles are applied

export default function CodeBreaker() {
  const [targetCode] = useState(generateRandomCode()); // Generates a 5-digit code
  const [guess, setGuess] = useState(["0", "0", "0", "0", "0"]); // Default numbers
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState([]); // Store wrong attempts

  // Generate a random 5-digit code
  function generateRandomCode() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 10).toString());
  }

  // Handle rotating the dial
  const handleRotate = (index, direction) => {
    setGuess((prevGuess) => {
      const newGuess = [...prevGuess];
      let newValue = parseInt(newGuess[index], 10) + (direction === "up" ? 1 : -1);
      if (newValue > 9) newValue = 0;
      if (newValue < 0) newValue = 9;
      newGuess[index] = newValue.toString();
      return newGuess;
    });
  };

  // Handle submitting the guess
  const handleSubmit = () => {
    if (guess.join("") === targetCode.join("")) {
      setMessage("🎉 Unlocked! You cracked the code!");
    } else {
      setMessage("❌ Incorrect! Try Again.");
      setAttempts((prev) => [...prev, guess.join("")]); // Store the wrong attempt
    }
  };

  return (
    <div className="code-breaker-container">
      <h1>🔐 Code Breaker</h1>
      <p>Guess the correct 5-digit code to unlock!</p>

      {/* Lock Dial Interface */}
      <div className="lock-container">
        {guess.map((num, index) => (
          <div key={index} className="lock-dial">
            <button className="dial-btn up" onClick={() => handleRotate(index, "up")}>▲</button>
            <div className="dial-number">{num}</div>
            <button className="dial-btn down" onClick={() => handleRotate(index, "down")}>▼</button>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button className="submit-button" onClick={handleSubmit}>🔓 Unlock</button>

      {/* Message Display */}
      {message && <p className="message">{message}</p>}

      {/* Wrong Attempts Display */}
      <div className="attempts">
        <h3>Previous Guesses</h3>
        {attempts.map((attempt, i) => (
          <p key={i} className="wrong-attempt">{attempt}</p>
        ))}
      </div>
    </div>
  );
}
