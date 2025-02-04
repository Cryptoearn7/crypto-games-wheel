import React, { useState, useEffect } from "react";
import ThreeScene from "./components/ThreeScene"; // Ensure correct path
import "./styles.css";

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [totalRewards, setTotalRewards] = useState(0); // ✅ Track rewards

  // ✅ Detect Wallet Connection State Automatically
  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      window.solana.on("connect", () => {
        setWalletAddress(window.solana.publicKey.toString());
        console.log("Wallet Connected:", window.solana.publicKey.toString());
      });

      window.solana.on("disconnect", () => {
        setWalletAddress(null);
        console.log("Wallet Disconnected");
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
        console.log("Connected with Public Key:", response.publicKey.toString());
      } catch (err) {
        console.error("Error connecting to wallet:", err);
      }
    } else {
      alert("Phantom Wallet not found! Please install it from https://phantom.app");
    }
  };

  // ✅ Disconnect Wallet
  const disconnectWallet = async () => {
    try {
      if (window.solana?.isPhantom) {
        await window.solana.disconnect();
      }
      setWalletAddress(null);
      console.log("Wallet fully disconnected.");
    } catch (err) {
      console.error("Error disconnecting wallet:", err);
    }
  };

  // ✅ Claim Rewards (Checks Wallet First)
  const claimRewards = () => {
    if (!walletAddress) {
      alert("Connect your wallet first!");
      return;
    }
    alert(`Claiming your rewards: ${totalRewards} CRG`);
    setTotalRewards(0); // Reset rewards after claiming
  };

  return (
    <div className="app">
      {/* 🔹 Fixed Top Bar */}
      <div className="top-bar">
        {/* ✅ Wallet Connection Buttons */}
        <div>
          {!walletAddress ? (
            <button className="connect-button" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : (
            <>
              <button className="disconnect-button" onClick={disconnectWallet}>
                Disconnect
              </button>
              <p className="wallet-text">Connected: {walletAddress}</p>
            </>
          )}
        </div>

        {/* ✅ Rewards Display */}
        <div className="rewards-display">
          Total Rewards: {totalRewards} CRG
        </div>

        {/* ✅ Claim Rewards Button */}
        <button className="claim-button" onClick={claimRewards}>
          Claim Rewards
        </button>
      </div>

      {/* 🔹 Full-Screen 3D Scene */}
      <div className="three-container">
        <ThreeScene />
      </div>
    </div>
  );
}
