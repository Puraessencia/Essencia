import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Coleções', href: '/colecoes' },
  { label: 'Devocionais', href: '/devocionais' },
  { label: 'Sobre', href: '/sobre' },
]

const rightNav = [
  { label: 'Comunidade', href: '/comunidade' },
  { label: 'Contato', href: '/contato' },
  { label: 'Carrinho', href: '/carrinho' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left Navigation */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase font-light">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-pura-black hover:text-pura-brown transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-center font-garamond text-sm tracking-widest"
        >
          <div className="text-2xl">✝</div>
          <div className="text-xs tracking-widest">PURA ESSÊNCIA</div>
        </Link>

        {/* Right Navigation */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase font-light">
          {rightNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-pura-black hover:text-pura-brown transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-pura-bg border-t border-pura-gray md:hidden">
            <div className="flex flex-col py-6 px-6 gap-4 text-sm tracking-widest uppercase font-light">
              {[...navigation, ...rightNav].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-pura-black hover:text-pura-brown transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
