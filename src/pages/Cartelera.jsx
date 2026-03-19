import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"

function Cartelera() {
  const navigate = useNavigate()

  // useState #1: Lista de películas favoritas (IDs)
  const [favoritos, setFavoritos] = useState([])
  const [peliculas, setPeliculas] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("/peliculas-sugeridas.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const peliculasData = datos.peliculas ?? []
        setPeliculas(peliculasData)
        setCargando(false)
      })
  }, [])

  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  return (
    <>
      <h2 className="pagina-titulo">Cartelera</h2>

      {favoritos.length > 0 && (
        <section className="seccion">
          <h3 className="seccion-titulo">
            Mis Favoritas ({favoritos.length})
          </h3>
          <div className="favoritos-lista">
            {peliculas
              .filter((p) => favoritos.includes(p.id))
              .map((p) => (
                <span key={p.id} className="favorito-tag">
                  ★ {p.title}
                </span>
              ))}
          </div>
        </section>
      )}

      {cargando ? (
        <p className="texto-cargando">Cargando cartelera...</p>
      ) : (
        <main className="grid-pagina">
          {peliculas.map((pelicula) => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.title}
              image={pelicula.image}
              descripcion={pelicula.descripcion}
              onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
              esFavorito={favoritos.includes(pelicula.id)}
              onToggleFavorito={() => toggleFavorito(pelicula.id)}
            />
          ))}
        </main>
      )}
    </>
  )
}

export default Cartelera
