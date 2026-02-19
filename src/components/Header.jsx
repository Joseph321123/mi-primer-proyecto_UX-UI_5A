function Header({ cambiarVista }) {
  return (
    <header className="header">
      <div className="header-contenido">
        <h1 className="header-titulo">Cinemex</h1>

        <nav className="header-nav">
          <span className="header-link" onClick={() => cambiarVista("home")}>
            Inicio
          </span>
          <span className="header-link" onClick={() => cambiarVista("cartelera")}>
            Cartelera
          </span>
          <span className="header-link" onClick={() => cambiarVista("Alimento")}>
            Alimentos
          </span>
          <span className="header-link" onClick={() => cambiarVista("otros")}>
            Otros
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Header
