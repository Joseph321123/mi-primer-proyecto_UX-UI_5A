import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

function Boletos() {
  const navigate = useNavigate()
  const location = useLocation()

  // Recibimos el título desde la navegación (ej. cuando vienes de Alimentos o Detalle)
  const seleccion = location.state?.pelicula || location.state?.producto || null

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: ""
  })
  const [confirmacion, setConfirmacion] = useState(null)

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setConfirmacion({
      ...formulario,
      seleccion
    })
    setFormulario({ nombre: "", email: "" })
  }

  return (
    <>
      <h2 className="pagina-titulo">Compra de Boletos</h2>

      <section className="seccion">
        {seleccion ? (
          <p style={{ textAlign: "center", marginBottom: 16, color: "var(--color-texto-secundario)" }}>
            Selección: <strong style={{ color: "var(--color-secundario)" }}>{seleccion}</strong>
          </p>
        ) : (
          <p style={{ textAlign: "center", marginBottom: 16, color: "var(--color-texto-secundario)" }}>
            Selecciona una película o alimento para continuar.
          </p>
        )}

        <form className="formulario" onSubmit={handleSubmit}>
          <div className="formulario-campo">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          <div className="formulario-campo">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              required
            />
          </div>

          <button type="submit" className="btn">
            Confirmar compra
          </button>
        </form>

        {confirmacion && (
          <div className="formulario-resultado">
            <h4>Compra simulada ✅</h4>
            <p>
              <strong>Nombre:</strong> {confirmacion.nombre}
            </p>
            <p>
              <strong>Correo:</strong> {confirmacion.email}
            </p>
            {confirmacion.seleccion && (
              <p>
                <strong>Para:</strong> {confirmacion.seleccion}
              </p>
            )}

            <button
              type="button"
              className="btn"
              onClick={() => navigate("/")}
            >
              Volver al inicio
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Boletos

