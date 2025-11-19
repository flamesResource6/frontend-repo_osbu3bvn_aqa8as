import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FeaturedWork from './components/FeaturedWork'
import Brands from './components/Brands'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Inza Studios</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-medium hidden sm:inline-block">Book a Consultation</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <FeaturedWork />
        <Brands />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
