import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, mobile, email, address, message } = body;

    /* ── Basic server-side validation ── */
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 },
      );
    }

    /* ── Build HTML email ── */
    const html = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8" /></head>
        <body style="font-family:sans-serif;color:#0D1B38;max-width:600px;margin:auto;padding:24px">
          <div style="border-top:3px solid #C9A84C;padding-top:20px;margin-bottom:24px">
            <h2 style="margin:0 0 4px">New Contact Enquiry</h2>
            <p style="margin:0;color:#6b7280;font-size:13px">NSK High School · Contact Form</p>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${row("Full Name", name)}
            ${row("Mobile", mobile || "—")}
            ${row("Email", email)}
            ${row("Address", address || "—")}
          </table>

          ${
            message?.trim()
              ? `<div style="margin-top:20px;padding:16px;background:#f9fafb;border-left:3px solid #C9A84C;border-radius:4px">
                  <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#6b7280">Message</p>
                  <p style="margin:0;font-size:14px;white-space:pre-wrap">${escHtml(message)}</p>
                </div>`
              : ""
          }

          <p style="margin-top:28px;font-size:12px;color:#9ca3af">
            Sent via NSK High School website contact form
          </p>
        </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      replyTo: email,
      subject: `Contact Enquiry – ${name}`,
      html,
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}

/* ── Helpers ── */
function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 12px 8px 0;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;white-space:nowrap;vertical-align:top">${label}</td>
      <td style="padding:8px 0;font-size:14px;color:#0D1B38">${escHtml(value)}</td>
    </tr>`;
}

function escHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
