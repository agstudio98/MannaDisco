export function Top() {
  const products = [
    { name: 'Vinilo Led Zeppelin IV', oldPrice: '$50.000', newPrice: '$35.000', discount: '30%', span: 'md:col-span-4', mt: '' },
    { name: 'CD Nirvana Nevermind', oldPrice: '$15.000', newPrice: '$9.000', discount: '40%', span: 'md:col-span-3', mt: 'md:mt-24' },
    { name: 'Reproductor Technics SL-1200', oldPrice: '$800.000', newPrice: '$600.000', discount: '25%', span: 'md:col-span-5', mt: 'md:-mt-12', bg: 'bg-yellow-400 text-black' },
    { name: 'Vinilo Pink Floyd Dark Side', oldPrice: '$45.000', newPrice: '$30.000', discount: '33%', span: 'md:col-span-6', mt: 'md:mt-8' },
    { name: 'Ampificador Pioneer', oldPrice: '$200.000', newPrice: '$160.000', discount: '20%', span: 'md:col-span-4', mt: 'md:mt-32' },
    { name: 'Vinilo Michael Jackson Thriller', oldPrice: '$40.000', newPrice: '$28.000', discount: '30%', span: 'md:col-span-2', mt: 'md:-mt-20' },
  ]

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
        <h2 className="text-6xl md:text-8xl font-lexend font-black uppercase text-left leading-none">
          TOP<br /><span className="text-red-500">PROMOS</span>
        </h2>
        <p className="text-2xl font-poiret max-w-xs text-right border-r-4 border-red-500 pr-4">
          Nuestra selección curada de lo mejor en audio retro.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {products.map((product, i) => (
          <div 
            key={i} 
            className={`retro-card p-6 hover:vinyl-spin cursor-pointer group transition-all duration-500 ${product.span} ${product.mt} ${product.bg || 'bg-black text-white'} brutal-shadow-hover`}
          >
            <div className="w-40 h-40 mx-auto bg-gradient-to-r from-gray-800 to-black rounded-full mb-6 shadow-2xl group-hover:scale-110 transition relative">
              <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mt-8 shadow-inner vinyl-spin group-hover:vinyl-spin-reverse"></div>
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase leading-none">{product.name}</h3>
            <div className="flex flex-col">
              <span className="text-xl line-through opacity-60 font-bold">{product.oldPrice}</span>
              <span className="text-4xl font-black text-green-400">{product.newPrice}</span>
              <span className="inline-block mt-2 px-3 py-1 bg-white text-black text-sm font-black self-start">
                {product.discount} OFF
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
