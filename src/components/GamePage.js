import React, { useState, useEffect } from "react";
import ThreeScene from "./ThreeScene"; // Ensure correct path
import "./styles.css";

export default function GamePage() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [totalRewards, setTotalRewards] = useState(0);

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

  const formatWalletAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 2)}...${address.slice(-4)}`;
  };

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

  const claimRewards = () => {
    if (!walletAddress) {
      alert("Connect your wallet first!");
      return;
    }
    alert(`Claiming your rewards: ${totalRewards} CRG`);
    setTotalRewards(0);
  };

  return (
    <div className="app">
      {/* 🔹 Fixed Top Bar */}
      <div className="top-bar">
        {/* ✅ Wallet Section (Left) */}
        <div className="wallet-section">
          {!walletAddress ? (
            <button className="connect-button" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : (
            <>
              <p className="wallet-text">{formatWalletAddress(walletAddress)}</p>
              <button className="disconnect-button" onClick={disconnectWallet}>
                Disconnect
              </button>
            </>
          )}
        </div>

        {/* ✅ Center Section (Rewards + Claim Button) */}
        <div className="center-section">
          <div className="rewards-display">Rewards: {totalRewards} CRG</div>
          <button className="claim-button" onClick={claimRewards}>
            Claim
          </button>
        </div>
      </div>

      {/* 🔹 Full-Screen 3D Scene */}
      <div className="three-container">
        <ThreeScene />
      </div>
    </div>
  );
}
