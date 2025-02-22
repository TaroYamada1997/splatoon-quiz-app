import { House } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              Splatoon3 Weapon Quiz
            </h3>
            <p className="text-gray-300">
              サブとスペシャルからメインブキを当てよう！
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white flex items-center gap-2"
                  >
                    <House />
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://x.com/m1_h74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    @m1_h74
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-center text-gray-300">
          <p>&copy; 2025 スプラトゥーン ブキクイズ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
