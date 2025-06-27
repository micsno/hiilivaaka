import React, { useState } from "react";

function Questionnaire({ onSubmit }) {
  const [formData, setFormData] = useState({
    diet: "",
    drivingDistance: "",
    fuelType: "",
    flying: "",
    housing: "",
    electricity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div><label>Ruokavalio</label>
        <select name="diet" onChange={handleChange} required>
          <option value="">Valitse...</option>
          <option value="meat">Sekasyöjä</option>
          <option value="vegetarian">Kasvissyöjä</option>
          <option value="vegan">Vegaani</option>
          <option value="mixed">Sekoitus</option>
        </select>
      </div>

      <div><label>Ajomatka</label>
        <select name="drivingDistance" onChange={handleChange} required>
          <option value="">Valitse...</option>
          <option value="low">Alle 5 km/päivä</option>
          <option value="medium-low">5–15 km</option>
          <option value="medium-high">15–30 km</option>
          <option value="high">30–50 km</option>
          <option value="very-high">Yli 50 km</option>
        </select>
      </div>

      <div><label>Polttoaine</label>
        <select name="fuelType" onChange={handleChange} required>
          <option value="">Valitse...</option>
          <option value="gasoline">Bensiini</option>
          <option value="diesel">Diesel</option>
          <option value="gas">Kaasu</option>
          <option value="electric">Sähkö</option>
        </select>
      </div>

      <div><label>Lentäminen</label>
        <select name="flying" onChange={handleChange} required>
          <option value="">Valitse...</option>
          <option value="none">Ei lainkaan</option>
          <option value="some">Joissakin tapauksissa</option>
          <option value="frequent">Usein</option>
        </select>
      </div>

      <div><label>Asuminen</label>
        <select name="housing" onChange={handleChange} required>
          <option value="">Valitse...</option>
          <option value="apartment">Kerrostalo</option>
          <option value="townhouse">Rivitalo</option>
          <option value="house">Omakotitalo</option>
          <option value="maisonette">Paritalo</option>
        </select>
      </div>

      <div>
        <label>Sähkönkulutus (kWh/vuosi)</label>
        <input
          type="range"
          name="electricity"
          min="0"
          max="20000"
          step="500"
          value={formData.electricity}
          onChange={handleChange}
        />
        <span>{formData.electricity} kWh</span>
      </div>

      <button type="submit">Laske</button>
    </form>
  );
}

export default Questionnaire;
