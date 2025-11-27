// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chorale Pépinière du Seigneur - Music that Lifts the Soul",
  description:
    "Experience inspirational gospel music from Chorale Pépinière du Seigneur. Buy albums, singles, and worship music that lifts the soul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
