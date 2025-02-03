import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function RoomModel() {
  const { scene } = useGLTF("/models/room.glb"); // Ensure this matches your model path
  return <primitive object={scene} scale={1} />;
}

export default function ThreeScene({ handleSpin, handleClaim }) {
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
        {/* Phantom Wallet Connect Button */}
        <WalletMultiButton />

        {/* Claim Button (Real Functionality) */}
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "lightgreen",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={handleClaim}
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
