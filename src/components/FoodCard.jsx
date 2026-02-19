import Button from "./Button"

function FoodCard({ title, Price, image, onVerDetalle }) {
  return (
    <div className="food-card">
      <img
        src={image}
        alt={title}
        className="food-card-img"
      />
      <div className="food-card-body">
        <h3>{title}</h3>
        <p className="food-card-precio">${Price}</p>
        <Button text="Ver detalle" onClick={onVerDetalle} />
      </div>
    </div>
  )
}

export default FoodCard
