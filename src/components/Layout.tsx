import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      
      {/* Navbar */}
      <nav className="bg-slate-800 px-6 py-4 flex justify-between items-center shadow">
        <h1 
          onClick={() => navigate("/dashboard")}
          className="text-lg font-bold cursor-pointer"
        >
          Shopping App 🛒
        </h1>

        <div className="flex gap-4">
          <button onClick={() => navigate("/perfil")} className="hover:text-indigo-400">
            Perfil
          </button>

          <button onClick={() => navigate("/configuracoes")} className="hover:text-indigo-400">
            Configurações
          </button>

          <button onClick={() => navigate("/")} className="text-red-400 hover:text-red-300">
            Sair
          </button>
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="p-8">
        {children}
      </main>
    </div>
  )
}
