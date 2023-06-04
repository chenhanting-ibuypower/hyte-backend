import "@/styles/globals.css";
import { Suspense } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";

const inter = Inter({
  variable: "--fonts-inter",
  subsets: ["latin"],
});

const title = "Next.js Prisma Postgres Auth Starter";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Toaster />
        <Suspense fallback="Loading...">
          {/* <AuthStatus /> */}
        </Suspense>
        {children}
      </body>
    </html>
  );
}
