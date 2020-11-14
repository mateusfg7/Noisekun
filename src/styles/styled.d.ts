import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      header: {
        text: string;
        background: string;
      };
      footer: {
        text: string;
        background: string;
      };
      config: {
        arrowButton: {
          color: string;
          hover: string;
          checked: string;
        };
        fieldset: {
          color: string;
          titleBackground: string;
          inputBackground: string;
        };
        resetButton: {
          color: string;
          background: string;
          hover: string;
          active: {
            desktop: string;
            mobile: string;
          };
        };
      };
      sound: {
        color: string;
        hover: string;
        selected: string;
      };
      volumeController: {
        background: string;
        thumb: string;
      };
    };
  }
}
