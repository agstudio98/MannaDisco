export function Carrousel() {
  const images = [
    { title: 'Sucursal BA', desc: 'Abriendo nuevos tesoros en vinilo', span: 'md:col-span-8', bg: 'bg-red-500' },
    { title: 'Vintage Audio', desc: 'Equipos restaurados a nuevo', span: 'md:col-span-4', bg: 'bg-white text-black', mt: 'md:mt-24' },
    { title: 'The Spin', desc: 'Siente la aguja en el surco', span: 'md:col-span-4', bg: 'bg-yellow-400 text-black', mt: 'md:-mt-12' },
    { title: 'Retro CDs', desc: 'La era digital de los 90', span: 'md:col-span-8', bg: 'bg-black text-white', mt: 'md:mt-8' }
  ]

  return (
    <section className="relative overflow-visible pb-40">
      <h2 className="text-6xl md:text-9xl font-lexend font-black uppercase mb-20 leading-none">
        GALERÍA<br /><span className="text-white/20">ESTILO</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {images.map((img, i) => (
          <div 
            key={i} 
            className={`retro-card p-4 md:p-8 flex flex-col justify-end min-h-[400px] transition-all duration-500 hover:scale-[1.02] brutal-shadow-hover ${img.span} ${img.bg} ${img.mt || ''} ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
          >
            <div className="w-full aspect-video bg-white/10 rounded mb-8 flex items-center justify-center overflow-hidden">
               <div className="w-48 h-48 bg-black/40 rounded-full border-4 border-white/20 vinyl-spin flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/40 rounded-full"></div>
               </div>
            </div>
            <h3 className="text-3xl font-black uppercase italic mb-2 leading-none">{img.title}</h3>
            <p className="text-xl font-bold opacity-80 uppercase leading-tight">{img.desc}</p>
          </div>
        ))}
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px] -z-10 translate-y-40 translate-x-40"></div>
    </section>
  )
}
