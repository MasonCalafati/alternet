/**
 * AlterNet Communications — Themed Icon Set
 * All icons: 24×24 viewBox, stroke-based, currentColor, strokeWidth 1.5
 * Design language: globe / satellite / orbital / network / connectivity
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────

/** Globe with three connected network nodes */
export function GlobeNetworkIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <circle cx="12" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 7.5 C13.5 10 15.5 12 16.5 14" strokeWidth="1" />
      <path d="M12 7.5 C10.5 10 8.5 12 7.5 14" strokeWidth="1" />
      <path d="M7.5 14 C9.5 14.5 11 14.5 16.5 14" strokeWidth="1" />
    </svg>
  )
}

/** Globe with rising signal bars — product & revenue */
export function RevenueSignalIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <ellipse cx="12" cy="12" rx="9" ry="3" />
      <line x1="8" y1="16" x2="8" y2="10" strokeWidth="2" />
      <line x1="12" y1="16" x2="12" y2="8" strokeWidth="2" />
      <line x1="16" y1="16" x2="16" y2="12" strokeWidth="2" />
    </svg>
  )
}

/** Satellite dish with broadcast arcs — go-to-market */
export function BroadcastSatelliteIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      {/* Dish arm */}
      <path d="M5 19 L11 13" />
      {/* Dish bowl */}
      <path d="M5 19 C4 16 5 12 8 10 S14 9 16 12" />
      {/* Feed horn */}
      <circle cx="11" cy="13" r="1.5" fill="currentColor" stroke="none" />
      {/* Signal arcs */}
      <path d="M13.5 10.5 Q16 8 18.5 10.5" />
      <path d="M15 8.5 Q18.5 5.5 22 8.5" />
      {/* Mount */}
      <line x1="5" y1="19" x2="5" y2="22" />
      <line x1="3" y1="22" x2="7" y2="22" />
    </svg>
  )
}

/** Two orbiting nodes linking — M&A advisory */
export function MergeOrbitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="8" cy="12" r="5" />
      <circle cx="16" cy="12" r="5" />
      {/* Orbital rings */}
      <ellipse cx="8" cy="12" rx="5" ry="2" transform="rotate(-30 8 12)" />
      <ellipse cx="16" cy="12" rx="5" ry="2" transform="rotate(30 16 12)" />
      {/* Center node */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Satellite orbiting a chip node — vendor & technology */
export function TechOrbitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      {/* Circuit node center */}
      <rect x="8" y="8" width="8" height="8" rx="2" />
      <circle cx="12" cy="12" r="2" />
      {/* Orbit ring */}
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-25 12 12)" />
      {/* Satellite on orbit */}
      <circle cx="3.5" cy="10.5" r="1.3" fill="currentColor" stroke="none" />
      <line x1="2" y1="10.5" x2="1" y2="10.5" />
      <line x1="5" y1="10.5" x2="6" y2="10.5" />
    </svg>
  )
}

/** Globe with layered product bars — OEM alignment */
export function OEMGlobeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <line x1="3" y1="12" x2="21" y2="12" />
      {/* Overlaid horizontal product layers */}
      <path d="M8 9 h8" />
      <path d="M7 12 h10" />
      <path d="M8 15 h8" />
    </svg>
  )
}

// ─────────────────────────────────────────────
// MARKETS / WHO WE SERVE
// ─────────────────────────────────────────────

/** Satellite dish — telecom/service providers */
export function SatelliteDishIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <path d="M4 20 L10 14" />
      <path d="M4 20 C3 17 4 13 7 11 S13 10 15 13" />
      <circle cx="10" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <path d="M13 11 Q15.5 9 18 11" />
      <path d="M14.5 9 Q18 6.5 21.5 9" />
      <line x1="4" y1="20" x2="4" y2="23" />
      <line x1="2" y1="23" x2="6" y2="23" />
    </svg>
  )
}

