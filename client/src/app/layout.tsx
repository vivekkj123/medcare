"use client";
import "./globals.css";
import { AuthProvider } from "@pangeacyber/react-auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hostedLoginURL = process?.env?.NEXT_PUBLIC_AUTHN_HOSTED_LOGIN_URL || "";
  const authConfig = {
    clientToken: process?.env?.NEXT_PUBLIC_AUTHN_CLIENT_TOKEN || "",
    domain: process?.env?.NEXT_PUBLIC_PANGEA_DOMAIN || "",
  };
  return (
    <html lang="en">
      <head>
        <title>MedCare App</title>
        <meta
          name="description"
          content="MedCare App submission for pangea.cloud securathon"
        />
      </head>
      <AuthProvider loginUrl={hostedLoginURL} config={authConfig}>
        <body>
          <>{children}</>
        </body>
      </AuthProvider>
    </html>
  );
}
