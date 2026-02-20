import { useState } from "react"
import Button from "./Button"

function MovieCard({ title, image, descripcion, onVerDetalle, esFavorito, onToggleFavorito }) {
  // useState #2: Mostrar/ocultar descripción
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false)

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
