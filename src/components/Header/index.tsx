import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center h-[15vh] bg-[rgba(255, 255, 255, 0.1)] md:shadow-header">
      <h1 className="font-semibold text-2xl">
        <a href="/" className="umami--click--title text-white/90">
          Noisekun
        </a>
      </h1>
    </header>
  )
}
