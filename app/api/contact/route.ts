import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { firmInfo } from "@/data/mock";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

class ContactConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactConfigError";
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function requiredAnyEnv(names: string[]): string {
  for (const name of names) {
    const value = process.env[name]?.trim();

    if (value) {
      return value;
    }
  }

  throw new ContactConfigError(
    `Email service is not configured (set one of: ${names.join(", ")}).`
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Please fill all required fields before submitting." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const smtpHost = requiredAnyEnv(["SMTP_HOST", "EMAIL_HOST", "MAIL_HOST"]);
    const smtpPort = Number(requiredAnyEnv(["SMTP_PORT", "EMAIL_PORT", "MAIL_PORT"]));
    const smtpUser = requiredAnyEnv(["SMTP_USER", "EMAIL_USER", "MAIL_USER"]);
    const smtpPass = requiredAnyEnv([
      "SMTP_PASS",
      "SMTP_PASSWORD",
      "EMAIL_PASS",
      "MAIL_PASS",
      "GMAIL_APP_PASSWORD",
    ]);

    if (!Number.isFinite(smtpPort)) {
      throw new ContactConfigError(
        "Email service configuration is invalid (SMTP_PORT must be a number)."
      );
    }

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL?.trim() || firmInfo.email || smtpUser;
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || smtpUser;

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const userAgent = request.headers.get("user-agent") || "Not available";

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #1b2d4f; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">New Contact Form Submission</h2>
        <p style="margin: 0 0 18px; color: #4b5563;">
          A new inquiry was submitted from the website contact form.
        </p>

        <table style="border-collapse: collapse; width: 100%; max-width: 760px; border: 1px solid #d1d5db;">
          <thead>
            <tr style="background: #f8f4ee;">
              <th style="text-align: left; border: 1px solid #d1d5db; padding: 10px; width: 180px;">Field</th>
              <th style="text-align: left; border: 1px solid #d1d5db; padding: 10px;">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #d1d5db; padding: 10px; font-weight: 600;">Name</td>
              <td style="border: 1px solid #d1d5db; padding: 10px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #d1d5db; padding: 10px; font-weight: 600;">Email</td>
              <td style="border: 1px solid #d1d5db; padding: 10px;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #d1d5db; padding: 10px; font-weight: 600;">Phone</td>
              <td style="border: 1px solid #d1d5db; padding: 10px;">${escapeHtml(phone)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #d1d5db; padding: 10px; font-weight: 600; vertical-align: top;">Message</td>
              <td style="border: 1px solid #d1d5db; padding: 10px; white-space: pre-line;">${escapeHtml(message)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #d1d5db; padding: 10px; font-weight: 600;">Submitted At</td>
              <td style="border: 1px solid #d1d5db; padding: 10px;">${escapeHtml(submittedAt)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #d1d5db; padding: 10px; font-weight: 600;">User Agent</td>
              <td style="border: 1px solid #d1d5db; padding: 10px;">${escapeHtml(userAgent)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const text = [
      "New Contact Form Submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Message: ${message}`,
      `Submitted At: ${submittedAt}`,
      `User Agent: ${userAgent}`,
    ].join("\n");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `Website Contact <${fromEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Website Inquiry from ${name}`,
      text,
      html,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email error:", error);

    if (error instanceof ContactConfigError) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    const smtpError = error as { code?: string; responseCode?: number };

    if (smtpError.code === "EAUTH" || smtpError.responseCode === 534 || smtpError.responseCode === 535) {
      return NextResponse.json(
        {
          message:
            "SMTP authentication failed. Please verify SMTP_USER and SMTP_PASS (use an App Password for Gmail).",
        },
        { status: 500 }
      );
    }

    if (
      smtpError.code === "ESOCKET" ||
      smtpError.code === "ECONNECTION" ||
      smtpError.code === "ETIMEDOUT" ||
      smtpError.code === "ENOTFOUND"
    ) {
      return NextResponse.json(
        {
          message:
            "Unable to connect to the email server. Please verify SMTP_HOST, SMTP_PORT, and internet connectivity.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message:
          "Unable to process your request right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
