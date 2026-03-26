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

    console.log("--- 🕵️‍♂️ INICIANDO DIAGNÓSTICO DE CONEXÃO ---");
    console.log("📍 URL ALVO:", api.defaults.baseURL + "/auth/register");
    console.log("📦 DADOS ENVIADOS:", { username, email });

    try {
      setLoading(true);
      setError("");
      
      const response = await api.post("/auth/register", { username, email, password });
      
      console.log("✅ RESPOSTA DA API:", response.data);
      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (err: any) {
      console.log("--- ❌ ERRO DETECTADO ---");
      
      if (err.response) {
        // A API respondeu, mas com erro (ex: 400, 401, 500)
        console.error("Status do Erro:", err.response.status);
        console.error("Mensagem da API:", err.response.data);
        setError(`Erro da API (${err.response.status}): ${err.response.data.message || 'Erro desconhecido'}`);
      } else if (err.request) {
        // A requisição foi feita mas não houve resposta (CORS ou Firewall)
        console.error("Nenhuma resposta recebida. Possível erro de CORS ou SSL!");
        setError("Network Error: O servidor não respondeu. Verifique o CORS ou Certificado SSL.");
      } else {
        console.error("Erro na configuração da requisição:", err.message);
        setError(`Erro: ${err.message}`);
      }
    } finally {
      setLoading(false);
      console.log("--- 🏁 FIM DO DIAGNÓSTICO ---");
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
      </div>
    </div>
  );
}
