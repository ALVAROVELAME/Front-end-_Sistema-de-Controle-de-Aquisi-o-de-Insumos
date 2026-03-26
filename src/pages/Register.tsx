import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister() {
    if (!username || !email || !password) return alert("Preencha todos os campos");
    try {
      setLoading(true);
      setError("");
      console.log("Chamando API em:", api.defaults.baseURL);
      
      await api.post("/auth/register", { username, email, password });
      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (err: any) {
      // Aqui vamos ver o erro real no F12
      const apiError = err.response?.data?.message || err.message;
      console.error("ERRO DETALHADO:", err);
      setError(`Erro: ${apiError}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white font-sans">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Criar Conta</h1>
        {error && <p className="text-red-400 text-xs mb-4 bg-red-400/10 p-2 rounded text-center border border-red-400/20">{error}</p>}
        
        <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500" />
        
        <div className="relative mb-6">
          <input type={showPassword ? "text" : "password"} placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500" />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-400">
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        <button onClick={handleRegister} disabled={loading} className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition disabled:opacity-50 font-semibold">
          {loading ? "Processando..." : "Registrar"}
        </button>
        <p className="text-sm text-center text-slate-400 mt-4">
          Já tem conta? <span onClick={() => navigate("/login")} className="text-indigo-400 cursor-pointer hover:underline">Entrar</span>
        </p>
      </div>
    </div>
  );
}
