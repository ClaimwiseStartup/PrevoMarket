import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prevo | Every claim, checked before it's sent",
  description: "AI-assisted claims checking for independent medical clinics. Prevo reads the note, assigns the codes, and checks them against your payer's rules before submission.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
