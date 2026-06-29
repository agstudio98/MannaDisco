export function Main() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-visible">
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-left z-10">
          <h1 className="text-5xl sm:text-8xl md:text-9xl lg:text-[12rem] font-lexend font-black text-white leading-[0.85] mb-8 -ml-2 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">
            MANNA
            <br />
            <span className="text-4xl sm:text-7xl md:text-9xl text-yellow-400">DISCO</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-4xl font-poiret max-w-xl leading-tight border-l-4 sm:border-l-8 border-white pl-4 sm:pl-6">
            Descubre promociones en discos de vinilos, CDs retro y equipos de audio a precios imbatibles.
          </p>
          <div className="mt-12 flex gap-4">
             <button className="brutal-btn text-xl sm:text-2xl px-6 py-3 sm:px-8 sm:py-4 bg-white text-black hover:bg-yellow-400 transition-colors">
               VER OFERTAS
             </button>
          </div>
        </div>
        
        {/* Giant decorative vinyl */}
        <div className="hidden md:block md:col-span-5 relative h-full">
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full shadow-[0_0_100px_rgba(255,255,255,0.1)] vinyl-spin opacity-80">
            <div className="absolute inset-[35%] bg-white/10 rounded-full border-4 border-white/20 flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full border-2 border-white/30"></div>
            </div>
            {/* Grooves effect */}
            <div className="absolute inset-0 rounded-full border-[20px] border-white/5"></div>
            <div className="absolute inset-8 rounded-full border-[15px] border-white/5"></div>
            <div className="absolute inset-16 rounded-full border-[10px] border-white/5"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/10 -skew-x-12 -z-10 translate-x-20"></div>
    </section>
  )
}
