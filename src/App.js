import logo from "./images/logo-liberty-fianzas.webp";
import "./App.css";
import ComboBox from "./components/ComboBox";
import Tabla from "./components/Tabla";
import Pagos from "./components/Pagos";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [oficinas, setOficinas] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [ejecutivos, setEjecutivos] = useState([]);
  const [oficinaSeleccionada, setOficinaSeleccionada] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseOficinas = await axios.get(
          "http://localhost:3003/api/Oficinas"
        );
        const responseAgentes = await axios.get(
          "http://localhost:3003/api/Agentes"
        );
        const responseEjecutivos = await axios.get(
          "http://localhost:3003/api/Ejecutivos"
        );

        setOficinas(responseOficinas.data);
        setAgentes(responseAgentes.data);
        setEjecutivos(responseEjecutivos.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setTimeout(() => fetchData(), 3000);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Prima por Cobrar</h1>
      </header>
      <ComboBox
        oficinas={oficinas}
        agentes={agentes}
        ejecutivos={ejecutivos}
        setOficinaSeleccionada={setOficinaSeleccionada}
      />{" "}
      <Pagos></Pagos>
      <Tabla oficinaSeleccionada={oficinaSeleccionada}></Tabla>
    </div>
  );
}

export default App;
