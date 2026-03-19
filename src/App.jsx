import './App.css'

import Header from "./components/Header"

import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimento from "./pages/Alimento"
import Otros from "./pages/Otros"
import Boletos from "./pages/Boletos"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/alimentos" element={<Alimento />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/pelicula/:id" element={<Detalle />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route
          path="*"
          element={
            <main className="detalle-pagina">
              <h2>404 - Página no encontrada</h2>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
