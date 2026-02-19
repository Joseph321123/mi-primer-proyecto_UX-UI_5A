import MovieCard from "../components/MovieCard"

function Cartelera({ cambiarVista }) {
  return (
    <>
      <h2 className="pagina-titulo">Cartelera</h2>
      <main className="grid-pagina">
        <MovieCard
          title="Shingeki No Kyojin: The Final Season"
          image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="Bob Esponja: Al Rescate"
          image="https://lumiere-a.akamaihd.net/v1/images/baja_integrado_vert_payoff_avatar_3_788f92d9.jpeg?region=0%2C0%2C1226%2C1811"
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="Avatar: Fuego y Cenizas"
          image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="Minecraft: La Película"
          image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          onVerDetalle={() => cambiarVista("detalle")}
        />
      </main>
    </>
  )
}

export default Cartelera
