import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import { Soporte } from './Soporte'
export function Navbar() {
  return (
    <nav className="fixed top-6 left-6 right-6 z-50 pointer-events-none">
      <div className="flex justify-between items-start pointer-events-auto">
        <Link to="/" className="bg-white text-black p-4 px-8 text-4xl font-lexend font-black brutal-shadow hover:-translate-y-1 transition transform -rotate-1">
          MANNA<span className="text-red-500">DISCO</span>
        </Link>
        
        <div className="flex flex-col items-end gap-4 mt-2">
          <div className="flex items-center gap-4 bg-black/90 backdrop-blur-md p-3 px-6 border-4 border-white brutal-shadow rotate-1">
            <Link to="/catalog" className="text-xl font-black uppercase hover:text-yellow-400 transition">Catálogo</Link>
            <div className="w-1 h-6 bg-white/30 mx-2"></div>
            <User className="w-8 h-8 text-white cursor-pointer hover:text-yellow-400" />
            <Soporte />
          </div>
          
          <div className="bg-yellow-400 text-black p-2 px-4 font-bold text-sm brutal-shadow -rotate-1">
            20% OFF EN VINILOS DE ROCK
          </div>
        </div>
      </div>
    </nav>
  )
}
