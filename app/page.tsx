import Link from "next/link";
import { quizConfigs } from "@/constants/quizConfig";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            スプラトゥーン ブキクイズ
          </h1>
          <p className="text-xl text-gray-600">
            サブとスペシャルからメインブキを当てよう！
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
          <div className="flex items-center justify-center text-center">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
              最新対応
            </div>
            <p className="text-green-800 font-medium">
              スプラトゥーン3 Ver. 10.0.1 に対応しています
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(quizConfigs).map(([key, config]) => (
            <Link href={`/quiz/${key}`} key={key} className="block group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {config.title}
                    </h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {config.totalQuestions}問
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{config.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {/* <span>
                      制限時間:{" "}
                      {config.timeLimit ? `${config.timeLimit}秒` : "なし"}
                    </span> */}
                    <span className="text-blue-500 group-hover:text-blue-600">
                      チャレンジする →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">遊び方</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>難易度を選択してクイズをスタート</li>
            <li>
              表示されたサブとスペシャルの組み合わせから、メインブキを当てよう
            </li>
            <li>全問解答後に結果が表示されます</li>
            <li>結果はXでシェアできます</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
