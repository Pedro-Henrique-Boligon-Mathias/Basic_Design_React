import styled from 'styled-components'
import type { InputStyleType } from '../shared/StyleType'

export const Input = styled.input<InputStyleType>`
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
  
  transition: border-color 0.2s, box-shadow 0.2s;

  /* Texto do placeholder */
  &::placeholder {
    color:   ${({ theme }) => theme.colors.gray.dark};
    opacity: 0.5;
  }

  /* Ao focar — remove o outline padrão do browser e aplica borda colorida */
  &:focus {
    outline: none;
    border-color: ${({ theme, $focusColor }) => $focusColor ?? theme.colors.yellow.base};
    box-shadow: 0 0 0 3px ${({ theme, $focusColor }) =>
      `${$focusColor ?? theme.colors.yellow.base}33`}; /* 33 = 20% opacity em hex */
  }

  /* Desabilitado */
  &:disabled {
    opacity:    0.4;
    cursor:     not-allowed;
    background: ${({ theme }) => theme.colors.gray.light};
  }
`