"use client";

import { useState, useRef, useCallback, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { weapons, Weapon } from "@/constants/weapons";

const MAX_PLAYERS = 8;
const DEFAULT_PLAYERS = 4;
const SPIN_DURATION = 2500;
const FAST_INTERVAL = 50;
const SLOW_INTERVAL = 200;

interface PlayerResult {
  name: string;
  weapon: Weapon;
}

interface SpinState {
  weapon: Weapon;
  settled: boolean;
}

function randomWeapon(): Weapon {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

function encodeResults(results: PlayerResult[]): string {
  const data = results.map((r) => ({
    n: r.name,
    i: weapons.findIndex((w) => w.main === r.weapon.main),
  }));
  return btoa(encodeURIComponent(JSON.stringify(data)));
}

function decodeResults(param: string): PlayerResult[] | null {
  try {
    const data = JSON.parse(decodeURIComponent(atob(param))) as Array<{
      n: string;
      i: number;
    }>;
    return data.map(({ n, i }) => ({
      name: n,
      weapon: weapons[Math.max(0, Math.min(i, weapons.length - 1))],
    }));
  } catch {
    return null;
  }
}

function buildShareUrl(encoded: string): string {
  return `${window.location.origin}/roulette?r=${encodeURIComponent(encoded)}`;
}

function buildXText(results: PlayerResult[], url: string): string {
  const lines = results.map((r) => `${r.name}: ${r.weapon.main}`).join("\n");
  return encodeURIComponent(
    `🎲 スプラ3 ブキルーレット結果！\n\n${lines}\n\n#スプラトゥーン3 #Splatoon3\n${url}`
  );
}

function RouletteContent() {
  const searchParams = useSearchParams();

  const sharedResults = useMemo(() => {
    const r = searchParams.get("r");
    return r ? decodeResults(r) : null;
  }, [searchParams]);

  const [playerCount, setPlayerCount] = useState(
    sharedResults ? sharedResults.length : DEFAULT_PLAYERS
  );
  const [playerNames, setPlayerNames] = useState<string[]>(() => {
    if (sharedResults) {
      return [
        ...sharedResults.map((r) => r.name),
        ...Array.from(
          { length: MAX_PLAYERS - sharedResults.length },
          (_, i) => `プレイヤー${sharedResults.length + i + 1}`
        ),
      ];
    }
    return Array.from({ length: MAX_PLAYERS }, (_, i) => `プレイヤー${i + 1}`);
  });
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinStates, setSpinStates] = useState<SpinState[]>([]);
  const [results, setResults] = useState<PlayerResult[]>(sharedResults ?? []);
  const [shareEncoded, setShareEncoded] = useState<string>(
    sharedResults ? (searchParams.get("r") ?? "") : ""
  );
  const [copied, setCopied] = useState(false);
  const intervalsRef = useRef<(ReturnType<typeof setInterval> | null)[]>([]);

  const spin = useCallback(() => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResults([]);
    setShareEncoded("");

    const finalWeapons = Array.from({ length: playerCount }, () =>
      randomWeapon()
    );

    setSpinStates(
      finalWeapons.map(() => ({ weapon: randomWeapon(), settled: false }))
    );

    intervalsRef.current = finalWeapons.map((finalWeapon, idx) => {
      const settleDelay = SPIN_DURATION + idx * 400;
      let interval = setInterval(() => {
        setSpinStates((prev) => {
          const next = [...prev];
          next[idx] = { weapon: randomWeapon(), settled: false };
          return next;
        });
      }, FAST_INTERVAL);

      const slowTimer = setTimeout(() => {
        clearInterval(interval);
        interval = setInterval(() => {
          setSpinStates((prev) => {
            const next = [...prev];
            next[idx] = { weapon: randomWeapon(), settled: false };
            return next;
          });
        }, SLOW_INTERVAL);

        setTimeout(() => {
          clearInterval(interval);
          setSpinStates((prev) => {
            const next = [...prev];
            next[idx] = { weapon: finalWeapon, settled: true };
            return next;
          });

          if (idx === playerCount - 1) {
            setTimeout(() => {
              const finalResults = finalWeapons.map((w, i) => ({
                name: playerNames[i] || `プレイヤー${i + 1}`,
                weapon: w,
              }));
              const encoded = encodeResults(finalResults);
              setResults(finalResults);
              setShareEncoded(encoded);
              setIsSpinning(false);
            }, 300);
          }
        }, 600);
      }, settleDelay - 600);

      return slowTimer as unknown as ReturnType<typeof setInterval>;
    });
  }, [isSpinning, playerCount, playerNames]);

  const handlePlayerCountChange = (count: number) => {
    setPlayerCount(count);
    setSpinStates([]);
    setResults([]);
    setShareEncoded("");
  };

  const handleNameChange = (idx: number, value: string) => {
    setPlayerNames((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  };

  const [shareUrl, setShareUrl] = useState("");
  const [xHref, setXHref] = useState("");

  useEffect(() => {
    if (!shareEncoded) {
      setShareUrl("");
      setXHref("");
      return;
    }
    const url = buildShareUrl(shareEncoded);
    setShareUrl(url);
    setXHref(
      `https://x.com/intent/tweet?text=${buildXText(results, url)}`
    );
  }, [shareEncoded, results]);

  const handleCopy = async () => {
    if (!shareUrl) return;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          ブキルーレット
        </h1>
        <p className="text-gray-600">全員に使用ブキをランダムで割り当てます</p>
      </div>

      {/* プレイヤー設定 */}
      <div className="bg-white rounded-xl shadow-md p-5 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">プレイヤー設定</h2>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            人数: {playerCount}人
          </label>
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: MAX_PLAYERS }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => handlePlayerCountChange(n)}
                className={`w-10 h-10 rounded-full font-bold text-sm transition-colors ${
                  playerCount === n
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: playerCount }, (_, i) => (
            <div key={i}>
              <label className="block text-xs text-gray-500 mb-1">
                プレイヤー{i + 1}
              </label>
              <input
                type="text"
                value={playerNames[i]}
                onChange={(e) => handleNameChange(i, e.target.value)}
                placeholder={`プレイヤー${i + 1}`}
                maxLength={10}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          ))}
        </div>
      </div>

      {/* スピンボタン */}
      <div className="flex justify-center mb-8">
        <button
          onClick={spin}
          disabled={isSpinning}
          className={`px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-200 ${
            isSpinning
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-yellow-400 text-gray-900 hover:bg-yellow-500 active:scale-95 hover:shadow-xl"
          }`}
        >
          {isSpinning ? "抽選中..." : results.length > 0 ? "もう一度" : "ルーレット スタート！"}
        </button>
      </div>

      {/* スピン中の表示 */}
      {isSpinning && spinStates.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {spinStates.slice(0, playerCount).map((state, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transition-all duration-150 ${
                state.settled ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              <p className="text-sm font-bold text-gray-700 mb-2 truncate w-full">
                {playerNames[idx] || `プレイヤー${idx + 1}`}
              </p>
              <div className="relative w-20 h-20 mb-2">
                <Image
                  src={state.weapon.mainImg}
                  alt={state.weapon.main}
                  fill
                  className={`object-contain transition-opacity duration-100 ${
                    state.settled ? "opacity-100" : "opacity-70"
                  }`}
                />
              </div>
              <p
                className={`text-xs font-medium ${
                  state.settled ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {state.settled ? state.weapon.main : "..."}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 結果表示 */}
      {results.length > 0 && !isSpinning && (
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
            結果発表！
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-400"
              >
                <div className="bg-yellow-400 px-4 py-2">
                  <p className="font-bold text-gray-900 truncate">
                    {result.name}
                  </p>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-3">
                    <Image
                      src={result.weapon.mainImg}
                      alt={result.weapon.main}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-gray-900 text-center mb-3 text-sm">
                    {result.weapon.main}
                  </p>
                  <div className="w-full space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image
                          src={result.weapon.subImg}
                          alt={result.weapon.sub}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {result.weapon.sub}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image
                          src={result.weapon.specialImg}
                          alt={result.weapon.special}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {result.weapon.special}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* シェアセクション */}
          {shareEncoded && (
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-bold text-gray-700 mb-3">
                結果をシェア
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <div className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-500 truncate font-mono min-w-0">
                  {shareUrl}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={handleCopy}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    {copied ? "コピー済！" : "URLをコピー"}
                  </button>
                  <a
                    href={xHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center gap-1"
                  >
                    𝕏 でシェア
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function RoulettePage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center py-20 text-gray-500">
          読み込み中...
        </div>
      }
    >
      <RouletteContent />
    </Suspense>
  );
}
