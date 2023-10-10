import { Providers } from "@/components/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Very Cool Blog 😎",
  description: "Technical Interview Use Case",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
