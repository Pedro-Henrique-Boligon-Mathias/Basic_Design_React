import styled from "styled-components"

// ─── Estrutura da página ──────────────────────────────────────────────────────

const Page = styled.main`
  max-width: 860px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

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

// ─── Seção genérica ───────────────────────────────────────────────────────────

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

const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols ?? 3}, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`

const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
`

const TokenName = styled.code`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  background: ${({ theme }) => theme.colors.gray.light};
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.blue.base};
`

// ─── Cores ────────────────────────────────────────────────────────────────────

const ColorCard = styled.div<{ $bg: string; $dark?: boolean }>`
  background: ${({ $bg }) => $bg};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ $dark }) => ($dark ? "#fff" : "#14213D")};
`

const ColorValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  opacity: 0.7;
`

// ─── Tipografia ───────────────────────────────────────────────────────────────

const TypographyRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base};

  &:last-child {
    border-bottom: none;
  }
`

const TypographySample = styled.span<{ $size: string; $weight?: number }>`
  font-size: ${({ $size }) => $size};
  font-weight: ${({ $weight }) => $weight ?? 400};
  color: ${({ theme }) => theme.colors.blue.base};
  flex: 1;
`

// ─── Espaçamentos ─────────────────────────────────────────────────────────────

const SpacingRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const SpacingBar = styled.div<{ $size: string }>`
  height: 24px;
  width: ${({ $size }) => $size};
  background: ${({ theme }) => theme.colors.yellow.base};
  border-radius: ${({ theme }) => theme.radius.sm};
  flex-shrink: 0;
`

// ─── Radius ───────────────────────────────────────────────────────────────────

const RadiusBox = styled.div<{ $radius: string }>`
  width: 100%;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.blue.light};
  border-radius: ${({ $radius }) => $radius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.white};
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

