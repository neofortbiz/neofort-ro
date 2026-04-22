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
  const [status, setStatus] = useState(null);

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
      <input name="nume"    type="text"  required placeholder={isRo ? 'Nume'    : 'Name'}    style={field} />
      <input name="email"   type="email" required placeholder="Email"                         style={field} />
      <input name="telefon" type="tel"   required placeholder={isRo ? 'Telefon' : 'Phone'}   style={field} />
      <input name="subiect" type="text"  required placeholder={isRo ? 'Subiect' : 'Subject'} style={field} />
      <textarea
        name="mesaj"
        rows={5}
        placeholder={isRo ? 'Mesaj (optional)' : 'Message (optional)'}
        style={{ ...field, resize: 'vertical', marginBottom: 20 }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <input type="checkbox" name="gdpr" required id="gdpr" />
        <label htmlFor="gdpr" style={{ fontFamily: F, fontSize: 13, fontWeight: 300, color: '#1a1a1a', cursor: 'pointer' }}>
          {isRo ? 'Sunt de acord cu Politica GDPR' : 'I agree with the Privacy Policy'}
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          display: 'block',
          width: '100%',
          padding: '15px',
          background: '#1a1a1a',
          color: '#fff',
          fontFamily: F,
          fontSize: 14,
          fontWeight: 300,
          letterSpacing: '0.1em',
          border: 'none',
          borderRadius: 0,
          cursor: status === 'sending' ? 'wait' : 'pointer',
          opacity: status === 'sending' ? 0.6 : 1,
        }}
      >
        {status === 'sending' ? '...' : (isRo ? 'Transmis' : 'Send')}
      </button>

      {status === 'ok' && <p style={{ fontFamily: F, fontSize: 13, color: '#2a7a2a', marginTop: 12 }}>{isRo ? 'Mesaj trimis cu succes.' : 'Message sent successfully.'}</p>}
      {status === 'err' && <p style={{ fontFamily: F, fontSize: 13, color: '#c00', marginTop: 12 }}>{isRo ? 'Eroare. Scrieti la office@neofort.ro' : 'Error. Write to office@neofort.ro'}</p>}
    </form>
  );
}
