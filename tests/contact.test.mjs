import assert from "node:assert/strict";
import test from "node:test";
import { createRequire } from "node:module";

const {
  isEmailAddress,
  sanitizeContactPayload,
  formatPlainTextEmail,
  formatHtmlEmail,
  escapeHtml,
} = createRequire(import.meta.url)("../lib/contact-payload.ts");

test("detects valid email addresses accurately", () => {
  assert.equal(isEmailAddress("client@example.com"), true);
  assert.equal(isEmailAddress("  alex.smith+work@company.ae  "), true);
  assert.equal(isEmailAddress("+971501234567"), false);
  assert.equal(isEmailAddress("not-an-email"), false);
  assert.equal(isEmailAddress(""), false);
});

test("traps spam bots with honeypot field without sending", () => {
  const result = sanitizeContactPayload({
    name: "Spammer",
    contact: "spam@example.com",
    notes: "Buy crypto",
    hp: "bot-filled-value",
  });

  assert.equal(result.data.isSpam, true);
});

test("rejects submissions with no contact and no notes and no services", () => {
  const result = sanitizeContactPayload({
    name: "Anonymous",
    contact: "   ",
    notes: "",
  });

  assert.ok(result.error);
  assert.match(result.error, /Please provide a contact method or project details/);
});

test("accepts valid contact payload and sets replyTo for email contacts", () => {
  const result = sanitizeContactPayload({
    name: "Fatima Al Mansoori",
    contact: "fatima@techdubai.ae",
    notes: "We need an executive BI dashboard and n8n automations.",
    needs: ["Automate operations"],
    services: ["Operations & Workflow Automation"],
    timeline: "A new build",
    tools: "PostgreSQL, Slack",
    deadline: "End of month",
  });

  assert.equal(result.error, undefined);
  assert.ok(result.data);
  assert.equal(result.data.isSpam, false);
  assert.equal(result.data.name, "Fatima Al Mansoori");
  assert.equal(result.data.contact, "fatima@techdubai.ae");
  assert.equal(result.data.isEmail, true);
  assert.equal(result.data.replyTo, "fatima@techdubai.ae");
  assert.deepEqual(result.data.needs, ["Automate operations"]);
  assert.deepEqual(result.data.services, ["Operations & Workflow Automation"]);
});

test("leaves replyTo undefined for phone-only contacts", () => {
  const result = sanitizeContactPayload({
    name: "Omar",
    contact: "+971 50 123 4567",
    notes: "Call me about an AI agent build.",
  });

  assert.ok(result.data);
  assert.equal(result.data.isEmail, false);
  assert.equal(result.data.replyTo, undefined);
});

test("escapes HTML special characters properly to prevent markup injection", () => {
  assert.equal(
    escapeHtml('<script>alert("hack")</script> & \'test\''),
    "&lt;script&gt;alert(&quot;hack&quot;)&lt;/script&gt; &amp; &#039;test&#039;"
  );
});

test("formats plain text and HTML emails containing structured project brief", () => {
  const { data } = sanitizeContactPayload({
    name: "Sara",
    contact: "sara@example.com",
    notes: "Custom RAG knowledge assistant",
    services: ["Custom Knowledge & AI Assistant (RAG)"],
    timeline: "Help me decide",
  });

  const text = formatPlainTextEmail(data);
  assert.ok(text.includes("From: Sara"));
  assert.ok(text.includes("Contact: sara@example.com"));
  assert.ok(text.includes("Custom Knowledge & AI Assistant (RAG)"));
  assert.ok(text.includes("Starting Point: Help me decide"));

  const html = formatHtmlEmail(data);
  assert.ok(html.includes("Sara"));
  assert.ok(html.includes("mailto:sara@example.com"));
  assert.ok(html.includes("Custom Knowledge &amp; AI Assistant (RAG)"));
});
