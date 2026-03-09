import styled from 'styled-components'
import { NavLink } from 'react-router'
import { routes } from '../router/router.data'
import { breakpoints } from '../theme/tokens/breakpoints'
import Logo from '../assets/Logo_basic.png'

// ─── Estilos ──────────────────────────────────────────────────────────────────

const NavBar = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.blue.base};
  border-bottom: 3px solid ${({ theme }) => theme.colors.yellow.base};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const NavInner = styled.div`
  max-width: ${breakpoints.desktop}px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`

const LogoText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`

const StyledNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.round};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.blue.light};
    color: ${({ theme }) => theme.colors.white};
  }

  /* NavLink adiciona a classe "active" automaticamente na rota atual */
  &.active {
    background: ${({ theme }) => theme.colors.yellow.base};
    color: ${({ theme }) => theme.colors.blue.dark};
  }
`

// ─── Componente ──────────────────────────────────────────────────────────────

export default function Nav() {
  return (
    <NavBar>
      <NavInner>
        <LogoArea>
          <LogoImg src={Logo} alt="Logo" />
          <LogoText>BaseProject</LogoText>
        </LogoArea>

        <NavLinks>
          {routes
            .filter(route => route.nav)
            .map(route => (
              <StyledNavLink
                key={route.path}
                to={route.path}
                end={route.path === "/"}
              >
                {route.label}
              </StyledNavLink>
            ))}
        </NavLinks>
      </NavInner>
    </NavBar>
  )
}