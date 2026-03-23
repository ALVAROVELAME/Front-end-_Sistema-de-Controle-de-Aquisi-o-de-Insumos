import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    if (!email || !password) return alert("Preencha todos os campos");
    try {
      setLoading(true);
      setError("");
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("@SCAI:token", response.data.token);
      navigate("/dashboard");
    } catch (err: any) {
      console.error("ERRO:", err.response?.data || err.message);
      setError("Falha no login. Verifique os dados.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white font-sans">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">SCAI - Login</h1>
        {error && <p className="text-red-400 text-sm mb-4 bg-red-400/10 p-2 rounded text-center">{error}</p>}

        <input
          type="email" placeholder="E-mail" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500"
        />

        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha" value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-400 transition-colors"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        <button
          onClick={handleLogin} disabled={loading}
          className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition disabled:opacity-50 font-semibold"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
        <p className="text-sm text-center text-slate-400 mt-4">
          Não tem conta? <span onClick={() => navigate("/register")} className="text-indigo-400 cursor-pointer hover:underline">Criar conta</span>
        </p>
      </div>
    </div>
  );
}
