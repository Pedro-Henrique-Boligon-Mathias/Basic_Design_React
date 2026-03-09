import styled from "styled-components"
import { NavLink } from "react-router"
import { routes } from "../router/router.data"
import { breakpoints } from "../theme/tokens/breakpoints"

// ─── Estilos ──────────────────────────────────────────────────────────────────

const FooterBar = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.blue.base};
  border-top: 3px solid ${({ theme }) => theme.colors.yellow.base};
  margin-top: auto;
`

const FooterInner = styled.div`
  max-width: ${breakpoints.desktop}px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${breakpoints.tablet}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const FooterTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`

const FooterSub = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
`

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
`

const StyledFooterLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow.base};
  }

  &.active {
    color: ${({ theme }) => theme.colors.yellow.base};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }
`

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.blue.light};
`

const FooterBottom = styled.div`
  max-width: ${breakpoints.desktop}px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: center;
`

const FooterCopy = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
`

// ─── Componente ──────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <FooterBar>
      <FooterInner>
        <FooterBrand>
          <FooterTitle>BaseProject</FooterTitle>
          <FooterSub>Template base React + Vite</FooterSub>
        </FooterBrand>

        <FooterLinks>
          {routes
            .filter(route => route.nav)
            .map(route => (
              <StyledFooterLink
                key={route.path}
                to={route.path}
                end={route.path === "/"}
              >
                {route.label}
              </StyledFooterLink>
            ))}
        </FooterLinks>
      </FooterInner>

      <FooterDivider />

      <FooterBottom>
        <FooterCopy>
          {new Date().getFullYear()} · BaseProject · MIT License
        </FooterCopy>
      </FooterBottom>
    </FooterBar>
  )
}