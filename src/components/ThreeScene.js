import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RoomModel() {
  const { scene } = useGLTF("/models/room.glb"); // Ensure this path matches your model
  return <primitive object={scene} scale={1} />;
}

export default function ThreeScene({ handleSpin }) {
  const [walletAddress, setWalletAddress] = useState(null);

  // ✅ Connect to Phantom Wallet (Using Solana Web3.js)
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
      alert("Phantom Wallet not found! Install it from https://phantom.app");
    }
  };

  // ✅ Claim Rewards (Placeholder, Replace with Real Logic)
  const claimRewards = () => {
    if (!walletAddress) {
      alert("Connect your wallet first!");
      return;
    }
    alert("Claiming your rewards...");
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 🔹 FIXED TOP BAR WITH FUNCTIONAL BUTTONS */}
      <div
        style={{
          width: "100%",
          height: "70px",
          background: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* ✅ Connect Wallet Button */}
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

      {/* 🔹 3D ROOM BELOW THE TOP BAR */}
      <div style={{ flex: 1, position: "relative" }}>
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [4, 8, 12], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <RoomModel />
          </Suspense>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
        </Canvas>

        {/* 🔹 Spin Button (Placing Slightly Above 3D Scene) */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              background: "yellow",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={handleSpin}
          >
            Spin the Wheel!
          </button>
        </div>
      </div>
    </div>
  );
}
