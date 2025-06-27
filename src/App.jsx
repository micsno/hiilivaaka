import { useState } from "react";
import Header from "./Header";
import Questionnaire from "./Questionnaire";
import Result from "./Result";
import TipsPopup from "./TipsPopup";
import './styles.css';

function App() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showTips, setShowTips] = useState(false);

  const calculateScore = (data) => {
    const factors = {
      diet: { meat: 2500, vegetarian: 1500, vegan: 800, mixed: 2000 },
      drivingDistance: {
        low: 1000, "medium-low": 2500, "medium-high": 3500, high: 4500, "very-high": 6000,
      },
      fuelType: { gasoline: 4000, diesel: 5000, gas: 2000, electric: 0 },
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
      factors.electricity(Number(data.electricity));

    setScore(total);
    setAnswers(data);
  };

  return (
    <div>
      <Header onShowTips={() => setShowTips(true)} />
      <div className="container">
        <h1>🌱 Hiilijalanjälkilaskuri</h1>

        {!score ? (
          <Questionnaire onSubmit={calculateScore} />
        ) : (
          <Result score={score} onReset={() => setScore(null)} answers={answers} />
        )}
      </div>

      {showTips && <TipsPopup onClose={() => setShowTips(false)} />}
    </div>
  );
}

export default App;
