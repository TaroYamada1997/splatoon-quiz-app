import { Metadata } from "next";

export const metadata: Metadata = {
  title: "スプラトゥーン3 クイズ＆ブキルーレット | Splatoon3 Quiz & Roulette",
  description:
    "スプラトゥーン3のブキクイズとブキルーレットが遊べる無料サイト。サブとスペシャルからメインブキを当てるクイズや、最大8人でブキをランダム決めできるルーレットを楽しもう！",
  keywords:
    "スプラトゥーン,スプラトゥーン3,クイズ,ゲーム,Splatoon,Quiz,無料,ブキ,ルーレット,スプラ ルーレット,スプラトゥーン ルーレット,武器決め,ブキ振り分け,ランダム武器,スプラ3",
  icons: {
    icon: { url: "/icon/favicon/favicon.ico" },
    shortcut: "/icon/favicon/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "スプラトゥーン クイズ | Splatoon Quiz Game",
    description: "スプラトゥーンに関する知識を試せる無料クイズゲーム。",
    type: "website",
    url: "https://splatoon3-quiz.com",
    images: [
      {
        url: "https://splatoon3-quiz.com/ogp.png",
        width: 1200,
        height: 630,
        alt: "スプラトゥーン クイズ",
      },
    ],
    siteName: "スプラトゥーン クイズ",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://splatoon3-quiz.com/ogp.png"],
  },
};
