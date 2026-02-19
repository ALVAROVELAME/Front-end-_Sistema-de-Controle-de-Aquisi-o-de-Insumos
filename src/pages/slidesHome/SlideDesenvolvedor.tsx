import { FaGithub, FaLinkedin } from "react-icons/fa"

export function SlideDesenvolvedor() {
  return (
    <section
      className="h-screen w-screen flex flex-col items-center justify-center snap-start bg-cover bg-center"
      style={{ backgroundImage: "url('/fundo-slide222.jpg')" }}
    >
      <div className="flex flex-col items-center text-center space-y-4 bg-black/30 p-6 rounded-xl backdrop-blur-md">
        
        {/* Foto */}
        <div className="w-56 h-56 rounded-full p-1 shadow-lg overflow-hidden bg-slate-700">
          <img
            src="/Alvaro.jpg"
            alt="Desenvolvedor"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Nome */}
        <p className="text-white/90 text-xl font-semibold">
          Desenvolvido por Você 🚀
        </p>

        {/* Redes sociais */}
        <div className="flex gap-6 text-white text-2xl">
          <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Projetos */}
        <div className="mt-4 flex flex-col gap-2 text-white/90">
          <p className="font-semibold">Projetos realizados:</p>
          <a href="https://seusite.com/projeto1" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition underline">
            Projeto 1 - Lista de Compras
          </a>
          <a href="https://seusite.com/projeto2" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition underline">
            Projeto 2 - Lista de Tarefas
          </a>
        </div>

      </div>
    </section>
  )
}
