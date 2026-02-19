import FoodCard from "../components/FoodCard"

function Alimento() {
  return (
    <>
      <h2 className="pagina-titulo">Alimentos</h2>

      {/* Categoría: Bebidas */}
      <section className="seccion">
        <h3 className="seccion-titulo">Bebidas</h3>
        <div className="seccion-grid">
          <FoodCard
            title="Refresco Grande"
            Price="65"
            image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          />
          <FoodCard
            title="Agua Natural"
            Price="35"
            image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          />
        </div>
        
        
      </section>

      {/* Categoría: Comestibles */}
      <section className="seccion">
        <h3 className="seccion-titulo">Comestibles</h3>
        <div className="seccion-grid">
          <FoodCard
            title="Hot Dog"
            Price="75"
            image="https://www.belbrandsfoodservice.com/wp-content/uploads/2018/05/recipe-desktop-merkts-cheesy-hot-dawg.jpg"
          />
          <FoodCard
            title="Nachos con Queso"
            Price="89"
            image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          />
        </div>
      </section>

      {/* Categoría: Snacks o dulces */}
      <section className="seccion">
        <h3 className="seccion-titulo">Snacks o Dulces</h3>
        <div className="seccion-grid">
          <FoodCard
            title="Palomitas Grandes"
            Price="95"
            image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          />
          <FoodCard
            title="Chocolates"
            Price="45"
            image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
          />
        </div>
      </section>
    </>
  )
}

export default Alimento
