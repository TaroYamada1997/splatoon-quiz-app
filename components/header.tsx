import { House } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/icon/icon_black.svg"
                alt="Splatoon Icon"
                fill
                className="object-contain invert"
              />
            </div>
            <h1 className="text-xl font-bold">Splatoon3 Weapon Quiz</h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-blue-600 px-3 py-2 rounded-md flex items-center gap-2"
              >
                <House />
                ホーム
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
