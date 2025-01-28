import React, { useState } from "react";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import "./styles.css";

// Rewards for the wheel
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

      {/* Wheel */}
      <div className="wheel-container">
        <div
          className="wheel"
          style={{
            animation: isSpinning ? "spin 3s ease-out" : "none",
          }}
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
        </div>
      </div>

      {/* Spin Button */}
      <button onClick={spinWheel} disabled={isSpinning} className="spin-button">
        {isSpinning ? "Spinning..." : "Spin the Wheel!"}
      </button>

      {/* Display Reward */}
      {reward && !isSpinning && <p className="reward">You won: {reward}!</p>}
    </div>
  );
}
