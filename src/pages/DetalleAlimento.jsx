import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../components/BackButton"

function DetalleAlimento() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [item, setItem] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("/alimentos.json")
      .then((r) => r.json())
      .then((lista) => {
        const encontrado = lista.find((a) => a.slug === slug)
        setItem(encontrado ?? null)
        setCargando(false)
      })
  }, [slug])

  return (
    <main className="detalle-pagina">
      <div className="page-barra-volver">
        <BackButton fallback="/alimentos" />
      </div>

      {cargando ? (
        <p className="texto-cargando">Cargando producto...</p>
      ) : item ? (
        <>
          <h2>{item.title}</h2>
          <p className="detalle-alimento-meta">
            {item.categoria} · ${item.price}
          </p>
          <img
            src={item.image}
            alt={item.title}
            className="detalle-img detalle-img-alimento"
          />
          <p>{item.descripcion}</p>

          <button
            type="button"
            className="btn"
            onClick={() =>
              navigate("/alimentos/pedido", {
                state: {
                  producto: item.title,
                  precio: item.price,
                  slug: item.slug
                }
              })
            }
          >
            Agregar al pedido (simulación)
          </button>
        </>
      ) : (
        <>
          <h2>Producto no encontrado</h2>
          <p className="texto-cargando">No hay información para: {slug}</p>
        </>
      )}
    </main>
  )
}

export default DetalleAlimento
