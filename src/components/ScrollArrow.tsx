import { useState, useEffect } from "react"

export function ScrollArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        absolute bottom-8 left-1/2 -translate-x-1/2
        flex flex-col items-center justify-center
        animate-bounce animate-fade
      "
    >
      <div className="w-20 h-2 relative">

        <div className="absolute top-0 w-full h-5 bg-white clip-v"></div>
        <div className="absolute top-4 w-full h-5 bg-white clip-v"></div>
      </div>
    </button>
  )
}
