export function Register() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Criar Conta ✨</h1>

        <input
          type="text"
          placeholder="Usuário"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-6 px-4 py-2 rounded-lg bg-slate-700"
        />

        <button className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
          Registrar
        </button>
      </div>
    </div>
  )
}
