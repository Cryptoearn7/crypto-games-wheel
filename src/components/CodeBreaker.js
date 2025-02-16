import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles.css";

const randomCode = () => {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
};

export default function CodeBreaker() {
  const [generatedCode, setGeneratedCode] = useState(randomCode());
  const [userInput, setUserInput] = useState([0, 0, 0, 0, 0]);
  const [message, setMessage] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleWheelChange = (index, direction) => {
    if (isUnlocked) return; // Lock is open, prevent more inputs

    let newInput = [...userInput];
    if (direction === "up") {
      newInput[index] = (newInput[index] + 1) % 10;
    } else {
      newInput[index] = (newInput[index] - 1 + 10) % 10;
    }
    setUserInput(newInput);
  };

  const checkCode = () => {
    if (userInput.join("") === generatedCode.join("")) {
      setIsUnlocked(true);
      setMessage("🔓 Correct! Lock Opened!");
    } else {
      let correctDigits = userInput.filter((num, i) => num === generatedCode[i]).length;
      setMessage(`❌ ${correctDigits} out of 5 correct! Try again.`);
    }
  };

  return (
    <div className="code-breaker-container">
      <h1 className="text-3xl text-yellow-400 mb-4">Code Breaker</h1>
      <p className="text-gray-300">Turn the dials to break the code!</p>

      {/* 🔹 Lock UI */}
      <div className="lock">
        {userInput.map((num, index) => (
          <div key={index} className="wheel">
            <button onClick={() => handleWheelChange(index, "up")}>▲</button>
            <motion.div 
              className="number-display"
              animate={{ rotateX: [0, 180, 360] }}
              transition={{ duration: 0.3 }}
            >
              {num}
            </motion.div>
            <button onClick={() => handleWheelChange(index, "down")}>▼</button>
          </div>
        ))}
      </div>

      {/* 🔹 Submit Button */}
      <motion.button 
        className="check-button mt-6"
        onClick={checkCode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Try Code
      </motion.button>

      {/* 🔹 Unlock Animation */}
      {isUnlocked && <motion.div 
        className="unlock-animation"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1, repeat: 3 }}
      >
        🔓
      </motion.div>}

      {/* 🔹 Feedback Message */}
      <p className="mt-4 text-lg text-white">{message}</p>
    </div>
  );
}
