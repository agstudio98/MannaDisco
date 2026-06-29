import { Filter } from './Catalog/Filter'
import { Main } from './Catalog/Main'

export function Catalog() {
  return (
    <main className="py-24 space-y-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative mb-24">
          <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-lexend font-black text-white leading-[0.8] mb-8 -ml-4 drop-shadow-[15px_15px_0px_rgba(0,0,0,1)] uppercase">
            CATA<br /><span className="text-red-500">LOGO</span>
          </h1>
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-yellow-400 -z-10 rotate-12 -translate-y-12 translate-x-12 brutal-shadow"></div>
          <p className="text-xl sm:text-2xl md:text-4xl font-poiret max-w-xl border-l-4 sm:border-l-8 border-white pl-4 sm:pl-6 mt-12 italic">
            Miles de vinilos, CDs y equipos esperando ser descubiertos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-3">
            <Filter />
          </aside>
          <div className="md:col-span-9">
            <Main />
          </div>
        </div>
      </div>
    </main>
  )
}
