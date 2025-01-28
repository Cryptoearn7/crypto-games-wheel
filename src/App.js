import React, { useState } from "react";
import { motion } from "framer-motion";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import "./styles.css";

// Rewards for the wheel
const REWARDS = [
  "1 CRG",
  "2 CRG",
  "Try Again",
  "0.5 USDT",
  "5 CRG",
  "0.1 USDT",
  "10 CRG",
];

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [reward, setReward] = useState(null);

  // Connect Phantom Wallet
  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        console.log("Connected with Public Key:", response.publicKey.toString());
      } catch (err) {
        console.error("Error connecting to wallet:", err);
      }
    } else {
      alert("Phantom Wallet not found! Please install it from https://phantom.app");
    }
  };

  // Spin wheel logic
  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomSegment = Math.floor(Math.random() * REWARDS.length);

    setTimeout(() => {
      setReward(REWARDS[randomSegment]);
      setIsSpinning(false);
    }, 3000); // Simulated spin time
  };

  // Claim Rewards function (placeholder for now)
  const claimRewards = () => {
    if (!walletAddress) {
      alert("Connect your wallet first!");
      return;
    }

    // Simulate claim process (replace with actual blockchain interaction later)
    alert(`Claiming your rewards: ${reward || "No rewards yet!"}`);
  };

return (
  <div className="app">
    {/* Title */}
    <h1>Crypto Games - Wheel of Fortune</h1>

    {/* Connect Wallet Button */}
    {!walletAddress ? (
      <button onClick={connectWallet} className="connect-wallet">
        Connect Phantom Wallet
      </button>
    ) : (
      <p>Connected Wallet: {walletAddress}</p>
    )}

    {/* Buttons Container */}
    <div className="buttons-container">
      <button onClick={spinWheel} disabled={isSpinning} className="spin-button">
        {isSpinning ? "Spinning..." : "Spin the Wheel!"}
      </button>
      <button onClick={claimRewards} className="claim-button">
        Claim Rewards
      </button>
    </div>

    {/* Wheel */}
    <div className="wheel-container">
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
    </div>

    {/* Display Reward */}
    {reward && !isSpinning && <p className="reward">You won: {reward}!</p>}
  </div>
);
