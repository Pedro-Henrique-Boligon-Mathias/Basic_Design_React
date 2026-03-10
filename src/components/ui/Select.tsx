import styled from 'styled-components'
import type { SelectStyleType } from '../shared/StyleType'

export const Select = styled.select<SelectStyleType>`
  /* Base */
  width:         100%;
  font-family:   inherit;
  font-size:     ${({ theme }) => theme.typography.fontSizes.md};
  background:    ${({ theme, $bg      }) => $bg      ?? theme.colors.white};
  color:         ${({ theme, $color   }) => $color   ?? theme.colors.blue.base};
  border-radius: ${({ theme, $radius  }) => $radius  ?? theme.radius.md};
  padding:       ${({ theme, $padding }) => $padding ?? theme.spacing.md};
  box-shadow:    ${({ $shadow }) => $shadow ?? "none"};
  border:        ${({ theme, $border  }) => $border
    ? `1px solid ${$border}`
    : `1px solid ${theme.colors.gray.base}`};
  margin: ${({ $margin }) => $margin ?? "0"};

  /* Remove o estilo nativo do browser — precisa dos dois prefixos */
  appearance:         none;
  -webkit-appearance: none;
  -moz-appearance:    none;
  cursor: pointer;

  transition: border-color 0.2s, box-shadow 0.2s;

  /* Ao focar */
  &:focus {
    outline: none;
    border-color: ${({ theme, $focusColor }) => $focusColor ?? theme.colors.yellow.base};
    box-shadow: 0 0 0 3px ${({ theme, $focusColor }) =>
      `${$focusColor ?? theme.colors.yellow.base}33`};
  }

  /* Desabilitado */
  &:disabled {
    opacity:    0.4;
    cursor:     not-allowed;
    background: ${({ theme }) => theme.colors.gray.light};
  }
`

// Option aceita apenas background e color — browser ignora o resto
export const Option = styled.option<{ $bg?: string; $color?: string }>`
  background: ${({ theme, $bg    }) => $bg    ?? theme.colors.white};
  color:      ${({ theme, $color }) => $color ?? theme.colors.blue.base};
`