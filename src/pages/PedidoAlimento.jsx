import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton"

/**
 * Simulación de pedido en barra (solo alimentos). No incluye compra de boletos.
 */
function PedidoAlimento() {
  const navigate = useNavigate()
  const location = useLocation()

  const producto = location.state?.producto ?? null
  const precio = location.state?.precio ?? null

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
      producto
    })
    setFormulario({ nombre: "", email: "" })
  }

  return (
    <>
      <div className="page-barra-volver">
        <BackButton fallback="/alimentos" />
      </div>

      <h2 className="pagina-titulo">Pedido en barra</h2>

      <section className="seccion">
        {!producto ? (
          <div className="pedido-alimento-sin-producto">
            <p className="texto-cargando">
              No hay un producto seleccionado. Elige uno en la sección Alimentos.
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => navigate("/alimentos")}
            >
              Ir a Alimentos
            </button>
          </div>
        ) : (
          <>
            <p className="pedido-alimento-resumen">
              Producto: <strong className="pedido-alimento-nombre">{producto}</strong>
              {precio != null && (
                <>
                  {" "}
                  · <span className="pedido-alimento-precio">${precio}</span>
                </>
              )}
            </p>
            <p className="pedido-alimento-ayuda">
              Simulación de pedido para recoger en el mostrador de dulcería. Esto no incluye
              entradas de cine.
            </p>

            <form className="formulario" onSubmit={handleSubmit}>
              <div className="formulario-campo">
                <label htmlFor="pa-nombre">Nombre para el pedido</label>
                <input
                  type="text"
                  id="pa-nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  placeholder="Cómo aparecerá en el mostrador"
                  required
                />
              </div>

              <div className="formulario-campo">
                <label htmlFor="pa-email">Correo (confirmación simulada)</label>
                <input
                  type="email"
                  id="pa-email"
                  name="email"
                  value={formulario.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  required
                />
              </div>

              <button type="submit" className="btn">
                Confirmar pedido en barra
              </button>
            </form>

            {confirmacion && (
              <div className="formulario-resultado">
                <h4>Pedido registrado (simulación)</h4>
                <p>
                  <strong>Nombre:</strong> {confirmacion.nombre}
                </p>
                <p>
                  <strong>Correo:</strong> {confirmacion.email}
                </p>
                <p>
                  <strong>Producto:</strong> {confirmacion.producto}
                </p>

                <button
                  type="button"
                  className="btn"
                  onClick={() => navigate("/alimentos")}
                >
                  Volver a Alimentos
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  )
}

export default PedidoAlimento
