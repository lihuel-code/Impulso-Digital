import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SERVICE_LABELS: Record<string, string> = {
  "sistema-ventas": "Sistema de ventas",
  "google-ads":     "Campañas Google Ads",
  "sitios-web":     "Sitios web",
  "general":        "Consulta general",
};

function sanitize(s: string, max = 2000): string {
  return String(s || "").trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Sanitize inputs
    const name    = sanitize(body.name, 120);
    const email   = sanitize(body.email, 200).toLowerCase();
    const phone   = sanitize(body.phone, 60);
    const company = sanitize(body.company, 200);
    const message = sanitize(body.message, 4000);
    const service = sanitize(body.service, 60);

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "El email no es válido." },
        { status: 400 }
      );
    }

    const serviceLabel = SERVICE_LABELS[service] || "Consulta general";
    const subject = `🚀 Nuevo lead — ${serviceLabel} — ${name}`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f7fb; padding: 24px;">
        <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(10,31,68,0.08);">
          <div style="background: #0A1F44; padding: 28px 32px; border-bottom: 4px solid #004481;">
            <p style="color: #02A0A5; font-size: 11px; font-weight: 700; letter-spacing: 3px; margin: 0 0 6px;">NUEVO LEAD</p>
            <h1 style="color: white; font-size: 22px; margin: 0; font-weight: 600;">${serviceLabel}</h1>
          </div>
          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Nombre</td></tr>
              <tr><td style="padding: 0 0 16px; color: #0A1F44; font-size: 16px; font-weight: 600;">${name}</td></tr>

              <tr><td style="padding: 8px 0; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Email</td></tr>
              <tr><td style="padding: 0 0 16px;"><a href="mailto:${email}" style="color: #0063E5; font-size: 16px; text-decoration: none;">${email}</a></td></tr>

              ${phone ? `
              <tr><td style="padding: 8px 0; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Teléfono</td></tr>
              <tr><td style="padding: 0 0 16px; color: #0A1F44; font-size: 16px;">${phone}</td></tr>
              ` : ""}

              ${company ? `
              <tr><td style="padding: 8px 0; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Empresa</td></tr>
              <tr><td style="padding: 0 0 16px; color: #0A1F44; font-size: 16px;">${company}</td></tr>
              ` : ""}

              <tr><td style="padding: 8px 0; color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Mensaje</td></tr>
              <tr><td style="padding: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, "&lt;")}</td></tr>
            </table>
          </div>
          <div style="background: #F4F7FB; padding: 16px 32px; font-size: 12px; color: #64748B;">
            Recibido el ${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}
          </div>
        </div>
      </div>
    `;

    // If Resend is configured, send the email
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail   = process.env.LEAD_EMAIL_TO || "gestion@impulsodigitalweb.com.ar";
    const fromEmail = process.env.LEAD_EMAIL_FROM || "Impulso Digital <leads@impulsodigitalweb.com.ar>";

    if (resendKey) {
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        reply_to: email,
        subject,
        html,
      });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "No se pudo enviar el email. Intentalo nuevamente." },
          { status: 500 }
        );
      }
    } else {
      // Dev fallback: log to console so you can verify the form works locally
      console.log("\n📥 LEAD RECEIVED (no RESEND_API_KEY set, email not sent):");
      console.log({ name, email, phone, company, service: serviceLabel, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    );
  }
}
