export function Footer() {
  return (
    <footer className="mt-40 border-t-8 border-white bg-black p-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5 bg-white text-black p-12 md:p-20">
          <h3 className="text-5xl md:text-7xl font-lexend font-black mb-8 leading-none italic uppercase">
            Manna<br />Disco
          </h3>
          <p className="text-xl md:text-2xl font-bold leading-tight">
            Plataforma para promociones de discos de vinilos, CDs retro y equipos de audio de alta fidelidad.
          </p>
        </div>
        
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-0">
          <div className="p-12 md:p-16 border-b border-white/20 sm:border-r">
            <h4 className="text-2xl font-lexend font-black uppercase mb-6 text-yellow-400">Sucursales</h4>
            <ul className="text-xl space-y-2 font-bold uppercase">
              <li className="hover:text-red-500 transition-colors cursor-pointer italic">Buenos Aires</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer italic">Córdoba</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer italic">Rosario</li>
            </ul>
          </div>
          
          <div className="p-12 md:p-16 border-b border-white/20 bg-red-600">
            <h4 className="text-2xl font-lexend font-black uppercase mb-6 text-white">Pagos</h4>
            <p className="text-xl font-black text-white italic">Tarjetas, MercadoPago, Efectivo en sucursal con 15% EXTRA.</p>
          </div>
          
          <div className="p-12 md:p-16 sm:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 bg-zinc-900">
            <div>
              <h4 className="text-xl font-lexend font-black uppercase mb-2 text-white/50">Desarrollado por</h4>
              <p className="text-4xl font-black text-white italic">Ag Studio's 2026</p>
              <p className="text-lg font-bold text-yellow-400">Brutalismo Moderno & Aesthetic Retro</p>
            </div>
            <div className="text-sm font-black uppercase opacity-40">
              © 2026 MannaDisco. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
