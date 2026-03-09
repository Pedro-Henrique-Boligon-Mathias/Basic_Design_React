import styled from "styled-components"
import { Container } from "../layout/Container"
import { fluid } from "../theme/utils/fluid"
import { ViewportInspector } from "../components/ViewportInspector"

// ─── Componentes de layout da página ─────────────────────────────────────────

const Header = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.base};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`

const Badge = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.yellow.base};
  color: ${({ theme }) => theme.colors.blue.dark};
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

const CodeBlock = styled.pre`
  background: ${({ theme }) => theme.colors.blue.base};
  color: ${({ theme }) => theme.colors.yellow.light};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  overflow-x: auto;
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

const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols ?? 2}, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`

// ─── Componentes específicos desta página ────────────────────────────────────

const FluidCard = styled.div`
  background: ${({ theme }) => theme.colors.blue.base};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const FluidToken = styled.span`
  color: ${({ theme }) => theme.colors.yellow.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`

const FluidValue = styled.span`
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-family: monospace;
  word-break: break-all;
  opacity: 0.8;
`

const ContainerDemo = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.yellow.base};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const ContainerDemoInner = styled.div`
  background: ${({ theme }) => theme.colors.blueLight};
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
  color: ${({ theme }) => theme.colors.blue.base};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`

const ContainerMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CompareRow = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base};

  &:last-child {
    border-bottom: none;
  }
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
`

// ─── Página ──────────────────────────────────────────────────────────────────

export default function Home() {

  return (
    <Container>

      {/* Cabeçalho */}
      <Header>
        <Badge>Módulo 03</Badge>
        <Title>Responsive Layout</Title>
        <Subtitle>
          Este módulo transforma os tokens estáticos do módulo 02 em valores fluidos usando{" "}
          <TokenName>clamp()</TokenName> — sem media queries por propriedade. Também adiciona
          o componente <TokenName>Container</TokenName> que centraliza e delimita o conteúdo
          em qualquer tamanho de tela.
        </Subtitle>
      </Header>

      {/* Inspetor ao vivo — primeiro bloco para impacto imediato */}
      <Section>
        <SectionTitle>Veja acontecendo ao vivo</SectionTitle>
        <Description>
          Redimensione a janela do browser e observe os valores dos tokens sendo
          recalculados em tempo real pelo browser — sem nenhum JavaScript no cliente.
        </Description>
        <ViewportInspector />
      </Section>

      {/* O que mudou */}
      <Section>
        <SectionTitle>O que mudou neste módulo</SectionTitle>
        <Description>
          Os tokens de <TokenName>spacing</TokenName> e <TokenName>typography.fontSizes</TokenName>{" "}
          antes retornavam valores fixos em <TokenName>px</TokenName> ou <TokenName>rem</TokenName>.
          Agora retornam uma string <TokenName>clamp()</TokenName> que o browser interpreta
          e recalcula automaticamente conforme a largura da tela muda.
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
              <TokenName>{token}</TokenName>
              <Before>{before}</Before>
              <After>{after}</After>
            </CompareRow>
          ))}
        </div>
      </Section>

      {/* Como funciona o fluid() */}
      <Section>
        <SectionTitle>
          A função <TokenName>fluid()</TokenName>
        </SectionTitle>
        <Description>
          Recebe o valor mínimo e máximo em <TokenName>px</TokenName> e retorna uma string{" "}
          <TokenName>clamp()</TokenName> calculada com base nos breakpoints{" "}
          <TokenName>mobile (320px)</TokenName> e <TokenName>desktop (1440px)</TokenName>.
          O browser interpreta essa string nativamente — sem JavaScript rodando no cliente.
        </Description>

        <CodeBlock>{`// src/theme/utils/fluid.ts
import { breakpoints } from '../tokens/breakpoints'

