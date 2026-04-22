'use client';
import { useState, useEffect } from 'react';
import { Link } from '../i18n/navigation';

const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export default function CookieConsent({ locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('neofort_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('neofort_cookie_consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('neofort_cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  const isRo = locale === 'ro';
  const isUk = locale === 'uk';

  const text = isRo
    ? 'Folosim cookie-uri pentru a imbunatati experienta pe site. Prin continuarea navigarii, acceptati utilizarea acestora.'
    : isUk
    ? 'Ми використовуємо файли cookie для покращення досвіду на сайті. Продовжуючи навігацію, ви погоджуєтеся з їх використанням.'
    : 'We use cookies to improve your experience on our site. By continuing to browse, you accept their use.';

  const cookiesLabel = isRo ? 'Politica Cookies' : isUk ? 'Політика Cookies' : 'Cookie Policy';
  const acceptLabel = isRo ? 'Accept' : isUk ? 'Прийняти' : 'Accept';
  const declineLabel = isRo ? 'Refuz' : isUk ? 'Відмовити' : 'Decline';

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#1a1a1a',
      color: '#fff',
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
    }}>
      <p style={{ fontFamily: F, fontSize: 13, fontWeight: 300, color: '#ddd', lineHeight: 1.6, maxWidth: 700, margin: 0 }}>
        {text}{' '}
        <Link href="/cookies" locale={locale} style={{ color: '#fff', fontWeight: 400, textDecoration: 'underline' }}>
          {cookiesLabel}
        </Link>
      </p>
      <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
        <button onClick={decline} style={{ fontFamily: F, fontSize: 13, fontWeight: 300, color: '#aaa', background: 'transparent', border: '1px solid #555', padding: '10px 20px', cursor: 'pointer', borderRadius: 100 }}>
          {declineLabel}
        </button>
        <button onClick={accept} style={{ fontFamily: F, fontSize: 13, fontWeight: 400, color: '#1a1a1a', background: '#fff', border: '1px solid #fff', padding: '10px 24px', cursor: 'pointer', borderRadius: 100 }}>
          {acceptLabel}
        </button>
      </div>
    </div>
  );
}
