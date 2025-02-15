import React from "react";
import ThreeScene from "./ThreeScene"; // Ensure correct path
import "./styles.css";

export default function GamePage() {
  return (
    <div className="app">
      <div className="top-bar">
        <div className="wallet-section">
          <p className="wallet-text">Wallet: XX...YYYY</p>
          <button className="disconnect-button">Disconnect</button>
        </div>

        <div className="center-section">
          <div className="rewards-display">Rewards: 0 CRG</div>
          <button className="claim-button">Claim</button>
        </div>
      </div>

      {/* 🚀 Full-Screen 3D Scene */}
      <div className="three-container">
        <ThreeScene />
      </div>
    </div>
  );
}
