// Original flat interface diagrams for this local visual study.
const frame = content => `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${content}</svg>`;
const line = (x,y,w,c='var(--scene-line)') => `<rect x="${x}" y="${y}" width="${w}" height="5" rx="2.5" fill="${c}"/>`;
const text = (x,y,value,size=12,color='var(--scene-ink)') => `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-family="Geist, sans-serif">${value}</text>`;
const box = (x,y,w,h,color='var(--scene-paper)',r=10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${color}"/>`;
const tick = (x,y) => `<path d="M${x} ${y+5}l5 5 10-12" fill="none" stroke="var(--scene-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;

export function scene(kind='launch',variant=0) {
  if(kind==='launch') return frame(`
    ${box(48,28,352,218)}<path d="M48 62h352" stroke="var(--scene-line)"/>
    <circle cx="66" cy="45" r="3" fill="var(--scene-line)"/><circle cx="78" cy="45" r="3" fill="var(--scene-line)"/><circle cx="90" cy="45" r="3" fill="var(--scene-line)"/>
    ${box(62,76,64,154,'var(--scene-green)',5)}${line(74,90,35,'var(--scene-mint)')}${line(74,115,24,'var(--scene-mint)')}${line(74,132,33,'var(--scene-mint)')}
    ${text(143,99,variant===1?'Bookings':variant===2?'Your workspace':'Your business',15)}${line(143,110,133)}
    ${box(143,134,97,75,'var(--scene-tint)',5)}${box(249,134,128,75,'var(--scene-tint)',5)}
    ${variant===1?`${box(158,150,63,18,'var(--scene-green)',4)}${text(166,163,'Available',9,'var(--scene-mint)')}${line(158,182,65)}`:`${line(158,153,61)}${line(158,170,44)}${line(158,188,56)}`}
    <path d="M261 189l24-23 21 10 28-28 30 12" stroke="var(--scene-green)" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${box(337,100,76,143,'var(--scene-ink)',12)}${box(344,109,62,123,'var(--scene-paper)',7)}${box(361,113,27,4,'var(--scene-line)',2)}
    ${box(352,133,46,37,'var(--scene-green)',4)}${line(354,180,36)}${line(354,192,27)}${box(354,210,35,9,'var(--scene-green)',3)}
  `);
  if(kind==='operations') return frame(`
    <path class="flow-line" d="M117 141h64m116 0h65" fill="none" stroke="var(--scene-green)" stroke-width="3"/>
    ${box(27,96,101,89)}${box(186,82,109,117,'var(--scene-green)')}${box(353,96,102,89)}
    ${text(45,122,'New request',12)}${line(45,138,60)}${line(45,151,45)}${tick(44,163)}
    <path d="M218 111h45m-45 17h45m-31 17h17" stroke="var(--scene-mint)" stroke-width="3" stroke-linecap="round"/>
    ${text(206,176,'Route the work',11,'var(--scene-mint)')}${text(368,122,'Assigned',12)}${line(368,139,64)}${tick(369,153)}
    <circle cx="156" cy="141" r="5" fill="var(--scene-green)"/><circle cx="327" cy="141" r="5" fill="var(--scene-green)"/>
    ${text(130,237,'A clear path between your tools',13)}
  `);
  if(kind==='ai') return frame(`
    ${box(52,38,155,203)}${text(72,69,'Your knowledge',14)}${line(72,88,112)}${line(72,105,97)}${line(72,122,108)}
    ${box(69,142,120,51,'var(--scene-tint)',4)}${text(79,164,'Source passage',11)}${line(79,177,83)}${line(72,214,95)}
    <path d="M205 165h27v-42h29" stroke="var(--scene-green)" stroke-width="2" fill="none"/>
    ${box(257,70,174,59,'var(--scene-green)')}${text(272,96,'Ask a question',14,'var(--scene-mint)')}${line(272,111,95,'var(--scene-mint)')}
    ${box(236,145,189,94)}${text(253,170,'A grounded answer',13)}${line(253,185,132)}${line(253,199,113)}${text(253,221,'With a source to check',10,'var(--scene-green)')}
  `);
  if(kind==='data') return frame(`
    ${box(45,29,390,222)}${text(66,61,'A clearer view of the work',15)}${line(67,74,196)}
    <path d="M71 106v109h186" stroke="var(--scene-line)" fill="none"/>
    ${[44,74,58,95].map((h,i)=>box(87+i*40,214-h,21,h,i===3?'var(--scene-green)':'var(--scene-mid)',3)).join('')}
    ${box(284,96,131,41,'var(--scene-tint)',5)}${text(296,115,'This week',10)}${line(296,124,96)}
    ${line(285,158,115)}${line(285,176,96)}${line(285,194,113)}${tick(284,214)}${text(307,228,'Ready to review',11)}
  `);
  return frame(`
    ${box(31,47,180,173)}${box(266,47,183,173)}${text(49,75,'Current interface',13)}${text(284,75,'A clearer next version',12)}
    ${line(49,91,141)}${line(49,113,117)}${line(49,132,137)}${line(49,152,98)}${box(50,177,139,25,'var(--scene-tint)',4)}
    <path d="M225 133h25m-6-6 7 6-7 6" stroke="var(--scene-green)" stroke-width="2" fill="none"/>
    ${box(284,94,147,47,'var(--scene-tint)',5)}${tick(295,112)}${line(319,112,91)}${line(295,159,117)}${box(284,177,147,25,'var(--scene-green)',4)}${text(326,194,'Continue',11,'var(--scene-mint)')}
  `);
}

export function flowScene() {
  return `<figure class="workflow-figure"><div class="workflow-canvas"><div class="workflow-request"><strong>A new enquiry</strong><div class="request-lines"><i></i><i></i><i></i></div><span class="request-note">A person needs help.</span></div><div class="workflow-connection" aria-hidden="true"><span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="workflow-route"><svg viewBox="0 0 56 56" aria-hidden="true"><path d="M16 10v12h24V10M28 22v24M16 10h0M40 10h0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="10" r="5" fill="currentColor"/><circle cx="40" cy="10" r="5" fill="currentColor"/><circle cx="28" cy="46" r="5" fill="currentColor"/></svg><strong>Connect the steps</strong><span>The right tools.<br>A defined process.</span></div><div class="workflow-connection workflow-return" aria-hidden="true"><span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="workflow-result"><div class="result-top"><i></i><i></i><i></i></div><strong>Ready to use</strong><div class="result-row"><svg class="result-tick" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Request organised</span></div><div class="result-row"><svg class="result-tick" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Team notified</span></div><div class="result-row"><svg class="result-tick" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Next step clear</span></div></div></div><figcaption>Example workflow showing enquiry, routing and follow-up.</figcaption></figure>`;
}
