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
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-center text-gray-300">
          <p>&copy; 2025 スプラトゥーン3 ブキクイズ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
