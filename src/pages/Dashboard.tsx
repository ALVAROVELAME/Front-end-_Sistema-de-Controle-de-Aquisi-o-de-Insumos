import { Layout } from "../components/Layout"
import { useNavigate } from "react-router-dom"

export function Dashboard() {
  const navigate = useNavigate()

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Dashboard 🚀</h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/lista")}
          className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500"
        >
          Lista de Compras
        </button>
      </div>
    </Layout>
  )
}
