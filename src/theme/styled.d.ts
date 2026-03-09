import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Base & Grayscale
      black: string;
      white: string;
      gray: {
        light: string;
        base: string;
        dark: string;
      };

      // Primary Brand
      blue: {
        light: string;
        base: string;
        dark: string;
      };
      yellow: {
        light: string;
        base: string;
        dark: string;
      };

      // Brand Extra
      ink: {
        light: string;
        base: string;
        dark: string;
      };

      // Support / Status
      green: {
        light: string;
        base: string;
        dark: string;
      };
      red: {
        light: string;
        base: string;
        dark: string;
      };

      // Utility Tints (se manteve as variáveis soltas)
      blueLight: string;
      yellowLight: string;
    };

    typography: {
      fontFamily: string;
      fontSizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      fontWeights: {
        regular: number;
        medium: number;
        bold: number;
      };
      lineHeights: {
        normal: number;
        relaxed: number;
      };
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    radius: {
      sm: string;
      md: string;
      lg: string;
      round: string;
    };

    shadows: {
      sm: string;
      md: string;
      lg: string;
    };

    breakpoints: {
      tablet: number;
      desktop: number;
    };
  }
}