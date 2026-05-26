export function Sucursals() {
  const sucursals = [
    { name: 'BA Centro', address: 'Av. Corrientes 1234', span: 'md:col-span-6', mt: '' },
    { name: 'Córdoba Nueva', address: 'Bv. San Juan 567', span: 'md:col-span-5', mt: 'md:mt-20' },
    { name: 'Rosario Norte', address: 'Av. Pellegrini 890', span: 'md:col-span-4', mt: 'md:-mt-10' },
    { name: 'Mendoza Plaza', address: 'Av. San Martín 432', span: 'md:col-span-7', mt: 'md:mt-12' },
  ]

  return (
    <section className="relative">
      <div className="absolute -left-20 top-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl -z-10"></div>
      
      <h2 className="text-6xl md:text-8xl font-lexend font-black uppercase text-right mb-24 leading-none italic">
        Nuestras<br /><span className="text-white bg-black px-4">Casas</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {sucursals.map((suc, i) => (
          <div 
            key={i} 
            className={`retro-card p-10 bg-zinc-900 border-4 border-white brutal-shadow-hover transition-all duration-500 ${suc.span} ${suc.mt}`}
          >
            <h3 className="text-3xl font-black mb-4 uppercase italic text-yellow-400">{suc.name}</h3>
            <p className="text-xl mb-8 font-bold opacity-80">{suc.address}</p>
            <button className="brutal-btn w-full text-xl py-3 bg-white text-black hover:bg-red-500 hover:text-white transition-colors">
              VER MAPA
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
