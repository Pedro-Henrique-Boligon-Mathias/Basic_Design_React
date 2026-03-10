import { useTheme } from "styled-components"
import styled from "styled-components"
import { Grid } from "../layout/Grid"
import { Card } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Input } from "../components/ui/Input"
import { Select, Option } from "../components/ui/Select"

// ─── Componentes base da página ───────────────────────────────────────────────

const Header = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.base};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`

const PageBadge = styled.span`
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

const Callout = styled.div`
  background: ${({ theme }) => theme.colors.yellowLight};
  border-left: 4px solid ${({ theme }) => theme.colors.yellow.base};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.blue.base};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`

const CalloutDanger = styled(Callout)`
  background: ${({ theme }) => theme.colors.red.light ?? "#fff0f3"};
  border-left-color: ${({ theme }) => theme.colors.red.base};
  color: ${({ theme }) => theme.colors.red.base};
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const PropTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray.base};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
`

const PropRow = styled.div`
  display: grid;
  grid-template-columns: 140px 130px 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.base};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};

  &:last-child { border-bottom: none; }
  &:first-child {
    background: ${({ theme }) => theme.colors.gray.light};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    color: ${({ theme }) => theme.colors.blue.base};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`

const CardTitle = styled.strong`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  color: ${({ theme }) => theme.colors.blue.base};
`

const CardText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`

// ─── Página ──────────────────────────────────────────────────────────────────

export default function Home() {
  const theme = useTheme()

  return (
    <>
      {/* Cabeçalho */}
      <Header>
        <PageBadge>Módulo 05</PageBadge>
        <Title>Basic UI Components</Title>
        <Subtitle>
          Este módulo adiciona cinco componentes de UI reutilizáveis —{" "}
          <strong>Badge</strong>, <strong>Button</strong>, <strong>Card</strong>,{" "}
          <strong>Input</strong> e <strong>Select</strong> — todos configuráveis via
          props que recebem os valores diretamente dos tokens do tema através do hook{" "}
          <TokenName>useTheme()</TokenName>.
        </Subtitle>
      </Header>

      {/* useTheme */}
      <Section>
        <SectionTitle>Acessando o tema fora de styled-components</SectionTitle>
        <Description>
          Dentro de um styled-component o <TokenName>theme</TokenName> chega
          automaticamente via props do <TokenName>ThemeProvider</TokenName>. Mas dentro
          de uma função de componente React normal você precisa do hook{" "}
          <TokenName>useTheme()</TokenName> para acessar os mesmos valores — é ele que
          permite passar tokens como props para os componentes deste módulo.
        </Description>

        <CodeBlock>{`import { useTheme } from "styled-components"

export default function MinhaPage() {
  const theme = useTheme()  // ← acessa todos os tokens do tema

  return (
    <Card
      $bg={theme.colors.gray.light}
      $shadow={theme.shadows.sm}
      $radius={theme.radius.md}
    >
      conteúdo
    </Card>
  )
}`}</CodeBlock>
      </Section>

      {/* StyleType */}
      <Section>
        <SectionTitle>Interface compartilhada — <TokenName>StyleType</TokenName></SectionTitle>
        <Description>
          Todos os componentes compartilham a mesma interface base em{" "}
          <TokenName>components/shared/StyleType.ts</TokenName>. Cada componente que
          precisa de props extras estende o <TokenName>StyleType</TokenName> com{" "}
          <TokenName>&</TokenName> ou <TokenName>extends</TokenName>.
        </Description>

        <CodeBlock>{`// src/components/shared/StyleType.ts
export interface StyleType {
  $bg?:      string   // cor de fundo
  $color?:   string   // cor do texto
  $radius?:  string   // arredondamento das bordas
  $shadow?:  string   // sombra
  $padding?: string   // espaçamento interno
  $border?:  string   // cor da borda
  $margin?:  string   // espaçamento externo
}

// Componentes com props extras estendem o StyleType
export interface CardStyleType extends StyleType {
  $gap?: string       // espaço entre filhos (ativa flex column automaticamente)
}

