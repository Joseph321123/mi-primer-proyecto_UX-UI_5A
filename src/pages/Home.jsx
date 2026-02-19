import MovieCard from "../components/MovieCard"

function Home({ cambiarVista }) {
  return (
    <>
      <h2 className="pagina-titulo">Estrenos</h2>
      <main className="grid-pagina">
        <MovieCard
          title="Avatar: Fuego y Cenizas"
          image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="¡Ayuda!"
          image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="Arco"
          image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          onVerDetalle={() => cambiarVista("detalle")}
        />
      </main>
    </>
  )
}

export default Home
