export function Instagram() {
  const images = [
    'https://images.unsplash.com/photo-1474932430478-367cd16ca795?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516382740247-2eddf5a0f34a?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1462331940025-496dfbfc6b44?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1532619675605-1ede6c2e2fe0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516382740247-2eddf5a0f34a?w=300&h=300&fit=crop',
  ]

  return (
    <section className="section-breathing bg-pura-beige">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-pura-brown mb-2">INSPIRAÇÃO DIÁRIA</p>
          <a
            href="https://instagram.com/puraessencia.oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pura-brown hover:text-pura-black transition-colors font-garamond text-lg"
          >
            @PURAESSENCIA.OFICIAL
          </a>
          <p className="text-sm tracking-widest uppercase text-pura-black mt-4">
            <a
              href="https://instagram.com/puraessencia.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pura-brown transition-colors"
            >
              VER NO INSTAGRAM →
            </a>
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="aspect-square bg-pura-gray rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src={image}
                alt={`Instagram post ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
