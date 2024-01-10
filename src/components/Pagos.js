import React from "react";
import "../App.css";

function Pagos() {
  return (
    <div className="estadisticas-container">
      <div className="estadistica-card">
        <h2>Pesos</h2>
        <h2>$1,0000.000.00</h2>
        <div className="porcentajes">
          <span className="positivo">70%</span>
          <span className="negativo">30%</span>
        </div>
        <div className="cantidades">
          <span className="positivo-sub">700.000.00</span>
          <span className="negativo-sub">300.000.00</span>
        </div>
      </div>
      <div className="estadistica-card">
        <h2>Dolares</h2>
        <h2>$1,0000.000.00</h2>
        <div className="porcentajes">
          <span className="positivo">70%</span>
          <span className="negativo">30%</span>
        </div>
        <div className="cantidades">
          <span className="positivo-sub">700.000.00</span>
          <span className="negativo-sub">300.000.00</span>
        </div>
      </div>
      <div className="estadistica-card">
        <h2>Euro</h2>
        <h2>$1,0000.000.00</h2>
        <div className="porcentajes">
          <span className="positivo">70%</span>
          <span className="negativo">30%</span>
        </div>
        <div className="cantidades">
          <span className="positivo-sub">700.000.00</span>
          <span className="negativo-sub">300.000.00</span>
        </div>
      </div>
    </div>
  );
}

export default Pagos;
