import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { personal } from "@/data/resume";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${personal.name} — ${personal.role}`,
  description: personal.tagline,
  keywords: [
    "Esakkimuthu Sivaraman",
    "Backend Engineer",
    "Python Developer",
    "Django Developer",
    "Product Engineer",
    "REST API",
    "Software Engineer Chennai",
  ],
  authors: [{ name: personal.name, url: personal.linkedin }],
  openGraph: {
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
    url: SITE_URL,
    siteName: `${personal.name} | Portfolio`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.role,
  description: personal.summary,
  email: personal.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: personal.location,
  },
  url: SITE_URL,
  sameAs: [personal.linkedin, personal.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <GradientMesh />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
