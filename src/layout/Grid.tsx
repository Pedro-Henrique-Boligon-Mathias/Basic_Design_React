import styled from 'styled-components'

export const Grid = styled.div<{ $minWidth?: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ $minWidth }) => $minWidth ?? 280}px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`