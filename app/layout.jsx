import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://salman-portfolio-etyo.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Salman Arefin | Software Engineer & Full-Stack Developer',
    template: '%s | Salman Arefin',
  },

  description:
    'Official portfolio of Salman Arefin, a Bangladeshi Software Engineer and Full-Stack Web Developer from AIUB. Skilled in React.js, Next.js, NestJS, ASP.NET, Laravel, PHP, MySQL, PostgreSQL, and Oracle.',

  keywords: [
    'Salman Arefin',
    'Who is Salman Arefin',
    'Salman Arefin portfolio',
    'Salman Arefin Software Engineer',
    'Salman Arefin Full Stack Developer',
    'Salman Arefin AIUB',
    'Bangladeshi Software Engineer',
    'Software Engineer Bangladesh',
    'Full Stack Developer Bangladesh',
    'React Developer Bangladesh',
    'Next.js Developer Bangladesh',
    'NestJS Developer',
    'ASP.NET Developer',
    'Laravel Developer',
    'PHP Developer',
    'Backend Developer Bangladesh',
    'Frontend Developer Bangladesh',
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
    title: 'Salman Arefin | Software Engineer & Full-Stack Developer',
    description:
      'Official portfolio of Salman Arefin, a Bangladeshi Software Engineer and Full-Stack Web Developer from AIUB. Explore his skills, projects, experience, education, and certifications.',
    url: siteUrl,
    siteName: 'Salman Arefin Portfolio',
    type: 'profile',
    locale: 'en_US',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Salman Arefin Software Engineer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Salman Arefin | Software Engineer & Full-Stack Developer',
    description:
      'Official portfolio of Salman Arefin, a Bangladeshi Software Engineer and Full-Stack Web Developer from AIUB.',
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

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Salman Arefin',
  alternateName: 'Salman Arefin',
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: 'Software Engineer and Full-Stack Web Developer',
  nationality: {
    '@type': 'Country',
    name: 'Bangladesh',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'American International University-Bangladesh',
    alternateName: 'AIUB',
  },
  knowsAbout: [
    'Software Engineering',
    'Full-Stack Web Development',
    'Frontend Development',
    'Backend Development',
    'Database Design',
    'React.js',
    'Next.js',
    'NestJS',
    'ASP.NET',
    'Laravel',
    'PHP',
    'MySQL',
    'PostgreSQL',
    'Oracle',
    'JavaScript',
    'C#',
    'Java',
    'Python',
  ],
  sameAs: [
    'https://github.com/salmanarefin',
    'https://www.linkedin.com/in/salman-arefin-2b2a3a293/',
  ],
  description:
    'Salman Arefin is a Bangladeshi Software Engineer and Full-Stack Web Developer. He completed his BSc in Computer Science and Engineering from American International University-Bangladesh, majoring in Software Engineering.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Salman Arefin Portfolio',
  url: siteUrl,
  description:
    'Official portfolio website of Salman Arefin, Software Engineer and Full-Stack Web Developer.',
  author: {
    '@type': 'Person',
    name: 'Salman Arefin',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}