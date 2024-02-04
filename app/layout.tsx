import type { Metadata } from 'next';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';
import Providers from './contexts/providers';

export const metadata: Metadata = {
  title: 'Rating Movie App',
  description: 'A simple movie rating app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
