
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import dynamic from 'next/dynamic';
import ClientAnimatedBackground from '@/components/ui/ClientAnimatedBackground';


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