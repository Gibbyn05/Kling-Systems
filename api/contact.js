const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedServices = new Set(["Nettsider", "Automatisering", "Systemer", "Usikker"]);

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const cleanValue = (value, maxLength) => String(value ?? "").trim().slice(0, maxLength);

const sendJson = (response, status, body) => {
  response.status(status).json(body);
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Denne forespørselen er ikke tillatt." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL || "Kling Systems <henvendelse@klingsystems.no>";

  if (!apiKey || !recipient) {
    return sendJson(response, 503, {
      error: "Skjemaet er midlertidig utilgjengelig. Prøv igjen litt senere.",
    });
  }

  let body = request.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return sendJson(response, 400, { error: "Innsendingen kunne ikke leses." });
    }
  }

  const website = cleanValue(body?.website, 200);
  if (website) return sendJson(response, 200, { ok: true });

  const name = cleanValue(body?.name, 100);
  const company = cleanValue(body?.company, 140);
  const email = cleanValue(body?.email, 254).toLowerCase();
  const service = cleanValue(body?.service, 30);
  const message = cleanValue(body?.message, 4000);

  if (!name || !company || !emailPattern.test(email) || message.length < 20 || !allowedServices.has(service)) {
    return sendJson(response, 400, {
      error: "Kontroller at alle feltene er riktig fylt ut.",
    });
  }

  const subject = `Ny henvendelse fra ${company}`;
  const text = [
    "Ny henvendelse fra klingsystems.no",
    "",
    `Navn: ${name}`,
    `Bedrift: ${company}`,
    `E-post: ${email}`,
    `Tjeneste: ${service}`,
    "",
    "Melding:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0f2940;line-height:1.6;max-width:640px">
      <h1 style="font-size:24px;margin:0 0 24px">Ny henvendelse</h1>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
        <tr><td style="padding:8px 12px 8px 0;font-weight:700">Navn</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 12px 8px 0;font-weight:700">Bedrift</td><td style="padding:8px 0">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:8px 12px 8px 0;font-weight:700">E-post</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 12px 8px 0;font-weight:700">Tjeneste</td><td style="padding:8px 0">${escapeHtml(service)}</td></tr>
      </table>
      <h2 style="font-size:18px;margin:0 0 8px">Melding</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    const resendResult = await resendResponse.json().catch(() => ({}));
    if (!resendResponse.ok) {
      console.error("Resend avviste henvendelsen", {
        status: resendResponse.status,
        code: resendResult.name,
      });
      return sendJson(response, 502, {
        error: "Vi fikk ikke sendt henvendelsen. Prøv igjen om et øyeblikk.",
      });
    }

    return sendJson(response, 200, { ok: true, id: resendResult.id });
  } catch (error) {
    console.error("Kunne ikke kontakte e-posttjenesten", { name: error?.name });
    return sendJson(response, 502, {
      error: "Vi fikk ikke sendt henvendelsen. Prøv igjen om et øyeblikk.",
    });
  }
}
