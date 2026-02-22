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
            image="https://media.istockphoto.com/id/909938470/es/foto/comida-r%C3%A1pida-cola-bebe-copa-y-pajita.jpg?s=612x612&w=0&k=20&c=MV_j5gIoFgobJM_lTmhgDnpSt1g_eStiww1xrPFw8uA="
          />
          <FoodCard
            title="Agua Natural"
            Price="35"
            image="https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw15cd23b5/images/product/7501055310883_A.jpg?sw=1000&sh=1000&sm=fit"
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
            image="https://thumbs.dreamstime.com/b/toma-en-gran-angular-de-un-hotdog-con-mostaza-y-chucrut-aislado-blanco-160674360.jpg"
          />
          <FoodCard
            title="Nachos con Queso"
            Price="89"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Flp8cVCIulYUXEDz9DBac299ZIny3upjpQ&s"
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
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSww8dKr60TPu0oMOc2sHRLyhgadUAm_Qk27Q&s"
          />
          <FoodCard
            title="Chocolates"
            Price="45"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIKiUsnvSraQW0SRz-Q0b66AmiKkyz8iSIA&s"
          />
        </div>
      </section>
    </>
  )
}

export default Alimento
