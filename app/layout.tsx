import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>スプラトゥーン クイズ | Splatoon Quiz Game</title>
        <meta
          name="description"
          content="スプラトゥーンに関する知識を試せる無料クイズゲーム。様々なクイズに挑戦しよう！ スプラトゥーン3対応"
        />
        <meta
          name="keywords"
          content="スプラトゥーン,スプラトゥーン3,クイズ,ゲーム,Splatoon,Quiz,無料,ブキ,ギア"
        />
        <meta
          property="og:title"
          content="スプラトゥーン クイズ | Splatoon Quiz Game"
        />
        <meta
          property="og:description"
          content="スプラトゥーンに関する知識を試せる無料クイズゲーム。"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
