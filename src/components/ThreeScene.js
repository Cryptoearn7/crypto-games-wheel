import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom"; // If using React Router for navigation

function RoomModel({ navigateToGame }) {
  const { scene } = useGLTF("/models/room.glb"); // Ensure this path matches your model file

  return (
    <group>
      <primitive object={scene} scale={1} />

      {/* Clickable Objects */}
      <mesh
        position={[1, 1, -3]} // Position of the wheel in the room
        onClick={() => navigateToGame("wheel")}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

      <mesh
        position={[-2, 1, -3]} // Position of computer
        onClick={() => navigateToGame("prediction")}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      <mesh
        position={[3, 1, -3]} // Position of button game
        onClick={() => navigateToGame("button-game")}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  const navigate = useNavigate(); // React Router navigation

  const navigateToGame = (game) => {
    switch (game) {
      case "wheel":
        window.location.href = "/wheel-game"; // Navigate to wheel game
        break;
      case "prediction":
        window.location.href = "/prediction-game"; // Navigate to prediction game
        break;
      case "button-game":
        window.location.href = "/button-game"; // Navigate to button game
        break;
      default:
        break;
    }
  };

  return (
    <Canvas
      camera={{ position: [4, 8, 12], fov: 50 }}
      style={{ width: "100vw", height: "calc(100vh - 70px)", position: "absolute", top: "70px", left: "0" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 