export interface ButtonStyleType extends StyleType {
  $full?:     boolean // largura 100%
  $fontSize?: string  // tamanho da fonte
}

export interface InputStyleType extends StyleType {
  $focusColor?: string  // cor da borda ao focar
}

export interface SelectStyleType extends StyleType {
  $focusColor?: string  // cor da borda ao focar
}`}</CodeBlock>
      </Section>

      {/* Badge */}
      <Section>
        <SectionTitle>Badge</SectionTitle>
        <Description>
          Etiqueta inline para status, categorias ou labels. Sem props usa os
          valores padrão do tema — fundo amarelo com texto azul escuro.
        </Description>

        <PropTable>
          <PropRow><span>prop</span><span>tipo</span><span>exemplo</span></PropRow>
          <PropRow><TokenName>$bg</TokenName><span>colors.*</span><span>theme.colors.green.base</span></PropRow>
          <PropRow><TokenName>$color</TokenName><span>colors.*</span><span>theme.colors.white</span></PropRow>
          <PropRow><TokenName>$radius</TokenName><span>radius.*</span><span>theme.radius.sm</span></PropRow>
          <PropRow><TokenName>$padding</TokenName><span>spacing.*</span><span>theme.spacing.sm</span></PropRow>
          <PropRow><TokenName>$border</TokenName><span>colors.*</span><span>theme.colors.yellow.base</span></PropRow>
          <PropRow><TokenName>$shadow</TokenName><span>shadows.*</span><span>theme.shadows.sm</span></PropRow>
          <PropRow><TokenName>$margin</TokenName><span>spacing.*</span><span>theme.spacing.sm</span></PropRow>
        </PropTable>

        <Row>
          <Badge>Padrão</Badge>
          <Badge $bg={theme.colors.blue.base} $color={theme.colors.white}>Primário</Badge>
          <Badge $bg={theme.colors.green.base} $color={theme.colors.white}>Concluído</Badge>
          <Badge $bg={theme.colors.red.base} $color={theme.colors.white}>Erro</Badge>
          <Badge $bg={theme.colors.gray.light} $color={theme.colors.blue.base} $radius={theme.radius.sm}>Tag</Badge>
          <Badge $bg={theme.colors.blue.light} $color={theme.colors.white} $border={theme.colors.blue.base}>Outline</Badge>
        </Row>

        <CodeBlock>{`<Badge>Padrão</Badge>
<Badge $bg={theme.colors.blue.base} $color={theme.colors.white}>Primário</Badge>
<Badge $bg={theme.colors.green.base} $color={theme.colors.white}>Concluído</Badge>
<Badge $bg={theme.colors.red.base} $color={theme.colors.white}>Erro</Badge>
<Badge $bg={theme.colors.gray.light} $color={theme.colors.blue.base} $radius={theme.radius.sm}>Tag</Badge>
<Badge $bg={theme.colors.blue.light} $color={theme.colors.white} $border={theme.colors.blue.base}>Outline</Badge>`}</CodeBlock>
      </Section>

      {/* Button */}
      <Section>
        <SectionTitle>Button</SectionTitle>
        <Description>
          Botão configurável com estados de <TokenName>hover</TokenName>,{" "}
          <TokenName>active</TokenName> e <TokenName>disabled</TokenName> já incluídos.
          A prop <TokenName>$full</TokenName> faz o botão ocupar 100% da largura do container.
        </Description>

        <PropTable>
          <PropRow><span>prop</span><span>tipo</span><span>exemplo</span></PropRow>
          <PropRow><TokenName>$bg</TokenName><span>colors.*</span><span>theme.colors.blue.base</span></PropRow>
          <PropRow><TokenName>$color</TokenName><span>colors.*</span><span>theme.colors.white</span></PropRow>
          <PropRow><TokenName>$border</TokenName><span>colors.*</span><span>theme.colors.blue.base</span></PropRow>
          <PropRow><TokenName>$radius</TokenName><span>radius.*</span><span>theme.radius.sm</span></PropRow>
          <PropRow><TokenName>$padding</TokenName><span>spacing.*</span><span>theme.spacing.md</span></PropRow>
          <PropRow><TokenName>$fontSize</TokenName><span>fontSizes.*</span><span>theme.typography.fontSizes.sm</span></PropRow>
          <PropRow><TokenName>$full</TokenName><span>boolean</span><span>true</span></PropRow>
          <PropRow><TokenName>$margin</TokenName><span>spacing.*</span><span>theme.spacing.sm</span></PropRow>
        </PropTable>

        <Row>
          <Button>Padrão</Button>
          <Button $bg={theme.colors.blue.base} $color={theme.colors.white}>Primário</Button>
          <Button $bg={theme.colors.white} $color={theme.colors.blue.base} $border={theme.colors.blue.base}>Outline</Button>
          <Button $bg={theme.colors.green.base} $color={theme.colors.white} $radius={theme.radius.sm}>Sucesso</Button>
          <Button $bg={theme.colors.red.base} $color={theme.colors.white} $radius={theme.radius.sm}>Erro</Button>
          <Button disabled>Disabled</Button>
        </Row>

        <CodeBlock>{`<Button>Padrão</Button>
