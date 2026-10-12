export interface ContactPayload {
  name?: string;
  contact?: string;
  notes?: string;
  message?: string;
  needs?: string[];
  services?: string[];
  timeline?: string;
  tools?: string;
  deadline?: string;
  source?: string;
  hp?: string;
}

export interface SanitizedContactData {
  isSpam: boolean;
  name: string;
  contact: string;
  notes: string;
  source: string;
  timeline: string;
  tools: string;
  deadline: string;
  needs: string[];
  services: string[];
  isEmail: boolean;
  replyTo?: string;
}

export function isEmailAddress(str: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());
}

export function sanitizeContactPayload(body: ContactPayload): { error?: string; data?: SanitizedContactData } {
  // Honeypot check
  if (body.hp && body.hp.trim().length > 0) {
    return {
      data: {
        isSpam: true,
        name: "",
        contact: "",
        notes: "",
        source: "",
        timeline: "",
        tools: "",
        deadline: "",
        needs: [],
        services: [],
        isEmail: false,
      },
    };
  }

  const name = (body.name || "").trim().slice(0, 160);
  const contact = (body.contact || "").trim().slice(0, 160);
  const notes = (body.notes || body.message || "").trim().slice(0, 3000);
  const source = (body.source || "Project Planner").trim().slice(0, 100);
  const timeline = (body.timeline || "").trim().slice(0, 200);
  const tools = (body.tools || "").trim().slice(0, 300);
  const deadline = (body.deadline || "").trim().slice(0, 160);
  const needs = Array.isArray(body.needs) ? body.needs.map(n => String(n).slice(0, 100)).filter(Boolean) : [];
  const services = Array.isArray(body.services) ? body.services.map(s => String(s).slice(0, 150)).filter(Boolean) : [];

  if (!contact && !notes && services.length === 0) {
    return { error: "Please provide a contact method or project details before submitting." };
  }

  const isEmail = isEmailAddress(contact);
  const replyTo = isEmail ? contact : undefined;

  return {
    data: {
      isSpam: false,
      name,
      contact,
      notes,
      source,
      timeline,
      tools,
      deadline,
      needs,
      services,
      isEmail,
      replyTo,
    },
  };
}

export function formatPlainTextEmail(data: SanitizedContactData): string {
  const lines = [
    `New Inquiry from razim.work (${data.source})`,
    "========================================",
    data.name ? `From: ${data.name}` : null,
    data.contact ? `Contact: ${data.contact}` : null,
    data.needs.length ? `\nGoals / Needs:\n${data.needs.map(n => `- ${n}`).join("\n")}` : null,
    data.services.length ? `\nServices of Interest:\n${data.services.map(s => `- ${s}`).join("\n")}` : null,
    data.timeline ? `Starting Point: ${data.timeline}` : null,
    data.tools ? `Current Tools / Stack: ${data.tools}` : null,
    data.deadline ? `Target Date: ${data.deadline}` : null,
    data.notes ? `\nProject Details / Notes:\n${data.notes}` : null,
    "\n----------------------------------------",
    `Sent: ${new Date().toISOString()}`,
  ].filter(Boolean);

  return lines.join("\n");
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function formatHtmlEmail(data: SanitizedContactData): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; color: #1e293b; background-color: #f8fafc; border-radius: 12px;">
      <div style="background-color: #0d2818; padding: 20px 24px; border-radius: 8px 8px 0 0; color: #ffffff;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em;">New Inquiry · razim.work</h1>
        <p style="margin: 4px 0 0; font-size: 13px; color: #86efac;">Source: ${escapeHtml(data.source)}</p>
      </div>
      
      <div style="background-color: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Name / Company:</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 15px; color: #0f172a;">${escapeHtml(data.name || "Not specified")}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Contact Info:</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 15px; color: #0f172a;">
              ${data.isEmail ? `<a href="mailto:${escapeHtml(data.contact)}" style="color: #059669; text-decoration: underline;">${escapeHtml(data.contact)}</a>` : escapeHtml(data.contact || "Not provided")}
            </td>
          </tr>
          ${data.timeline ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Starting Point:</td><td style="padding: 8px 0; font-size: 14px; color: #334155;">${escapeHtml(data.timeline)}</td></tr>` : ""}
          ${data.deadline ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Target Timing:</td><td style="padding: 8px 0; font-size: 14px; color: #334155;">${escapeHtml(data.deadline)}</td></tr>` : ""}
          ${data.tools ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Current Tools:</td><td style="padding: 8px 0; font-size: 14px; color: #334155;">${escapeHtml(data.tools)}</td></tr>` : ""}
        </table>

        ${data.needs.length ? `
          <div style="margin-bottom: 16px; padding: 12px 16px; background-color: #f1f5f9; border-radius: 6px;">
            <h4 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Goals / Needs</h4>
            <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #1e293b;">
              ${data.needs.map(n => `<li style="margin-bottom: 4px;">${escapeHtml(n)}</li>`).join("")}
            </ul>
          </div>
        ` : ""}

        ${data.services.length ? `
          <div style="margin-bottom: 16px; padding: 12px 16px; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px;">
            <h4 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #047857;">Services to Discuss (${data.services.length})</h4>
            <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #065f46;">
              ${data.services.map(s => `<li style="margin-bottom: 4px;">${escapeHtml(s)}</li>`).join("")}
            </ul>
          </div>
        ` : ""}

        ${data.notes ? `
          <div style="margin-top: 20px;">
            <h4 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Project Details & Notes</h4>
            <div style="padding: 16px; background-color: #f8fafc; border-left: 3px solid #059669; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${escapeHtml(data.notes)}</div>
          </div>
        ` : ""}

        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between;">
          <span>Sent via razim.work</span>
          <span>UAE</span>
        </div>
      </div>
    </div>
  `;
}
