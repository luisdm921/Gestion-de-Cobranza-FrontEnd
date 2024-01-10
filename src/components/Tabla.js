import data from "../data/data";
import "../App.css";

const TablaDatos = ({ oficinaSeleccionada }) => {
  const datosFiltrados = data.filter(
    (item) => item.estado === parseInt(oficinaSeleccionada)
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Fianza</th>
          <th>Movimiento</th>
          <th>Fiado</th>
          <th>Antigüedad</th>
          <th>Días de Vencimiento</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        {datosFiltrados.map((item, index) => (
          <tr key={index}>
            <td>{item.fianza}</td>
            <td>{item.movimiento}</td>
            <td>{item.fiado}</td>
            <td
              style={{
                backgroundColor:
                  item.antiguedad <= 60
                    ? "green"
                    : item.antiguedad <= 120
                    ? "orange"
                    : "red",
                color: "white", // Ajusta el color del texto según tu preferencia
              }}
            >
              {item.antiguedad}
            </td>
            <td
              style={{
                backgroundColor:
                  item.vencimiento <= 30
                    ? "green"
                    : item.vencimiento <= 60
                    ? "orange"
                    : "red",
                color: "white", // Ajusta el color del texto según tu preferencia
              }}
            >
              {item.vencimiento}
            </td>
            <td>{item.importe}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDatos;
