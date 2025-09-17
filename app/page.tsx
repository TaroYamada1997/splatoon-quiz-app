import Link from "next/link";
import { quizConfigs } from "@/constants/quizConfig";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            スプラトゥーン3 ブキクイズ
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            サブとスペシャルからメインブキを当てよう！
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-2 sm:gap-0">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold sm:mr-3">
              最新対応
            </div>
            <p className="text-green-800 font-medium text-sm sm:text-base">
              スプラトゥーン3 Ver. 10.1.0 に対応しています
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(quizConfigs).map(([key, config]) => (
            <Link href={`/quiz/${key}`} key={key} className="block group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105 active:scale-95">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {config.title}
                    </h2>
                    <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                      {config.totalQuestions}問
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {config.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="text-blue-500 group-hover:text-blue-600 font-medium">
                      チャレンジする →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-blue-50 rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
            遊び方
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
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
