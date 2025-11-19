import React from 'react'
import { Camera, Video, Briefcase, Clapperboard } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Event Photography',
    desc: 'Editorial-grade coverage that captures atmosphere, detail, and emotion with precision.',
    image: 'https://images.unsplash.com/photo-1489769002049-ccd828976a6c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    icon: Video,
    title: 'Cinematic Videography',
    desc: 'Story-driven films with dynamic camera work, color-rich grading, and carefully curated sound.',
    image: 'https://images.unsplash.com/photo-1670411952195-fffeca152dd2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaW5lbWF0aWMlMjBWaWRlb2dyYXBoeXxlbnwwfDB8fHwxNzYzNTI1MzY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    icon: Briefcase,
    title: 'Brand Campaigns',
    desc: 'Concept-to-delivery productions for product launches, editorials, and integrated campaigns.',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop'
  },
  {
    icon: Clapperboard,
    title: 'Behind-the-Scenes',
    desc: 'Authentic BTS coverage that reveals craft, process, and team—perfect for social and PR.',
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Services</h2>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Book a Consultation →</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, desc, image }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" />
              <div className="relative p-6 backdrop-blur-[1px]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-white">{title}</h3>
                </div>
                <p className="mt-3 text-slate-200/90">{desc}</p>
                <a href="#work" className="inline-block mt-4 text-white/90 hover:text-white">View case studies →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
