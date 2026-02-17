import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CypheraX - Secure Social Network',
  description: 'Your go-to app for secure communications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}