import React from 'react';

import './style.css';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
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
    </footer>
  );
}
