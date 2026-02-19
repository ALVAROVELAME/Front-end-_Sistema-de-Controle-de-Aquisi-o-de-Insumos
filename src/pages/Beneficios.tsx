import { useNavigate } from "react-router-dom"

export function Beneficios() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full space-y-12">

        {/* HEADER */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Benefícios do SCAI
          </h1>
          <p className="text-slate-400 text-lg">
            Sistema de Controle de Aquisição de Insumos
          </p>
        </header>

        {/* BENEFÍCIOS ATUAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              📦 Controle de Estoque
            </h3>
            <p className="text-slate-300">
              Gerencie entradas e saídas de insumos com precisão e evite perdas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              ⚡ Redução de Erros
            </h3>
            <p className="text-slate-300">
              Automatize processos e minimize falhas operacionais.
            </p>
          </div>



          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              🏢 Mais Eficiência
            </h3>
            <p className="text-slate-300">
              Otimize tempo e recursos em toda a cadeia de suprimentos.
            </p>
          </div>

        </div>

        {/* PRÓXIMAS FUNCIONALIDADES */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              🚀 Próximas Funcionalidades
            </h2>
            <p className="text-slate-400">
              Recursos planejados para futuras versões do sistema
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-xl p-4">
              <p className="font-semibold">🔔 Alertas Inteligentes</p>
              <p className="text-slate-300 text-sm">
                Notificações automáticas de estoque mínimo e vencimentos.
              </p>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-xl p-4">
                <p className="font-semibold">
                📊 Relatórios Inteligentes
                </p>
                <p className="text-slate-300 text-sm">
                Visualize dados estratégicos para tomada de decisão rápida.
                </p>
          </div>

            <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-xl p-4">
              <p className="font-semibold">🤖 Previsão de Consumo</p>
              <p className="text-slate-300 text-sm">
                Análise preditiva baseada no histórico de uso.
              </p>
            </div>

            <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-xl p-4">
              <p className="font-semibold">📱 Versão Mobile</p>
              <p className="text-slate-300 text-sm">
                Acesso rápido e otimizado em smartphones.
              </p>
            </div>

          </div>

          <p className="text-center text-slate-500 text-sm">
            * Algumas funcionalidades estão em desenvolvimento e serão lançadas em breve.
          </p>
        </section>

        {/* BOTÃO */}
        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
          >
            Voltar ao Início
          </button>
        </div>

      </div>
    </div>
  )
}
