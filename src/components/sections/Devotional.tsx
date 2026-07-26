export function Devotional() {
  const categories = ['Reflexões', 'Playlists', 'Planos & PDFs', 'Estudos']

  return (
    <section className="section-breathing bg-pura-black text-pura-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-garamond font-light leading-tight">
            alimentação para a alma, todos os dias.
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-4 border border-pura-white text-pura-white hover:bg-pura-white hover:text-pura-black transition-colors text-sm tracking-widest uppercase font-light"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-pura-brown rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop"
            alt="Bible and Coffee"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pura-black/60 to-transparent flex items-end">
            <p className="p-8 font-script text-2xl text-pura-white italic">
              "Sua presença é o que sustenta meu coração."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
