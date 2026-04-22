import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.neofort.ro'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return children;
}
