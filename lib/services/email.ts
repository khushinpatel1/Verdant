// lib/services/email.ts
// Email service abstraction — swap provider by changing this file only.
// Current: Resend (resend.com)
// To swap to Postmark/SendGrid: update sendEmail() implementation below.

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM_EMAIL ?? "hello@verdant.studio";
const TO = process.env.RESEND_TO_EMAIL ?? "khushin@verdant.studio";

export interface EmailPayload {
  subject: string;
  replyTo?: string;
  html: string;
  text?: string;
}

export async function sendEmail(payload: EmailPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: payload.subject,
      replyTo: payload.replyTo,
      html: payload.html,
      text: payload.text,
    });

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
}

export async function sendWaitlistEmail(params: { email: string; product: string }): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    subject: `New ${params.product} waitlist signup`,
    replyTo: params.email,
    html: `
      <p><strong>New waitlist signup for ${params.product}</strong></p>
      <p>Email: ${params.email}</p>
    `,
    text: `New waitlist signup for ${params.product}\nEmail: ${params.email}`,
  });
}

export async function sendContactEmail(params: {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    subject: `New project inquiry from ${params.name}`,
    replyTo: params.email,
    html: `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${params.name}</p>
      <p><strong>Email:</strong> ${params.email}</p>
      <p><strong>Project Type:</strong> ${params.projectType}</p>
      <p><strong>Budget:</strong> ${params.budget}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${params.message.replace(/\n/g, "<br />")}</p>
    `,
    text: `Name: ${params.name}\nEmail: ${params.email}\nProject Type: ${params.projectType}\nBudget: ${params.budget}\n\n${params.message}`,
  });
}

export async function sendCareerEmail(params: {
  name: string;
  email: string;
  role: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    subject: `Open application from ${params.name}`,
    replyTo: params.email,
    html: `
      <h2>Open application</h2>
      <p><strong>Name:</strong> ${params.name}</p>
      <p><strong>Email:</strong> ${params.email}</p>
      <p><strong>Role type:</strong> ${params.role}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${params.message.replace(/\n/g, "<br />")}</p>
    `,
    text: `Name: ${params.name}\nEmail: ${params.email}\nRole: ${params.role}\n\n${params.message}`,
  });
}
