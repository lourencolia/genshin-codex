import "./globals.css";
import localFont from 'next/font/local';

const genshinFont = localFont({
  src: './fonts/GenshinFont.ttf',
  variable: '--font-genshin',
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={genshinFont.variable}>
      <body
        className={`genshinFont.className`}
      >
        {children}
      </body>
    </html>
  );
}
