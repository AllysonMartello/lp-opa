import type {Metadata} from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'OPA - Lançamento de Imóveis de Alto Padrão em Ilhabela',
  description: 'Seu imóvel ou empreendimento precisa mais do que aparecer. Precisa ser lançado da forma certa.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F7F6F3] text-[#2B2B2B] antialiased" suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
