export function Pays() {
  return (
    <section className="relative py-20 overflow-visible">
      <div className="absolute top-1/2 -left-40 w-[120%] h-1 md:h-2 bg-white/20 -rotate-3 -z-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 md:pr-12">
          <h2 className="text-6xl md:text-8xl font-lexend font-black uppercase mb-8 leading-[0.85]">
            PAGOS<br />&<span className="text-blue-500">PROMOS</span>
          </h2>
          <p className="text-2xl font-poiret leading-tight">
            Ofrecemos todas las facilidades para que completes tu colección sin preocupaciones.
          </p>
        </div>
        
        <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-8">
          <div className="retro-card p-10 bg-white text-black -rotate-2 hover:rotate-0 transition-transform brutal-shadow">
            <div className="text-6xl mb-6">💳</div>
            <h3 className="text-2xl font-black uppercase">Tarjetas</h3>
            <p className="font-bold opacity-70">3 cuotas s/int. <br /> Visa * Mastercard * Amex</p>
          </div>
          
          <div className="retro-card p-10 bg-blue-600 text-white rotate-1 md:mt-20 hover:rotate-0 transition-transform brutal-shadow">
            <div className="text-6xl mb-6">💰</div>
            <h3 className="text-2xl font-black uppercase">Mercado Pago</h3>
            <p className="font-bold">QR / Transferencia <br /> 20% OFF EXTRA</p>
          </div>
          
          <div className="retro-card p-10 bg-yellow-400 text-black rotate-2 md:-mt-12 hover:rotate-0 transition-transform brutal-shadow">
            <div className="text-6xl mb-6">🏪</div>
            <h3 className="text-2xl font-black uppercase">En Local</h3>
            <p className="font-bold opacity-70">Efectivo / Cash <br /> Retiro inmediato</p>
          </div>
          
          <div className="retro-card p-10 bg-zinc-900 text-white -rotate-1 md:mt-8 hover:rotate-0 transition-transform brutal-shadow">
            <div className="text-6xl mb-6">🚚</div>
            <h3 className="text-2xl font-black uppercase">Envíos</h3>
            <p className="font-bold opacity-70">A todo el país <br /> Gratis +$50.000</p>
          </div>
        </div>
      </div>
    </section>
  )
}