<Button $bg={theme.colors.blue.base} $color={theme.colors.white}>Primário</Button>
<Button $bg={theme.colors.white} $color={theme.colors.blue.base} $border={theme.colors.blue.base}>Outline</Button>
<Button $bg={theme.colors.green.base} $color={theme.colors.white}>Sucesso</Button>
<Button $full $bg={theme.colors.blue.base} $color={theme.colors.white}>Largura total</Button>
<Button disabled>Disabled</Button>`}</CodeBlock>
      </Section>

      {/* Card */}
      <Section>
        <SectionTitle>Card</SectionTitle>
        <Description>
          Container genérico para qualquer conteúdo. A prop <TokenName>$gap</TokenName>{" "}
          é exclusiva do Card — quando passada, ativa automaticamente{" "}
          <TokenName>flex-direction: column</TokenName> e espaça os filhos sem precisar
          de um wrapper interno.
        </Description>

        <PropTable>
          <PropRow><span>prop</span><span>tipo</span><span>exemplo</span></PropRow>
          <PropRow><TokenName>$bg</TokenName><span>colors.*</span><span>theme.colors.white</span></PropRow>
          <PropRow><TokenName>$color</TokenName><span>colors.*</span><span>theme.colors.blue.base</span></PropRow>
          <PropRow><TokenName>$padding</TokenName><span>spacing.*</span><span>theme.spacing.lg</span></PropRow>
          <PropRow><TokenName>$radius</TokenName><span>radius.*</span><span>theme.radius.md</span></PropRow>
          <PropRow><TokenName>$shadow</TokenName><span>shadows.*</span><span>theme.shadows.md</span></PropRow>
          <PropRow><TokenName>$border</TokenName><span>colors.*</span><span>theme.colors.gray.base</span></PropRow>
          <PropRow><TokenName>$gap</TokenName><span>spacing.*</span><span>theme.spacing.md</span></PropRow>
          <PropRow><TokenName>$margin</TokenName><span>spacing.*</span><span>theme.spacing.md</span></PropRow>
        </PropTable>

        <Grid>
          <Card $bg={theme.colors.gray.light} $shadow={theme.shadows.sm} $radius={theme.radius.md} $gap={theme.spacing.sm}>
            <CardTitle>Card padrão</CardTitle>
            <CardText>Usando <TokenName>$gap</TokenName> para espaçar os filhos.</CardText>
          </Card>

          <Card $bg={theme.colors.blue.base} $color={theme.colors.white} $shadow={theme.shadows.md} $radius={theme.radius.lg} $gap={theme.spacing.sm}>
            <CardTitle style={{ color: theme.colors.white }}>Card azul</CardTitle>
            <CardText style={{ color: theme.colors.gray.light }}>
              Com <TokenName style={{ background: "rgba(255,255,255,0.1)", color: theme.colors.yellow.light }}>$bg</TokenName> e <TokenName style={{ background: "rgba(255,255,255,0.1)", color: theme.colors.yellow.light }}>$color</TokenName> customizados.
            </CardText>
          </Card>

          <Card $bg={theme.colors.white} $border={theme.colors.yellow.base} $radius={theme.radius.md} $padding={theme.spacing.lg} $gap={theme.spacing.sm}>
            <CardTitle>Card com borda</CardTitle>
            <CardText>Usando <TokenName>$border</TokenName> para destacar.</CardText>
          </Card>
        </Grid>

        <CodeBlock>{`// Sem $gap — você controla o layout dos filhos manualmente
