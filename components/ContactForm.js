'use client';
import { useState } from 'react';

const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const field = {
  width: '100%',
  padding: '12px 8px',
  fontFamily: F,
  fontSize: 14,
  fontWeight: 300,
  color: '#1a1a1a',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid #999',
  outline: 'none',
  boxSizing: 'border-box',
  display: 'block',
  marginBottom: 8,
};

export default function ContactForm({ locale }) {
  const isRo = locale === 'ro';
  const isUk = locale === 'uk';
  const [status, setStatus] = useState(null);

  const t = {
    nume: isRo ? 'Nume' : isUk ? "Ім'я" : 'Name',
    telefon: isRo ? 'Telefon' : isUk ? 'Телефон' : 'Phone',
    subiect: isRo ? 'Subiect' : isUk ? 'Тема' : 'Subject',
    mesaj: isRo ? 'Mesaj (optional)' : isUk ? 'Повідомлення (необов\'язково)' : 'Message (optional)',
    gdpr: isRo ? 'Sunt de acord cu Politica GDPR' : isUk ? 'Я погоджуюся з Політикою конфіденційності' : 'I agree with the Privacy Policy',
    btn: isRo ? 'Transmis' : isUk ? 'Надіслати' : 'Send',
    sending: isRo ? 'Se trimite...' : isUk ? 'Надсилання...' : 'Sending...',
    ok: isRo ? 'Mesaj trimis cu succes.' : isUk ? 'Повідомлення успішно надіслано.' : 'Message sent successfully.',
    err: isRo ? 'Eroare. Contactati-ne la office@neofort-biz.ro' : isUk ? 'Помилка. Напишіть нам на office@neofort-biz.ro' : 'Error. Contact us at office@neofort-biz.ro',
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus('ok'); e.target.reset(); }
      else setStatus('err');
    } catch { setStatus('err'); }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nume"    type="text"  required placeholder={t.nume}    style={field} />
      <input name="email"   type="email" required placeholder="Email"      style={field} />
      <input name="telefon" type="tel"   required placeholder={t.telefon}  style={field} />
      <input name="subiect" type="text"  required placeholder={t.subiect}  style={field} />
      <textarea name="mesaj" rows={4} placeholder={t.mesaj} style={{ ...field, resize: 'vertical', marginBottom: 20 }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <input type="checkbox" name="gdpr" required id="gdpr" />
        <label htmlFor="gdpr" style={{ fontFamily: F, fontSize: 13, fontWeight: 300, color: '#1a1a1a', cursor: 'pointer' }}>
          {t.gdpr}
        </label>
      </div>

      <button type="submit" disabled={status === 'sending'} style={{ display: 'block', width: '100%', padding: '15px', background: '#1a1a1a', color: '#fff', fontFamily: F, fontSize: 14, fontWeight: 300, letterSpacing: '0.1em', border: 'none', borderRadius: 0, cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.6 : 1 }}>
        {status === 'sending' ? t.sending : t.btn}
      </button>

      {status === 'ok' && <p style={{ fontFamily: F, fontSize: 13, color: '#2a7a2a', marginTop: 12 }}>{t.ok}</p>}
      {status === 'err' && <p style={{ fontFamily: F, fontSize: 13, color: '#c00', marginTop: 12 }}>{t.err}</p>}
    </form>
  );
}
