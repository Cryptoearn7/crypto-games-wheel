import React, { useState, useEffect } from "react";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import ThreeScene from "./components/ThreeScene"; // Ensure correct path
import "./styles.css";

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    // Ensure wallet does not auto-reconnect
    if (window.solana?.isConnected) {
      setWalletAddress(window.solana.publicKey.toString());
    }
  }, []);

  // ✅ Force Wallet Approval Every Time
  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        await disconnectWallet(); // First, force a disconnect before connecting

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

  // ✅ Fully Disconnect Wallet and Forget the Session
  const disconnectWallet = async () => {
    try {
      if (window.solana?.isPhantom) {
        await window.solana.disconnect(); // Disconnect wallet
      }

      // Clear any stored wallet data
      localStorage.removeItem("walletName");
      localStorage.removeItem("solana_wallet_adapter");
      sessionStorage.clear();

      // Manually reset Phantom state
      window.solana._wallet = null;
      window.solana._publicKey = null;
      window.solana.isConnected = false;

      setWalletAddress(null);
      console.log("Wallet fully disconnected.");

      // Force Phantom UI to reset connection
      window.solana.on("disconnect", () => {
        console.log("Phantom has been fully disconnected.");
        setWalletAddress(null);
      });

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
