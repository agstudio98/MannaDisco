export function Filter() {
  return (
    <div className="retro-card p-6 md:p-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 items-stretch sm:items-end">
      <div className="flex-grow sm:flex-1">
        <label className="block text-lg mb-2">Buscar</label>
        <input type="text" placeholder="Nombre del producto..." className="brutal-btn w-full p-3 sm:p-4 text-lg sm:text-xl" />
      </div>
      <div className="w-full sm:w-auto">
        <label className="block text-lg mb-2">Categoría</label>
        <select className="brutal-btn w-full p-3 sm:p-4 text-lg sm:text-xl">
          <option>Todos</option>
          <option>Vinilos</option>
          <option>CDs</option>
          <option>Reproductores</option>
          <option>Equipos Audio</option>
        </select>
      </div>
      <div className="w-full sm:w-auto">
        <label className="block text-lg mb-2">Precio max</label>
        <select className="brutal-btn w-full p-3 sm:p-4 text-lg sm:text-xl">
          <option>$50k</option>
          <option>$100k</option>
          <option>$200k</option>
          <option>$500k+</option>
        </select>
      </div>
      <button className="brutal-btn w-full sm:w-auto px-8 py-3 sm:py-4 text-lg sm:text-xl">Filtrar</button>
    </div>
  )
}
