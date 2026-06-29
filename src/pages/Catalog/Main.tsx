import { useState } from 'react'
import { PedidoModal } from './PedidoModal'

interface Product {
  name: string
  oldPrice: string
  newPrice: string
  discount: string
  img: string
  cat: string
}

export function Main() {
  const [modal, setModal] = useState<{open: boolean, product: Product | null}>({open: false, product: null})

  const products: Product[] = [
    { name: 'Vinilo Queen Greatest Hits', oldPrice: '$55.000', newPrice: '$38.000', discount: '31%', img: 'vinyl-q', cat: 'Vinilos' },
    { name: 'CD The Beatles Abbey Road', oldPrice: '$20.000', newPrice: '$14.000', discount: '30%', img: 'cd-b', cat: 'CDs' },
    // more 12+ 
    { name: 'Turntable Audio-Technica', oldPrice: '$350.000', newPrice: '$280.000', discount: '20%', img: 'turn', cat: 'Reproductores' },
    { name: 'Bocinas JBL Retro', oldPrice: '$150.000', newPrice: '$120.000', discount: '20%', img: 'speakers', cat: 'Audio' },
  ]

  const openModal = (product: Product) => setModal({open: true, product})

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product, i) => (
          <div key={i} className="retro-card p-4 sm:p-6 cursor-pointer hover:vinyl-spin" onClick={() => openModal(product)}>
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-radial from-white/20 to-transparent rounded-full mb-4 shadow-xl"></div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 leading-snug">{product.name}</h3>
            <div className="text-xl sm:text-2xl font-black text-red-400 line-through">{product.oldPrice}</div>
            <div className="text-2xl sm:text-3xl font-lexend">{product.newPrice}</div>
            <div className="text-base sm:text-lg text-yellow-400">{product.discount} OFF</div>
          </div>
        ))}
      </div>

      {modal.open && modal.product && (
        <PedidoModal product={modal.product} onClose={() => setModal({open: false, product: null})} />
      )}
    </>
  )
}

