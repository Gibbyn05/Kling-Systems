import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kling Intelligence OS",
  description: "Intern forretningsinnsikt for Kling Systems",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
