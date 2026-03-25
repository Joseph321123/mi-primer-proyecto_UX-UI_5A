import { useState } from "react"
import Button from "./Button"

function MovieCard({
  title,
  image,
  descripcion,
  onVerDetalle,
  esFavorito,
  onToggleFavorito,
  variant = "default"
}) {
  // useState #2: Mostrar/ocultar descripción
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false)

  if (variant === "carousel") {
    return (
      <div className="movie-card movie-card--carousel">
        <div className="movie-card-carousel-stage">
          <img
            src={image}
            alt={title}
            className="movie-card-carousel-img"
          />
        </div>
        <div className="movie-card-body movie-card-body--carousel">
          <h3>{title}</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="movie-card">
      <img
        src={image}
        alt={title}
        className="movie-card-img"
      />
      <div className="movie-card-body">
        <h3>{title}</h3>

        {descripcion && (
          <>
            <button
              className="btn btn-secundario"
              onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
            >
              {mostrarDescripcion ? "Ocultar sinopsis" : "Ver sinopsis"}
            </button>

            {mostrarDescripcion && (
              <p className="movie-card-descripcion">{descripcion}</p>
            )}
          </>
        )}

        <div className="movie-card-acciones">
          {onVerDetalle && (
            <Button text="Ver detalle" onClick={onVerDetalle} />
          )}

          {onToggleFavorito && (
            <button
              className={esFavorito ? "btn-favorito activo" : "btn-favorito"}
              onClick={onToggleFavorito}
            >
              {esFavorito ? "★ Favorita" : "☆ Agregar a favoritos"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
