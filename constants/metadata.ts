import { Metadata } from "next";

export const metadata: Metadata = {
  title: "スプラトゥーン クイズ | Splatoon Quiz Game",
  description:
    "スプラトゥーンに関する知識を試せる無料クイズゲーム。ブキ、ギア、ステージなど様々なクイズに挑戦しよう！ スプラトゥーン3対応",
  keywords:
    "スプラトゥーン,スプラトゥーン3,クイズ,ゲーム,Splatoon,Quiz,無料,ブキ,ギア",
  icons: {
    icon: "/icon/favicon/favicon.ico",
  },
  openGraph: {
    title: "スプラトゥーン クイズ | Splatoon Quiz Game",
    description: "スプラトゥーンに関する知識を試せる無料クイズゲーム。",
    type: "website",
    url: "https://splatoon3-quiz.com",
    images: [
      {
        url: "icon/icon_black.svg", // OGP画像のパス
        width: 1200,
        height: 630,
        alt: "スプラトゥーン クイズ",
      },
    ],
    siteName: "スプラトゥーン クイズ",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // あなたのTwitterハンドル（任意）
    images: ["https://splatoon3-quiz.com/ogp.png"],
  },
};
