
import ClientAnimatedBackground from '@/components/ui/ClientAnimatedBackground';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify only the weights you use
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NativeCraft - Create Beautiful React Native Apps',
  description: 'Transform your app idea into reality with our streamlined generator. No coding required, just customize and build.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientAnimatedBackground />
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}