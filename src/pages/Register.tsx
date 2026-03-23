import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister() {
    if (!username || !email || !password) return alert("Preencha todos os campos");

    try {
      setLoading(true);
      setError("");
      
      // Envia para a sua API na VM1
      await api.post("/auth/register", { username, email, password });
      
      alert("Conta criada com sucesso! Agora você pode fazer login.");
      navigate("/login");
    } catch (err: any) {
      console.error(err);
      setError("Erro ao criar conta. Tente outro e-mail ou verifique os dados.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Criar Conta ✨</h1>

        {error && <p className="text-red-400 text-sm mb-4 bg-red-400/10 p-2 rounded">{error}</p>}

        <input
          type="text"
          placeholder="Nome de usuário (username)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500"
        />

        <button 
          onClick={handleRegister}
          disabled={loading}
          className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition disabled:opacity-50 font-semibold"
        >
          {loading ? "Registrando..." : "Registrar"}
        </button>

        <p className="text-sm text-center text-slate-400 mt-4">
          Já tem conta? <span onClick={() => navigate("/login")} className="text-indigo-400 cursor-pointer">Faça Login</span>
        </p>
      </div>
    </div>
  );
}
