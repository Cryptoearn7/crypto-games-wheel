import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RoomModel() {
  const { scene } = useGLTF("/models/room.glb"); // Ensure this path matches your model file
  return <primitive object={scene} scale={1} />;
}

export default function ThreeScene({ handleSpin }) {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0 }}
      camera={{ position: [4, 8, 12], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <RoomModel />
      </Suspense>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}
