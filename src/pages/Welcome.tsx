import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { SlideDesenvolvedor } from "./slidesHome/SlideDesenvolvedor"
import { SlideExplicacao } from "./slidesHome/SlideExplicacao"
import { ScrollArrow } from "../components/ScrollArrow"

export function Welcome() {
  const navigate = useNavigate()
  const slidesRef = useRef<HTMLDivElement>(null)

  // ❄️ Neve
  const snowflakes = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 2}px`,
    delay: `${Math.random() * 10}s`,
    duration: `${Math.random() * 10 + 5}s`,
  }))

  const scrollToSlide = (index: number) => {
    if (!slidesRef.current) return

    const slideHeight = window.innerHeight

    slidesRef.current.scrollTo({
      top: slideHeight * index,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">

      {/* ❄️ NEVE */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {snowflakes.map(flake => (
          <span
            key={flake.id}
            className="absolute bg-white rounded-full opacity-70 animate-fall"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
            }}
          />
        ))}
      </div>

      {/* 🎞️ SLIDES */}
      <div
        ref={slidesRef}
        className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth"
      >

        {/* 🟣 Slide 1 */}
        <section className="relative h-screen w-screen flex flex-col items-center justify-center snap-start bg-slate-900">
          <div className="relative z-20 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-2 text-white">
              Bem-vindo ✨
            </h1>

            <p className="text-slate-400 mb-8 text-center max-w-md">
              Sistema de Controle de Aquisição de Insumos (SCAI)
            </p>

            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
            >
              Entrar
            </button>
          </div>

          {/* Degradê */}
          <div
            className="absolute bottom-0 left-0 w-full h-32"
            style={{
              background:
                "linear-gradient(to bottom, rgba(56,59,69,0), rgba(56,59,69,1))",
            }}
          />

          {/* ⬇️ Seta */}
          <ScrollArrow onClick={() => scrollToSlide(1)} />
        </section>

        {/* 🟣 Slide 2 */}
        <section className="relative h-screen w-screen snap-start">
          <SlideExplicacao />

        </section>


        {/* 🟣 Slide 3 */}
        <SlideDesenvolvedor />

      </div>

      {/* 🎨 Animações */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(100vh); }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        .animate-bounce {
          animation: bounce 1.2s infinite;
        }

        @keyframes fade {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }

        .animate-fade {
          animation: fade 2.5s ease-in-out infinite;
        }

        .clip-v {
          clip-path: polygon(50% 100%, 0 0, 100% 0);
        }
      `}</style>
    </div>
  )
}
