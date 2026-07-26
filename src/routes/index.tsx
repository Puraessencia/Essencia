import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/sections/Hero'
import { Collections } from '@/components/sections/Collections'
import { Devotional } from '@/components/sections/Devotional'
import { About } from '@/components/sections/About'
import { Instagram } from '@/components/sections/Instagram'

export const Route = createFileRoute('/')({ 
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <Hero />
      <Collections />
      <Devotional />
      <About />
      <Instagram />
    </div>
  )
}
