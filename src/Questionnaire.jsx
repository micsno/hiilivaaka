// src/Questionnaire.jsx
import React, { useState } from "react";

export default function Questionnaire({ onSubmit }) {
    const [diet, setDiet] = useState("meat");
    const [drivingDistance, setDrivingDistance] = useState("low");
    const [fuelType, setFuelType] = useState("gasoline");
    const [flying, setFlying] = useState("none");
    const [housing, setHousing] = useState("apartment");
    const [electricity, setElectricity] = useState(3000);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Lomake lähetetty", { diet, drivingDistance, fuelType, flying, housing, electricity });
        onSubmit({ diet, drivingDistance, fuelType, flying, housing, electricity });
    };

    const handleElectricityChange = (e) => {
        const newElectricity = Number(e.target.value);
        setElectricity(newElectricity);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Ruokavalio</label>
            <select value={diet} onChange={(e) => setDiet(e.target.value)}>
                <option value="meat">Liha</option>
                <option value="vegetarian">Kasvis</option>
                <option value="vegan">Vegaani</option>
                <option value="mixed">Sekaruokavalio</option>
            </select>

            <label>Ajotapa (kilometrit vuodessa)</label>
            <select value={drivingDistance} onChange={(e) => setDrivingDistance(e.target.value)}>
                <option value="low">Alle 5000 km</option>
                <option value="medium-low">5000–15000 km</option>
                <option value="medium-high">15000–20000 km</option>
                <option value="high">20000–30000 km</option>
                <option value="very-high">Yli 30000 km</option>
            </select>

            <label>Auton polttoaine</label>
            <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                <option value="gasoline">Bensiini</option>
                <option value="diesel">Diesel</option>
                <option value="gas">Kaasu</option>
                <option value="electric">Sähköauto</option>
            </select>

            <label>Lennot</label>
            <select value={flying} onChange={(e) => setFlying(e.target.value)}>
                <option value="none">Ei</option>
                <option value="some">Jonkin verran</option>
                <option value="frequent">Usein</option>
            </select>

            <label>Asunto</label>
            <select value={housing} onChange={(e) => setHousing(e.target.value)}>
                <option value="apartment">Kerrostalo</option>
                <option value="townhouse">Rivitalo</option>
                <option value="house">Omakotitalo</option>
                <option value="maisonette">Luhtitalo</option>
            </select>

            <label>Sähkönkulutus (kWh/vuosi)</label>
            <div className="range-container">
                <input
                    type="range"
                    min="0"
                    max="25000"
                    step="100"
                    value={electricity}
                    onChange={handleElectricityChange}
                />

                <span>{electricity} kWh</span>
            </div>

            <button type="submit">Laske hiilijalanjälki</button>
        </form>
    );
}
