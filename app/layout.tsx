import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  serverFetch,
  suspenseHook,
  clientSWR,
}: {
  children: React.ReactNode;
  serverFetch: React.ReactNode;
  suspenseHook: React.ReactNode;
  clientSWR: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6">Next.js Veri Çekme Yöntemleri Karşılaştırması</h1>

          <div className="grid grid-cols-3 gap-4 ">
            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-green-700">Server Component</h2>
              {serverFetch}
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-blue-700">Suspense + use Hook</h2>
              {suspenseHook}
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-red-700">SWR Client-Side</h2>
              {clientSWR}
            </div>
          </div>

          <div className="mt-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
