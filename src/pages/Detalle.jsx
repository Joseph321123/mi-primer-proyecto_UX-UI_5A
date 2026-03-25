import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../components/BackButton"

function Detalle() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [pelicula, setPelicula] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("/peliculas-sugeridas.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const peliculasData = datos.peliculas ?? []
        const encontrada = peliculasData.find(
          (p) => String(p.id) === String(id)
        )
        setPelicula(encontrada ?? null)
        setCargando(false)
      })
  }, [id])

  return (
    <main className="detalle-pagina">
      <div className="page-barra-volver">
        <BackButton fallback="/cartelera" />
      </div>

      {cargando ? (
        <p className="texto-cargando">Cargando detalle...</p>
      ) : pelicula ? (
        <>
          <h2>{pelicula.title}</h2>
          <img
            src={pelicula.image}
            alt={pelicula.title}
            className="detalle-img"
          />
          <p>{pelicula.descripcion}</p>

          <button
            type="button"
            className="btn"
            onClick={() =>
              navigate("/boletos", {
                state: { pelicula: pelicula.title }
              })
            }
          >
            Comprar boletos
          </button>
        </>
      ) : (
        <>
          <h2>Película no encontrada</h2>
          <p className="texto-cargando">
            No existe una película con el ID: {id}
          </p>
        </>
      )}
    </main>
  )
}

export default Detalle
