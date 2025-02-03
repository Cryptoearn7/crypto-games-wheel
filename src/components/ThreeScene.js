import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RoomModel() {
  const { scene } = useGLTF("/models/room.glb"); // Ensure this path matches your model file
  return <primitive object={scene} scale={1} />;
}

export default function ThreeScene({ handleSpin }) {
  return (
    <div style={{ position: "absolute", top: "70px", left: "0", width: "100vw", height: "calc(100vh - 70px)" }}>
      <Canvas camera={{ position: [4, 8, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <RoomModel />
        </Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>

      {/* 🔹 Spin Button Positioned Correctly */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10, // Ensures the button is on top
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
  );
}
