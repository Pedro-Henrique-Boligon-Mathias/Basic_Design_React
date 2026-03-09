import styled from "styled-components"
import { Link } from "react-router"
// import { breakpoints } from "../theme/tokens/breakpoints"
import { Grid } from "../layout/Grid"

// ─── Componentes base ─────────────────────────────────────────────────────────

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

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.blue.base};
  margin-top: ${({ theme }) => theme.spacing.sm};
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

const Callout = styled.div`
  background: ${({ theme }) => theme.colors.yellowLight};
  border-left: 4px solid ${({ theme }) => theme.colors.yellow.base};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.blue.base};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`

// ─── Diagrama de layout ───────────────────────────────────────────────────────

const LayoutDiagram = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.blue.light};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: ${({ theme }) => theme.colors.gray.base};
`

const DiagramBlock = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DiagramLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`

const DiagramFile = styled.code`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: rgba(255,255,255,0.6);
`

const DiagramContent = styled.div`
  background: ${({ theme }) => theme.colors.blueLight};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  color: ${({ theme }) => theme.colors.blue.base};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`

// ─── Cards de rota ────────────────────────────────────────────────────────────

const RouteCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-left: 4px solid ${({ theme }) => theme.colors.blue.light};
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.yellow.base};
  }
`

const RoutePath = styled.code`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.yellow.dark};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`

const RouteLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.blue.base};
`

const RouteDesc = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
`

// ─── Demo do Grid ─────────────────────────────────────────────────────────────

const DemoBox = styled.div`
  background: ${({ theme }) => theme.colors.blue.base};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  min-height: 60px;
`

// ─── Página ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Cabeçalho */}
      <Header>
        <Badge>Módulo 04</Badge>
        <Title>Layout Components</Title>
        <Subtitle>
          Este módulo adiciona roteamento com <strong>react-router-dom</strong>, os
          componentes globais de layout — <strong>Navbar</strong> e <strong>Footer</strong> —
          e o componente <strong>Grid</strong> responsivo automático. As rotas são
          configuradas em um único arquivo, e a Navbar as lê automaticamente.
        </Subtitle>
      </Header>

      {/* O que foi configurado */}
      <Section>
        <SectionTitle>O que foi configurado</SectionTitle>

        <SubTitle>Roteamento — <TokenName>react-router-dom</TokenName></SubTitle>
        <Description>
          Permite navegar entre páginas sem recarregar o browser. O{" "}
          <TokenName>BrowserRouter</TokenName> foi adicionado no <TokenName>main.tsx</TokenName>{" "}
          envolvendo toda a aplicação.
        </Description>

        <SubTitle>Arquivo de rotas — <TokenName>router/router.data.tsx</TokenName></SubTitle>
        <Description>
          Todas as rotas ficam centralizadas aqui. Cada rota tem <TokenName>path</TokenName>,{" "}
          <TokenName>element</TokenName>, <TokenName>label</TokenName> e a flag{" "}
          <TokenName>nav</TokenName> que controla se aparece na Navbar. A Navbar e o{" "}
          <TokenName>App.tsx</TokenName> leem esse array automaticamente.
        </Description>

        <SubTitle>Layout global — <TokenName>Layout.tsx</TokenName></SubTitle>
        <Description>
          Envolve todas as rotas. Renderiza a Navbar, o conteúdo da página atual via{" "}
          <TokenName>{"<Outlet />"}</TokenName> e o Footer. Qualquer nova página já herda
          o layout completo sem precisar importar nada.
        </Description>

        <SubTitle>Grid responsivo — <TokenName>layout/Grid.tsx</TokenName></SubTitle>
        <Description>
          Componente de layout que organiza filhos em colunas automaticamente usando{" "}
          <TokenName>auto-fit</TokenName> e <TokenName>minmax()</TokenName> — sem media
          queries, sem número fixo de colunas.
        </Description>
      </Section>

      {/* Como o layout funciona */}
      <Section>
        <SectionTitle>Como o layout funciona</SectionTitle>
        <Description>
          O <TokenName>{"<Outlet />"}</TokenName> é um placeholder do react-router — ele
          renderiza a página da rota atual dentro do layout, sem precisar repetir
          Navbar e Footer em cada página.
        </Description>

        <LayoutDiagram>
          <DiagramBlock $color="#14213D">
            <DiagramLabel>← Navbar</DiagramLabel>
            <DiagramFile>layout/Nav.tsx</DiagramFile>
          </DiagramBlock>
          <DiagramContent>
            &lt;Outlet /&gt; — a página atual entra aqui (Home, Sobre, etc.)
          </DiagramContent>
          <DiagramBlock $color="#2B3A5A">
            <DiagramLabel>← Footer</DiagramLabel>
            <DiagramFile>layout/Footer.tsx</DiagramFile>
          </DiagramBlock>
        </LayoutDiagram>

        <CodeBlock>{`// src/layout/Layout.tsx
export function Layout() {
  return (
    <>
      <Nav />
      <Container>
        <Outlet />   {/* ← a página atual é injetada aqui */}
      </Container>
      <Footer />
    </>
  )
}`}</CodeBlock>
      </Section>

      {/* Sistema de rotas automático */}
      <Section>
        <SectionTitle>Sistema de rotas automático</SectionTitle>
        <Description>
          Em vez de declarar cada rota manualmente no <TokenName>App.tsx</TokenName> e
          repetir os links na Navbar, tudo fica em um único lugar.
        </Description>

        <CodeBlock>{`// src/router/router.data.tsx
