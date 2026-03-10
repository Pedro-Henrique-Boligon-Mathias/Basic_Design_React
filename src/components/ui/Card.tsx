import styled from 'styled-components'
import type { CardStyleType } from '../shared/StyleType'

export const Card = styled.div<CardStyleType>`
  background: ${({ theme, $bg      }) => $bg      ?? theme.colors.white};
  color: ${({ theme, $color   }) => $color   ?? theme.colors.blue.base};
  border-radius: ${({ theme, $radius  }) => $radius  ?? theme.radius.md};
  padding: ${({ theme, $padding }) => $padding ?? theme.spacing.md};
  box-shadow: ${({ $shadow }) => $shadow ?? "none"};
  border: ${({ $border }) => $border ? `1px solid ${$border}` : "none"};
  margin: ${({ $margin }) => $margin ?? "0"};

  ${({ $gap }) => $gap &&`
    display: flex;
    flex-direction: column;
    gap: ${$gap};
  `}
`