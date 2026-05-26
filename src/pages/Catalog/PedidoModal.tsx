export function PedidoModal({ product, onClose }: { product: any, onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-8" onClick={onClose}>
      <div className="retro-card w-full max-w-md p-8" onClick={e => e.stopPropagation()}>
        <h2 className="text-4xl font-bold mb-8">{product.name}</h2>
        <div className="space-y-4 mb-8">
          <label>Cantidad <input type="number" defaultValue={1} className="brutal-btn w-full p-3 ml-4" /></label>
          <label>Sucursal / Delivery
            <select className="brutal-btn w-full p-3 mt-1 block">
              <option>Retirar BA Centro</option>
              <option>Delivery Andreani</option>
              <option>Retirar Córdoba</option>
            </select>
          </label>
          <label>Pago <select className="brutal-btn w-full p-3 mt-1 block">
            <option>Tarjeta 3 cuotas</option>
            <option>MercadoPago</option>
            <option>Efectivo sucursal</option>
          </select></label>
        </div>
        <div className="text-right mb-8">
          <div className="text-3xl font-bold">{product.newPrice}</div>
        </div>
        <button className="brutal-btn w-full py-4 text-2xl shadow-[0_20px_40px_rgba(255,255,255,0.3)]" onClick={() => { alert('Pedido confirmado!'); onClose(); }}>
          Confirmar Pedido
        </button>
      </div>
    </div>
  )
}
