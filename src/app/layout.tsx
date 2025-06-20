import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Jahid Hasan - Portfolio',
  description: 'Personal website of Jahid Hasan, a PhD student in Computer Science at Iowa State University, focusing on AI and startup development.',
  keywords: ['Jahid Hasan', 'AI', 'Startup', 'Research', 'Computer Science', 'Iowa State University'],
  authors: [{ name: 'Jahid Hasan' }],
  creator: 'Jahid Hasan',
  publisher: 'Jahid Hasan',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jahidhasan.com',
    title: 'Jahid Hasan - Researcher | Entrepreneur | Founder | Engineer',
    description: 'Personal website of Jahid Hasan, a PhD student in Computer Science at Iowa State University.',
    siteName: 'Jahid Hasan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jahid Hasan - Researcher | Entrepreneur | Founder | Engineer',
    description: 'Personal website of Jahid Hasan, a PhD student in Computer Science at Iowa State University.',
    creator: '@jhasanofficial',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/pictures/Headshot.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
