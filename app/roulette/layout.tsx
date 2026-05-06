import { Metadata } from "next";

export const metadata: Metadata = {
  title: "スプラトゥーン3 ブキルーレット｜武器をランダムに振り分け【無料】",
  description:
    "スプラトゥーン3のブキルーレット無料ツール。スプラトゥーン ブキ ルーレットで最大8人に武器をランダム振り分け！武器決めやブキ割り当てに。結果をURLでシェアしてフレンドと遊ぼう。",
  keywords:
    "スプラトゥーン ブキ ルーレット,スプラトゥーン3 ルーレット,スプラ3 ブキ ルーレット,スプラトゥーン 武器 ランダム,スプラトゥーン3 武器決め,スプラ ルーレット,スプラトゥーン3 ブキ振り分け,Splatoon roulette,スプラ3 ランダム武器,武器決め ランダム",
  openGraph: {
    title: "スプラトゥーン3 ブキルーレット｜武器をランダムに振り分け",
    description:
      "スプラトゥーン ブキ ルーレットで最大8人に武器をランダム振り分け！武器決めに使える無料ツール。結果をURLでシェアできます。",
    type: "website",
    url: "https://www.splatoon3-quiz.com/roulette",
    images: [
      {
        url: "https://www.splatoon3-quiz.com/ogp.png",
        width: 1200,
        height: 630,
        alt: "スプラトゥーン3 ブキルーレット",
      },
    ],
    siteName: "スプラトゥーン クイズ＆ブキルーレット",
  },
  twitter: {
    card: "summary_large_image",
    title: "スプラトゥーン3 ブキルーレット｜武器をランダムに振り分け",
    description:
      "スプラトゥーン ブキ ルーレットで最大8人に武器をランダム振り分け！武器決めに使える無料ツール。",
    images: ["https://www.splatoon3-quiz.com/ogp.png"],
  },
};

export default function RouletteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
