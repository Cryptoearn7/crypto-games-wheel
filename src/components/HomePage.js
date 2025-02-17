import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // ✅ Ensure styles are applied

export default function HomePage() {
  return (
    <div className="homepage">
      <h1>Crypto Games Arcade</h1>
      <p>Play & Win Crypto with Fun Games!</p>
      
      <div className="buttons">
        <Link to="/arcade">
          <button className="play-button">Enter Arcade</button>
        </Link>
        <Link to="/codebreaker">
          <button className="game-button">Play Code Breaker</button>
        </Link>
      </div>
    </div>
  );
}
