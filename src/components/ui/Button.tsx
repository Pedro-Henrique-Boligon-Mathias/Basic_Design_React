import styled from 'styled-components'
import type { ButtonStyleType } from '../shared/StyleType'

export const Button = styled.button<ButtonStyleType>`
  /* Reset e base */
  cursor:      pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  display:     inline-flex;
  align-items: center;
  justify-content: center;

  /* Props configuráveis */
  width: ${({ $full }) => $full ? "100%" : "fit-content"};
  background: ${({ theme, $bg      }) => $bg      ?? theme.colors.yellow.base};
  color: ${({ theme, $color   }) => $color   ?? theme.colors.blue.dark};
  border-radius: ${({ theme, $radius  }) => $radius  ?? theme.radius.round};
  padding: ${({ theme, $padding }) => $padding ?? `${theme.spacing.sm} ${theme.spacing.lg}`};
  box-shadow: ${({ $shadow }) => $shadow ?? "none"};
  font-size: ${({ theme, $fontSize }) => $fontSize ?? theme.typography.fontSizes.md};
  border: ${({ $border }) => $border ? `2px solid ${$border}` : "2px solid transparent"};
  margin: ${({ $margin }) => $margin ?? "0"};

  /* Estados interativos */
  transition: opacity 0.2s, box-shadow 0.2s, transform 0.1s;

  &:hover {
    opacity: 0.85;
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:active {
    opacity: 0.7;
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`