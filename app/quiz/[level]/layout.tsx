import { quizConfigs } from "@/constants/quizConfig";

// 静的書き出し用に、難易度ごとのページをビルド時に生成する
export function generateStaticParams() {
  return Object.keys(quizConfigs).map((level) => ({ level }));
}

// 定義済み以外の難易度は 404 にする
export const dynamicParams = false;

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
