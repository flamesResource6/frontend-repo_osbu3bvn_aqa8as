import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight drop-shadow"
          >
            Inza Studios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto"
          >
            Luxury events. Iconic brand stories. Cinematic photography and film crafted with precision and emotion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-slate-900 font-medium shadow/50 shadow-slate-900 hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              className="px-6 py-3 rounded-full border border-white/40 text-white/90 hover:bg-white/10 transition"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
