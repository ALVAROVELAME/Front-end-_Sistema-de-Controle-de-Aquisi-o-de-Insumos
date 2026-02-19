import { useNavigate } from "react-router-dom"

export function Login() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input
          type="text"
          placeholder="Usuário"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-2 px-4 py-2 rounded-lg bg-slate-700"
        />

        <p className="text-sm text-slate-400 mb-6">
          Não tem conta?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-400 cursor-pointer hover:text-indigo-300"
          >
            Criar conta
          </span>
        </p>

        <button
          onClick={() => navigate("/lista")}
          className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
