import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    if (!email || !password) return alert("Preencha todos os campos");

    try {
      setLoading(true);
      setError("");
      
      // Chamada real para sua VM1
      const response = await api.post("/auth/login", { email, password });
      
      // Salva o Token e o nome do usuário (opcional)
      localStorage.setItem("@SCAI:token", response.data.token);
      
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError("Falha no login. Verifique e-mail e senha.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">SCAI - Login</h1>

        {error && <p className="text-red-400 text-sm mb-4 bg-red-400/10 p-2 rounded">{error}</p>}

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 px-4 py-2 rounded-lg bg-slate-700 outline-none focus:ring-2 ring-indigo-500"
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
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition disabled:opacity-50 font-semibold"
        >
          {loading ? "Autenticando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}
