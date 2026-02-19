import { useNavigate } from "react-router-dom"

export function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-slate-400 mb-6">Página não encontrada</p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500"
      >
        Voltar ao início
      </button>
    </div>
  )
}
