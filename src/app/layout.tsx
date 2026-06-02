import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://adkan-landing-page-tal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "עד כאן — הזמן שלך, בשליטה שלך",
  description:
    "עד כאן הופך את הקרב על זמן המסך לתחרות חברתית. תתחרו עם חברים, תעקבו אחרי השימוש, תנצחו בחזרה את הזמן שלכם.",
  keywords: [
    "עד כאן", "AdKan", "אפליקציית עד כאן", "זמן מסך", "screen time", "בריאות דיגיטלית",
    "digital wellbeing", "הגבלת מסך", "תחרות חברתית", "iOS", "אייפון",
    "ניהול זמן", "גמילה מהטלפון", "פוקוס",
  ],
  alternates: { canonical: BASE_URL },
  verification: { google: "SukPPcADkl0eIW29o39TXqLWlrv9J85_3HBzEaHwKjM" },
  openGraph: {
    title: "עד כאן — הזמן שלך, בשליטה שלך",
    description:
      "עד כאן הופך את הקרב על זמן המסך לתחרות חברתית. תתחרו עם חברים, תעקבו אחרי השימוש, תנצחו בחזרה את הזמן שלכם.",
    url: BASE_URL,
    locale: "he_IL",
    type: "website",
    siteName: "עד כאן | AdKan",
  },
  twitter: {
    card: "summary_large_image",
    title: "עד כאן — הזמן שלך, בשליטה שלך",
    description:
      "תתחרו עם חברים על מי משתמש פחות בטלפון. עד כאן — אפליקציה חינמית ל-iOS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${rubik.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
