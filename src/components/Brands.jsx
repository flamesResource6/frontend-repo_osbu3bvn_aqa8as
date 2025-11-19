import React from 'react'

const brands = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Gucci_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/53/Prada-Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Louis_Vuitton_logo_and_wordmark.svg'
]

export default function Brands() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-slate-300 mb-8">Trusted by</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-80">
          {brands.map((src, i) => (
            <img key={i} src={src} alt="Brand" className="h-8 mx-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  )
}
