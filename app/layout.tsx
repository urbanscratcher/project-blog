import ClientOnly from "./common/ClientOnly";
import CopyToaster from "./common/feature/CopyToaster";
import Header from "./common/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className="font-pretendard">
      <body className="relative">
        <ClientOnly>
          <CopyToaster />
        </ClientOnly>
        <Header />
        {children}
      </body>
    </html>
  );
}
