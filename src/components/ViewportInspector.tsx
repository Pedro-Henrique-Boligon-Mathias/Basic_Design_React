import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { breakpoints } from "../theme/tokens/breakpoints"

// ─── Helpers ─────────────────────────────────────────────────────────────────

type Breakpoint = "mobile" | "tablet" | "desktop"

function getBreakpoint(width: number): Breakpoint {
  if (width < breakpoints.tablet)  return "mobile"
  if (width < breakpoints.desktop) return "tablet"
  return "desktop"
}

// Resolve o valor calculado de um clamp() no tamanho de tela atual
function resolveClamp(clampStr: string, width: number): string {
  const match = clampStr.match(/clamp\((.*?),\s*(.*?)\s*\+\s*(.*?)vw,\s*(.*?)\)/)
  if (!match) return clampStr

  const min      = parseFloat(match[1]) * 16
  const intercept = parseFloat(match[2]) * 16
  const slope    = parseFloat(match[3])
  const max      = parseFloat(match[4]) * 16

  const value = Math.min(Math.max(intercept + (slope / 100) * width, min), max)
  return `${(value / 16).toFixed(3)}rem  (${value.toFixed(1)}px)`
}

// ─── Animação ─────────────────────────────────────────────────────────────────

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`

// ─── Estilos ─────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.blue.dark};
  border: 1px solid ${({ theme }) => theme.colors.blue.light};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`

const LiveDot = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.green.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.green.base};
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`

const WidthDisplay = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.xs};
`

const WidthNumber = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  font-variant-numeric: tabular-nums;
`

const WidthUnit = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray.dark};
`

// Barra de progresso entre mobile e desktop
const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const ProgressLabels = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProgressLabel = styled.span<{ $active?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.yellow.base : theme.colors.gray.dark};
  transition: color 0.2s;
`

const ProgressTrack = styled.div`
  position: relative;
  height: 6px;
  background: ${({ theme }) => theme.colors.blue.light};
  border-radius: ${({ theme }) => theme.radius.round};
  overflow: visible;
`

const ProgressFill = styled.div<{ $pct: number }>`
  height: 100%;
  width: ${({ $pct }) => $pct}%;
  background: ${({ theme }) => theme.colors.yellow.base};
  border-radius: ${({ theme }) => theme.radius.round};
  transition: width 0.1s linear;
`

const ProgressThumb = styled.div<{ $pct: number }>`
  position: absolute;
  top: 50%;
  left: ${({ $pct }) => $pct}%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.yellow.base};
  border: 2px solid ${({ theme }) => theme.colors.blue.dark};
  transition: left 0.1s linear;
`

// Breakpoint markers on the track
const ProgressMarker = styled.div<{ $pct: number }>`
  position: absolute;
  top: 50%;
  left: ${({ $pct }) => $pct}%;
  transform: translate(-50%, -50%);
  width: 3px;
  height: 12px;
  background: ${({ theme }) => theme.colors.blue.light};
  border-radius: 2px;
`

// Tokens em tempo real
const TokenGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const TokenCard = styled.div`
  background: ${({ theme }) => theme.colors.blue.base};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const TokenLabel = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray.dark};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const TokenResolved = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.yellow.light};
  font-family: monospace;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`

// ─── Componente ──────────────────────────────────────────────────────────────

// Tokens que serão exibidos em tempo real
const TOKENS = [
  { label: "fontSizes.sm", clamp: "clamp(0.8750rem, 0.8304rem + 0.1786vw, 1.0000rem)" },
  { label: "fontSizes.md", clamp: "clamp(1.0000rem, 0.9554rem + 0.1786vw, 1.1250rem)" },
  { label: "fontSizes.lg", clamp: "clamp(1.2500rem, 1.1161rem + 0.5357vw, 1.5000rem)" },
  { label: "fontSizes.xl", clamp: "clamp(1.5000rem, 1.2321rem + 1.0714vw, 2.0000rem)" },
  { label: "spacing.md",   clamp: "clamp(0.5000rem, 0.3661rem + 0.5357vw, 1.0000rem)" },
  { label: "spacing.xl",   clamp: "clamp(1.2500rem, 1.0268rem + 0.8929vw, 2.0000rem)" },
]

const MIN_WIDTH = breakpoints.mobile   // 320
const MAX_WIDTH = breakpoints.desktop  // 1440

export function ViewportInspector() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const bp         = getBreakpoint(width)
  const clampedW   = Math.min(Math.max(width, MIN_WIDTH), MAX_WIDTH)
  const progressPct = ((clampedW - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH)) * 100
  const tabletPct   = ((breakpoints.tablet  - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH)) * 100

  return (
    <Wrapper>

      {/* Linha superior — live indicator + largura atual */}
      <TopRow>
        <LiveDot>ao vivo</LiveDot>
        <WidthDisplay>
          <WidthNumber>{width}</WidthNumber>
          <WidthUnit>px — {bp}</WidthUnit>
        </WidthDisplay>
      </TopRow>

      {/* Barra de progresso */}
      <ProgressWrapper>
        <ProgressLabels>
          <ProgressLabel $active={bp === "mobile"}>
            mobile &lt; {breakpoints.tablet}px
          </ProgressLabel>
          <ProgressLabel $active={bp === "tablet"}>
            tablet
          </ProgressLabel>
          <ProgressLabel $active={bp === "desktop"}>
            desktop ≥ {breakpoints.desktop}px
          </ProgressLabel>
        </ProgressLabels>

        <ProgressTrack>
          <ProgressFill  $pct={progressPct} />
          <ProgressMarker $pct={tabletPct} />
          <ProgressThumb $pct={progressPct} />
        </ProgressTrack>
      </ProgressWrapper>

      {/* Tokens calculados em tempo real */}
      <TokenGrid>
        {TOKENS.map(({ label, clamp }) => (
          <TokenCard key={label}>
            <TokenLabel>{label}</TokenLabel>
            <TokenResolved>{resolveClamp(clamp, width)}</TokenResolved>
          </TokenCard>
        ))}
      </TokenGrid>

    </Wrapper>
  )
}