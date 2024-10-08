import "./globals.css";

export const metadata = {
  title: "Macro Bank App",
  description: "Macro Bank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen h-full">{children}</body>
    </html>
  );
}
