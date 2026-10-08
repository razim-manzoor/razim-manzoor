// Original, static demonstration interfaces. Example content is not client work.
const arrow = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const check = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const state = (label, quiet=false) => `<span class="example-state${quiet?' quiet':''}">${label}</span>`;
const row = (name, status) => `<div class="example-row"><span>${name}</span>${state(status)}</div>`;
const shell = (title, body, kind) => `<div class="example-window ${kind}"><div class="example-top"><strong>${title}</strong><span class="example-mark" aria-hidden="true"></span></div><div class="example-content">${body}</div></div>`;

export const exampleOutcomes = {
  'business-website':'Present your services clearly and give visitors a way to enquire.',
  'commerce-booking':'Let customers choose a service, book a time, or buy online.',
  'digital-product':'Give users a working interface for the core task in your product.',
  'business-systems':'Bring requests, records and responsibilities into one workspace.',
  'workflow-automation':'Turn a repeatable process into defined steps, with review where needed.',
  'system-integration':'Move agreed information between tools without repeated re-entry.',
  'knowledge-assistant':'Answer questions from your business information, with sources to check.',
  'ai-workflows':'Prepare useful actions with clear permissions and human approval.',
  'document-processing':'Extract useful fields and flag uncertain results for review.',
  'data-foundations':'Clean, map and validate records before importing or reporting.',
  'reporting':'Bring the measures your team needs into a clear, repeatable report.',
  'analysis-models':'Use the available data to investigate a practical business question.',
  'system-improvements':'Fix a specific problem in the system your team already uses.',
  'ongoing-support':'Keep a prioritised queue of improvements, fixes and maintenance.'
};

const demonstrations = {
  'business-website': shell('Your business', `<div class="example-site-nav"><span>Services</span><span>Contact</span></div><strong class="example-display">Good services.<br>Easy to find.</strong><div class="example-service-lines"><span>Consultations</span><span>Ongoing support</span></div><span class="example-action">Make an enquiry ${arrow}</span>`, 'example-website'),
  'commerce-booking': shell('Choose a time', `<div class="example-date"><strong>Tuesday</strong><span>Consultation</span></div><div class="example-slots"><span>10:00</span><span class="chosen">14:30</span><span>16:00</span></div><div class="example-confirmation">${check}<div><strong>Booking confirmed</strong><span>Tuesday at 14:30</span></div></div>`, 'example-booking'),
  'digital-product': shell('Project requests', `${row('Website update','In progress')}${row('New report','Review ready')}<div class="example-detail"><strong>Website update</strong><span>Review the contact page.</span></div>`, 'example-portal'),
  'business-systems': shell('Team requests', `<div class="example-columns"><span>Request</span><span>Owner</span></div><div class="example-row"><span>Stock check</span><strong>Operations</strong></div><div class="example-row"><span>Supplier record</span><strong>Finance</strong></div><div class="example-note">Assigned work, visible responsibilities.</div>`, 'example-team'),
  'workflow-automation': shell('Enquiry follow-up', `<ol class="example-sequence"><li><span>Capture the enquiry</span><small>Website form</small></li><li><span>Create a CRM record</span><small>Mapped contact details</small></li><li><span>Arrange a follow-up</span><small>Task for the team</small></li></ol>`, 'example-automation'),
  'system-integration': shell('Connect the records', `<div class="example-mapping"><div><strong>Website</strong><span>Name</span><span>Email</span></div><div class="mapping-arrow">${arrow}</div><div><strong>CRM</strong><span>Contact name</span><span>Contact email</span></div></div><div class="example-note">Map fields. Check duplicates. Sync.</div>`, 'example-integration'),
  'knowledge-assistant': shell('Knowledge search', `<div class="example-question">What happens during onboarding?</div><div class="example-answer">Complete the checklist, then request access.<span class="example-source">Source: sample onboarding guide</span></div>`, 'example-search'),
  'ai-workflows': shell('An action to review', `<strong class="example-task">Prepare a follow-up email</strong><div class="example-detail"><span>Use the enquiry details.<br>Keep the draft ready for review.</span></div><div class="example-approval">${state('Awaiting approval')}<span>Review before sending</span></div>`, 'example-agent'),
  'document-processing': shell('Document to record', `<div class="example-document"><span>Sample invoice</span><strong>INV-001</strong></div><dl class="example-fields"><div><dt>Reference</dt><dd>INV-001</dd></div><div><dt>Supplier</dt><dd>Sample supplier</dd></div></dl><div class="example-review">${state('Review required',true)}<span>Check the extracted fields</span></div>`, 'example-document-process'),
  'data-foundations': shell('Prepare an import', `<div class="example-quality"><div><span>Record A</span>${state('Duplicate',true)}</div><div><span>Record B</span>${state('Complete')}</div><div><span>Record C</span>${state('Missing email',true)}</div></div><div class="example-note">Resolve issues before importing.</div>`, 'example-cleaning'),
  'reporting': shell('Requests by week', `<div class="example-chart" aria-label="Example data: week one 12, week two 20, week three 16, week four 24 requests">${[12,20,16,24].map((value,index)=>`<div><span>${value}</span><i style="--bar-height:${value*3}px" aria-hidden="true"></i><small>W${index+1}</small></div>`).join('')}</div><div class="example-chart-note">Request count · example data</div>`, 'example-report'),
  'analysis-models': shell('What takes longest?', `<div class="example-columns"><span>Request type</span><span>Median time</span></div><div class="example-row"><span>New setup</span><strong>4 days</strong></div><div class="example-row"><span>Updates</span><strong>2 days</strong></div><div class="example-note">Example data for an exploratory comparison.</div>`, 'example-analysis'),
  'system-improvements': shell('Make the next step clear', `<div class="example-before-after"><div><strong>Before</strong><span class="example-form-field">Contact</span><span class="example-muted-action">Send</span></div><div><strong>After</strong><span class="example-form-field">Your email</span><span class="example-form-field">Your message</span><span class="example-action compact">Preview message</span></div></div>`, 'example-improvement'),
  'ongoing-support': shell('A prioritised work queue', `<div class="example-support-group"><strong>Next</strong><span>Improve search</span><span>Check the import process</span></div><div class="example-release"><strong>Release note</strong><span>Contact labels clarified.</span></div>`, 'example-support')
};

