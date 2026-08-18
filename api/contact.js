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

const sendEmail = async (apiKey, payload) => {
  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const resendResult = await resendResponse.json().catch(() => ({}));
  return {
    ok: resendResponse.ok,
    status: resendResponse.status,
    result: resendResult,
  };
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

  let ownerDelivery;
  try {
    ownerDelivery = await sendEmail(apiKey, {
      from: sender,
      to: [recipient],
      reply_to: email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error("Kunne ikke kontakte e-posttjenesten", { name: error?.name });
    return sendJson(response, 502, {
      error: "Vi fikk ikke sendt henvendelsen. Prøv igjen om et øyeblikk.",
    });
  }

  if (!ownerDelivery.ok) {
    console.error("Resend avviste henvendelsen", {
      status: ownerDelivery.status,
      code: ownerDelivery.result.name,
    });
    return sendJson(response, 502, {
      error: "Vi fikk ikke sendt henvendelsen. Prøv igjen om et øyeblikk.",
    });
  }

  const firstName = name.split(/\s+/)[0];
  const confirmationSubject = "Vi har mottatt henvendelsen din";
  const confirmationText = [
    `Hei ${firstName},`,
    "",
    "Takk for henvendelsen. Vi har mottatt meldingen din og setter oss inn i det du har sendt.",
    "",
    "Dette skjer videre:",
    "1. Vi leser gjennom situasjonen og det dere ønsker å løse.",
    "2. Vi vurderer et nyttig og realistisk neste steg.",
    "3. Vi tar kontakt så snart som mulig.",
    "",
    `Bedrift: ${company}`,
    `Tema: ${service}`,
    "",
    "Du trenger ikke gjøre noe mer nå. Hvis du vil legge til noe, kan du svare på denne e-posten.",
    "",
    "Hilsen",
    "Kling Systems",
    recipient,
  ].join("\n");

  const confirmationHtml = `
    <div style="margin:0;background:#bfddf0;padding:32px 16px;font-family:Arial,sans-serif;color:#0f2940;line-height:1.6">
      <div style="max-width:600px;margin:0 auto;background:#fffdf2;border:1px solid #9ebed1;border-radius:24px;overflow:hidden">
        <div style="background:#0f2940;padding:24px 32px">
          <div style="font-size:32px;font-weight:800;letter-spacing:-1px;color:#fff9d2">kling<span style="color:#ffc640">.</span></div>
        </div>
        <div style="padding:36px 32px">
          <p style="margin:0 0 12px;font-size:17px">Hei ${escapeHtml(firstName)},</p>
          <h1 style="margin:0 0 16px;font-size:30px;line-height:1.15;color:#0f2940">Vi har mottatt henvendelsen din</h1>
          <p style="margin:0 0 28px;color:#526678">Takk for at du tok kontakt. Vi setter oss nå inn i det du har sendt.</p>
          <div style="margin:0 0 28px;padding:24px;background:#f2f8fb;border-radius:16px">
            <p style="margin:0 0 16px;font-weight:700">Dette skjer videre</p>
            <p style="margin:0 0 12px"><strong style="color:#0f2940">1.</strong> Vi leser gjennom situasjonen og det dere ønsker å løse.</p>
            <p style="margin:0 0 12px"><strong style="color:#0f2940">2.</strong> Vi vurderer et nyttig og realistisk neste steg.</p>
            <p style="margin:0"><strong style="color:#0f2940">3.</strong> Vi tar kontakt så snart som mulig.</p>
          </div>
          <table role="presentation" style="width:100%;border-collapse:collapse;margin:0 0 28px">
            <tr><td style="padding:8px 12px 8px 0;color:#667987">Bedrift</td><td style="padding:8px 0;font-weight:700">${escapeHtml(company)}</td></tr>
            <tr><td style="padding:8px 12px 8px 0;color:#667987">Tema</td><td style="padding:8px 0;font-weight:700">${escapeHtml(service)}</td></tr>
          </table>
          <p style="margin:0 0 28px;color:#526678">Du trenger ikke gjøre noe mer nå. Hvis du vil legge til noe, kan du svare direkte på denne e-posten.</p>
          <p style="margin:0;font-weight:700">Hilsen Kling Systems</p>
          <p style="margin:2px 0 0"><a href="mailto:${escapeHtml(recipient)}" style="color:#0f2940">${escapeHtml(recipient)}</a></p>
        </div>
      </div>
    </div>
  `;

  let confirmationSent = false;
  try {
    const confirmationDelivery = await sendEmail(apiKey, {
      from: sender,
      to: [email],
      reply_to: recipient,
      subject: confirmationSubject,
      text: confirmationText,
      html: confirmationHtml,
    });

    confirmationSent = confirmationDelivery.ok;
    if (!confirmationDelivery.ok) {
      console.error("Resend avviste kundebekreftelsen", {
        status: confirmationDelivery.status,
        code: confirmationDelivery.result.name,
      });
    }
  } catch (error) {
    console.error("Kunne ikke sende kundebekreftelsen", { name: error?.name });
  }

  return sendJson(response, 200, {
    ok: true,
    id: ownerDelivery.result.id,
    confirmationSent,
  });
}
