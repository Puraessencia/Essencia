import { Link } from '@tanstack/react-router'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-pura-black text-pura-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl mb-2">✝</div>
            <h3 className="font-garamond text-lg mb-2">PURA ESSÊNCIA</h3>
            <p className="text-pura-gray text-sm">ADORAR É VIVER COM PROPÓSITO</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-widest mb-6 uppercase">Navegação</h4>
            <ul className="space-y-3 text-sm text-pura-gray">
              <li><Link to="/" className="hover:text-pura-white transition-colors">Início</Link></li>
              <li><Link to="/colecoes" className="hover:text-pura-white transition-colors">Coleções</Link></li>
              <li><Link to="/devocionais" className="hover:text-pura-white transition-colors">Devocionais</Link></li>
              <li><Link to="/sobre" className="hover:text-pura-white transition-colors">Sobre</Link></li>
              <li><Link to="/comunidade" className="hover:text-pura-white transition-colors">Comunidade</Link></li>
              <li><Link to="/contato" className="hover:text-pura-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-widest mb-6 uppercase">Suporte</h4>
            <ul className="space-y-3 text-sm text-pura-gray">
              <li><Link to="/faq" className="hover:text-pura-white transition-colors">Perguntas Frequentes</Link></li>
              <li><Link to="/trocas" className="hover:text-pura-white transition-colors">Trocas e Devoluções</Link></li>
              <li><Link to="/privacidade" className="hover:text-pura-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-widest mb-6 uppercase">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 bg-pura-gray/20 text-pura-white placeholder-pura-gray text-sm focus:outline-none"
              />
              <button className="px-4 py-2 bg-pura-white text-pura-black hover:opacity-80 transition-opacity">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pura-gray/30 pt-8 text-center text-sm text-pura-gray">
          <p>FEITO PARA GLORIFICAR A ELE.</p>
        </div>
      </div>
    </footer>
  )
}
