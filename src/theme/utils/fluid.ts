import { breakpoints } from '../tokens/breakpoints'
export function fluid(minPx: number, maxPx: number): string {
  const minBp = breakpoints.mobile || 320
  const maxBp = breakpoints.desktop || 1440

  const slope     = (maxPx - minPx) / (maxBp - minBp)
  const intercept = minPx - slope * minBp

  const minRem      = (minPx / 16).toFixed(4)
  const maxRem      = (maxPx / 16).toFixed(4)
  const interceptRem = (intercept / 16).toFixed(4)
  const slopeVw     = (slope * 100).toFixed(4)

  return `clamp(${minRem}rem, ${interceptRem}rem + ${slopeVw}vw, ${maxRem}rem)`
}