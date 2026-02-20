import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Cartelera({ cambiarVista }) {
  // useState #1: Lista de películas favoritas
  const [favoritos, setFavoritos] = useState([])

  const peliculas = [
    {
      id: 1,
      title: "Shingeki No Kyojin: The Final Season",
      image: "https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg",
      descripcion: "La batalla final entre Eren y sus compañeros define el destino de la humanidad en esta épica conclusión."
    },
    {
      id: 2,
      title: "Bob Esponja: Al Rescate",
      image: "https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg",
      descripcion: "Bob Esponja y sus amigos se embarcan en una aventura para rescatar a Gary, su querido caracol."
    },
    {
      id: 3,
      title: "Avatar: Fuego y Cenizas",
      image: "https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg",
      descripcion: "Jake Sully enfrenta una nueva amenaza que pone en peligro a todo Pandora en esta tercera entrega."
    },
    {
      id: 4,
      title: "Minecraft: La Película",
      image: "https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg",
      descripcion: "Un grupo de aventureros es transportado al mundo de Minecraft y debe sobrevivir a sus peligros."
    }
  ]

  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  return (
    <>
      <h2 className="pagina-titulo">Cartelera</h2>

      {favoritos.length > 0 && (
        <section className="seccion">
          <h3 className="seccion-titulo">Mis Favoritas ({favoritos.length})</h3>
          <div className="favoritos-lista">
            {peliculas
              .filter(p => favoritos.includes(p.id))
              .map(p => (
                <span key={p.id} className="favorito-tag">★ {p.title}</span>
              ))
            }
          </div>
        </section>
      )}

      <main className="grid-pagina">
        {peliculas.map(pelicula => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.title}
            image={pelicula.image}
            descripcion={pelicula.descripcion}
            onVerDetalle={() => cambiarVista("detalle")}
            esFavorito={favoritos.includes(pelicula.id)}
            onToggleFavorito={() => toggleFavorito(pelicula.id)}
          />
        ))}
      </main>
    </>
  )
}

export default Cartelera
