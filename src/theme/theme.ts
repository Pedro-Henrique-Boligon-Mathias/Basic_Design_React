import type { DefaultTheme } from "styled-components"

import { colors } from "./tokens/colors"
import { typography } from "./tokens/typography"
import { spacing } from "./tokens/spacing"
import { radius } from "./tokens/radius"
import { shadows } from "./tokens/shadows"
import { breakpoints } from "./tokens/breakpoints"

export const theme: DefaultTheme = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  breakpoints,
}