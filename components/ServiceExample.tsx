import type { CSSProperties, ReactNode } from "react";

// Original static demonstrations ported from the approved portrait preview.
// Illustration content is never client work or a measured result.
const examples: Record<string, { title: string; body: ReactNode }> = {
  "business-website": {
    title: "Your business",
    body: (
      <>
        <div className="example-site-nav">
          <span className="example-brand">Acme &amp; Co</span>
          <div className="example-site-links">
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>
        <strong className="example-display">Good services.<br />Easy to find.</strong>
        <div className="example-service-lines">
          <span>Consultations</span>
          <span>Ongoing support</span>
        </div>
        <span className="example-action">Make an enquiry <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
      </>
    )
  },
  "commerce-booking": {
    title: "Choose a time",
    body: (
      <>
        <div className="example-date">
          <strong>Tuesday, Oct 14</strong>
          <span className="example-tz">GMT+4 · Dubai</span>
        </div>
        <div className="example-slots">
          <span>10:00</span>
          <span className="chosen">14:30</span>
          <span>16:00</span>
        </div>
        <div className="example-confirmation">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div>
            <strong>Booking confirmed</strong>
            <span>30m Consultation · 14:30</span>
          </div>
        </div>
      </>
    )
  },
  "digital-product": {
    title: "Project requests",
    body: (
      <>
        <div className="example-row">
          <span>Website update</span>
          <span className="example-state warn">In progress</span>
        </div>
        <div className="example-row">
          <span>New report</span>
          <span className="example-state success">Review ready</span>
        </div>
        <div className="example-detail">
          <strong>Website update</strong>
          <span>Review the contact page.</span>
        </div>
      </>
    )
  },
  "business-systems": {
    title: "Team requests",
    body: (
      <>
        <div className="example-columns">
          <span>Request</span>
          <span>Owner</span>
        </div>
        <div className="example-row">
          <span>Stock check</span>
          <span className="example-dept">Operations</span>
        </div>
        <div className="example-row">
          <span>Supplier record</span>
          <span className="example-dept">Finance</span>
        </div>
        <div className="example-row">
          <span>Client handover</span>
          <span className="example-dept">Delivery</span>
        </div>
        <div className="example-note">Assigned work, visible responsibilities.</div>
      </>
    )
  },
  "workflow-automation": {
    title: "Enquiry follow-up",
    body: (
      <>
        <ol className="example-sequence">
          <li>
            <span>Capture enquiry</span>
            <small>Website form submission</small>
          </li>
          <li>
            <span>Create CRM record</span>
            <small>Mapped contact details</small>
          </li>
          <li>
            <span>Arrange follow-up</span>
            <small>Task assigned to team</small>
          </li>
        </ol>
      </>
    )
  },
  "system-integration": {
    title: "Connect the records",
    body: (
      <>
        <div className="example-mapping">
          <div>
            <strong>Website</strong>
            <span>Name</span>
            <span>Email</span>
            <span>Company</span>
          </div>
          <div className="mapping-arrow">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <strong>CRM</strong>
            <span>Contact name</span>
            <span>Work email</span>
            <span>Account</span>
          </div>
        </div>
        <div className="example-note">Map fields. Check duplicates. Sync.</div>
      </>
    )
  },
  "knowledge-assistant": {
    title: "Knowledge search",
    body: (
      <>
        <div className="example-question">What happens during client onboarding?</div>
        <div className="example-answer">
          Complete the checklist, verify DNS, and request workspace access.
          <span className="example-source">Verified source: Operations Handbook (p. 14)</span>
        </div>
      </>
    )
  },
  "ai-workflows": {
    title: "Draft awaiting review",
    body: (
      <>
        <div className="example-email-box">
          <div className="example-email-header">
            <span>To: sarah@client.com</span>
            <span className="example-state warn">Pending approval</span>
          </div>
          <strong className="example-email-subject">Follow-up: Scoped milestone plan</strong>
          <p className="example-email-body">“Hi Sarah, based on our discussion, here is the proposed two-week delivery scope...”</p>
        </div>
        <div className="example-email-actions">
          <span className="example-note" style={{ margin: 0 }}>Human-in-the-loop review</span>
          <span className="example-action compact">Approve &amp; Send</span>
        </div>
      </>
    )
  },
  "document-processing": {
    title: "Document extraction",
    body: (
      <>
        <div className="example-document">
          <span>Tax Invoice</span>
          <strong>INV-2026-084</strong>
        </div>
        <dl className="example-fields">
          <div><dt>Supplier</dt><dd>Apex Logistics</dd></div>
          <div><dt>Total Amount</dt><dd>AED 14,250.00</dd></div>
          <div><dt>Tax / VAT</dt><dd>AED 712.50 (5%)</dd></div>
        </dl>
        <div className="example-review">
          <span className="example-state success">99.4% confidence</span>
          <span>Matched to purchase order #412</span>
        </div>
      </>
    )
  },
  "data-foundations": {
    title: "Pre-import validation",
    body: (
      <>
        <div className="example-quality">
          <div><span>Acme Corp (#1042)</span><span className="example-state alert">Duplicate</span></div>
          <div><span>Apex Global (#1043)</span><span className="example-state success">Clean record</span></div>
          <div><span>Zenith Media (#1044)</span><span className="example-state warn">Missing domain</span></div>
        </div>
        <div className="example-note">Automated deduplication and validation check.</div>
      </>
    )
  },
  "reporting": {
    title: "Requests by week",
    body: (
      <>
        <div className="example-chart-header">
          <span>Weekly volume</span>
          <strong>+33% throughput</strong>
        </div>
        <div className="example-chart" aria-label="Example data: week one 12, week two 20, week three 16, week four 24 requests">
          <div><span>12</span><i style={{"--bar-height":"36px"} as CSSProperties} aria-hidden="true"></i><small>W1</small></div>
          <div><span>20</span><i style={{"--bar-height":"60px"} as CSSProperties} aria-hidden="true"></i><small>W2</small></div>
          <div><span>16</span><i style={{"--bar-height":"48px"} as CSSProperties} aria-hidden="true"></i><small>W3</small></div>
          <div><span>24</span><i style={{"--bar-height":"72px"} as CSSProperties} aria-hidden="true"></i><small>W4</small></div>
        </div>
        <div className="example-chart-note">Request count · example data</div>
      </>
    )
  },
  "analysis-models": {
    title: "Cycle time analysis",
    body: (
      <>
        <div className="example-metric-summary">
          <span>Median cycle: <strong>1.8 days</strong></span>
        </div>
        <div className="example-metric-bar">
          <div className="example-metric-item">
            <span>Client setup</span>
            <div className="example-metric-track"><div className="example-metric-fill lead" style={{ width: "84%" }} /></div>
            <strong>4.1d</strong>
          </div>
          <div className="example-metric-item">
            <span>Data migration</span>
            <div className="example-metric-track"><div className="example-metric-fill" style={{ width: "52%" }} /></div>
            <strong>2.4d</strong>
          </div>
          <div className="example-metric-item">
            <span>Config review</span>
            <div className="example-metric-track"><div className="example-metric-fill" style={{ width: "22%" }} /></div>
            <strong>0.9d</strong>
          </div>
        </div>
        <div className="example-note">Bottleneck detection across operational workflows.</div>
      </>
    )
  },
  "system-improvements": {
    title: "Make the next step clear",
    body: (
      <>
        <div className="example-before-after">
          <div><strong>Before</strong><span className="example-form-field">Contact</span><span className="example-muted-action">Send</span></div>
          <div><strong>After</strong><span className="example-form-field">Your email</span><span className="example-form-field">Your message</span><span className="example-action compact">Preview message</span></div>
        </div>
      </>
    )
  },
  "ongoing-support": {
    title: "Prioritised sprint queue",
    body: (
      <>
        <div className="example-support-group">
          <div className="example-row"><span>Search latency fix</span><span className="example-state success">Shipped</span></div>
          <div className="example-row"><span>Automated CSV sync</span><span className="example-state warn">In sprint</span></div>
          <div className="example-row"><span>Mobile drawer polish</span><span className="example-state">Queued</span></div>
        </div>
        <div className="example-release"><strong>Next release</strong><span>Target deployment: Friday 18:00</span></div>
      </>
    )
  },
};

export function ServiceExample({ id }: { id: string }) {
  const example = examples[id];
  if (!example) return null;
  return <figure className="service-example" data-example={id}><div className="example-window"><div className="example-top"><strong>{example.title}</strong><span className="example-mark" aria-hidden="true" /></div><div className="example-content">{example.body}</div></div><figcaption>Illustrative example</figcaption></figure>;
}

export function BriefExample() { return <figure className="brief-art"><div className="brief-example"><blockquote>“We get enquiries in three places and lose track of follow-ups.”</blockquote><div className="brief-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div><dl><div><dt>Goal</dt><dd>Keep follow-ups visible</dd></div><div><dt>Today</dt><dd>Website, messages, spreadsheet</dd></div><div><dt>First step</dt><dd>Map the current enquiry journey</dd></div></dl></div><figcaption>Illustrative example: from a rough request to a starting brief.</figcaption></figure>; }