<Card $bg={theme.colors.gray.light} $shadow={theme.shadows.sm}>
  conteúdo
</Card>

// Com $gap — ativa flex column e espaça os filhos automaticamente
<Card $bg={theme.colors.white} $gap={theme.spacing.md} $padding={theme.spacing.lg}>
  <Badge>Status</Badge>
  <strong>Título</strong>
  <p>Descrição</p>
  <Button $full>Ação</Button>
</Card>`}</CodeBlock>
      </Section>

      {/* Input */}
      <Section>
        <SectionTitle>Input</SectionTitle>
        <Description>
          Campo de texto configurável com estados de <TokenName>focus</TokenName>,{" "}
          <TokenName>placeholder</TokenName> e <TokenName>disabled</TokenName>.
          A prop <TokenName>$focusColor</TokenName> define a cor da borda e do brilho
          ao focar — por padrão usa <TokenName>theme.colors.yellow.base</TokenName>.
        </Description>

        <PropTable>
          <PropRow><span>prop</span><span>tipo</span><span>exemplo</span></PropRow>
          <PropRow><TokenName>$bg</TokenName><span>colors.*</span><span>theme.colors.white</span></PropRow>
          <PropRow><TokenName>$color</TokenName><span>colors.*</span><span>theme.colors.blue.base</span></PropRow>
          <PropRow><TokenName>$border</TokenName><span>colors.*</span><span>theme.colors.gray.base</span></PropRow>
          <PropRow><TokenName>$radius</TokenName><span>radius.*</span><span>theme.radius.md</span></PropRow>
          <PropRow><TokenName>$padding</TokenName><span>spacing.*</span><span>theme.spacing.md</span></PropRow>
          <PropRow><TokenName>$focusColor</TokenName><span>colors.*</span><span>theme.colors.blue.base</span></PropRow>
          <PropRow><TokenName>$shadow</TokenName><span>shadows.*</span><span>theme.shadows.sm</span></PropRow>
        </PropTable>

        <Card $bg={theme.colors.gray.light} $padding={theme.spacing.lg} $radius={theme.radius.md} $gap={theme.spacing.md}>
          <Input placeholder="Input padrão — clique para ver o focus amarelo" />
          <Input
            placeholder="Focus azul customizado"
            $focusColor={theme.colors.blue.base}
            $border={theme.colors.blue.light}
          />
          <Input
            placeholder="Input com fundo colorido"
            $bg={theme.colors.blue.base}
            $color={theme.colors.white}
            $border={theme.colors.blue.light}
            $focusColor={theme.colors.yellow.base}
          />
          <Input placeholder="Input desabilitado" disabled />
        </Card>

        <CodeBlock>{`<Input placeholder="Padrão" />

<Input
  placeholder="Focus azul"
  $focusColor={theme.colors.blue.base}
  $border={theme.colors.blue.light}
/>

<Input
  placeholder="Com fundo"
  $bg={theme.colors.blue.base}
  $color={theme.colors.white}
  $focusColor={theme.colors.yellow.base}
/>

