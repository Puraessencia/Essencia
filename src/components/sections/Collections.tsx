import { Link } from '@tanstack/react-router'
import { COLLECTIONS } from '@/lib/constants'

export function Collections() {
  return (
    <section className="section-breathing bg-pura-beige">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Text */}
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-garamond font-light leading-tight">
            peças que carregam mais que estilo:{' '}
            <span className="font-script text-4xl md:text-5xl italic">propósito</span>
          </h2>
          <Link
            to="/colecoes"
            className="btn-secondary inline-block w-fit"
          >
            Ver Todas as Coleções
          </Link>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 gap-6">
          {COLLECTIONS.map((collection, idx) => (
            <Link
              key={collection.id}
              to={`/colecoes/${collection.id}`}
              className="group relative aspect-square bg-pura-gray overflow-hidden rounded-lg cursor-pointer"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-pura-brown/20 to-pura-brown/40 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-pura-white font-garamond text-2xl mb-2">{collection.name}</p>
                  <p className="text-pura-white/70 text-xs">{collection.description}</p>
                </div>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-pura-black/40 group-hover:bg-pura-black/60 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
