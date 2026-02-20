import { useState } from "react"

function Otros() {
  // Estado del formulario controlado (onChange en cada input)
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: ""
  })

  // Estado para guardar los datos enviados y mostrarlos en pantalla
  const [datosEnviados, setDatosEnviados] = useState(null)

  // onChange: actualiza el estado del formulario con cada tecla
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  // onSubmit: guarda los datos y los muestra en pantalla
  const handleSubmit = (e) => {
    e.preventDefault()
    setDatosEnviados({ ...formulario })
    setFormulario({ nombre: "", email: "" })
  }

  return (
    <>
      <h2 className="pagina-titulo">Otros</h2>

      <section className="seccion">
        <div className="seccion-grid">
          <div className="otro-card">
            <h3>Promociones</h3>
            <p>
              Aprovecha nuestras promociones especiales: 2x1 en boletos los
              martes y combos a precio especial toda la semana.
            </p>
          </div>

          <div className="otro-card">
            <h3>Membresías</h3>
            <p>
              Únete a Cinemex Club y acumula puntos en cada compra. Obtén
              descuentos exclusivos, preventas y acceso a eventos especiales.
            </p>
          </div>

          <div className="otro-card">
            <h3>Preventas</h3>
            <p>
              Sé el primero en ver los estrenos más esperados. Compra tus
              boletos en preventa y asegura tu lugar.
            </p>
          </div>

          <div className="otro-card">
            <h3>Formatos Especiales</h3>
            <p>
              Disfruta de IMAX, 4DX, Platino y más. Vive la experiencia de cine
              como nunca antes con nuestras salas premium.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario controlado: Registro para promociones */}
      <section className="seccion">
        <h3 className="seccion-titulo">Regístrate para Promociones</h3>

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

          <button type="submit" className="btn">Registrarme</button>
        </form>

        {datosEnviados && (
          <div className="formulario-resultado">
            <h4>Registro exitoso</h4>
            <p><strong>Nombre:</strong> {datosEnviados.nombre}</p>
            <p><strong>Correo:</strong> {datosEnviados.email}</p>
          </div>
        )}
      </section>
    </>
  )
}

export default Otros
