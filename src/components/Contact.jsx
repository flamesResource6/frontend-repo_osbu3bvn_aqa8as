import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thank you — we will be in touch shortly.')
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">Start a Conversation</h2>
        <p className="mt-3 text-center text-slate-300">Tell us about your event or campaign. We typically respond within 1 business day.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="email" required placeholder="Email" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Project type (wedding, brand, event)" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input placeholder="Date / timeframe" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <select className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20">
              <option className="text-slate-900">Budget range</option>
              <option className="text-slate-900">$5k – $10k</option>
              <option className="text-slate-900">$10k – $25k</option>
              <option className="text-slate-900">$25k+</option>
            </select>
            <input placeholder="Website / Instagram (optional)" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <textarea rows="5" placeholder="Tell us about your vision" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />

          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">By submitting, you agree to our privacy policy.</div>
            <button type="submit" className="px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:shadow-xl hover:-translate-y-0.5 transition">Send Inquiry</button>
          </div>

          {status && <p className="mt-4 text-green-300 text-center">{status}</p>}
        </form>
      </div>
    </section>
  )
}