<Input placeholder="Desabilitado" disabled />`}</CodeBlock>
      </Section>

      {/* Select */}
      <Section>
        <SectionTitle>Select</SectionTitle>
        <Description>
          Campo de seleção configurável. Segue o mesmo padrão do{" "}
          <TokenName>Input</TokenName> com suporte a <TokenName>$focusColor</TokenName>,{" "}
          <TokenName>disabled</TokenName> e os tokens de cor, radius e padding.
        </Description>

        <PropTable>
          <PropRow><span>prop</span><span>tipo</span><span>exemplo</span></PropRow>
          <PropRow><TokenName>$bg</TokenName><span>colors.*</span><span>theme.colors.white</span></PropRow>
          <PropRow><TokenName>$color</TokenName><span>colors.*</span><span>theme.colors.blue.base</span></PropRow>
          <PropRow><TokenName>$border</TokenName><span>colors.*</span><span>theme.colors.gray.base</span></PropRow>
          <PropRow><TokenName>$radius</TokenName><span>radius.*</span><span>theme.radius.md</span></PropRow>
          <PropRow><TokenName>$focusColor</TokenName><span>colors.*</span><span>theme.colors.yellow.base</span></PropRow>
        </PropTable>

        <Card $bg={theme.colors.gray.light} $padding={theme.spacing.lg} $radius={theme.radius.md} $gap={theme.spacing.md}>
          <Select>
            <option value="" disabled>Select padrão</option>
            <Option value="1">Opção 1</Option>
            <Option value="2">Opção 2</Option>
            <Option value="3">Opção 3</Option>
          </Select>

          <Select $bg={theme.colors.blue.base} $color={theme.colors.white} $border={theme.colors.yellow.base} $focusColor={theme.colors.yellow.base}>
            <option value="" disabled>Select customizado</option>
            <Option value="1" $bg={theme.colors.blue.base} $color={theme.colors.white}>Opção 1</Option>
            <Option value="2" $bg={theme.colors.blue.base} $color={theme.colors.white}>Opção 2</Option>
            <Option value="3" $bg={theme.colors.blue.base} $color={theme.colors.white}>Opção 3</Option>
          </Select>

          <Select disabled>
            <option>Select desabilitado</option>
          </Select>
        </Card>

        <CalloutDanger>
          ⚠️ <strong>Limitação do browser:</strong> o dropdown do{" "}
          <TokenName style={{ background: "rgba(255,255,255,0.3)" }}>{`<select>`}</TokenName>{" "}
          e as suas <TokenName style={{ background: "rgba(255,255,255,0.3)" }}>{`<option>`}</TokenName>{" "}
          são renderizados pelo <strong>sistema operacional</strong>, não pelo browser.
          Isso significa que <strong>border-radius, box-shadow, padding e a maioria dos
          estilos CSS são ignorados nas opções</strong> — especialmente no macOS e iOS.
          Apenas <TokenName style={{ background: "rgba(255,255,255,0.3)" }}>background</TokenName> e{" "}
          <TokenName style={{ background: "rgba(255,255,255,0.3)" }}>color</TokenName> têm
          suporte razoável. Para controle total do visual, o caminho é construir um
          select customizado com <TokenName style={{ background: "rgba(255,255,255,0.3)" }}>div</TokenName> +{" "}
          <TokenName style={{ background: "rgba(255,255,255,0.3)" }}>useState</TokenName> — o que
          será abordado em um módulo futuro.
        </CalloutDanger>

        <CodeBlock>{`<Select>
  <option value="" disabled>Selecione...</option>
  <Option value="1">Opção 1</Option>
  <Option value="2">Opção 2</Option>
</Select>

// Customizado — cores funcionam no select, mas as opções dependem do OS
<Select $bg={theme.colors.blue.base} $color={theme.colors.white} $border={theme.colors.yellow.base}>
  <option value="" disabled>Selecione...</option>
  <Option value="1" $bg={theme.colors.blue.base} $color={theme.colors.white}>Opção 1</Option>
