import React from "react";

function MedicalCountPanel() {
  return (
    <div className="medical-count-panel">
      <h2>次の診察まで</h2>
      <h1 className="medical-count">
        <small>あと</small>
        <span className="num">12</span>時間<span className="num">32</span>分
      </h1>
      <p>ごゆっくりお越しくださいませ</p>
    </div>
  );
}

export default MedicalCountPanel;
