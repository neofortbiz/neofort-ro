'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm({ locale }) {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nume: '', email: '', tel: '', subiect: '', mesaj: '', gdpr: false });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '0 0 1px 0',
    borderBottom: '1px solid #1a1a1a',
    background: 'transparent',
    fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif',
    fontSize: 15,
    color: '#1a1a1a',
    outline: 'none',
    marginBottom: 12,
  };

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <p style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 18, color: '#1a1a1a' }}>
          {t('form_success')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <input
        type="text"
        name="nume"
        placeholder={t('form_nume')}
        value={form.nume}
        onChange={handleChange}
        required
        maxLength={100}
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        placeholder={t('form_email')}
        value={form.email}
        onChange={handleChange}
        required
        maxLength={250}
        style={inputStyle}
      />
      <input
        type="text"
        name="tel"
        placeholder={t('form_tel')}
        value={form.tel}
        onChange={handleChange}
        required
        maxLength={50}
        style={inputStyle}
      />
      <input
        type="text"
        name="subiect"
        placeholder={t('form_subiect')}
        value={form.subiect}
        onChange={handleChange}
        maxLength={200}
        style={inputStyle}
      />
      <textarea
        name="mesaj"
        placeholder={t('form_mesaj')}
        value={form.mesaj}
        onChange={handleChange}
        rows={5}
        style={{ ...inputStyle, resize: 'none', paddingTop: 10 }}
      />
      <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, cursor: 'pointer' }}>
        <input
          type="checkbox"
          name="gdpr"
          checked={form.gdpr}
          onChange={handleChange}
          required
          style={{ width: 18, height: 18 }}
        />
        <span style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 14, color: '#1a1a1a' }}>
          {t('form_gdpr')}
        </span>
      </label>
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '14px',
          background: '#1a1a1a',
          color: '#fff',
          border: 'none',
          fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif',
          fontSize: 17,
          cursor: 'pointer',
          letterSpacing: '0.03em',
        }}
      >
        {t('form_btn')}
      </button>
    </form>
  );
}
