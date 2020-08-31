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
        arrow_button: {
          color: string;
          hover: string;
          checked: string;
        };
        fieldset: {
          color: string;
          title_background: string;
          input_background: string;
        };
        reset_button: {
          color: string;
          background: string;
          hover: string;
          active: {
            desktop: string;
            mobile: string;
          };
        };
      };
    };
  }
}
