import React from 'react'
import { Calendar, PenTool, Camera, HardDrive } from 'lucide-react'

const steps = [
  { icon: Calendar, title: 'Consult', desc: 'We align on goals, scope, and creative direction.' },
  { icon: PenTool, title: 'Plan', desc: 'We storyboard, schedule, and assemble the right team.' },
  { icon: Camera, title: 'Shoot', desc: 'On set or on location, we capture with precision and care.' },
  { icon: HardDrive, title: 'Deliver', desc: 'Final assets delivered in 4K video and high-res photography.' }
]

export default function Process() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">How We Work</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="p-2 w-max rounded-lg bg-white/10 text-white">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
