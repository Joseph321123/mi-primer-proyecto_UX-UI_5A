import "./App.css"

import Header from "./components/Header"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <AppRoutes />
    </div>
  )
}

export default App
