import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parthiban V — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Parthiban V — 2nd Year CS student at Sri Shakthi Institute of Engineering and Technology, specializing in AI Engineering, Autonomous Agents, and Full-Stack Systems.",
  keywords: [
    "Parthiban V",
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Autonomous AI Agents",
    "Next.js",
    "Sri Shakthi Institute of Engineering and Technology",
    "Hackathons",
    "Freelancer",
  ],
  authors: [{ name: "Parthiban V" }],
  creator: "Parthiban V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parthiban.dev",
    title: "Parthiban V — AI Engineer & Full-Stack Developer",
    description:
      "2nd Year CS student building intelligent autonomous agents, high-performance web systems, and hackathon-winning solutions.",
    siteName: "Parthiban V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parthiban V — AI Engineer & Full-Stack Developer",
    description:
      "Crafting autonomous AI systems and robust full-stack applications with engineering precision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030408",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-night-950 text-starlight-primary font-sans antialiased min-h-screen selection:bg-moon-light/20 selection:text-moon-light">
        {children}
      </body>
    </html>
  );
}
