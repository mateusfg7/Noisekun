import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Container, { Empty } from './styles';

interface PresentationProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Presentation({
  show,
  setShow,
}: PresentationProps): JSX.Element {
  if (show) {
    return (
      <Container>
        <div className="head pd">
          <h1>Noisekun</h1>
          <h1>
            <button
              type="button"
              className="close-modal"
              onClick={() => setShow(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </h1>
        </div>

        <main className="pd">
          <p>Just combine the sounds and relax ...</p>
          <p>
            This project was inspired by the{' '}
            <a href="https://www.noisli.com/" target="_blank" rel="noreferrer">
              Noisli
            </a>{' '}
            website, it was developed to be an alternative of the same for me,
            who like this type of ambient sound, so I decided to open it to
            anyone who wants a free and open-source alternative. I used ReactJS
            on the front end and Deno on the back end.
          </p>
          <p>
            <i>
              about the name, was generated on a nickname generator with tag
              &quot;noise&quot; :)
            </i>
          </p>
        </main>
        <div className="info pd">
          <p>
            repository:{' '}
            <a
              href="https://github.com/mateusfg7/Noisekun"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            developer:{' '}
            <a
              href="https://github.com/mateusfg7"
              target="_blank"
              rel="noreferrer"
            >
              Mateus Felipe
            </a>
          </p>
          <p>
            license:{' '}
            <a
              href="https://github.com/mateusfg7/Noisekun/blob/master/LICENSE"
              target="_blank"
              rel="noreferrer"
            >
              MIT
            </a>
          </p>
        </div>
      </Container>
    );
  }
  return <Empty />;
}
