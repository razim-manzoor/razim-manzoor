// High-density interface fragments; decorative visual motifs matching application tokens.
const website = (
  <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <rect x="42" y="24" width="364" height="232" rx="12" fill="var(--scene-paper)" stroke="var(--scene-line)" strokeWidth="1" />
    <path d="M42 58h364" stroke="var(--scene-line)" strokeWidth="1" />
    <circle cx="62" cy="41" r="3.5" fill="#f87171" />
    <circle cx="74" cy="41" r="3.5" fill="#fbbf24" />
    <circle cx="86" cy="41" r="3.5" fill="#34d399" />
    <rect x="112" y="33" width="168" height="16" rx="4" fill="var(--scene-tint)" />
    <text x="122" y="45" fontSize="9" fill="var(--scene-ink)" fontFamily="Geist, sans-serif" opacity="0.7">app.razim.work/overview</text>
    {/* Left Nav */}
    <rect x="54" y="70" width="60" height="174" rx="6" fill="var(--scene-tint)" />
    <rect x="62" y="82" width="44" height="12" rx="3" fill="var(--scene-green)" />
    <rect x="62" y="102" width="36" height="6" rx="3" fill="var(--scene-line)" />
    <rect x="62" y="116" width="40" height="6" rx="3" fill="var(--scene-line)" />
    <rect x="62" y="130" width="32" height="6" rx="3" fill="var(--scene-line)" />
    {/* Metric Card */}
    <rect x="126" y="70" width="144" height="74" rx="8" fill="var(--scene-tint)" stroke="var(--scene-line)" strokeWidth="0.75" />
    <text x="138" y="88" fontSize="11" fill="var(--scene-ink)" fontFamily="Geist, sans-serif" fontWeight="600">Active Workflows</text>
    <text x="138" y="106" fontSize="16" fill="var(--scene-green)" fontFamily="Geist, sans-serif" fontWeight="700">1,420</text>
    <path d="M138 132 l24-12 22 8 28-20 24 6" stroke="var(--scene-green)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Table Card */}
    <rect x="126" y="154" width="188" height="90" rx="8" fill="var(--scene-tint)" stroke="var(--scene-line)" strokeWidth="0.75" />
    <circle cx="140" cy="174" r="3" fill="#34d399" />
    <text x="150" y="177" fontSize="10" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">Sync: CRM &amp; Pipeline</text>
    <text x="284" y="177" fontSize="9" fill="var(--scene-green)" fontFamily="Geist, sans-serif">100%</text>
    <circle cx="140" cy="198" r="3" fill="#34d399" />
    <text x="150" y="201" fontSize="10" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">WhatsApp Webhook</text>
    <text x="284" y="201" fontSize="9" fill="var(--scene-green)" fontFamily="Geist, sans-serif">Live</text>
    <circle cx="140" cy="222" r="3" fill="#fbbf24" />
    <text x="150" y="225" fontSize="10" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">Nightly ETL Export</text>
    <text x="284" y="225" fontSize="9" fill="#fbbf24" fontFamily="Geist, sans-serif">23:00</text>
    {/* Mobile Companion Frame */}
    <rect x="328" y="78" width="76" height="156" rx="14" fill="var(--scene-ink)" stroke="var(--scene-line)" strokeWidth="1" />
    <rect x="333" y="85" width="66" height="142" rx="9" fill="var(--scene-paper)" />
    <rect x="352" y="89" width="28" height="4" rx="2" fill="var(--scene-ink)" />
    <rect x="341" y="104" width="50" height="32" rx="5" fill="var(--scene-tint)" />
    <text x="345" y="118" fontSize="8" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">Total Value</text>
    <text x="345" y="130" fontSize="10" fill="var(--scene-green)" fontFamily="Geist, sans-serif" fontWeight="700">+34%</text>
    <rect x="341" y="144" width="50" height="4" rx="2" fill="var(--scene-line)" />
    <rect x="341" y="153" width="40" height="4" rx="2" fill="var(--scene-line)" />
    <rect x="341" y="172" width="50" height="16" rx="4" fill="var(--scene-green)" />
    <text x="349" y="183" fontSize="8" fill="var(--scene-mint)" fontFamily="Geist, sans-serif" fontWeight="600">Explore</text>
  </svg>
);

