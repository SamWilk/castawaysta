import "./globals.css";

export const metadata = {
  title: "Castaway STA | Charter Fishing St. Augustine",
  description:
    "Castaway STA offers St. Augustine fishing charters with Captain Joe Driscoll for redfish, snapper, kingfish, cobia, grouper, and more.",
  icons: {
    icon: "/site-icon.svg",
    apple: "/site-icon.svg",
  },
  keywords: [
    "Castaway STA",
    "St. Augustine fishing charter",
    "charter fishing St. Augustine",
    "Captain Joe Driscoll",
    "St. Johns County fishing charter",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
