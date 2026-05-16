import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      studentName,
      dob,
      gender,
      bloodGroup,
      nationality,
      religion,
      category,
      classApplying,
      previousSchool,
      previousClass,
      parentName,
      parentRelation,
      parentOccupation,
      parentEmail,
      parentPhone,
      altPhone,
      address,
      city,
      state,
      pincode,
      notes,
    } = body;

    /* ── Validation ── */
    const missing: string[] = [];
    if (!studentName?.trim()) missing.push("Student Name");
    if (!dob?.trim()) missing.push("Date of Birth");
    if (!gender?.trim()) missing.push("Gender");
    if (!classApplying?.trim()) missing.push("Class Applying For");
    if (!parentName?.trim()) missing.push("Parent Name");
    if (!parentEmail?.trim()) missing.push("Parent Email");
    if (!parentPhone?.trim()) missing.push("Parent Phone");
    if (!address?.trim()) missing.push("Address");

    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Required fields missing: ${missing.join(", ")}.`,
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(parentEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid parent email address." },
        { status: 400 },
      );
    }

    /* ── Build HTML email ── */
    const fullAddress = [address, city, state, pincode]
      .filter(Boolean)
      .join(", ");

    const html = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8" /></head>
        <body style="font-family:sans-serif;color:#0D1B38;max-width:640px;margin:auto;padding:24px">

          <div style="border-top:3px solid #C9A84C;padding-top:20px;margin-bottom:24px">
            <h2 style="margin:0 0 4px">New Admission Application</h2>
            <p style="margin:0;color:#6b7280;font-size:13px">NSK High School · Academic Year 2025–26</p>
          </div>

          ${section("Student Information")}
          <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">
            ${row("Full Name", studentName)}
            ${row("Date of Birth", dob)}
            ${row("Gender", gender)}
            ${row("Blood Group", bloodGroup || "—")}
            ${row("Nationality", nationality || "—")}
            ${row("Religion", religion || "—")}
            ${row("Category", category || "—")}
          </table>

          ${section("Academic Details")}
          <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">
            ${row("Class Applying For", classApplying)}
            ${row("Previous School", previousSchool || "—")}
            ${row("Last Class Attended", previousClass || "—")}
          </table>

          ${section("Parent / Guardian")}
          <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">
            ${row("Name", parentName)}
            ${row("Relation", parentRelation || "—")}
            ${row("Occupation", parentOccupation || "—")}
            ${row("Email", parentEmail)}
            ${row("Phone", parentPhone)}
            ${row("Alt. Phone", altPhone || "—")}
          </table>

          ${section("Address")}
          <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px">
            ${row("Full Address", fullAddress)}
          </table>

          ${
            notes?.trim()
              ? `${section("Additional Notes")}
                <div style="padding:14px 16px;background:#f9fafb;border-left:3px solid #C9A84C;border-radius:4px;font-size:14px;white-space:pre-wrap">${escHtml(notes)}</div>`
              : ""
          }

          <p style="margin-top:28px;font-size:12px;color:#9ca3af">
            Submitted via NSK High School Admission Form
          </p>
        </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      replyTo: parentEmail,
      subject: `Admission Application – ${studentName} (${classApplying})`,
      html,
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[admission/route] Error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit application. Please try again.",
      },
      { status: 500 },
    );
  }
}

/* ── Helpers ── */
function section(title: string) {
  return `<p style="margin:16px 0 6px;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#C9A84C">${title}</p>`;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:6px 12px 6px 0;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;white-space:nowrap;vertical-align:top;width:160px">${label}</td>
      <td style="padding:6px 0;font-size:14px;color:#0D1B38">${escHtml(value)}</td>
    </tr>`;
}

function escHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
