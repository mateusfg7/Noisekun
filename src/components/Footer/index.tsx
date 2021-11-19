import React from 'react'

import FooterSection from './styles'

export default function Footer (): JSX.Element {
  return (
    <FooterSection>
      <div>
        <p>
          by{' '}
          <a href="https://github.com/mateusfg7" className="author">
            mateusfg7{' '}
          </a>{' '}
        </p>
        <p>
          <a
            href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
            className="copy"
          >
            {' '}
            &copy; MIT License
          </a>
        </p>
      </div>
    </FooterSection>
  )
}
