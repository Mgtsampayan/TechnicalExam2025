import { AuthProvider } from "@/contexts/AuthContext";
// import Navigation from '@/components/Navigation';
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Demo",
  description: "A demo application for authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="min-h-screen bg-gray-100">
            {/* <Navigation /> */}
            <main>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
