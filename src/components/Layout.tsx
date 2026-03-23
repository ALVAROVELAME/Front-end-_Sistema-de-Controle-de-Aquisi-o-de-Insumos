import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem("@SCAI:token"); // Remove o acesso
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="bg-slate-800 px-6 py-4 flex justify-between items-center shadow border-b border-slate-700">
        <h1 onClick={() => navigate("/dashboard")} className="text-lg font-bold cursor-pointer hover:text-indigo-400 transition">
          Shopping App 🛒
        </h1>

        <div className="flex gap-4">
          <button onClick={() => navigate("/lista")} className="hover:text-indigo-400">Minha Lista</button>
          <button onClick={() => navigate("/perfil")} className="hover:text-indigo-400">Perfil</button>
          <button onClick={handleLogout} className="text-red-400 hover:text-red-300 font-semibold">
            Sair
          </button>
        </div>
      </nav>

      <main className="p-8 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  )
}
