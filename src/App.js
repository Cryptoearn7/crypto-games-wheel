import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CodeBreaker from "./components/CodeBreaker";
import ThreeScene from "./components/ThreeScene"; // ✅ 3D Arcade Scene
import "./styles.css"; // ✅ Ensure Tailwind styles are applied

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [totalRewards, setTotalRewards] = useState(0);

  // ✅ Detect Wallet Connection on Load
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

  // ✅ Connect Wallet
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

  // ✅ Disconnect Wallet
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

  // ✅ Claim Rewards
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
        <Route 
          path="/arcade" 
          element={
            <div className="app">
              {/* 🔹 Fixed Top Bar */}
              <div className="top-bar">
                {/* Wallet Section */}
                <div className="wallet-section">
                  {!walletAddress ? (
                    <button className="connect-button" onClick={connectWallet}>
                      Connect Wallet
                    </button>
                  ) : (
                    <>
                      <p className="wallet-text">{walletAddress.slice(0, 2)}...{walletAddress.slice(-4)}</p>
                      <button className="disconnect-button" onClick={disconnectWallet}>
                        Disconnect
                      </button>
                    </>
                  )}
                </div>

                {/* Center Section (Rewards + Claim Button) */}
                <div className="center-section">
                  <div className="rewards-display">Rewards: {totalRewards} CRG</div>
                  <button className="claim-button" onClick={claimRewards}>
                    Claim
                  </button>
                </div>
              </div>

              {/* 3D Arcade Scene */}
              <div className="three-container">
                <ThreeScene />
              </div>
            </div>
          } 
        />

        {/* 🔹 Code Breaker Game Route */}
        <Route path="/code-breaker" element={<CodeBreaker />} />
      </Routes>
    </Router>
  );
}
