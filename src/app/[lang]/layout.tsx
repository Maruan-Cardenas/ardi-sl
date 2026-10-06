import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import { getDictionary } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0284c7",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  return {
    title: "ARDI S.L. | " + dictionary.company.tagline,
    description: dictionary.company.description,
    keywords: [
      "ARDI SL",
      "maquinaria queserias",
      "cubas de cuajar",
      "arcon desuerador",
      "prensas de queso",
      "tunel lavado moldes",
      "distribuidor de leche",
      "queseria automatizada",
      "caldereria acero inoxidable",
      "Oiartzun",
      "Gipuzkoa",
    ],
    authors: [{ name: "ARDI S.L." }],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <I18nProvider dictionary={dictionary} lang={lang}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
