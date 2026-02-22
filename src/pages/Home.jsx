import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

function Home({ cambiarVista }) {
  // useEffect + fetch: carga películas sugeridas desde un JSON local
  const [sugeridas, setSugeridas] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("/peliculas-sugeridas.json")
      .then(respuesta => respuesta.json())
      .then(datos => {
        setSugeridas(datos)
        setCargando(false)
      })
  }, [])

  return (
    <>
      <h2 className="pagina-titulo">Estrenos</h2>
      <main className="grid-pagina">
        <MovieCard
          title="Avatar: Fuego y Cenizas"
          image="https://lumiere-a.akamaihd.net/v1/images/baja_integrado_vert_payoff_avatar_3_788f92d9.jpeg"
          descripcion="Jake Sully enfrenta una nueva amenaza que pone en peligro a todo Pandora."
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="¡Ayuda!"
          image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          descripcion="Una familia enfrenta situaciones inesperadas en esta comedia llena de sorpresas."
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="Arco"
          image="https://m.media-amazon.com/images/M/MV5BM2IzNjdiNzUtNTJjMy00Mjk5LTg3MzItNzA2ZjYzOWE2MGIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          descripcion="Un viaje emocional a través del tiempo que conecta pasado y presente."
          onVerDetalle={() => cambiarVista("detalle")}
        />
      </main>

      {/* Sección dinámica: películas sugeridas cargadas con useEffect */}
      <h2 className="pagina-titulo">Películas Sugeridas</h2>
      {cargando ? (
        <p className="texto-cargando">Cargando sugerencias...</p>
      ) : (
        <main className="grid-pagina">
          {sugeridas.map(pelicula => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.title}
              image={pelicula.image}
              descripcion={pelicula.descripcion}
              onVerDetalle={() => cambiarVista("detalle")}
            />
          ))}
        </main>
      )}
    </>
  )
}

export default Home