/** Building with orbital wifi arcs — enterprise */
export function EnterpriseSignalIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      {/* Building */}
      <path d="M3 21 V9 L10 4 L17 9 V21" />
      <line x1="3" y1="21" x2="21" y2="21" />
      <rect x="7" y="14" width="3" height="7" />
      <rect x="12" y="14" width="2" height="4" />
      {/* Signal arcs top-right */}
      <path d="M18 7 Q19.5 5.5 21 7" />
      <path d="M18 5 Q20.5 3 23 5" />
      <circle cx="18" cy="8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Globe with upward arrow — PE/investors */
export function InvestorGlobeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="11" cy="13" r="8" />
      <ellipse cx="11" cy="13" rx="8" ry="3" />
      <line x1="3" y1="13" x2="19" y2="13" />
      {/* Arrow pointing up-right */}
      <path d="M17 3 L21 3 L21 7" />
      <line x1="21" y1="3" x2="15" y2="9" />
    </svg>
  )
}

/** Server rack with orbital ring — data center */
export function DataCenterOrbitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      {/* Server stack */}
      <rect x="2" y="6" width="14" height="4" rx="1" />
      <rect x="2" y="11" width="14" height="4" rx="1" />
      <rect x="2" y="16" width="14" height="4" rx="1" />
      <circle cx="13" cy="8" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13" cy="13" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13" cy="18" r="0.8" fill="currentColor" stroke="none" />
      {/* Orbit ring top-right */}
      <ellipse cx="19" cy="9" rx="4" ry="5" transform="rotate(20 19 9)" />
      <circle cx="21" cy="5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Chip with orbital satellite — network manufacturers */
export function ChipOrbitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <line x1="9" y1="4" x2="9" y2="7" />
      <line x1="12" y1="4" x2="12" y2="7" />
      <line x1="15" y1="4" x2="15" y2="7" />
      <line x1="9" y1="17" x2="9" y2="20" />
      <line x1="12" y1="17" x2="12" y2="20" />
      <line x1="15" y1="17" x2="15" y2="20" />
      <line x1="4" y1="9" x2="7" y2="9" />
      <line x1="4" y1="12" x2="7" y2="12" />
      <line x1="4" y1="15" x2="7" y2="15" />
      <line x1="17" y1="9" x2="20" y2="9" />
      <line x1="17" y1="12" x2="20" y2="12" />
      <line x1="17" y1="15" x2="20" y2="15" />
    </svg>
  )
}

// ─────────────────────────────────────────────
// WHY US
// ─────────────────────────────────────────────

/** Globe-shaped medal / badge — executive depth */
export function ExecutiveOrbitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="10" r="7" />
      <ellipse cx="12" cy="10" rx="7" ry="2.5" transform="rotate(-20 12 10)" />
      {/* Medal ribbon */}
      <path d="M9 17 L7 22 L12 20 L17 22 L15 17" />
      {/* Star center */}
      <path d="M12 7 L12.8 9.4 L15.4 9.4 L13.3 11 L14.1 13.4 L12 11.8 L9.9 13.4 L10.7 11 L8.6 9.4 L11.2 9.4 Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Orbital target crosshair — actionable strategy */
export function TargetOrbitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="3" y1="12" x2="7" y2="12" />
      <line x1="17" y1="12" x2="21" y2="12" />
      {/* Orbit ring */}
      <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-30 12 12)" />
    </svg>
  )
}

/** Two orbital rings stacked — combined expertise */
export function DualOrbitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      {/* Nodes on rings */}
      <circle cx="22" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="2" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="2" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="22" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Globe with gear overlay — grounded in operations */
export function OperationsGlobeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <line x1="3" y1="12" x2="21" y2="12" />
      {/* Gear teeth overlay, top-right quadrant */}
      <path d="M14 7 L15 5.5 L16.5 6.5 L16 8 Q17 8.5 17.5 9.5 L19 9.5 L19 11 L17.5 11.5 Q17 12.5 16 13 L16.5 14.5 L15 15.5 L14 14 Q13 14.2 12 14 L11.5 15.5 L10 14.5 L10.5 13 Q9.5 12.5 9 11.5 L7.5 11.5 L7.5 10 L9 9.5 Q9.5 8.5 10.5 8 L10 6.5 L11.5 5.5 L12.5 7 Q13 6.8 14 7 Z"
        strokeWidth="1" />
      <circle cx="13.5" cy="10.5" r="1.5" />
    </svg>
  )
}

