import React, { useState } from "react";
import { motion } from "framer-motion";

const randomCode = () => {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
};

export default function CodeBreaker() {
  const [generatedCode, setGeneratedCode] = useState(randomCode());
  const [userInput, setUserInput] = useState([0, 0, 0, 0, 0]);
  const [message, setMessage] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleWheelChange = (index, direction) => {
    if (isUnlocked) return; // Lock is open, prevent inputs

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Code Breaker</h1>
      <p className="text-lg text-gray-300 mb-4">Turn the dials to break the code!</p>

      {/* 🔹 Lock UI */}
      <div className="flex space-x-4 bg-gray-800 p-6 rounded-lg shadow-xl">
        {userInput.map((num, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-900 p-2 rounded-md shadow-md">
            <button 
              onClick={() => handleWheelChange(index, "up")}
              className="text-yellow-400 text-2xl hover:text-yellow-300"
            >
              ▲
            </button>
            <motion.div 
              className="text-3xl font-bold bg-black text-yellow-400 w-12 h-12 flex items-center justify-center rounded-md"
              animate={{ rotateX: [0, 180, 360] }}
              transition={{ duration: 0.3 }}
            >
              {num}
            </motion.div>
            <button 
              onClick={() => handleWheelChange(index, "down")}
              className="text-yellow-400 text-2xl hover:text-yellow-300"
            >
              ▼
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 Submit Button */}
      <motion.button 
        className="mt-6 px-6 py-3 bg-yellow-500 rounded-lg text-black text-lg font-bold shadow-lg hover:scale-105 transition"
        onClick={checkCode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Try Code
      </motion.button>

      {/* 🔹 Unlock Animation */}
      {isUnlocked && <motion.div 
        className="text-6xl mt-6"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1, repeat: 3 }}
      >
        🔓
      </motion.div>}

      {/* 🔹 Feedback Message */}
      <p className="mt-4 text-lg text-white">{message}</p>

      {/* 🔙 Back to Home */}
      <a href="/" className="mt-8 text-yellow-400 underline text-lg">Back to Home</a>
    </div>
  );
}
