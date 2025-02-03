import React, { useState } from "react";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import ThreeScene from "./components/ThreeScene"; // Ensure correct path
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

  // ✅ Connect Phantom Wallet (Using Solana Web3.js)
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

  // ✅ Spin Wheel Logic
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

  // ✅ Claim Rewards Logic (Placeholder, replace with actual blockchain logic)
  const claimRewards = () => {
    if (!walletAddress) {
      alert("Connect your wallet first!");
      return;
    }
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
        {/* ✅ Phantom Wallet Connect Button */}
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

        {/* ✅ Claim Rewards Button */}
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
      </div>
    </div>
  );
}
