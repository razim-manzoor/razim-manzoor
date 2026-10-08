// Original geometric interface fragments; decorative, not work evidence.
const website = (<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <rect x="48" y="28" width="352" height="218" rx="10" fill="var(--scene-paper)"/><path d="M48 62h352" stroke="var(--scene-line)"/>
    <circle cx="66" cy="45" r="3" fill="var(--scene-line)"/><circle cx="78" cy="45" r="3" fill="var(--scene-line)"/><circle cx="90" cy="45" r="3" fill="var(--scene-line)"/>
    <rect x="62" y="76" width="64" height="154" rx="5" fill="var(--scene-green)"/><rect x="74" y="90" width="35" height="5" rx="2.5" fill="var(--scene-mint)"/><rect x="74" y="115" width="24" height="5" rx="2.5" fill="var(--scene-mint)"/><rect x="74" y="132" width="33" height="5" rx="2.5" fill="var(--scene-mint)"/>
    <text x="143" y="99" fontSize="15" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">Your business</text><rect x="143" y="110" width="133" height="5" rx="2.5" fill="var(--scene-line)"/>
    <rect x="143" y="134" width="97" height="75" rx="5" fill="var(--scene-tint)"/><rect x="249" y="134" width="128" height="75" rx="5" fill="var(--scene-tint)"/>
    <rect x="158" y="153" width="61" height="5" rx="2.5" fill="var(--scene-line)"/><rect x="158" y="170" width="44" height="5" rx="2.5" fill="var(--scene-line)"/><rect x="158" y="188" width="56" height="5" rx="2.5" fill="var(--scene-line)"/>
    <path d="M261 189l24-23 21 10 28-28 30 12" stroke="var(--scene-green)" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <rect x="337" y="100" width="76" height="143" rx="12" fill="var(--scene-ink)"/><rect x="344" y="109" width="62" height="123" rx="7" fill="var(--scene-paper)"/><rect x="361" y="113" width="27" height="4" rx="2" fill="var(--scene-line)"/>
    <rect x="352" y="133" width="46" height="37" rx="4" fill="var(--scene-green)"/><rect x="354" y="180" width="36" height="5" rx="2.5" fill="var(--scene-line)"/><rect x="354" y="192" width="27" height="5" rx="2.5" fill="var(--scene-line)"/><rect x="354" y="210" width="35" height="9" rx="3" fill="var(--scene-green)"/>
  </svg>);
const workflow = (<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path className="flow-line" d="M117 141h64m116 0h65" fill="none" stroke="var(--scene-green)" strokeWidth="3"/>
    <rect x="27" y="96" width="101" height="89" rx="10" fill="var(--scene-paper)"/><rect x="186" y="82" width="109" height="117" rx="10" fill="var(--scene-green)"/><rect x="353" y="96" width="102" height="89" rx="10" fill="var(--scene-paper)"/>
    <text x="45" y="122" fontSize="12" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">New request</text><rect x="45" y="138" width="60" height="5" rx="2.5" fill="var(--scene-line)"/><rect x="45" y="151" width="45" height="5" rx="2.5" fill="var(--scene-line)"/><path d="M44 168l5 5 10-12" fill="none" stroke="var(--scene-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M218 111h45m-45 17h45m-31 17h17" stroke="var(--scene-mint)" strokeWidth="3" strokeLinecap="round"/>
    <text x="206" y="176" fontSize="11" fill="var(--scene-mint)" fontFamily="Geist, sans-serif">Route the work</text><text x="368" y="122" fontSize="12" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">Assigned</text><rect x="368" y="139" width="64" height="5" rx="2.5" fill="var(--scene-line)"/><path d="M369 158l5 5 10-12" fill="none" stroke="var(--scene-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="156" cy="141" r="5" fill="var(--scene-green)"/><circle cx="327" cy="141" r="5" fill="var(--scene-green)"/>
    <text x="130" y="237" fontSize="13" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">A clear path between your tools</text>
  </svg>);
export function HeroFragments() { return <><div className="portrait-fragment fragment-web" aria-hidden="true">{website}</div><div className="portrait-fragment fragment-flow" aria-hidden="true">{workflow}</div></>; }
