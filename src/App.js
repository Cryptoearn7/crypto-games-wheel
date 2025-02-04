import React, { useState, useEffect } from "react";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import ThreeScene from "./components/ThreeScene"; // Ensure correct path
import "./styles.css";

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  // ✅ Ensure Wallet Approval Every Time
  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        // Force fresh approval by ensuring session is not remembered
        const response = await window.solana.connect({ onlyIfTrusted: false });
        setWalletAddress(response.publicKey.toString());
        console.log("Connected with Public Key:", response.publicKey.toString());
      } catch (err) {
        console.error("Error connecting to wallet:", err);
      }
    } else {
      alert("Phantom Wallet not found! Please install it from https://phantom.app");
    }
  };

  // ✅ Fully Disconnect Wallet and Forget the Session
  const disconnectWallet = async () => {
    try {
      if (window.solana?.isPhantom) {
        await window.solana.disconnect(); // Force Phantom to disconnect
      }

      // Manually clear the stored wallet session
      setWalletAddress(null); // Forget wallet in React state
      window.solana._wallet = null; // Reset Phantom session
      window.solana._publicKey = null; // Forget public key
      console.log("Wallet fully disconnected, public key forgotten");
    } catch (err) {
      console.error("Error disconnecting wallet:", err);
    }
  };

  // ✅ Claim Rewards Logic (Placeholder)
  const claimRewards = () => {
    if (!walletAddress) {
      alert("Connect your wallet first!");
      return;
    }
    alert(`Claiming your rewards...`);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 🔹 FIXED TOP BAR WITH FUNCTIONAL BUTTONS (80px height) */}
      <div
        style={{
          width: "100%",
          height: "80px",
          background: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        {/* ✅ Wallet Connection Handling */}
        <div style={{ textAlign: "left" }}>
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
            <div>
              <p style={{ color: "white", marginBottom: "5px" }}>Connected: {walletAddress}</p>
              <button
                style={{
                  padding: "5px 15px",
                  fontSize: "14px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={disconnectWallet}
              >
                Disconnect
              </button>
            </div>
          )}
        </div>

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

      {/* 🔹 3D ROOM BELOW THE TOP BAR (Adjusted for 80px Height) */}
      <div style={{ flex: 1, position: "relative", marginTop: "80px" }}>
        <ThreeScene />
      </div>
    </div>
  );
}
