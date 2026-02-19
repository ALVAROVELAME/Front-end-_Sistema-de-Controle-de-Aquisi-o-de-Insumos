import { Routes, Route } from "react-router-dom"
import { Welcome } from "./pages/Welcome"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Dashboard } from "./pages/Dashboard"
import { ShoppingList } from "./pages/ShoppingList"
import { Profile } from "./pages/Profile"
import { Settings } from "./pages/Settings"
import { NotFound } from "./pages/NotFound"
import { Beneficios } from "./pages/Beneficios"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/lista" element={<ShoppingList />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/configuracoes" element={<Settings />} />
      <Route path="/beneficios" element={<Beneficios />} />


      {/* fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
