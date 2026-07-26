import { Link } from '@tanstack/react-router'
import { Instagram, Youtube, Music, Bookmark, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen bg-pura-bg flex items-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Social Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-col items-start space-y-6 absolute left-6 top-1/2 transform -translate-y-1/2">
            <a href="#" className="text-pura-black hover:text-pura-brown transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-pura-black hover:text-pura-brown transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-pura-black hover:text-pura-brown transition-colors">
              <Music className="w-5 h-5" />
            </a>
            <a href="#" className="text-pura-black hover:text-pura-brown transition-colors">
              <Bookmark className="w-5 h-5" />
            </a>
            <a href="#" className="text-pura-black hover:text-pura-brown transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Tagline */}
          <div className="space-y-4 animate-fade-in">
            <p className="text-sm tracking-widest uppercase text-pura-brown">ADORAR É VIVER COM PROPÓSITO</p>
            <h1 className="text-6xl md:text-7xl font-garamond font-light leading-tight">
              a beleza da presença no <span className="italic">ordinário</span> da vida.
            </h1>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/colecoes"
              className="btn-primary inline-block"
            >
              Conheça a Coleção
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-pura-beige rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534139102-c1f78e39ebb5?w=800&h=1000&fit=crop"
              alt="Pura Essência Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pura-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
