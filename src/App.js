import React, { useState, useEffect } from "react";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import ThreeScene from "./components/ThreeScene"; // Ensure correct path
import "./styles.css";

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  // ✅ Detect Wallet Connection State Automatically
  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      // Listen for connect event
      window.solana.on("connect", () => {
        setWalletAddress(window.solana.publicKey.toString());
        console.log("Wallet Connected:", window.solana.publicKey.toString());
      });

      // Listen for disconnect event
      window.solana.on("disconnect", () => {
        setWalletAddress(null);
        console.log("Wallet Disconnected");
      });

      // Check if already connected
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

  // ✅ Disconnect Wallet & Remove App Connection from Phantom
  const disconnectWallet = async () => {
    try {
      if (window.solana?.isPhantom) {
        await window.solana.disconnect(); // Force disconnect from Phantom
      }

      // Ensure session is cleared
      setWalletAddress(null);

      console.log("Wallet fully disconnected. App should be removed from Phantom.");

      // ✅ Listen for Phantom's response & confirm removal
      window.solana.on("disconnect", () => {
        console.log("Phantom confirmed app removal.");
        setWalletAddress(null);
      });
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
    alert(`Claiming your rewards...`);
  };

    return (
     <div className="app">
      {/* 🔹 FIXED TOP BAR WITH FUNCTIONAL BUTTONS (80px height) */}
      <div className="top-bar">
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

      {/* 🔹 3D ROOM BELOW THE TOP BAR (Flush with Black Bar) */}
      <div className="three-container">
        <ThreeScene />
      </div>
    </div>
  );
}
