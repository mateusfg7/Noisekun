import React from 'react'

import LocalHeader from './styles'

export const Header: React.FC = () => {
  return (
    <LocalHeader>
      <h1>
        <a href="/Noisekun" className="umami--click--title">
          Noisekun
        </a>
      </h1>
    </LocalHeader>
  )
}
