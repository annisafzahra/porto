import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Annisa Fathimatuz Zahra | Software Quality Assurance & System Validation',
  description: 'Portofolio resmi Annisa Fathimatuz Zahra (A.Md.Kom) - Lulusan D3 Teknik Informatika Politeknik Negeri Indramayu (IPK 3,94/4,00). Spesialisasi dalam Software Quality Assurance (QA), Postman API Testing, dan verifikasi fungsionalitas sistem web modern.',
  keywords: [
    'Annisa Fathimatuz Zahra',
    'Software Quality Assurance',
    'Software Testing',
    'QA Engineer Indonesia',
    'Postman API Testing',
    'Politeknik Negeri Indramayu',
    'Polindra D3 Teknik Informatika',
    'Next.js',
    'Django REST API',
    'Test Cases & Bug Logging'
  ],
  authors: [{ name: 'Annisa Fathimatuz Zahra' }],
  creator: 'Annisa Fathimatuz Zahra',
  openGraph: {
    title: 'Annisa Fathimatuz Zahra | Software Quality Assurance & System Validation',
    description: 'Menjamin keandalan fungsionalitas perangkat lunak, integritas API Postman, dan presisi antarmuka pengguna.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
