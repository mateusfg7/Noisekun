import React from 'react'

import { Container, Paragraph, AuthorLink, LicenseLink } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <Paragraph>
          by{' '}
          <AuthorLink
            href="https://github.com/mateusfg7"
            className="umami--click--author-credit"
          >
            mateusfg7
          </AuthorLink>
        </Paragraph>
        <Paragraph>
          <LicenseLink
            href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
            className="umami--click--license"
          >
            &copy; MIT License
          </LicenseLink>
        </Paragraph>
      </div>
    </Container>
  )
}