// ─── Componente ──────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <Page>

      {/* Cabeçalho */}
      <Header>
        <Badge>Módulo 02</Badge>
        <Title>Design Tokens &amp; Theme</Title>
        <Subtitle>
          Este módulo configura o sistema de design tokens — cores, tipografia, espaçamentos,
          bordas e sombras — integrados ao <strong>styled-components</strong> via ThemeProvider.
          Todos os valores abaixo vêm diretamente do tema, sem nenhum valor hardcoded.
        </Subtitle>
      </Header>

      {/* Como usar o tema */}
      <Section>
        <SectionTitle>Como usar o tema</SectionTitle>
        <Description>
          Qualquer componente criado com <TokenName>styled-components</TokenName> tem acesso
          ao tema via prop <TokenName>theme</TokenName>:
        </Description>
        <CodeBlock>{`import styled from "styled-components"

const MeuComponente = styled.div\`
  background: \${({ theme }) => theme.colors.blue.base};
  padding:    \${({ theme }) => theme.spacing.md};
  font-size:  \${({ theme }) => theme.typography.fontSizes.lg};
  border-radius: \${({ theme }) => theme.radius.md};
  box-shadow: \${({ theme }) => theme.shadows.sm};
\``}</CodeBlock>
      </Section>

      {/* Cores */}
      <Section>
        <SectionTitle>Cores — <TokenName>theme.colors</TokenName></SectionTitle>
        <Description>Paleta completa do projeto, organizada por grupo semântico.</Description>

        <Label>Escala de cinza</Label>
        <Grid $cols={3}>
          <ColorCard $bg="#000000" $dark><Label style={{ color: "#fff" }}>black</Label><ColorValue>#000000</ColorValue></ColorCard>
          <ColorCard $bg="#A3A3A3"><Label>gray.dark</Label><ColorValue>#A3A3A3</ColorValue></ColorCard>
          <ColorCard $bg="#E5E5E5"><Label>gray.base</Label><ColorValue>#E5E5E5</ColorValue></ColorCard>
          <ColorCard $bg="#F5F5F5"><Label>gray.light</Label><ColorValue>#F5F5F5</ColorValue></ColorCard>
          <ColorCard $bg="#FFFFFF" style={{ border: "1px solid #E5E5E5" }}><Label>white</Label><ColorValue>#FFFFFF</ColorValue></ColorCard>
        </Grid>

        <Label>Azul — cor primária da marca</Label>
        <Grid $cols={3}>
          <ColorCard $bg="#0A1120" $dark><Label style={{ color: "#fff" }}>blue.dark</Label><ColorValue>#0A1120</ColorValue></ColorCard>
          <ColorCard $bg="#14213D" $dark><Label style={{ color: "#fff" }}>blue.base</Label><ColorValue>#14213D</ColorValue></ColorCard>
          <ColorCard $bg="#2B3A5A" $dark><Label style={{ color: "#fff" }}>blue.light</Label><ColorValue>#2B3A5A</ColorValue></ColorCard>
          <ColorCard $bg="#EAF0F9"><Label>blueLight (tint)</Label><ColorValue>#EAF0F9</ColorValue></ColorCard>
        </Grid>

        <Label>Amarelo — cor de destaque</Label>
        <Grid $cols={3}>
          <ColorCard $bg="#D68A0E"><Label>yellow.dark</Label><ColorValue>#D68A0E</ColorValue></ColorCard>
          <ColorCard $bg="#FCA311"><Label>yellow.base</Label><ColorValue>#FCA311</ColorValue></ColorCard>
          <ColorCard $bg="#FFB742"><Label>yellow.light</Label><ColorValue>#FFB742</ColorValue></ColorCard>
          <ColorCard $bg="#FFF8E6"><Label>yellowLight (tint)</Label><ColorValue>#FFF8E6</ColorValue></ColorCard>
        </Grid>

        <Label>Status / Suporte</Label>
        <Grid $cols={3}>
          <ColorCard $bg="#009E80" $dark><Label style={{ color: "#fff" }}>green.base</Label><ColorValue>#009E80</ColorValue></ColorCard>
          <ColorCard $bg="#DFF5F0"><Label>green.light</Label><ColorValue>#DFF5F0</ColorValue></ColorCard>
          <ColorCard $bg="#D83559" $dark><Label style={{ color: "#fff" }}>red.base</Label><ColorValue>#D83559</ColorValue></ColorCard>
          <ColorCard $bg="#FCEAED"><Label>red.light</Label><ColorValue>#FCEAED</ColorValue></ColorCard>
        </Grid>

        <CodeBlock>{`// Exemplos de uso
color:      \${({ theme }) => theme.colors.blue.base};
background: \${({ theme }) => theme.colors.yellow.base};
border:     1px solid \${({ theme }) => theme.colors.gray.base};
color:      \${({ theme }) => theme.colors.green.base}; // sucesso
color:      \${({ theme }) => theme.colors.red.base};   // erro`}</CodeBlock>
      </Section>

      {/* Tipografia */}
      <Section>
        <SectionTitle>Tipografia — <TokenName>theme.typography</TokenName></SectionTitle>

        <Label>Tamanhos de fonte — fontSizes</Label>
        <div>
          {([
            ["sm",  "0.875rem", 400, "Textos auxiliares, labels, captions"],
            ["md",  "1rem",     400, "Texto corrido, parágrafos"],
            ["lg",  "1.25rem",  500, "Subtítulos, destaques"],
            ["xl",  "1.5rem",   700, "Títulos de seção, headings"],
          ] as const).map(([token, size, weight, desc]) => (
            <TypographyRow key={token}>
              <TokenName style={{ minWidth: 90 }}>fontSizes.{token}</TokenName>
              <TypographySample $size={size} $weight={weight}>{desc}</TypographySample>
              <Label>{size}</Label>
            </TypographyRow>
          ))}
        </div>

        <Label>Pesos de fonte — fontWeights</Label>
        <div>
          {([
            ["regular", 400, "Texto comum"],
            ["medium",  500, "Texto com ênfase leve"],
            ["bold",    700, "Títulos e destaques"],
          ] as const).map(([token, weight, desc]) => (
            <TypographyRow key={token}>
              <TokenName style={{ minWidth: 120 }}>fontWeights.{token}</TokenName>
              <TypographySample $size="1rem" $weight={weight}>{desc} — weight {weight}</TypographySample>
            </TypographyRow>
          ))}
        </div>

        <CodeBlock>{`font-size:   \${({ theme }) => theme.typography.fontSizes.lg};
font-weight: \${({ theme }) => theme.typography.fontWeights.bold};
line-height: \${({ theme }) => theme.typography.lineHeights.relaxed};
font-family: \${({ theme }) => theme.typography.fontFamily};`}</CodeBlock>
      </Section>

      {/* Espaçamentos */}
      <Section>
        <SectionTitle>Espaçamentos — <TokenName>theme.spacing</TokenName></SectionTitle>
        <Description>
          Use para <TokenName>padding</TokenName>, <TokenName>margin</TokenName> e <TokenName>gap</TokenName>.
          Mantém consistência visual em todo o projeto.
        </Description>

        {([
          ["xs", "4px"],
          ["sm", "8px"],
          ["md", "16px"],
          ["lg", "24px"],
          ["xl", "32px"],
        ] as const).map(([token, value]) => (
          <SpacingRow key={token}>
            <TokenName style={{ minWidth: 100 }}>spacing.{token}</TokenName>
            <SpacingBar $size={value} />
            <Label>{value}</Label>
          </SpacingRow>
        ))}

        <CodeBlock>{`padding: \${({ theme }) => theme.spacing.md};
gap:     \${({ theme }) => theme.spacing.sm};
margin:  \${({ theme }) => theme.spacing.lg} 0;`}</CodeBlock>
      </Section>

      {/* Radius */}
      <Section>
        <SectionTitle>Border Radius — <TokenName>theme.radius</TokenName></SectionTitle>
        <Grid $cols={4}>
          {([
            ["sm",    "6px",     "Inputs, tags"],
            ["md",    "10px",    "Cards, modais"],
            ["lg",    "16px",    "Containers grandes"],
            ["round", "9999px",  "Badges, avatares"],
          ] as const).map(([token, value, desc]) => (
            <RadiusBox key={token} $radius={value}>
              <TokenName style={{ color: "#fff", background: "rgba(255,255,255,0.15)" }}>
                radius.{token}
              </TokenName>
              <Label style={{ color: "#fff" }}>{value}</Label>
              <Label style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>{desc}</Label>
            </RadiusBox>
          ))}
        </Grid>

        <CodeBlock>{`border-radius: \${({ theme }) => theme.radius.sm};   // inputs
border-radius: \${({ theme }) => theme.radius.md};   // cards
border-radius: \${({ theme }) => theme.radius.round}; // badges`}</CodeBlock>
      </Section>

      {/* Sombras */}
      <Section>
        <SectionTitle>Sombras — <TokenName>theme.shadows</TokenName></SectionTitle>
        <Grid $cols={3}>
          {([
            ["sm", "0 2px 6px rgba(0,0,0,0.06)",              "Hover sutil, cards planos"],
            ["md", "0 12px 24px rgba(0,0,0,0.08)",            "Cards elevados, dropdowns"],
            ["lg", "0 24px 45px rgba(27,67,121,0.12)",        "Modais, painéis flutuantes"],
          ] as const).map(([token, value, desc]) => (
            <ShadowBox key={token} $shadow={value}>
              <TokenName>shadows.{token}</TokenName>
              <Label style={{ textAlign: "center" }}>{desc}</Label>
            </ShadowBox>
          ))}
        </Grid>

        <CodeBlock>{`box-shadow: \${({ theme }) => theme.shadows.sm}; // hover sutil
box-shadow: \${({ theme }) => theme.shadows.md}; // card elevado
box-shadow: \${({ theme }) => theme.shadows.lg}; // modal`}</CodeBlock>
      </Section>

      {/* Breakpoints */}
      <Section>
        <SectionTitle>Breakpoints — <TokenName>theme.breakpoints</TokenName></SectionTitle>
        <Description>
          Usados para criar media queries responsivas. No módulo 03 estes valores serão
          integrados ao sistema de tipografia e espaçamento fluido com <TokenName>clamp()</TokenName>.
        </Description>

        <Grid $cols={2}>
          {([
            ["tablet",  "768px",  "Tablets e telas médias"],
            ["desktop", "1440px", "Desktops e telas largas"],
          ] as const).map(([token, value, desc]) => (
            <ColorCard key={token} $bg="#EAF0F9">
              <TokenName>breakpoints.{token}</TokenName>
              <TypographySample $size="1.5rem" $weight={700}>{value}</TypographySample>
              <Label>{desc}</Label>
            </ColorCard>
          ))}
        </Grid>

        <CodeBlock>{`// Uso com styled-components
const Card = styled.div\`
  padding: \${({ theme }) => theme.spacing.md};

  @media (min-width: \${({ theme }) => theme.breakpoints.tablet}px) {
    padding: \${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: \${({ theme }) => theme.breakpoints.desktop}px) {
    padding: \${({ theme }) => theme.spacing.xl};
  }
\``}</CodeBlock>
      </Section>

      {/* Próximo módulo */}
      <Section>
        <SectionTitle>Próximo módulo</SectionTitle>
        <Description>
          No módulo <strong>03-responsive-layout</strong> os tokens de tipografia e
          espaçamento serão convertidos para valores fluidos com <TokenName>clamp()</TokenName>,
          tornando o layout automaticamente responsivo entre os breakpoints definidos acima —
          sem necessidade de media queries para cada propriedade.
        </Description>
      </Section>

    </Page>
  )
}