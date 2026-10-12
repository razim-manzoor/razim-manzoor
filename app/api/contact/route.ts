import { NextResponse } from "next/server";
import {
  sanitizeContactPayload,
  formatPlainTextEmail,
  formatHtmlEmail,
  type ContactPayload,
} from "@/lib/contact-payload";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json().catch(() => ({}));
    const { error, data } = sanitizeContactPayload(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    if (!data) {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    // Honeypot spam trap
    if (data.isSpam) {
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL || "manzoorrazim@gmail.com";
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Portfolio Enquiry <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable. Please reach out via WhatsApp or email directly." },
        { status: 500 }
      );
    }

    const textBody = formatPlainTextEmail(data);
    const htmlBody = formatHtmlEmail(data);
    const subject = `[Inquiry] ${data.name ? data.name : "New Project"} · razim.work`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipient],
        reply_to: data.replyTo,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const err = await resendResponse.json().catch(() => ({}));
      console.error("Resend delivery failed with status", resendResponse.status, err);
      return NextResponse.json(
        { error: "Could not send message through the email service. Please use WhatsApp or email directly." },
        { status: 502 }
      );
    }

    const resendData = await resendResponse.json();
    return NextResponse.json({ success: true, id: resendData.id });
  } catch (error) {
    console.error("Unhandled contact submission error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
