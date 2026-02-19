import { useState } from "react"

import './App.css'

import Header from "./components/Header"

import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimento from "./pages/Alimento"
import Otros from "./pages/Otros"

function App() {
  const [vistaActual, setVistaActual] = useState("home")

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header cambiarVista={setVistaActual} />

      {vistaActual === "home" && <Home cambiarVista={setVistaActual} />}
      {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual} />}
      {vistaActual === "detalle" && <Detalle />}
      {vistaActual === "Alimento" && <Alimento />}
      {vistaActual === "otros" && <Otros />}
    </div>
  )
}

export default App
