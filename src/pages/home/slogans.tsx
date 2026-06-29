export function Slogans() {
  const slogans = [
    { text: 'Indexá locales con promociones en vinilos y CDs retro', span: 'md:col-span-5', color: 'bg-white', textCol: 'text-black', rotate: '-rotate-1' },
    { text: 'Elegí envío o retirá en sucursal', span: 'md:col-span-7', color: 'bg-yellow-400', textCol: 'text-black', rotate: 'rotate-1', mt: 'md:mt-12' },
    { text: 'Delivery rápido o sucursal más cercana', span: 'md:col-span-8', color: 'bg-red-500', textCol: 'text-white', rotate: '-rotate-2' },
    { text: 'Pagos flexibles con descuentos exclusivos', span: 'md:col-span-4', color: 'bg-blue-600', textCol: 'text-white', rotate: 'rotate-2', mt: 'md:-mt-8' }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
      {slogans.map((s, i) => (
        <div 
          key={i} 
          className={`retro-card p-6 py-10 md:p-10 md:py-16 flex items-center justify-center text-center ${s.span} ${s.color} ${s.textCol} ${s.rotate} ${s.mt || ''} brutal-shadow hover:rotate-0 transition-transform`}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight italic">{s.text}</p>
        </div>
      ))}
    </section>
  )
}
