import React from "react";

function TipsPopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Hiilijalanjäljen pienentämisvinkkejä</h2>
        <ul>
          <li>Syö enemmän kasvisruokaa</li>
          <li>Käytä julkista liikennettä tai pyöräile</li>
          <li>Vaihda LED-lamppuihin</li>
          <li>Suosi lähimatkailua</li>
        </ul>
        <button onClick={onClose}>Sulje</button>
      </div>
    </div>
  );
}

export default TipsPopup;
