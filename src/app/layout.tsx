import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Recipe Generator",
  description: "A collection of delicious recipes.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
