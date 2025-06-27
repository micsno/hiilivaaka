import React from "react";

function Result({ score, onReset }) {
  return (
    <div className="result">
      <p>Hiilijalanjälkesi: <strong>{score} kg CO₂ / vuosi</strong></p>
      <button onClick={onReset}>Laske uudelleen</button>
    </div>
  );
}

export default Result;
