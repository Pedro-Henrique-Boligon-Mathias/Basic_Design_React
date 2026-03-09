import { fluid } from "../utils/fluid"

export const typography = {

  fontFamily: "system-ui, sans-serif",
  
  fontSizes: {
    sm: fluid(14, 16),
    md: fluid(16, 18),
    lg: fluid(20, 24),
    xl: fluid(24, 32),
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    normal: 1.5,
    relaxed: 1.7,
  },
}