export const routes = [
  { path: "/",      element: <Home />,  label: "Home",  nav: true  },
  { path: "/sobre", element: <Sobre />, label: "Sobre", nav: true  },
  { path: "/admin", element: <Admin />, label: "Admin", nav: false }, // não aparece na Navbar
]

// App.tsx — rotas geradas automaticamente
routes.map((route) => (
  <Route
    key={route.path}
    path={route.path === "/" ? undefined : route.path.replace("/", "")}
    index={route.path === "/"}
    element={route.element}
  />
))

// Nav.tsx — links gerados automaticamente
routes
  .filter(route => route.nav)
  .map(route => <NavLink to={route.path}>{route.label}</NavLink>)`}</CodeBlock>

        <Callout>
          Para adicionar uma nova página: crie o arquivo em <TokenName>pages/</TokenName>,
          importe no <TokenName>router.data.tsx</TokenName> e adicione um objeto ao array.
          A rota e o link da Navbar aparecem automaticamente — sem editar mais nenhum arquivo.
        </Callout>
      </Section>

      {/* NavLink vs Link */}
      <Section>
        <SectionTitle><TokenName>NavLink</TokenName> vs <TokenName>Link</TokenName></SectionTitle>
        <Description>
          A Navbar usa <TokenName>NavLink</TokenName> que adiciona automaticamente a
          classe <TokenName>active</TokenName> no link da rota atual — permitindo estilizar
          o link ativo direto no CSS sem JavaScript extra. O prop <TokenName>end</TokenName>{" "}
          na rota <TokenName>/</TokenName> evita que ela fique ativa em todas as páginas.
        </Description>

        <CodeBlock>{`const StyledNavLink = styled(NavLink)\`
  color: \${({ theme }) => theme.colors.gray.light};

  &.active {
    background: \${({ theme }) => theme.colors.yellow.base};
    color: \${({ theme }) => theme.colors.blue.dark};
  }
\`

// "end" é necessário na rota "/" para não marcar como ativa em todas as páginas
<StyledNavLink to="/" end>Home</StyledNavLink>

// Use <Link> para links internos sem necessidade de estado ativo
// Use <a> apenas para links externos
<a href="https://reactrouter.com" target="_blank">Docs</a>`}</CodeBlock>
      </Section>

      {/* Grid */}
      <Section>
        <SectionTitle>O componente <TokenName>Grid</TokenName></SectionTitle>
        <Description>
          Em vez de um sistema de 12 colunas fixas como o Bootstrap, o{" "}
          <TokenName>Grid</TokenName> usa <TokenName>auto-fit</TokenName> com{" "}
          <TokenName>minmax()</TokenName> — você define o tamanho mínimo de cada coluna
          e o browser decide quantas cabem. Sem media queries, sem número fixo de colunas.
        </Description>

        <CodeBlock>{`// src/layout/Grid.tsx
export const Grid = styled.div<{ $minWidth?: number }>\`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(\${({ $minWidth }) => $minWidth ?? 280}px, 1fr));
  gap: \${({ theme }) => theme.spacing.md};
\`

// Uso — colunas de no mínimo 280px (padrão)
<Grid>
  <Card /> <Card /> <Card />
</Grid>

// Colunas menores — útil para badges, tags, itens compactos
<Grid $minWidth={160}>
  <Item /> <Item /> <Item /> <Item />
</Grid>`}</CodeBlock>

        <Description>
          Redimensione a janela para ver o grid abaixo se ajustar automaticamente:
        </Description>

        <Grid>
          {["1", "2", "3", "4", "5", "6"].map((n) => (
            <DemoBox key={n}>coluna {n}</DemoBox>
          ))}
        </Grid>

        <Grid $minWidth={160}>
          {["A", "B", "C", "D", "E", "F", "G", "H"].map((n) => (
            <DemoBox key={n} style={{ minHeight: 40 }}>{n}</DemoBox>
          ))}
        </Grid>
      </Section>

      {/* Páginas disponíveis */}
      <Section>
        <SectionTitle>Páginas disponíveis</SectionTitle>
        <Description>Clique para navegar — o browser não recarrega a página.</Description>
        <Grid $minWidth={240}>
          <RouteCard to="/">
            <RoutePath>/</RoutePath>
            <RouteLabel>Home</RouteLabel>
            <RouteDesc>Esta página — documentação do módulo 04</RouteDesc>
          </RouteCard>
          <RouteCard to="/sobre">
            <RoutePath>/sobre</RoutePath>
            <RouteLabel>Sobre</RouteLabel>
            <RouteDesc>Demonstração de responsividade e tokens ao vivo</RouteDesc>
          </RouteCard>
        </Grid>
      </Section>

      {/* Próximo módulo */}
      <Section>
        <SectionTitle>Próximo módulo</SectionTitle>
        <Description>
          No módulo <strong>05-basic-ui-components</strong> serão criados os primeiros
          componentes de interface reutilizáveis — botões, cards e badges — todos
          integrados ao sistema de tokens do tema.
        </Description>
      </Section>
    </>
  )
}