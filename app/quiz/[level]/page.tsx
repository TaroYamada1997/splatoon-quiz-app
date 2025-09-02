"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { weapons } from "@/constants/weapons";
import { quizConfigs } from "@/constants/quizConfig";
import type { Weapon } from "@/constants/weapons";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const level = params.level as string;
  const quizConfig = quizConfigs[level];

  // 設定された難易度が存在しない場合はホームにリダイレクト
  useEffect(() => {
    if (!quizConfig) {
      router.push("/");
    }
  }, [quizConfig, router]);

  const [currentQuestion, setCurrentQuestion] = useState<Weapon | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // 新しい問題を生成
  const generateQuestion = () => {
    const questionWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    const incorrectOptions = weapons
      .filter((w) => w.main !== questionWeapon.main)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.main);

    const allOptions = [...incorrectOptions, questionWeapon.main].sort(
      () => Math.random() - 0.5
    );

    setCurrentQuestion(questionWeapon);
    setOptions(allOptions);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  // 回答をチェック
  const checkAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    if (answer === currentQuestion?.main) {
      setScore((prev) => prev + 1);
    }
  };

  // 次の問題へ
  const nextQuestion = () => {
    const nextQuestionNumber = questionNumber + 1;
    if (nextQuestionNumber < quizConfig.totalQuestions) {
      setQuestionNumber(nextQuestionNumber);
      generateQuestion();
    } else {
      setIsQuizComplete(true);
    }
  };

  // クイズをリスタート
  const restartQuiz = () => {
    setScore(0);
    setQuestionNumber(0);
    setIsQuizComplete(false);
    generateQuestion();
  };

  // ホームに戻る
  const goHome = () => {
    router.push("/");
  };

  // ツイートを共有
  const shareOnTwitter = () => {
    const text = `スプラトゥーン3ブキクイズで${score}/${quizConfig.totalQuestions}点を獲得しました！#スプラトゥーン3ブキクイズ`;
    const url = window.location.href;
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  // 初回マウント時に最初の問題を生成
  useEffect(() => {
    generateQuestion();
  }, []);

  if (!currentQuestion) return null;

  if (isQuizComplete) {
    return (
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-2">
                {quizConfig.title} クリア！
              </h2>
              <p className="text-center text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                全{quizConfig.totalQuestions}問中{score}問正解
              </p>

              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-4xl font-bold mb-2">
                    {((score / quizConfig.totalQuestions) * 100).toFixed(1)}%
                  </p>
                  <div className="text-lg text-gray-600 mb-4">
                    {score === quizConfig.totalQuestions &&
                      "完璧！Xマッチに潜ろう！"}
                    {score >= quizConfig.totalQuestions * 0.8 &&
                      score < quizConfig.totalQuestions &&
                      "素晴らしい成績です！"}
                    {score >= quizConfig.totalQuestions * 0.6 &&
                      score < quizConfig.totalQuestions * 0.8 &&
                      "よく頑張りました！"}
                    {score < quizConfig.totalQuestions * 0.6 &&
                      "まだまだ伸びしろがありますね！"}
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <button
                    onClick={() => restartQuiz()}
                    className="w-full bg-blue-500 text-white rounded-lg p-3 sm:p-4 hover:bg-blue-600 active:bg-blue-700 transition-colors text-sm sm:text-base font-medium min-h-[48px]"
                  >
                    もう一度チャレンジ
                  </button>
                  <button
                    onClick={goHome}
                    className="w-full bg-gray-100 text-gray-700 rounded-lg p-3 sm:p-4 hover:bg-gray-200 active:bg-gray-300 transition-colors text-sm sm:text-base font-medium min-h-[48px]"
                  >
                    ホームに戻る
                  </button>
                  <button
                    onClick={shareOnTwitter}
                    className="w-full bg-black text-white rounded-lg p-3 sm:p-4 hover:bg-gray-800 active:bg-gray-900 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium min-h-[48px]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    結果をシェア
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto">
        {/* クイズカード */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6 md:p-8">
            {/* 進捗表示 */}
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg font-medium">
                問題 {questionNumber + 1} / {quizConfig.totalQuestions}
              </p>
            </div>

            {/* 問題表示部分 */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  このブキの組み合わせは？
                </h2>

                {/* サブとスペシャルの表示 */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {/* サブウェポン */}
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="aspect-square relative mb-2 max-w-[100px] sm:max-w-[120px] mx-auto">
                      <Image
                        src={currentQuestion?.subImg || "/placeholder.png"}
                        alt={currentQuestion?.sub || ""}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-medium text-sm sm:text-base">サブ</p>
                    <p className="text-sm sm:text-lg font-medium">
                      {currentQuestion?.sub}
                    </p>
                  </div>

                  {/* スペシャルウェポン */}
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="aspect-square relative mb-2 max-w-[100px] sm:max-w-[120px] mx-auto">
                      <Image
                        src={currentQuestion?.specialImg || "/placeholder.png"}
                        alt={currentQuestion?.special || ""}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-medium text-sm sm:text-base">
                      スペシャル
                    </p>
                    <p className="text-sm sm:text-lg font-medium">
                      {currentQuestion?.special}
                    </p>
                  </div>
                </div>
              </div>

              {/* 選択肢 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {options.map((option, index) => {
                  const weaponData = weapons.find((w) => w.main === option);
                  return (
                    <button
                      key={index}
                      onClick={() => !showResult && checkAnswer(option)}
                      disabled={showResult}
                      className={`
                        relative p-3 sm:p-4 rounded-lg w-full transition-colors min-h-[60px] sm:min-h-[72px] active:scale-95
                        ${
                          showResult
                            ? option === currentQuestion?.main
                              ? "bg-green-500 text-white"
                              : selectedAnswer === option
                              ? "bg-red-500 text-white"
                              : "bg-gray-100"
                            : "bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
                        }
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                          <Image
                            src={weaponData?.mainImg || "/placeholder.png"}
                            alt={option}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm sm:text-lg font-medium text-left">
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 結果表示 */}
              {showResult && (
                <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                  <div
                    className={`
                      p-3 sm:p-4 rounded-lg flex items-center space-x-3
                      ${
                        selectedAnswer === currentQuestion?.main
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <Image
                        src={currentQuestion?.mainImg || "/placeholder.png"}
                        alt={currentQuestion?.main || ""}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm sm:text-lg font-medium">
                      {selectedAnswer === currentQuestion?.main
                        ? "正解！"
                        : `不正解... 正解は${currentQuestion?.main}でした`}
                    </p>
                  </div>
                  <button
                    onClick={nextQuestion}
                    className="w-full bg-blue-500 text-white rounded-lg py-3 sm:py-4 px-6 text-base sm:text-lg font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors min-h-[48px]"
                  >
                    {questionNumber + 1 === quizConfig.totalQuestions
                      ? "結果を見る"
                      : "次の問題へ"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
