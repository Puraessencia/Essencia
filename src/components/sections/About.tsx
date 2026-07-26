import { Link } from '@tanstack/react-router'

export function About() {
  return (
    <section className="section-breathing bg-pura-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Image */}
        <div className="aspect-square md:aspect-auto md:h-[500px] bg-pura-beige rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
            alt="Founder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column 2 - Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-5xl font-garamond font-light leading-tight">
            mais que uma marca, um movimento.
          </h2>
          <p className="text-pura-black/80 leading-relaxed">
            Somos um lembrete diário de que Deus habita no ordinário. Criamos para inspirar você a viver com propósito, adorar em tudo e ser luz onde estiver.
          </p>
          <Link
            to="/sobre"
            className="btn-primary inline-block w-fit"
          >
            Conheça Nossa História
          </Link>
        </div>

        {/* Column 3 - Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-pura-beige rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=600&fit=crop"
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pura-black/40 to-transparent flex items-end">
            <div className="p-8 w-full">
              <p className="text-pura-white font-garamond text-2xl mb-4">você não foi feito para caminhar só.</p>
              <button className="btn-primary w-full">Faça Parte</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
