import { useNavigate } from "react-router-dom"

export function SlideExplicacao() {
  const navigate = useNavigate()

  return (
    <section className="h-screen w-screen snap-start bg-slate-900 text-white">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2">

        {/* IMAGEM */}
        <div className="relative h-64 md:h-full">
          <img
            src="/containers.jpg"
            alt="Gestão de Insumos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* TEXTO */}
        <div className="flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold">
              Sistema de Controle de Aquisição de Insumos (SCAI)
            </h2>

            <p className="text-slate-300">
              O SCAI foi desenvolvido para simplificar o gerenciamento de insumos,
              pedidos e estoques da sua empresa em uma plataforma intuitiva.
            </p>

            <p className="text-slate-300">
              Tenha controle total, reduza erros operacionais e aumente a eficiência
              dos processos com informações organizadas e confiáveis.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
              >
                Conhecer o Sistema
              </button>

              <button
                onClick={() => navigate("/beneficios")}
                className="px-5 py-2 border border-white/30 rounded-xl hover:bg-white/10 transition"
              >
                Ver Benefícios
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
