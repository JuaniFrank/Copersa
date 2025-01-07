import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "Copersa SA",
  description: "Empresa lider en construcciones",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const dmSans = localFont({
  src: './fonts/DMSans-VariableFont_opsz,wght.ttf',
  variable: '--font-dm-sans', // Variable CSS para usar la fuente
  weight: '100 900', // Define el rango de pesos (si es variable)
  style: 'normal', // Opcional: "normal" o "italic" (si tienes ambos archivos)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      

      <body>
      <nav
        style={{
          zIndex: 10,
          paddingLeft: 35,
          paddingRight: 35,
          paddingTop: 20,
          paddingBottom: 20,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          position: 'absolute',
          backgroundColor: '#0004',
          top: 0,
        }}
      >
        <div style={{maxWidth: 1600, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
        <Image src={"/logo.png"} alt="Copersa logo" width={208} height={67} />
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/" style={{color: 'white'}}>
            Home
          </Link>
          <Link href="/obras" style={{color: 'white'}}>
            Nuestras Obras
          </Link>
          <Link href="/contacto" style={{color: 'white'}}>
            Contacto
          </Link>
        </div>
        </div>
      </nav>
        {children}
        <footer>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/" style={{color: 'white'}}>
            Home
          </Link>
          <Link href="/obras" style={{color: 'white'}}>
            Nuestas Obras
          </Link>
          <Link href="/contacto" style={{color: 'white'}}>
            Contacto
          </Link>
        </div>
        </footer>
      </body>
    </html>
  );
}
