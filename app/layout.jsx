import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://salman-portfolio-etyo.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Salman Arefin Portfolio | Software Engineer & Full-Stack Developer',
    template: '%s | Salman Arefin Portfolio',
  },

  description:
    'Official portfolio of Salman Arefin, a Software Engineer and Full-Stack Web Developer from Bangladesh. Skilled in React.js, Next.js, NestJS, ASP.NET, Laravel, PHP, MySQL, PostgreSQL, and Oracle.',

  keywords: [
    'Salman Arefin',
    'Salman Arefin Portfolio',
    'Salman Arefin Software Engineer',
    'Salman Arefin Developer',
    'Full Stack Developer Bangladesh',
    'Software Engineer Bangladesh',
    'React Developer Bangladesh',
    'Next.js Developer Bangladesh',
    'NestJS Developer',
    'ASP.NET Developer',
    'Laravel Developer',
    'AIUB CSE Salman Arefin',
  ],

  authors: [{ name: 'Salman Arefin' }],
  creator: 'Salman Arefin',
  publisher: 'Salman Arefin',

  verification: {
    google: 'B9P8apdDH7nlqJfGfGlde-NvhQNEIEO9rUy10DcxOhs',
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Salman Arefin Portfolio | Software Engineer & Full-Stack Developer',
    description:
      'Official portfolio of Salman Arefin, showcasing full-stack web development projects, skills, education, certifications, and professional experience.',
    url: siteUrl,
    siteName: 'Salman Arefin Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Salman Arefin Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Salman Arefin Portfolio | Software Engineer & Full-Stack Developer',
    description:
      'Official portfolio of Salman Arefin, Software Engineer and Full-Stack Web Developer.',
    images: ['/profile.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/profile.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}