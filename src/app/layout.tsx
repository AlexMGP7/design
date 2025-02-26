import "./globals.css";
import DashboardLayout from "@/components/DashboardLayout";

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
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