const workflow = (
  <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="wf-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="var(--scene-line)" opacity="0.3" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="480" height="280" fill="url(#wf-grid)" />
    {/* Connection Bezier Paths */}
    <path d="M 134 140 C 158 140, 162 140, 186 140" fill="none" stroke="var(--scene-green)" strokeWidth="2.5" />
    <circle cx="160" cy="140" r="4" fill="var(--scene-green)" />
    <path d="M 302 140 C 324 140, 328 140, 350 140" fill="none" stroke="var(--scene-green)" strokeWidth="2.5" />
    <circle cx="326" cy="140" r="4" fill="var(--scene-green)" />
    {/* Node 1: Trigger */}
    <rect x="28" y="94" width="106" height="92" rx="10" fill="var(--scene-paper)" stroke="var(--scene-line)" strokeWidth="1" />
    <rect x="38" y="106" width="62" height="14" rx="4" fill="var(--scene-tint)" />
    <circle cx="45" cy="113" r="2.5" fill="var(--scene-green)" />
    <text x="52" y="116" fontSize="8" fill="var(--scene-ink)" fontFamily="Geist, sans-serif" fontWeight="600">TRIGGER</text>
    <text x="38" y="136" fontSize="11" fill="var(--scene-ink)" fontFamily="Geist, sans-serif" fontWeight="600">Client enquiry</text>
    <rect x="38" y="148" width="80" height="5" rx="2.5" fill="var(--scene-line)" />
    <rect x="38" y="159" width="60" height="5" rx="2.5" fill="var(--scene-line)" />
    {/* Node 2: Engine */}
    <rect x="186" y="80" width="116" height="120" rx="12" fill="var(--scene-green)" stroke="var(--scene-mint)" strokeWidth="1" />
    <text x="198" y="104" fontSize="11" fill="var(--scene-mint)" fontFamily="Geist, sans-serif" fontWeight="700">Automation Agent</text>
    <rect x="198" y="114" width="92" height="16" rx="4" fill="var(--scene-mint)" />
    <text x="206" y="125" fontSize="8" fill="var(--scene-green)" fontFamily="Geist, sans-serif">1. Validate schema</text>
    <rect x="198" y="136" width="92" height="16" rx="4" fill="var(--scene-mint)" />
    <text x="206" y="147" fontSize="8" fill="var(--scene-green)" fontFamily="Geist, sans-serif">2. Enrich contact</text>
    <rect x="198" y="158" width="92" height="16" rx="4" fill="var(--scene-mint)" />
    <text x="206" y="169" fontSize="8" fill="var(--scene-green)" fontFamily="Geist, sans-serif">3. Draft response</text>
    {/* Node 3: Target */}
    <rect x="350" y="94" width="104" height="92" rx="10" fill="var(--scene-paper)" stroke="var(--scene-line)" strokeWidth="1" />
    <rect x="360" y="106" width="56" height="14" rx="4" fill="var(--scene-tint)" />
    <circle cx="367" cy="113" r="2.5" fill="#34d399" />
    <text x="374" y="116" fontSize="8" fill="var(--scene-ink)" fontFamily="Geist, sans-serif" fontWeight="600">ACTION</text>
    <text x="360" y="136" fontSize="11" fill="var(--scene-ink)" fontFamily="Geist, sans-serif" fontWeight="600">CRM &amp; Alert</text>
    <path d="M360 156 l4 4 8-9" fill="none" stroke="var(--scene-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="378" y="158" fontSize="9" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">HubSpot deal</text>
    <path d="M360 172 l4 4 8-9" fill="none" stroke="var(--scene-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="378" y="174" fontSize="9" fill="var(--scene-ink)" fontFamily="Geist, sans-serif">Slack team alert</text>
    {/* Footer label */}
    <text x="146" y="244" fontSize="12" fill="var(--scene-ink)" fontFamily="Geist, sans-serif" opacity="0.85">Continuous end-to-end integration</text>
  </svg>
);

export function HeroFragments() {
  return (
    <>
      <div className="portrait-fragment fragment-web" aria-hidden="true">
        {website}
      </div>
      <div className="portrait-fragment fragment-flow" aria-hidden="true">
        {workflow}
      </div>
    </>
  );
}
