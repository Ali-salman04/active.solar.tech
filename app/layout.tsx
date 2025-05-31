import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Active Technology - Solar Energy Solutions',
  description: 'Premium solar energy products for residential and commercial use',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <WhatsAppButton />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}