export function serviceExample(id) {
  if (!demonstrations[id]) throw new Error(`Missing demonstration for ${id}`);
  return `<figure class="service-example" data-example="${id}">${demonstrations[id]}<figcaption>Illustrative example</figcaption></figure>`;
}

export function deliveryScene() {
  return `<figure class="workflow-figure delivery-figure"><div class="workflow-canvas"><div class="workflow-request"><strong>The agreed brief</strong><dl class="delivery-brief"><div><dt>Goal</dt><dd>What needs to change</dd></div><div><dt>Scope</dt><dd>What we'll build</dd></div></dl></div><div class="workflow-connection" aria-hidden="true"><span></span>${arrow}</div><div class="workflow-route"><svg viewBox="0 0 56 56" aria-hidden="true"><rect x="7" y="9" width="42" height="36" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 19h42M17 30h10m-10 7h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><strong>Build & review</strong><span>Try it together.<br>Agree the next changes.</span></div><div class="workflow-connection workflow-return" aria-hidden="true"><span></span>${arrow}</div><div class="workflow-result"><div class="result-top"><i></i><i></i><i></i></div><strong>Ready for handover</strong>${['Code & access','Setup notes','A walkthrough'].map(label=>`<div class="result-row">${check}<span>${label}</span></div>`).join('')}</div></div><figcaption>A clear scope, a reviewable build and a usable handover.</figcaption></figure>`;
}

export function briefExample() {
  return `<div class="brief-example"><blockquote>“We get enquiries in three places and lose track of follow-ups.”</blockquote><div class="brief-arrow" aria-hidden="true">${arrow}</div><dl><div><dt>Goal</dt><dd>Keep follow-ups visible</dd></div><div><dt>Today</dt><dd>Website, messages, spreadsheet</dd></div><div><dt>First step</dt><dd>Map the current enquiry journey</dd></div></dl></div>`;
}