export function fluid(minPx: number, maxPx: number): string {
  const minBp = breakpoints.mobile   // 320
  const maxBp = breakpoints.desktop  // 1440

  const slope        = (maxPx - minPx) / (maxBp - minBp)
  const intercept    = minPx - slope * minBp

  const minRem       = (minPx / 16).toFixed(4)
  const maxRem       = (maxPx / 16).toFixed(4)
  const interceptRem = (intercept / 16).toFixed(4)
  const slopeVw      = (slope * 100).toFixed(4)

  return \`clamp(\${minRem}rem, \${interceptRem}rem + \${slopeVw}vw, \${maxRem}rem)\`
}`}</CodeBlock>

        <Label>Valores gerados por token</Label>
        <Grid $cols={2}>
          {([
            ["fluid(14, 16)",  fluid(14, 16)],
            ["fluid(16, 18)",  fluid(16, 18)],
            ["fluid(20, 24)",  fluid(20, 24)],
            ["fluid(24, 32)",  fluid(24, 32)],
            ["fluid(2, 4)",    fluid(2,  4)],
            ["fluid(4, 8)",    fluid(4,  8)],
            ["fluid(8, 16)",   fluid(8,  16)],
            ["fluid(16, 24)",  fluid(16, 24)],
          ] as const).map(([call, result]) => (
            <FluidCard key={call}>
              <FluidToken>{call}</FluidToken>
              <FluidValue>{result}</FluidValue>
            </FluidCard>
          ))}
        </Grid>

        <CodeBlock>{`// Como usar nos tokens
import { fluid } from "../utils/fluid"

// typography.ts
fontSizes: {
  sm: fluid(14, 16),
  md: fluid(16, 18),
  lg: fluid(20, 24),
  xl: fluid(24, 32),
}

// spacing.ts
export const spacing = {
  xs: fluid(2,  4),
  sm: fluid(4,  8),
  md: fluid(8,  16),
  lg: fluid(16, 24),
  xl: fluid(20, 32),
}`}</CodeBlock>
      </Section>

      {/* Container */}
      <Section>
        <SectionTitle>
          O componente <TokenName>Container</TokenName>
        </SectionTitle>
        <Description>
          Centraliza o conteúdo horizontalmente, limita a largura máxima ao breakpoint{" "}
          <TokenName>desktop (1440px)</TokenName> e garante padding lateral em telas menores
          para que o conteúdo nunca encoste nas bordas.
        </Description>

        <ContainerDemo>
          <ContainerMeta>
            <Label>← padding</Label>
            <TokenName>max-width: 1440px · margin: 0 auto</TokenName>
            <Label>padding →</Label>
          </ContainerMeta>
          <ContainerDemoInner>
            Todo o conteúdo do site vive aqui dentro
          </ContainerDemoInner>
        </ContainerDemo>

        <CodeBlock>{`// src/layout/Container.ts
import styled from "styled-components"

export const Container = styled.div\`
  width: 100%;
  max-width: \${({ theme }) => theme.breakpoints.desktop}px;
  margin: 0 auto;
  padding: 0 \${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: \${({ theme }) => theme.spacing.xl};
\``}</CodeBlock>

        <CodeBlock>{`// Uso em qualquer página
import { Container } from "../layout/Container"

export default function Home() {
  return (
    <Container>
      <Header>...</Header>
      <Section>...</Section>
    </Container>
  )
}`}</CodeBlock>
      </Section>

      {/* Por que não media queries para cada propriedade */}
      <Section>
        <SectionTitle>Por que não usar media queries para cada propriedade?</SectionTitle>
        <Description>
          A abordagem tradicional exigiria uma media query por token em cada breakpoint.
          Com <TokenName>fluid()</TokenName> isso se resolve em uma linha — e a transição
          é <strong>contínua</strong>, não um salto abrupto entre breakpoints.
        </Description>

        <CodeBlock>{`// ❌ Abordagem tradicional — verboso e com saltos abruptos
const Title = styled.h1\`
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
  @media (min-width: 1440px) {
    font-size: 2rem;
  }
\`

// ✅ Com fluid() — uma linha, transição suave e contínua
const Title = styled.h1\`
  font-size: \${({ theme }) => theme.typography.fontSizes.xl};
\``}</CodeBlock>

        <Description>
          Media queries ainda serão usadas no próximo módulo — mas apenas para mudanças
          estruturais de layout, como número de colunas ou visibilidade do menu mobile.
          Nunca mais para escalar fontes ou espaçamentos.
        </Description>
      </Section>

      {/* Próximo módulo */}
      <Section>
        <SectionTitle>Próximo módulo</SectionTitle>
        <Description>
          No módulo <strong>04-layout-components</strong> será criado o sistema de
          roteamento com <TokenName>react-router-dom</TokenName> e os componentes de
          layout globais — <TokenName>Navbar</TokenName> e <TokenName>Footer</TokenName> —
          que se aplicam automaticamente a todas as páginas.
        </Description>
      </Section>

    </Container>
  )
}