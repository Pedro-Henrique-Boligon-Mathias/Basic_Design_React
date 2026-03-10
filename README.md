# BaseProject — Template React + Vite

Template base progressivo para projetos React com sistema de design tokens, responsividade fluida, roteamento e componentes de UI reutilizáveis.

Cada módulo é uma branch independente no git — você pode clonar qualquer ponto do projeto e continuar a partir dele.

---

## Estrutura das branches

| Branch | Módulo | Conteúdo |
|--------|--------|----------|
| `01-base-vite-react` | Módulo 01 | Estrutura inicial |
| `02-design-tokens-theme` | Módulo 02 | Sistema de tokens e tema |
| `03-responsive-layout` | Módulo 03 | Tipografia e espaçamentos fluidos |
| `04-layout-components` | Módulo 04 | Roteamento, Nav, Footer e Grid |
| `05-basic-ui-components` | Módulo 05 | Card, Button, Badge, Input e Select |

---

## Módulo 01 — Base Vite + React

Branch: `01-base-vite-react`

Estrutura inicial do projeto configurada com Vite, React e TypeScript. Ponto de partida limpo para todos os módulos seguintes.

**Inclui:**
- Vite + React + TypeScript
- styled-components configurado
- Estrutura de pastas base (`src/pages`, `src/components`, `src/theme`, `src/layout`)

---

## Módulo 02 — Design Tokens & Theme

Branch: `02-design-tokens-theme`

Sistema de tokens de design centralizado em `src/theme/`. Todos os valores de cor, tipografia, espaçamento, radius e sombra ficam em um único lugar e são acessados via `ThemeProvider` do styled-components.

**Inclui:**
- `theme/tokens/colors.ts` — paleta de cores com variações (dark, base, light)
- `theme/tokens/typography.ts` — família, tamanhos e pesos de fonte
- `theme/tokens/spacing.ts` — escala de espaçamento
- `theme/tokens/radius.ts` — arredondamento de bordas
- `theme/tokens/shadows.ts` — sombras
- `theme/tokens/breakpoints.ts` — breakpoints de responsividade
- `theme/theme.ts` — monta todos os tokens em um único objeto `DefaultTheme`
- `styled.d.ts` — tipagem TypeScript do tema
- `styles/GlobalStyles.ts` — reset CSS global

**Uso:**
```tsx
// Em qualquer styled-component
const Box = styled.div`
  background: ${({ theme }) => theme.colors.blue.base};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
`
```

---

## Módulo 03 — Responsive Layout

Branch: `03-responsive-layout`

Adiciona tipografia e espaçamentos fluidos usando a função `fluid()` e o componente `Container`.

**Inclui:**
- `theme/utils/fluid.ts` — gera valores `clamp()` para escalonamento fluido entre breakpoints
- `layout/Container.ts` — wrapper centralizado com largura máxima e padding responsivo

**Como funciona o `fluid()`:**
```ts
// Retorna uma string CSS clamp() que escala entre mobile (320px) e desktop (1440px)
fluid(16, 24) // → "clamp(1rem, 0.7rem + 0.9vw, 1.5rem)"
```

Os tokens de `spacing` e `fontSizes` usam `fluid()` automaticamente — sem media queries, o browser recalcula os valores conforme a largura da tela.

---

## Módulo 04 — Layout Components

Branch: `04-layout-components`

Adiciona roteamento com react-router, os componentes globais de layout e o `Grid` responsivo automático.

**Inclui:**
- `router/router.data.tsx` — array centralizado de rotas
- `layout/Layout.tsx` — wrapper global com Nav + `<Outlet />` + Footer
- `layout/Nav.tsx` — navbar que lê as rotas automaticamente
- `layout/Footer.tsx` — footer que lê as rotas automaticamente
- `layout/Grid.tsx` — grid responsivo automático sem media queries

**Sistema de rotas automático:**

Todas as rotas ficam em `router/router.data.tsx`. A Navbar e o `App.tsx` leem esse array automaticamente — para adicionar uma nova página basta adicionar um objeto ao array:

```tsx
export const routes = [
  { path: "/",       element: <Home />,  label: "Home",  nav: true  },
  { path: "/sobre",  element: <Sobre />, label: "Sobre", nav: true  },
  { path: "/admin",  element: <Admin />, label: "Admin", nav: false }, // nav: false = não aparece na Navbar
]
```

**Grid responsivo:**

O componente `Grid` usa `auto-fit` com `minmax()` — você define o tamanho mínimo de cada coluna e o browser decide quantas cabem, sem media queries:

```tsx
// Colunas de no mínimo 280px (padrão)
<Grid>
  <Card /> <Card /> <Card />
</Grid>

// Colunas menores
<Grid $minWidth={160}>
  <Item /> <Item /> <Item /> <Item />
</Grid>
```

---

## Módulo 05 — Basic UI Components

Branch: `05-basic-ui-components`

Adiciona cinco componentes de UI reutilizáveis, todos configuráveis via props que recebem os valores diretamente dos tokens do tema.

**Inclui:**
- `components/ui/Badge.tsx`
- `components/ui/Button.tsx`
- `components/ui/Card.tsx`
- `components/ui/Input.tsx`
- `components/ui/Select.tsx`
- `components/shared/StyleType.ts` — interface TypeScript compartilhada

**Interface compartilhada:**

Todos os componentes usam o mesmo conjunto de props base definido em `StyleType`:

```ts
interface StyleType {
  $bg?:      string  // cor de fundo
  $color?:   string  // cor do texto
  $radius?:  string  // arredondamento
  $shadow?:  string  // sombra
  $padding?: string  // espaçamento interno
  $border?:  string  // cor da borda
  $margin?:  string  // espaçamento externo
}
```

**Uso com `useTheme()`:**

Fora de styled-components, use o hook `useTheme()` para acessar os tokens:

```tsx
import { useTheme } from "styled-components"

export default function MinhaPage() {
  const theme = useTheme()

  return (
    <Card
      $bg={theme.colors.white}
      $shadow={theme.shadows.md}
      $radius={theme.radius.lg}
      $padding={theme.spacing.lg}
      $gap={theme.spacing.sm}
    >
      <Badge $bg={theme.colors.green.base} $color={theme.colors.white}>
        Ativo
      </Badge>
      <strong>Título</strong>
      <p>Descrição do conteúdo.</p>
      <Button $bg={theme.colors.blue.base} $color={theme.colors.white} $full>
        Ação
      </Button>
    </Card>
  )
}
```

> **Nota sobre o Select:** o dropdown e as opções do `<select>` nativo são renderizados pelo sistema operacional, não pelo browser. Por isso a maioria dos estilos CSS (border-radius, box-shadow, padding) é ignorada nas opções — especialmente no macOS e iOS. Apenas `background` e `color` têm suporte razoável. Para controle total do visual, a solução é um select customizado com `div` + `useState`.

---

## Como usar

```bash
# Clonar uma branch específica
git clone -b 05-basic-ui-components <url-do-repo>

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

---

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [react-router](https://reactrouter.com/)