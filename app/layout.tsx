import "./globals.css";
import { inter } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platforms Starter Kit",
  description:
    "Create a fullstack application with multi-tenancy and custom domains support using Next.js, Prisma, and PostgreSQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
