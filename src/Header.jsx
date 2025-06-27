import React, { useState } from 'react';
import './styles.css';

export default function Header() {
  const [showResources, setShowResources] = useState(false);
  const [showTips, setShowTips] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">🌿 Hiilivaaka</div>
      <ul className="nav-links">
        <li className="nav-item">
          <button
            className="dropdown-btn"
            onClick={() => setShowTips(!showTips)}
            onBlur={() => setTimeout(() => setShowTips(false), 200)}
          >
            Vinkit
          </button>
          {showTips && (
            <ul className="dropdown-menu">
              <li>💡 Sammuta valot huoneesta lähtiessäsi</li>
              <li>🚲 Suosi pyöräilyä ja kävelyä</li>
              <li>🌱 Syö kasvispainotteisesti</li>
              <li>🔌 Irrota laturit kun et käytä niitä</li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <button
            className="dropdown-btn"
            onClick={() => setShowResources(!showResources)}
            onBlur={() => setTimeout(() => setShowResources(false), 200)}
          >
            Resurssit
          </button>
          {showResources && (
            <ul className="dropdown-menu">
              <li>
                <a href="https://www.sitra.fi" target="_blank" rel="noreferrer">
                  Sitra – ilmastoteot
                </a>
              </li>
              <li>
                <a href="https://www.motiva.fi" target="_blank" rel="noreferrer">
                  Motiva – energiansäästö
                </a>
              </li>
              <li>
                <a href="https://ilmasto-opas.fi" target="_blank" rel="noreferrer">
                  Ilmasto-opas
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
