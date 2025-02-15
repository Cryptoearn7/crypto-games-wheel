import React, { useState, useEffect } from "react";
import ThreeScene from "./components/ThreeScene";
import "../styles.css"; // ✅ Use correct path

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
    <div className="app">
      {/* 🔹 Fixed Top Bar */}
      <div className="top-bar">
        {/* 🔹 Wallet Section */}
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

        {/* 🔹 Center Section (Rewards + Claim Button) */}
        <div className="center-section">
          <div className="rewards-display">Rewards: {totalRewards} CRG</div>
          <button className="claim-button" onClick={claimRewards}>
            Claim
          </button>
        </div>
      </div>

      {/* 🔹 3D Arcade Scene */}
      <div className="three-container">
        <ThreeScene />
      </div>
    </div>
  );
}
