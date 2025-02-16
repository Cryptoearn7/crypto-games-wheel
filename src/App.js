import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CodeBreaker from "./components/CodeBreaker";
import ThreeScene from "./components/ThreeScene"; // ✅ 3D Arcade Scene
import "./styles.css"; // ✅ Ensure Tailwind styles are applied

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [totalRewards, setTotalRewards] = useState(0);

  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      window.solana.on("connect", () => {
        setWalletAddress(window.solana.publicKey.toString());
      });

      window.solana.on("disconnect", () => {
        setWalletAddress(null);
      });

      (async () => {
        try {
          const response = await window.solana.connect({ onlyIfTrusted: true });
          setWalletAddress(response.publicKey.toString());
        } catch (err) {
          console.log("No existing wallet connection.");
        }
      })();
    }
  }, []);

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Error connecting to wallet:", err);
      }
    } else {
      alert("Phantom Wallet not found! Install it from https://phantom.app");
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.solana?.isPhantom) {
        await window.solana.disconnect();
      }
      setWalletAddress(null);
    } catch (err) {
      console.error("Error disconnecting wallet:", err);
    }
  };

  const claimRewards = () => {
    if (!walletAddress) {
      alert("Connect your wallet first!");
      return;
    }
    alert(`Claiming your rewards: ${totalRewards} CRG`);
    setTotalRewards(0);
  };

  return (
    <Router>
      <Routes>
        {/* 🔹 Homepage Route */}
        <Route path="/" element={<HomePage />} />

        {/* 🔹 Arcade (3D Scene) Route */}
        <Route path="/arcade" element={<ThreeScene />} />

        {/* 🔹 Code Breaker Game Route */}
        <Route path="/CodeBreaker" element={<CodeBreaker />} />
      </Routes>
    </Router>
  );
}
