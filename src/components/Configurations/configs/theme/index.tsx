import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// import { Container } from './styles';

const ToggleThemeConfig: React.FC<IThemeConfig> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <div className="fieldset">
        <div className="fieldset-content fieldset-content-title">
          <span>theme</span>
        </div>
        <div className="fieldset-content fieldset-content-input">
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  fontSize: '20px',
                  color: '#262525',
                }}
              >
                <FontAwesomeIcon icon={faMoon} />
              </div>
            }
            uncheckedIcon={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  fontSize: '20px',
                  color: '#e8e8e8',
                }}
              >
                <FontAwesomeIcon icon={faSun} />
              </div>
            }
            handleDiameter={30}
            height={30}
            width={60}
            // onColor="#7f7f7f"
            // offColor="#c4c4c4"
            onColor="none"
            offColor="none"
            onHandleColor="#262525"
            offHandleColor="#e8e8e8"
          />
        </div>
      </div>
    </>
  );
};

export default ToggleThemeConfig;
