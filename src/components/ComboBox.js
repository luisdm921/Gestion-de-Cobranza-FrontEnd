import React, { useState } from "react";
import "../App.css";

function ComboBox({ oficinas, agentes, ejecutivos, setOficinaSeleccionada }) {
  const [agenteValue, setAgenteValue] = useState("Agentes");
  const [ejecutivoValue, setEjecutivoValue] = useState("Ejecutivos");

  const handleOficinaChange = (value) => {
    const oficinaId = parseInt(value);
    setOficinaSeleccionada(oficinaId);

    const agenteSeleccionado = agentes.find(
      (agente) => agente.oficinaId === oficinaId
    );
    const ejecutivoSeleccionado = ejecutivos.find(
      (ejecutivo) => ejecutivo.oficinaId === oficinaId
    );

    setAgenteValue(agenteSeleccionado.nombre);
    setEjecutivoValue(ejecutivoSeleccionado.nombre);
  };

  return (
    <div className="combobox-container">
      <select
        className="combobox"
        onChange={(e) => handleOficinaChange(e.target.value)}
      >
        {oficinas.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nombre}
          </option>
        ))}
      </select>
      <select
        className="combobox"
        value={agenteValue}
        onChange={(e) => setAgenteValue(e.target.value)}
      >
        {agentes.map((item) => (
          <option key={item.id} value={item.nombre}>
            {item.nombre}
          </option>
        ))}
      </select>

      <select
        className="combobox"
        value={ejecutivoValue}
        onChange={(e) => setEjecutivoValue(e.target.value)}
      >
        {ejecutivos.map((item) => (
          <option key={item.id} value={item.nombre}>
            {item.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ComboBox;
