import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RoomModel() {
  const { scene } = useGLTF("/models/room.glb"); // Make sure this path matches your uploaded file
  return <primitive object={scene} scale={1} />;
}

export default function ThreeScene() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 🔹 TOP BAR WITH BUTTONS */}
      <div
        style={{
          width: "100%",
          height: "60px",
          background: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "lightblue",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => alert("Connecting wallet...")}
        >
          Connect Wallet
        </button>

        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "lightgreen",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => alert("Claiming rewards!")}
        >
          Claim Rewards
        </button>
      </div>

      {/* 🔹 3D SCENE BELOW THE TOP BAR */}
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
      </div>
    </div>
  );
}
