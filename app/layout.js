import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavegacionComponent from "@/components/ui/navegacion";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.juantoranzos.dev"),
  title: "Juan Toranzos — Desarrollador Full Stack (React / Next.js) en Argentina",
  description:
    "Juan Toranzos, desarrollador Full Stack basado en Tucumán, Argentina. Especializado en React y Next.js. Construyo landings, e-commerce y dashboards con código limpio y rendimiento excepcional.",
  icons: {
    icon: [{ url: "/favicon-light.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Juan Toranzos — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React y Next.js. Construyo landings, e-commerce y dashboards. Disponible para proyectos.",
    url: "https://www.juantoranzos.dev",
    siteName: "Juan Toranzos",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Juan Toranzos — Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Toranzos — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React y Next.js. Basado en Tucumán, Argentina.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" style={{ backgroundColor: "#0E0D0C" }}>
      <body
        className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LanguageProvider>
          <NavegacionComponent />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
