// src/App.jsx
import React, { useState } from "react";
import Questionnaire from "./Questionnaire";
import Result from "./Result";
import './styles.css';

export default function App() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const calculateScore = (data) => {
    const factors = {
      diet: { meat: 2500, vegetarian: 1500, vegan: 800, mixed: 2000 },
      drivingDistance: {
        low: 1000, // Low driving distance
        "medium-low": 2500, // Medium-low driving distance
        "medium-high": 3500,  // Medium-high driving distance
        high: 4500,  // High driving distance
        "very-high": 6000,  // Very high driving distance
      },
      fuelType: {
        gasoline: 4000, // Gasoline
        diesel: 5000,   // Diesel
        gas: 2000,      // Gas
        electric: 0,    // Electric
      },
      flying: { none: 0, some: 1100, frequent: 3000 },
      housing: { apartment: 1200, townhouse: 1800, house: 2500, maisonette: 2000 },
      electricity: (value) => {
        if (value <= 3000) return 800;
        if (value <= 5000) return 1200;
        if (value <= 7500) return 1500;
        if (value <= 10000) return 2000;
        if (value <= 13500) return 2500;
        if (value <= 15000) return 3000;
        if (value <= 20000) return 4000;
        return 5000;
      },
    };

    const total =
      factors.diet[data.diet] +
      factors.drivingDistance[data.drivingDistance] +
      factors.fuelType[data.fuelType] +
      factors.flying[data.flying] +
      factors.housing[data.housing] +
      factors.electricity(data.electricity);

    setScore(total);
    setAnswers(data);
  };

  return (
    <div className="container">
      <h1>🌱 Hiilijalanjälkilaskuri</h1>
      {!score ? (
        <Questionnaire onSubmit={calculateScore} />
      ) : (
        <Result score={score} onReset={() => setScore(null)} answers={answers} />
      )}
    </div>
  );
}
