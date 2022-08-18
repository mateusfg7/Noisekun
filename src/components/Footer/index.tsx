import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap justify-center items-center p-3.5">
      <div>
        <p className="text-lg md:text-base p-1 md:p-[0.125rem]">
          by{' '}
          <a
            href="https://github.com/mateusfg7"
            className="font-bold umami--click--author-credit"
          >
            mateusfg7{' '}
          </a>{' '}
        </p>
        <p className="text-lg md:text-base p-1 md:p-[0.125rem]">
          <a
            href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
            className="cursor-pointer hover:underline umami--click--license"
          >
            {' '}
            &copy; MIT License
          </a>
        </p>
      </div>
    </footer>
  )
}
