import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { auth } from "@/server/auth";
import { SessionProvider } from "@/lib/session";

export const metadata: Metadata = {
  title: "NextJS & Elysia Template",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const RootLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { user, session } = await auth()

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <SessionProvider user={user} session={session}>
        <body>{children}</body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout;