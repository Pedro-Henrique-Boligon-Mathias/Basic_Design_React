import styled from "styled-components"
import { ViewportInspector } from "../components/ViewportInspector"
import { fluid } from "../theme/utils/fluid"
import { Grid } from "../layout/Grid"

// ─── Componentes base ─────────────────────────────────────────────────────────

const Header = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.base};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`

const Badge = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.blue.base};
  color: ${({ theme }) => theme.colors.yellow.base};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.round};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.blue.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.blue.base};
  border-left: 4px solid ${({ theme }) => theme.colors.yellow.base};
  padding-left: ${({ theme }) => theme.spacing.sm};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`

const TokenName = styled.code`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  background: ${({ theme }) => theme.colors.gray.light};
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.blue.base};
`

const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
`

// ─── Comparação de tokens ─────────────────────────────────────────────────────

const CompareRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base};

  &:last-child { border-bottom: none; }
`

const CompareToken = styled.code`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  background: ${({ theme }) => theme.colors.gray.light};
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.blue.base};
  min-width: 120px;
`

const Before = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
  font-family: monospace;
  text-decoration: line-through;
  opacity: 0.6;
`

const After = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.green.base};
  font-family: monospace;
  word-break: break-all;
  flex: 1;
`

// ─── Cards ────────────────────────────────────────────────────────────────────

const DemoCard = styled.div`
  background: ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const DemoCardTitle = styled.strong`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.blue.base};
`

const DemoCardText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`

// ─── Paleta de cores ──────────────────────────────────────────────────────────

const ColorStrip = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  height: 48px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const ColorSlice = styled.div<{ $bg: string }>`
  background: ${({ $bg }) => $bg};
  flex: 1;
  transition: flex 0.3s ease;

  &:hover { flex: 2; }
`

const ColorRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
  gap: 2px;
`

const ColorLabel = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray.dark};
  text-align: center;
  flex: 1;
`

// ─── Sombras ─────────────────────────────────────────────────────────────────

const ShadowBox = styled.div<{ $shadow: string }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ $shadow }) => $shadow};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
`

// ─── Página ──────────────────────────────────────────────────────────────────

const PALETTE = [
  { bg: "#0A1120", label: "blue.dark" },
  { bg: "#14213D", label: "blue.base" },
  { bg: "#2B3A5A", label: "blue.light" },
  { bg: "#D68A0E", label: "yellow.dark" },
  { bg: "#FCA311", label: "yellow.base" },
  { bg: "#FFB742", label: "yellow.light" },
  { bg: "#009E80", label: "green.base" },
  { bg: "#D83559", label: "red.base" },
]

export default function Sobre() {
  return (
    <>
      {/* Cabeçalho */}
      <Header>
        <Badge>Página — /sobre</Badge>
        <Title>Sobre o projeto</Title>
        <Subtitle>
          Esta página demonstra o sistema de responsividade fluida do módulo 03
          e os tokens de design do módulo 02, aplicados em um layout real com
          roteamento e Grid automático do módulo 04.
        </Subtitle>
      </Header>

      {/* Viewport ao vivo */}
      <Section>
        <SectionTitle>Responsividade ao vivo</SectionTitle>
        <Description>
          Redimensione a janela e observe os valores dos tokens sendo recalculados
          em tempo real. Os tokens de <TokenName>spacing</TokenName> e{" "}
          <TokenName>fontSizes</TokenName> usam <TokenName>clamp()</TokenName> para
          escalar suavemente entre mobile e desktop.
        </Description>
        <ViewportInspector />
      </Section>

      {/* Tokens antes e depois */}
      <Section>
        <SectionTitle>Tokens fluidos — antes e depois</SectionTitle>
        <Description>
          Os tachados são os valores fixos do módulo 02 — os verdes são os valores
          fluidos do módulo 03.
        </Description>
        <Label>Comparação — antes e depois</Label>
        <div>
          {([
            ["spacing.xs",   "4px",      fluid(2,  4)],
            ["spacing.sm",   "8px",      fluid(4,  8)],
            ["spacing.md",   "16px",     fluid(8,  16)],
            ["spacing.lg",   "24px",     fluid(16, 24)],
            ["spacing.xl",   "32px",     fluid(20, 32)],
            ["fontSizes.sm", "0.875rem", fluid(14, 16)],
            ["fontSizes.md", "1rem",     fluid(16, 18)],
            ["fontSizes.lg", "1.25rem",  fluid(20, 24)],
            ["fontSizes.xl", "1.5rem",   fluid(24, 32)],
          ] as const).map(([token, before, after]) => (
            <CompareRow key={token}>
              <CompareToken>{token}</CompareToken>
              <Before>{before}</Before>
              <After>{after}</After>
            </CompareRow>
          ))}
        </div>
      </Section>

      {/* Grid responsivo */}
      <Section>
        <SectionTitle>Grid responsivo automático</SectionTitle>
        <Description>
          Este grid usa o componente <TokenName>Grid</TokenName> do módulo 04.
          Sem media queries — o browser decide quantas colunas cabem com base no
          tamanho mínimo de cada item. Redimensione a janela para ver.
        </Description>
        <Grid>
          {["Cores", "Tipografia", "Espaçamentos", "Radius", "Sombras", "Breakpoints"].map((item) => (
            <DemoCard key={item}>
              <DemoCardTitle>{item}</DemoCardTitle>
              <DemoCardText>
                Token em <TokenName>theme/tokens/{item.toLowerCase()}.ts</TokenName>
              </DemoCardText>
            </DemoCard>
          ))}
        </Grid>
      </Section>

      {/* Paleta de cores */}
      <Section>
        <SectionTitle>Paleta de cores</SectionTitle>
        <Description>
          Passe o mouse em cada fatia para expandir. Valores de{" "}
          <TokenName>theme/tokens/colors.ts</TokenName>.
        </Description>
        <ColorStrip>
          {PALETTE.map((c) => (
            <ColorSlice key={c.label} $bg={c.bg} />
          ))}
        </ColorStrip>
        <ColorRow>
          {PALETTE.map((c) => (
            <ColorLabel key={c.label}>{c.label}</ColorLabel>
          ))}
        </ColorRow>
      </Section>

      {/* Sombras */}
      <Section>
        <SectionTitle>Sombras — <TokenName>theme.shadows</TokenName></SectionTitle>
        <Grid $minWidth={180}>
          {([
            ["0 2px 6px rgba(0,0,0,0.06)",       "shadows.sm"],
            ["0 12px 24px rgba(0,0,0,0.08)",     "shadows.md"],
            ["0 24px 45px rgba(27,67,121,0.12)", "shadows.lg"],
          ] as const).map(([value, label]) => (
            <ShadowBox key={label} $shadow={value}>
              <TokenName>{label}</TokenName>
            </ShadowBox>
          ))}
        </Grid>
      </Section>
    </>
  )
}