import React, { useState } from "react";
import { motion } from "framer-motion";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import ThreeScene from "./components/ThreeScene";
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
      alert(`You won: ${REWARDS[randomSegment]}!`);
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
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 🔹 FIXED TOP BAR WITH FUNCTIONAL BUTTONS */}
      <div
        style={{
          width: "100%",
          height: "70px",
          background: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Phantom Wallet Connect Button */}
        {!walletAddress ? (
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              background: "lightblue",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        ) : (
          <p style={{ color: "white" }}>Connected: {walletAddress}</p>
        )}

        {/* Claim Button (Real Functionality) */}
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "lightgreen",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={claimRewards}
        >
          Claim Rewards
        </button>
      </div>

      {/* 🔹 3D ROOM BELOW THE TOP BAR */}
      <div style={{ flex: 1, position: "relative" }}>
        <ThreeScene handleSpin={spinWheel} />

        {/* 🔹 Spin Button (Placing Slightly Above 3D Scene) */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              background: "yellow",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={spinWheel}
          >
            Spin the Wheel!
          </button>
        </div>
      </div>
    </div>
  );
}
