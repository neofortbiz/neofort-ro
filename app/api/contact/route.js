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

    // Email confirmare catre client
    await resend.emails.send({
      from: 'NEOFORT <office@neofort-biz.ro>',
      to: email,
      subject: 'Multumim pentru mesajul dumneavoastra | NEOFORT',
      html: `
        <div style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #1a1a1a; padding: 30px; text-align: center;">
            <h1 style="color: #fff; font-weight: 300; letter-spacing: 0.15em; margin: 0;">NEOFORT</h1>
          </div>
          <div style="padding: 40px 30px;">
            <p style="font-size: 15px; line-height: 1.8;">Stimate/Stimata <strong>${nume}</strong>,</p>
            <p style="font-size: 15px; line-height: 1.8;">Va multumim pentru mesajul transmis. L-am receptionat si un reprezentant NEOFORT va va contacta in cel mai scurt timp.</p>
            <p style="font-size: 15px; line-height: 1.8;"><strong>Subiect:</strong> ${subiect}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 14px; line-height: 1.8; color: #4a4a4a;">
              <strong>NEOFORT</strong> — constructii · consultanta · crowdfunding<br/>
              Str. Theodor Aman Pictor 11, sector 1, Bucuresti<br/>
              Tel: +40 21 528 0660<br/>
              <a href="https://www.neofort.ro" style="color: #1a1a1a;">www.neofort.ro</a> |
              <a href="https://www.neofort-biz.ro" style="color: #1a1a1a;">www.neofort-biz.ro</a> |
              <a href="https://www.ansamblu-rezidential-nou.ro" style="color: #1a1a1a;">www.ansamblu-rezidential-nou.ro</a>
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: 'Eroare server' }, { status: 500 });
  }
}
