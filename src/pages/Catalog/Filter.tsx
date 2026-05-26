export function Filter() {
  return (
    <div className="retro-card p-8 flex flex-wrap gap-8 items-end">
      <div className="flex-1">
        <label className="block text-lg mb-2">Buscar</label>
        <input type="text" placeholder="Nombre del producto..." className="brutal-btn w-full p-4 text-xl" />
      </div>
      <div>
        <label className="block text-lg mb-2">Categoría</label>
        <select className="brutal-btn p-4 text-xl">
          <option>Todos</option>
          <option>Vinilos</option>
          <option>CDs</option>
          <option>Reproductores</option>
          <option>Equipos Audio</option>
        </select>
      </div>
      <div>
        <label className="block text-lg mb-2">Precio max</label>
        <select className="brutal-btn p-4 text-xl">
          <option>$50k</option>
          <option>$100k</option>
          <option>$200k</option>
          <option>$500k+</option>
        </select>
      </div>
      <button className="brutal-btn px-8 py-4 text-xl">Filtrar</button>
    </div>
  )
}
