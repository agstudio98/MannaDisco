export function PedidoModal({ product, onClose }: { product: any, onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <div className="retro-card w-full max-w-md p-6 sm:p-8" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">{product.name}</h2>
        <div className="space-y-4 mb-6 sm:mb-8">
          <label className="block font-bold">
            Cantidad 
            <input type="number" defaultValue={1} className="brutal-btn w-full p-3 mt-1 block" />
          </label>
          <label className="block font-bold">
            Sucursal / Delivery
            <select className="brutal-btn w-full p-3 mt-1 block">
              <option>Retirar BA Centro</option>
              <option>Delivery Andreani</option>
              <option>Retirar Córdoba</option>
            </select>
          </label>
          <label className="block font-bold">
            Pago 
            <select className="brutal-btn w-full p-3 mt-1 block">
              <option>Tarjeta 3 cuotas</option>
              <option>MercadoPago</option>
              <option>Efectivo sucursal</option>
            </select>
          </label>
        </div>
        <div className="text-right mb-6 sm:mb-8">
          <div className="text-2xl sm:text-3xl font-bold">{product.newPrice}</div>
        </div>
        <button className="brutal-btn w-full py-3 sm:py-4 text-xl sm:text-2xl shadow-[0_20px_40px_rgba(255,255,255,0.3)]" onClick={() => { alert('Pedido confirmado!'); onClose(); }}>
          Confirmar Pedido
        </button>
      </div>
    </div>
  )
}
