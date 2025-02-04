import React, { useState, useEffect } from "react";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import ThreeScene from "./components/ThreeScene"; // Ensure correct path
import "./styles.css";

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  // ✅ Check Wallet Connection State from Phantom
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

  // ✅ Let Phantom Handle Connection Requests
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

  // ✅ Let Phantom Handle Disconnection Requests
  const disconnectWallet = async () => {
    if (window.solana?.isPhantom) {
      await window.solana.disconnect();
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
        {/* ✅ Wallet Connection Handling (No Disconnect Button - Managed by Phantom) */}
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
            <p style={{ color: "white" }}>Connected: {walletAddress}</p>
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
