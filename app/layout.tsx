import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadepstein - Epstein Files Search",
  description: "A themable search tool for the Epstein files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
