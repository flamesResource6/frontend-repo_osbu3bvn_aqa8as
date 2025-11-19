import React from 'react'
import { Instagram, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Inza Studios. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
          <a href="#contact" aria-label="Email" className="text-slate-300 hover:text-white transition"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  )
}
