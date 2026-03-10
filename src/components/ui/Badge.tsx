import styled from 'styled-components'
import type { StyleType } from '../shared/StyleType'

export const Badge = styled.span<StyleType>`
  /* Base — todo badge tem esses valores fixos */
  display:     inline-block;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-size:   ${({ theme }) => theme.typography.fontSizes.sm};
  width:       fit-content;

  /* Props configuráveis */
  background: ${({ theme, $bg      }) => $bg      ?? theme.colors.yellow.base};
  color: ${({ theme, $color   }) => $color   ?? theme.colors.blue.dark};
  border-radius: ${({ theme, $radius  }) => $radius  ?? theme.radius.round};
  padding: ${({ theme, $padding }) => $padding ?? `${theme.spacing.xs} ${theme.spacing.sm}`};
  box-shadow: ${({ $shadow }) => $shadow ?? "none"};
  border: ${({ $border }) => $border ? `1px solid ${$border}` : "none"};
  margin: ${({ $margin }) => $margin ?? "0"};

  /* Hover sutil */
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`