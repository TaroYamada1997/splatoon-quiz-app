import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブキルーレット | スプラトゥーン3",
  description:
    "スプラトゥーン3のブキをランダムに割り当てる無料ルーレット。最大8人のプレイヤーに武器を自動で振り分け！結果をURLでシェアしてフレンドと遊ぼう。",
  keywords:
    "スプラトゥーン ルーレット,スプラ3 ブキ ルーレット,スプラトゥーン 武器 ランダム,スプラトゥーン3 武器決め,スプラトゥーン3 ブキ振り分け,Splatoon roulette,スプラ ルーレット,スプラ3 ランダム武器",
  openGraph: {
    title: "ブキルーレット | スプラトゥーン3",
    description:
      "最大8人のプレイヤーにブキをランダム割り当て！結果をURLでシェアできる無料ルーレット。",
    type: "website",
    url: "https://splatoon3-quiz.com/roulette",
    images: [
      {
        url: "https://splatoon3-quiz.com/ogp.png",
        width: 1200,
        height: 630,
        alt: "スプラトゥーン3 ブキルーレット",
      },
    ],
    siteName: "スプラトゥーン クイズ",
  },
  twitter: {
    card: "summary_large_image",
    title: "ブキルーレット | スプラトゥーン3",
    description:
      "最大8人のプレイヤーにブキをランダム割り当て！結果をURLでシェアできる無料ルーレット。",
    images: ["https://splatoon3-quiz.com/ogp.png"],
  },
};

export default function RouletteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
