import React from "react";

// import { Container } from './styles';

const BackgroundConfig: React.FC<IBackgroundConfig> = ({ setUrl, url }) => {
  return (
    <>
      <div className='fieldset'>
        <div className='fieldset-content fieldset-content-title'>
          <span>background</span>
        </div>
        <div className='fieldset-content fieldset-content-input'>
          <input
            type='text'
            id='url'
            name='url'
            placeholder='png, jpeg, gif...'
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BackgroundConfig;
