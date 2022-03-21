import React from 'react'

import FooterSection from './styles'

export const Footer: React.FC = () => {
  return (
    <FooterSection>
      <div>
        <p>
          by{' '}
          <a
            href="https://github.com/mateusfg7"
            className="author umami--click--author-credit"
          >
            mateusfg7{' '}
          </a>{' '}
        </p>
        <p>
          <a
            href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
            className="copy umami--click--license"
          >
            {' '}
            &copy; MIT License
          </a>
        </p>
      </div>
    </FooterSection>
  )
}
