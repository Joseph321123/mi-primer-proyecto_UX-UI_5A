import { useNavigate } from "react-router-dom"

function BackButton({ fallback = "/", label = "← Volver" }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      navigate(-1)
    } else {
      navigate(fallback)
    }
  }

  return (
    <button type="button" className="btn btn-volver" onClick={handleClick}>
      {label}
    </button>
  )
}

export default BackButton
