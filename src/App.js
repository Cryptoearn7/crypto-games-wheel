import React, { useState } from "react";
import { motion } from "framer-motion";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./styles.css";

// Rewards for the wheel
const REWARDS = [
  "1 CRG",
  "2 CRG",
  "Try Again",
  "0.5 USDT",
  "5 CRG",
  "Jackpot!",
  "0.1 USDT",
  "10 CRG",
];

export default function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [reward, setReward] = useState(null);

  // Wallet configuration
  const endpoint = clusterApiUrl("devnet"); // Solana Devnet
  const wallets = [new PhantomWalletAdapter()];

  // Spin wheel logic
  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomSegment = Math.floor(Math.random() * REWARDS.length);

    setTimeout(() => {
      setReward(REWARDS[randomSegment]);
      setIsSpinning(false);
    }, 3000); // Simulated spin time
  };

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="app">
            {/* Title */}
            <h1>Crypto Games - Wheel of Fortune</h1>

            {/* Connect Wallet Button */}
            <WalletMultiButton />

            {/* Wheel */}
            <motion.div
              animate={{ rotate: isSpinning ? 3600 : 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="wheel"
            >
              <div className="segments">
                {REWARDS.map((reward, i) => (
                  <div
                    key={i}
                    className="segment"
                    style={{
                      transform: `rotate(${i * (360 / REWARDS.length)}deg)`,
                    }}
                  >
                    {reward}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Spin Button */}
            <button onClick={spinWheel} disabled={isSpinning}>
              {isSpinning ? "Spinning..." : "Spin the Wheel!"}
            </button>

            {/* Display Reward */}
            {reward && !isSpinning && <p>You won: {reward}!</p>}
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
