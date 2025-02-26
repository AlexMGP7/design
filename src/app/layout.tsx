import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Tu Dashboard principal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
