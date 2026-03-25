import { useLocation, useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const esActivo = (ruta) =>
    location.pathname === ruta ||
    (ruta === "/cartelera" && location.pathname.startsWith("/pelicula/")) ||
    (ruta === "/alimentos" && location.pathname.startsWith("/alimentos"))

  return (
    <header className="header">
      <div className="header-contenido">
        <h1 className="header-titulo">Cinemex</h1>

        <nav className="header-nav">
          <span
            className={`header-link ${esActivo("/") ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Inicio
          </span>
          <span
            className={`header-link ${esActivo("/cartelera") ? "active" : ""}`}
            onClick={() => navigate("/cartelera")}
          >
            Cartelera
          </span>
          <span
            className={`header-link ${
              esActivo("/alimentos") ? "active" : ""
            }`}
            onClick={() => navigate("/alimentos")}
          >
            Alimentos
          </span>
          <span
            className={`header-link ${esActivo("/otros") ? "active" : ""}`}
            onClick={() => navigate("/otros")}
          >
            Otros
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Header
