import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import BackButton from "../components/BackButton"

function Boletos() {
  const navigate = useNavigate()
  const location = useLocation()

  // Solo película (desde Detalle). Los alimentos van a /alimentos/pedido.
  const seleccion = location.state?.pelicula ?? null

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
      <div className="page-barra-volver">
        <BackButton fallback="/" />
      </div>

      <h2 className="pagina-titulo">Compra de Boletos</h2>

      <section className="seccion">
        {seleccion ? (
          <p className="boletos-seleccion-texto">
            Película:{" "}
            <strong className="boletos-seleccion-nombre">{seleccion}</strong>
          </p>
        ) : (
          <p className="boletos-seleccion-texto boletos-seleccion-vacio">
            Elige una película en Cartelera o en Inicio y pulsa &quot;Comprar boletos&quot; para
            asociar la función a tu compra.
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

