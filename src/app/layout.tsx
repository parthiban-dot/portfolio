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
  title: "Parthiban V — AI Engineering & Full-Stack Developer",
  description:
    "Portfolio of Parthiban V — Computer Science and Engineering student at Sri Shakthi Institute of Engineering and Technology. Focused on AI Engineering, full-stack systems, and real-world problem solving.",
  keywords: [
    "Parthiban V",
    "AI Engineering",
    "Full-Stack Developer",
    "Computer Science and Engineering",
    "Sri Shakthi Institute of Engineering and Technology",
    "DRACARYS",
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Hackathons",
    "Coimbatore India",
  ],
  authors: [{ name: "Parthiban V", url: "https://github.com/parthiban-dot" }],
  creator: "Parthiban V",
  metadataBase: new URL("https://github.com/parthiban-dot/portfolio"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/parthiban-dot/portfolio",
    title: "Parthiban V — AI Engineering & Full-Stack Developer",
    description:
      "Computer Science student building intelligent systems, full-stack web applications, and real-world solutions.",
    siteName: "Parthiban V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parthiban V — AI Engineering & Full-Stack Developer",
    description:
      "Computer Science student building intelligent systems, full-stack web applications, and real-world solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030508",
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
      <body className="bg-night-950 text-starlight-primary font-sans antialiased min-h-screen selection:bg-moon-accent/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