</Select>`}</CodeBlock>
      </Section>

      {/* Componentes juntos */}
      <Section>
        <SectionTitle>Usando os componentes juntos</SectionTitle>
        <Description>
          Os componentes são feitos para funcionar em conjunto. O <TokenName>$gap</TokenName>{" "}
          no card elimina a necessidade de wrappers internos para espaçamento:
        </Description>

        <Grid>
          {([
            {
              badge: { bg: theme.colors.green.base, label: "Concluído" },
              title: "Módulo 02",
              sub: "Design Tokens",
              desc: "Sistema de tokens para cores, tipografia e espaçamentos.",
              btnBg: theme.colors.blue.base,
              btnLabel: "Ver módulo",
            },
            {
              badge: { bg: theme.colors.yellow.base, label: "Em andamento", color: theme.colors.blue.dark },
              title: "Módulo 05",
              sub: "UI Components",
              desc: "Card, Button, Badge, Input e Select configuráveis via tokens.",
              btnBg: theme.colors.white,
              btnLabel: "Saiba mais",
              btnBorder: theme.colors.blue.base,
              btnColor: theme.colors.blue.base,
            },
            {
              badge: { bg: theme.colors.gray.base, label: "Pendente", color: theme.colors.blue.base },
              title: "Módulo 06",
              sub: "Em breve",
              desc: "Componentes com estado — select customizado, modal e mais.",
              btnBg: theme.colors.gray.light,
              btnLabel: "Em breve",
              btnColor: theme.colors.gray.dark,
            },
          ]).map((item) => (
            <Card
              key={item.title}
              $bg={theme.colors.white}
              $shadow={theme.shadows.md}
              $radius={theme.radius.lg}
              $border={theme.colors.gray.base}
              $padding={theme.spacing.lg}
              $gap={theme.spacing.sm}
            >
              <Badge $bg={item.badge.bg} $color={item.badge.color ?? theme.colors.white}>
                {item.badge.label}
              </Badge>
              <CardTitle>{item.title} — {item.sub}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Button
                $bg={item.btnBg}
                $color={item.btnColor ?? theme.colors.white}
                $border={item.btnBorder}
                $full
              >
                {item.btnLabel}
              </Button>
            </Card>
          ))}
        </Grid>

        <CodeBlock>{`// $gap no card substitui qualquer wrapper interno
<Card
  $bg={theme.colors.white}
  $shadow={theme.shadows.md}
  $padding={theme.spacing.lg}
  $gap={theme.spacing.sm}        // ← espaça Badge, CardTitle, p e Button
>
  <Badge $bg={theme.colors.green.base} $color={theme.colors.white}>Concluído</Badge>
  <strong>Título</strong>
  <p>Descrição do conteúdo.</p>
  <Button $bg={theme.colors.blue.base} $color={theme.colors.white} $full>
    Ver detalhes
  </Button>
</Card>`}</CodeBlock>
      </Section>

      {/* Projeto completo */}
      <Section>
        <SectionTitle>Projeto concluído 🎉</SectionTitle>
        <Description>
          O template base está completo. Para usar em um projeto real, clone a branch
          desejada e remova as páginas de demonstração.
        </Description>

        <Grid $minWidth={180}>
          {([
            ["01", "base-vite-react",     "Estrutura inicial"],
            ["02", "design-tokens-theme", "Tokens e tema"],
            ["03", "responsive-layout",   "Fluid + Container"],
            ["04", "layout-components",   "Router + Nav + Grid"],
            ["05", "basic-ui-components", "Card, Button, Badge, Input, Select"],
          ]).map(([num, name, desc]) => (
            <Card
              key={num}
              $bg={theme.colors.gray.light}
              $radius={theme.radius.md}
              $padding={theme.spacing.md}
              $gap={theme.spacing.xs}
            >
              <Badge $bg={theme.colors.blue.base} $color={theme.colors.white}>{num}</Badge>
              <CardTitle>{name}</CardTitle>
              <CardText>{desc}</CardText>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  )
}