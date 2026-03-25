import { Routes, Route } from "react-router-dom"

import BackButton from "../components/BackButton"
import Home from "../pages/Home"
import Cartelera from "../pages/Cartelera"
import Detalle from "../pages/Detalle"
import Alimento from "../pages/Alimento"
import DetalleAlimento from "../pages/DetalleAlimento"
import PedidoAlimento from "../pages/PedidoAlimento"
import Otros from "../pages/Otros"
import Boletos from "../pages/Boletos"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/alimentos" element={<Alimento />} />
      <Route path="/alimentos/detalle/:slug" element={<DetalleAlimento />} />
      <Route path="/alimentos/pedido" element={<PedidoAlimento />} />
      <Route path="/otros" element={<Otros />} />
      <Route path="/pelicula/:id" element={<Detalle />} />
      <Route path="/boletos" element={<Boletos />} />
      <Route
        path="*"
        element={
          <main className="detalle-pagina">
            <div className="page-barra-volver">
              <BackButton fallback="/" />
            </div>
            <h2>404 - Página no encontrada</h2>
            <p className="texto-cargando">La ruta no existe. Usa el menú o Volver.</p>
          </main>
        }
      />
    </Routes>
  )
}

export default AppRoutes
