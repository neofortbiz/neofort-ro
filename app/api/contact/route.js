import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { nume, email, telefon, subiect, mesaj } = await request.json();

    if (!nume || !email || !telefon || !subiect) {
      return Response.json({ error: 'Campuri obligatorii lipsa' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'NEOFORT Contact <office@neofort-biz.ro>',
      to: 'office@neofort-biz.ro',
      subject: `[neofort.ro] ${subiect}`,
      html: `
        <h2>Mesaj nou de pe neofort.ro</h2>
        <p><strong>Nume:</strong> ${nume}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Subiect:</strong> ${subiect}</p>
        ${mesaj ? `<p><strong>Mesaj:</strong> ${mesaj}</p>` : ''}
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: 'Eroare server' }, { status: 500 });
  }
}
