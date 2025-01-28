import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const REWARDS = [
  "1 CRG",
  "2 CRG",
  "Try Again",
  "0.5 USDT",
  "5 CRG",
  "Jackpot!",
  "0.1 USDT",
  "10 CRG",
];

export default function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [reward, setReward] = useState(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomSegment = Math.floor(Math.random() * REWARDS.length);

    setTimeout(() => {
      setReward(REWARDS[randomSegment]);
      setIsSpinning(false);
    }, 3000); // Simulated spin time
  };

  return (
    <div className="app">
      <h1>Crypto Games - Wheel of Fortune</h1>

      <motion.div
        animate={{ rotate: isSpinning ? 3600 : 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="wheel"
      >
        <div className="segments">
          {REWARDS.map((reward, i) => (
            <div
              key={i}
              className="segment"
              style={{
                transform: `rotate(${i * (360 / REWARDS.length)}deg)`,
              }}
            >
              {reward}
            </div>
          ))}
        </div>
      </motion.div>

      <button onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin the Wheel!"}
      </button>

      {reward && !isSpinning && <p>You won: {reward}!</p>}
    </div>
  );
}
