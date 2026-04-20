/**
 * AlterNet Communications LLC — Globe + dual-orbit + satellite + wifi-node logo mark.
 * Matches the official brand: dark globe, two tilted orbital rings, satellite top-left,
 * wifi signal nodes on globe surface, golden connection arcs, cyan satellite beams.
 */
export default function LogoIcon({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id="an-globe" cx="38%" cy="32%" r="65%">
          <stop offset="0%"   stopColor="#1E3A5F" />
          <stop offset="55%"  stopColor="#0C1E3A" />
          <stop offset="100%" stopColor="#050D1F" />
        </radialGradient>
      </defs>

      {/* ── Globe base ── */}
      <circle cx="50" cy="50" r="35" fill="url(#an-globe)" stroke="#1E3A5F" strokeWidth="1.5" />

      {/* Globe grid — latitude */}
      <ellipse cx="50" cy="50" rx="35" ry="11" fill="none" stroke="#1E3A5F" strokeWidth="0.7" opacity="0.7" />
      <ellipse cx="50" cy="50" rx="35" ry="22" fill="none" stroke="#1E3A5F" strokeWidth="0.5" opacity="0.45" />
      {/* Globe grid — equator & meridians */}
      <line x1="15" y1="50" x2="85" y2="50" stroke="#1E3A5F" strokeWidth="0.6" opacity="0.5" />
      <path d="M50 15 Q63 32 50 85" fill="none" stroke="#1E3A5F" strokeWidth="0.5" opacity="0.4" />
      <path d="M50 15 Q37 32 50 85" fill="none" stroke="#1E3A5F" strokeWidth="0.5" opacity="0.4" />

      {/* ── Orbital ring 1 (primary, tilted ~-22°) ── */}
      <ellipse cx="50" cy="50" rx="47" ry="15" fill="none"
        stroke="#1E3A5F" strokeWidth="2"
        transform="rotate(-22 50 50)" />

      {/* ── Orbital ring 2 (secondary, tilted +18°) ── */}
      <ellipse cx="50" cy="50" rx="43" ry="13" fill="none"
        stroke="#334155" strokeWidth="1.3"
        transform="rotate(18 50 50)" />

      {/* ── Satellite (top-left on ring 1) ── */}
      {/* Body */}
      <rect x="8" y="21" width="10" height="6" rx="1.2"
        fill="#0A1628" stroke="#38BDF8" strokeWidth="1.1" />
      {/* Left solar panel */}
      <rect x="2" y="22.5" width="5.5" height="3" rx="0.6"
        fill="#0A1628" stroke="#38BDF8" strokeWidth="0.9" />
      {/* Right solar panel */}
      <rect x="18.5" y="22.5" width="5.5" height="3" rx="0.6"
        fill="#0A1628" stroke="#38BDF8" strokeWidth="0.9" />
      {/* Antenna mast */}
      <line x1="13" y1="21" x2="13" y2="18.5" stroke="#38BDF8" strokeWidth="0.9" />
      {/* Antenna dish */}
      <circle cx="13" cy="18" r="1.3" fill="#38BDF8" />

      {/* ── Wifi / signal nodes on globe ── */}
      {/* Node A – upper left */}
      <circle cx="36" cy="37" r="2" fill="#38BDF8" />
      <path d="M29.5 33 Q36 28 42.5 33" fill="none" stroke="#38BDF8" strokeWidth="0.9" opacity="0.7" />
      <path d="M32.5 35 Q36 31.5 39.5 35" fill="none" stroke="#38BDF8" strokeWidth="0.9" />

      {/* Node B – upper right */}
      <circle cx="61" cy="33" r="2" fill="#38BDF8" />
      <path d="M54.5 29 Q61 24 67.5 29" fill="none" stroke="#38BDF8" strokeWidth="0.9" opacity="0.7" />
      <path d="M57.5 31 Q61 27.5 64.5 31" fill="none" stroke="#38BDF8" strokeWidth="0.9" />

      {/* Node C – centre */}
      <circle cx="50" cy="51" r="2" fill="#38BDF8" />
      <path d="M43.5 47 Q50 42 56.5 47" fill="none" stroke="#38BDF8" strokeWidth="0.9" opacity="0.7" />
      <path d="M46.5 49 Q50 45.5 53.5 49" fill="none" stroke="#38BDF8" strokeWidth="0.9" />

      {/* Node D – lower right */}
      <circle cx="63" cy="62" r="2" fill="#38BDF8" />

      {/* Node E – lower left */}
      <circle cx="38" cy="64" r="2" fill="#38BDF8" />

      {/* ── Connection arcs (golden) ── */}
      <path d="M36 37 Q48 29 61 33" fill="none" stroke="#F59E0B" strokeWidth="1.1" opacity="0.75" />
      <path d="M36 37 Q43 44 50 51" fill="none" stroke="#F59E0B" strokeWidth="1.1" opacity="0.75" />
      <path d="M61 33 Q55.5 42 50 51" fill="none" stroke="#F59E0B" strokeWidth="1.1" opacity="0.75" />
      <path d="M50 51 Q56.5 56.5 63 62" fill="none" stroke="#F59E0B" strokeWidth="1.1" opacity="0.7" />
      <path d="M50 51 Q44 57.5 38 64" fill="none" stroke="#F59E0B" strokeWidth="1.1" opacity="0.7" />

      {/* ── Satellite beams (cyan dashed) ── */}
      <line x1="18" y1="24" x2="36" y2="37"
        stroke="#38BDF8" strokeWidth="0.7" opacity="0.55" strokeDasharray="2.5 1.5" />
      <line x1="18" y1="24" x2="50" y2="51"
        stroke="#38BDF8" strokeWidth="0.6" opacity="0.4" strokeDasharray="2.5 1.5" />
    </svg>
  )
}
