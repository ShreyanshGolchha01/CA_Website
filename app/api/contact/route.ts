import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxBz7Wt5ptNXQZNKN6D5YN9VMLnn50172zMt7tMKea_qasSnPozz1jeBthTPAZLqoWI/exec";

function getScriptUrl() {
  return process.env.CONTACT_GOOGLE_SCRIPT_URL?.trim() || DEFAULT_SCRIPT_URL;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Please fill all required fields before submitting." },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const scriptResponse = await fetch(getScriptUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    const rawResponse = await scriptResponse.text();

    if (!scriptResponse.ok) {
      console.error("Google Script request failed", {
        status: scriptResponse.status,
        body: rawResponse,
      });

      return NextResponse.json(
        { message: "Unable to submit form right now. Please try again in a moment." },
        { status: 502 }
      );
    }

    if (rawResponse) {
      try {
        const parsed = JSON.parse(rawResponse) as { status?: string; message?: string };

        if (parsed.status && parsed.status !== "success") {
          return NextResponse.json(
            {
              message:
                parsed.message || "Form request was accepted but not saved. Please retry once.",
            },
            { status: 502 }
          );
        }
      } catch {
        // Google Apps Script can sometimes return a non-JSON body; treat HTTP 2xx as success.
      }
    }

    return NextResponse.json({ message: "Message submitted successfully." });
  } catch (error) {
    console.error("Contact form proxy error:", error);

    return NextResponse.json(
      {
        message: "Unable to process your request right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
