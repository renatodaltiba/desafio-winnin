import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    TITLE: string;

    COLORS: {
      PRIMARY: string;
      WARNING: string;
      GRAY: string;

      TEXT: string;

      BACKGROUND: string;
      WHITE: string;
      BLACK: string;
    };
  }
}
