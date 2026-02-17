import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CypheraX - Secure Social Platform",
  description: "A cutting-edge social platform with cyber aesthetics and security-first design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
