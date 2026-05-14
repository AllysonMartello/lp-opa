import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type LeadPayload = {
  origin?: string;
  receivedAt?: string;
  nome?: string;
  telefone?: string;
  email?: string;
  cidade?: string;
  answers?: Record<string, string>;
  subject?: string;
};

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const renderHtml = (p: LeadPayload) => {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;white-space:nowrap;">${escapeHtml(k)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${escapeHtml(v)}</td></tr>`;

  const answerRows = p.answers
    ? Object.entries(p.answers).map(([k, v]) => row(k, v)).join("")
    : "";

  return `<!doctype html>
<html><body style="font-family:system-ui,-apple-system,sans-serif;color:#111;max-width:640px;margin:0 auto;padding:24px;">
  <h2 style="margin:0 0 8px;">Novo lead — Siriúba 2</h2>
  <p style="color:#555;margin:0 0 16px;">${escapeHtml(p.origin ?? "")} · ${escapeHtml(p.receivedAt ?? "")}</p>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    ${row("Nome", p.nome ?? "")}
    ${row("Telefone", p.telefone ?? "")}
    ${p.email ? row("E-mail", p.email) : ""}
    ${row("Cidade", p.cidade ?? "")}
    ${answerRows}
  </table>
</body></html>`;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !to) {
    return res.status(500).json({ ok: false, error: "Server not configured" });
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as LeadPayload;

  if (!body?.nome || !body?.telefone || !body?.cidade) {
    return res.status(400).json({ ok: false, error: "Campos obrigatórios ausentes" });
  }

  const resend = new Resend(apiKey);

  const leadEmail = body.email?.trim();
  const replyTo = leadEmail && isValidEmail(leadEmail) ? leadEmail : undefined;

  try {
    const { error } = await resend.emails.send({
      from: "Siriúba 2 Leads <onboarding@resend.dev>",
      to: [to],
      subject: body.subject ?? `[SITE Siriúba 2] Novo lead — ${body.nome}`,
      html: renderHtml(body),
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ ok: false, error: "Falha no envio" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ ok: false, error: "Erro inesperado" });
  }
}
