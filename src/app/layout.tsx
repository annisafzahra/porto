import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Annisa Fathimatuz Zahra | Design Engineer & Frontend Developer',
  description: 'Portofolio resmi Annisa Fathimatuz Zahra (A.Md.Kom) - Design Engineer & Frontend Developer yang menjembatani riset UI/UX di Figma dengan implementasi kode siap produksi di Next.js dan React Native.',
  keywords: [
    'Annisa Fathimatuz Zahra',
    'Frontend Developer',
    'Design Engineer',
    'UI/UX Designer',
    'Next.js',
    'React Native',
    'Expo',
    'D3 Teknik Informatika',
    'Portofolio Developer Indonesia'
  ],
  authors: [{ name: 'Annisa Fathimatuz Zahra' }],
  creator: 'Annisa Fathimatuz Zahra',
  openGraph: {
    title: 'Annisa Fathimatuz Zahra | Design Engineer & Frontend Developer',
    description: 'Menjembatani empati UI/UX Figma dengan ketajaman kode Next.js & React Native.',
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
      <body>
        <div className="noise-overlay" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
