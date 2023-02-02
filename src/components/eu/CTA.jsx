import React from 'react'

function CTA() {
  return (
<div className="bg-gradient-to-t from-pretoneon via-laranjaneon to-laranjaneon">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Bora conversar?</span>
          <span className="block text-indigo-600">Temos muitas ideas para te mostrar.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Contato
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Saber Mais
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA