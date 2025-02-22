export interface QuizConfig {
  level: "beginner" | "intermediate" | "advanced";
  title: string;
  description: string;
  totalQuestions: number;
  timeLimit?: number; // 秒単位（オプション）
}

export const quizConfigs: Record<string, QuizConfig> = {
  beginner: {
    level: "beginner",
    title: "初級編",
    description:
      "スプラトゥーンを始めたばかりの方向け。基本的なブキの組み合わせを学ぼう！",
    totalQuestions: 10,
  },
  intermediate: {
    level: "intermediate",
    title: "中級編",
    description: "より多くのブキを覚えたい方向け。様々な組み合わせに挑戦！",
    totalQuestions: 20,
  },
  advanced: {
    level: "advanced",
    title: "上級編",
    description: "すべてのブキを極めたい方向け。マニアックな組み合わせも出題！",
    totalQuestions: 30,
  },
};
