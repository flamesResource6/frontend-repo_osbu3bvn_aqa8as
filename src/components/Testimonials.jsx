import React from 'react'

const testimonials = [
  {
    quote: 'Inza Studios delivered the most elegant coverage of our gala — the film brought our story to life.',
    author: 'Head of Events, Maison Élise'
  },
  {
    quote: 'Professional, calm, and visionary. Our launch campaign exceeded expectations across all channels.',
    author: 'Marketing Director, Aurora Tech'
  },
  {
    quote: 'They captured not just the moments, but the feeling. That is rare.',
    author: 'Private Client'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">Client Words</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
