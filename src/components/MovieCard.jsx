import Button from "./Button"

function MovieCard({ title, image, onVerDetalle }) {
  return (
    <div className="movie-card">
      <img
        src={image}
        alt={title}
        className="movie-card-img"
      />
      <div className="movie-card-body">
        <h3>{title}</h3>
        <Button text="Ver detalle" onClick={onVerDetalle} />
      </div>
    </div>
  )
}

export default MovieCard