// ─────────────────────────────────────────────
// OEM ADVISORY
// ─────────────────────────────────────────────

/** Globe with product target — product-market fit */
export function ProductFitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Stacked signal tiers with tag — pricing */
export function PricingTierIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      {/* Signal bars */}
      <rect x="2" y="14" width="4" height="7" rx="0.5" />
      <rect x="8" y="10" width="4" height="11" rx="0.5" />
      <rect x="14" y="6" width="4" height="15" rx="0.5" />
      {/* Price tag */}
      <path d="M19 2 L22 2 L22 5 L18 9 L15 6 Z" />
      <circle cx="20.5" cy="3.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Branching network from globe node — channel strategy */
export function ChannelNetworkIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      {/* Root node (globe) */}
      <circle cx="6" cy="12" r="4" />
      <ellipse cx="6" cy="12" rx="4" ry="1.5" />
      {/* Branches */}
      <line x1="10" y1="12" x2="14" y2="7" />
      <line x1="10" y1="12" x2="14" y2="12" />
      <line x1="10" y1="12" x2="14" y2="17" />
      {/* Leaf nodes */}
      <circle cx="16.5" cy="7" r="2.5" />
      <circle cx="16.5" cy="12" r="2.5" />
      <circle cx="16.5" cy="17" r="2.5" />
    </svg>
  )
}

/** Orbital loop with dollar node — revenue modeling */
export function RevenueOrbitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
      {/* Dollar sign on globe */}
      <line x1="12" y1="8" x2="12" y2="16" />
      <path d="M15 10 Q15 8 12 8 Q9 8 9 10.5 Q9 13 12 13 Q15 13 15 15.5 Q15 17 12 17 Q9 17 9 15" />
    </svg>
  )
}

/** Two person-circles with signal arc — sales enablement */
export function TeamSignalIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      {/* Person 1 */}
      <circle cx="7" cy="8" r="3" />
      <path d="M1 21 C1 17 4 14 7 14 S13 17 13 21" />
      {/* Person 2 */}
      <circle cx="17" cy="8" r="3" />
      <path d="M13 21 C13 17 14.5 14 17 14 S23 17 23 21" />
      {/* Signal arc linking both */}
      <path d="M10 5 Q12 2 14 5" />
    </svg>
  )
}

// ─────────────────────────────────────────────
// HERO BADGES
// ─────────────────────────────────────────────

/** Shield with globe — 25+ years */
export function ShieldGlobeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <path d="M12 2 L20 6 V12 C20 16.5 16.5 20 12 22 C7.5 20 4 16.5 4 12 V6 Z" />
      {/* Mini globe inside shield */}
      <circle cx="12" cy="13" r="4.5" />
      <ellipse cx="12" cy="13" rx="4.5" ry="1.8" />
      <line x1="7.5" y1="13" x2="16.5" y2="13" />
    </svg>
  )
}

/** Globe with upward trend arrow — financial impact */
export function GlobeTrendIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="10" cy="13" r="8" />
      <ellipse cx="10" cy="13" rx="8" ry="3" />
      <line x1="2" y1="13" x2="18" y2="13" />
      <path d="M16 6 L20 2 L20 6 L16 6" fill="currentColor" stroke="none" />
      <path d="M13 9 L20 2" />
    </svg>
  )
}

/** Globe with orbital ring — ecosystem */
export function EcosystemGlobeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} className={className}>
      <circle cx="12" cy="12" r="8" />
      <ellipse cx="12" cy="12" rx="8" ry="3" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <ellipse cx="12" cy="12" rx="11" ry="4.5" transform="rotate(-25 12 12)" />
      {/* Satellite dot */}
      <circle cx="3" cy="9.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}
