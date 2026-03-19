import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import MovieCarousel from "../components/MovieCarousel"

function Home() {
  const navigate = useNavigate()

  const [peliculas, setPeliculas] = useState([])
  const [carousel, setCarousel] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("/peliculas-sugeridas.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const peliculasData = datos.peliculas ?? []
        const carouselData = datos.carousel ?? []
        setPeliculas(peliculasData)
        setCarousel(carouselData)
        setCargando(false)
      })
  }, [])

  const idsEstrenos = [1, 2, 3]
  const estrenos = peliculas.filter((p) => idsEstrenos.includes(p.id))
  const sugeridas = peliculas.filter((p) => !idsEstrenos.includes(p.id))

  return (
    <>
      {/* Carrusel de “ESTRENOS” (usa la sección carousel del JSON) */}
      <section
        style={{
          maxWidth: "420px",
          margin: "0 auto",
          padding: "16px"
        }}
      >
        <h2>ESTRENOS</h2>
        <MovieCarousel movies={carousel} />
      </section>

      <h2 className="pagina-titulo">Estrenos</h2>
      {cargando ? (
        <p className="texto-cargando">Cargando estrenos...</p>
      ) : (
        <main className="grid-pagina">
          {estrenos.map((pelicula) => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.title}
              image={pelicula.image}
              descripcion={pelicula.descripcion}
              onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
            />
          ))}
        </main>
      )}

      <h2 className="pagina-titulo">Películas Sugeridas</h2>
      {cargando ? (
        <p className="texto-cargando">Cargando sugerencias...</p>
      ) : (
        <main className="grid-pagina">
          {(sugeridas.length ? sugeridas : peliculas).map((pelicula) => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.title}
              image={pelicula.image}
              descripcion={pelicula.descripcion}
              onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
            />
          ))}
        </main>
      )}
    </>
  )
}

export default Home
