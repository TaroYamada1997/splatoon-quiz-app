import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages で配信するため静的HTMLとして書き出す
  output: "export",
  // 静的書き出しでは Next.js の画像最適化サーバーが使えないため無効化
  images: { unoptimized: true },
};

export default nextConfig;
