import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Menu, X } from 'lucide-react'
import { Soporte } from './Soporte'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-3 left-3 right-3 md:top-6 md:left-6 md:right-6 z-50 pointer-events-none">
      <div className="flex justify-between items-start pointer-events-auto w-full">
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="bg-white text-black p-3 px-6 sm:p-4 sm:px-8 text-2xl sm:text-3xl md:text-4xl font-lexend font-black brutal-shadow hover:-translate-y-1 transition transform -rotate-1"
        >
          MANNA<span className="text-red-500">DISCO</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col items-end gap-4 mt-2">
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

        {/* Mobile Burger Button */}
        <div className="flex md:hidden items-center gap-2 mt-1">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black text-white p-3 border-4 border-white brutal-shadow active:translate-y-1 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center p-8 pointer-events-auto md:hidden">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 bg-red-500 text-white p-3 border-4 border-white brutal-shadow active:translate-y-1 transition-all"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col items-center gap-6 text-center w-full max-w-sm">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="bg-white text-black p-4 px-8 text-3xl font-lexend font-black brutal-shadow -rotate-1 mb-6"
            >
              MANNA<span className="text-red-500">DISCO</span>
            </Link>

            <Link 
              to="/catalog" 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black uppercase text-white hover:text-yellow-400 transition brutal-shadow bg-red-600 border-4 border-white p-4 w-full rotate-1"
            >
              Catálogo
            </Link>

            <div className="flex items-center justify-center gap-6 bg-zinc-900 border-4 border-white p-4 w-full -rotate-1 brutal-shadow">
              <span className="text-xl font-black text-white">Mi Cuenta</span>
              <User className="w-8 h-8 text-white cursor-pointer hover:text-yellow-400" />
            </div>

            <div className="flex items-center justify-center gap-6 bg-blue-600 border-4 border-white p-4 w-full rotate-1 brutal-shadow">
              <span className="text-xl font-black text-white">Soporte</span>
              <Soporte />
            </div>

            <div className="bg-yellow-400 text-black p-4 px-6 font-black text-base brutal-shadow -rotate-2 w-full mt-4">
              20% OFF EN VINILOS DE ROCK
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

