import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">About Inza Studios</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            We craft elevated visual narratives for luxury events and ambitious brands. Our team blends editorial
            sensibility with documentary instinct—capturing the energy, detail, and emotion that define unforgettable moments.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            From intimate celebrations to large-scale productions, we partner closely with clients to design, plan, and deliver visuals
            that resonate. The result is work that feels timeless, modern, and unmistakably Inza.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1558885544-2defc62e2c43?q=80&w=1600&auto=format&fit=crop"
            alt="Inza Studios team"
            className="rounded-2xl shadow-2xl shadow-black/40 object-cover w-full h-80"
          />
          <div className="absolute -bottom-6 -left-6 bg-white/5 border border-white/10 backdrop-blur rounded-xl p-4">
            <p className="text-sm text-slate-300">Based in NYC • Working worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}
