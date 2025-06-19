// src/Result.jsx
import React from "react";

export default function Result({ score, onReset, answers }) {
  return (
    <div className="result">
      <h2>Hiilijalanjälkesi:</h2>
      <p>{score} kg CO₂ vuodessa</p>

      <div className="diet">
        <h3>Ruokavalio:</h3>
        <p>{answers.diet === "meat" ? "Liha" : answers.diet === "vegetarian" ? "Kasvis" : answers.diet === "vegan" ? "Vegaani" : "Sekaruokavalio"}</p>
      </div>

      <div className="driving">
        <h3>Ajotapa:</h3>
        <p>{answers.drivingDistance === "low" ? "Alle 5000 km vuodessa" : answers.drivingDistance === "medium-low" ? "5000–15000 km vuodessa" : answers.drivingDistance === "medium-high" ? "15000–20000 km vuodessa" : answers.drivingDistance === "high" ? "20000–30000 km vuodessa" : "Yli 30000 km vuodessa"}</p>
      </div>

      <div className="fuel">
        <h3>Auton polttoaine:</h3>
        <p>{answers.fuelType === "gasoline" ? "Bensiini" : answers.fuelType === "diesel" ? "Diesel" : answers.fuelType === "gas" ? "Kaasu" : "Sähköauto"}</p>
      </div>

      <div className="housing">
        <h3>Asunto:</h3>
        <p>{answers.housing === "apartment" ? "Kerrostalo" : answers.housing === "townhouse" ? "Rivitalo" : answers.housing === "house" ? "Omakotitalo" : "Luhtitalo"}</p>
      </div>

      <div className="electricity">
        <h3>Sähkönkulutus:</h3>
        <p>{answers.electricity} kWh</p>
      </div>

      <button onClick={onReset}>Tee laskelma uudelleen</button>
    </div>
  );
}
