import React from 'react'

const projects = [
  {
    title: 'Gala Noir – Luxury Charity Event',
    video: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    images: [
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop'
    ],
    story: 'A black-tie evening celebrating art and community. We delivered editorial photography and a film that balanced elegance with energy.'
  },
  {
    title: 'Aurora – Product Launch Film',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop'
    ],
    story: 'From concept to delivery, we built a launch narrative that highlights craft, technology, and lifestyle.'
  },
  {
    title: 'Amalfi Wedding Weekend',
    video: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504199367641-aba8151af382?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop'
    ],
    story: 'Three days on the coast capturing sunlight, texture, and emotion — distilled into a timeless film and curated gallery.'
  }
]

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Featured Work</h2>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Book a Consultation →</a>
        </div>
        <div className="mt-10 space-y-16">
          {projects.map((p) => (
            <div key={p.title} className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  className="w-full h-full"
                  src={p.video}
                  title={p.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white">{p.title}</h3>
                <p className="mt-3 text-slate-300">{p.story}</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="h-28 w-full object-cover rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
