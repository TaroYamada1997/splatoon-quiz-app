// ブキデータの型定義
export interface Weapon {
  main: string;
  sub: string;
  special: string;
}

interface SubWeapon {
  [key: string]: string;
}

interface SpecialWeapon {
  [key: string]: string;
}

const subWeapons: SubWeapon = {
  splatBomb: "スプラッシュボム",
  suctionBomb: "キューバンボム",
  burstBomb: "クイックボム",
  curlingBomb: "カーリングボム",
  autobomb: "ロボットボム",
  sprinkler: "スプリンクラー",
  splashWall: "スプラッシュシールド",
  fizzyBomb: "タンサンボム",
  torpedo: "トーピード",
  inkMine: "トラップ",
  poisonMist: "ポイズンミスト",
  pointSensor: "ポイントセンサー",
};

const specialWeapons: SpecialWeapon = {
  trizooka: "ウルトラショット",
  bigBarrier: "グレートバリア",
  inkVac: "キューインキ",
  tripleInkstrike: "トリプルトルネード",
  ultraStamp: "ウルトラハンコ",
  booyahBomb: "ナイスダマ",
  tacticooler: "エナジースタンド",
  jetPack: "ジェットパック",
  crabTank: "カニタンク",
  reefslider: "サメライド",
  waveBreaker: "ホップソナー",
  killerWail: "メガホンレーザー5.1ch",
  superChump: "デコイチラシ",
  splattercolorScreen: "スミナガシート",
  tripleSplashdown: "ウルトラチャクチ",
  krakenRoyale: "テイオウイカ",
  tentaMissiles: "マルチミサイル",
  inkStorm: "アメフラシ",
};

// ブキデータ
export const weapons: Weapon[] = [
  /** シューター系統 */
  {
    main: "スプラシューター",
    sub: subWeapons.suctionBomb,
    special: specialWeapons.trizooka,
  },
  {
    main: "スプラシューターコラボ",
    sub: subWeapons.splatBomb,
    special: specialWeapons.tripleInkstrike,
  },
  {
    main: "わかばシューター",
    sub: subWeapons.splatBomb,
    special: specialWeapons.bigBarrier,
  },
  {
    main: "プロモデラーMG",
    sub: subWeapons.fizzyBomb,
    special: specialWeapons.reefslider,
  },
  {
    main: "もみじシューター",
    sub: subWeapons.torpedo,
    special: specialWeapons.waveBreaker,
  },
  {
    main: "プロモデラーRG",
    sub: subWeapons.sprinkler,
    special: specialWeapons.reefslider,
  },
  {
    main: "52ガロン",
    sub: subWeapons.splashWall,
    special: specialWeapons.killerWail,
  },
  {
    main: "N-ZAP85",
    sub: subWeapons.suctionBomb,
    special: specialWeapons.tacticooler,
  },
  {
    main: "N-ZAP89",
    sub: subWeapons.autobomb,
    special: specialWeapons.superChump,
  },
  {
    main: ".96ガロン",
    sub: subWeapons.sprinkler,
    special: specialWeapons.inkVac,
  },
  /** フデ系統 */
  {
    main: "パブロ",
    sub: subWeapons.splatBomb,
    special: specialWeapons.killerWail,
  },
  {
    main: "パブロヒュー",
    sub: subWeapons.inkMine,
    special: specialWeapons.ultraStamp,
  },
  /** ローラー系統 */
  {
    main: "スプラローラー",
    sub: subWeapons.curlingBomb,
    special: specialWeapons.bigBarrier,
  },
  {
    main: "ワイドローラー",
    sub: subWeapons.splashWall,
    special: specialWeapons.inkMine,
  },
  /** チャージャー系統 */
  {
    main: "スプラチャージャー",
    sub: subWeapons.splatBomb,
    special: specialWeapons.inkVac,
  },
  {
    main: "リッター4K",
    sub: subWeapons.inkMine,
    special: specialWeapons.waveBreaker,
  },
  {
    main: "14式竹筒銃・甲",
    sub: subWeapons.autobomb,
    special: specialWeapons.killerWail,
  },
  {
    main: "スクイックリンα",
    sub: subWeapons.pointSensor,
    special: specialWeapons.bigBarrier,
  },
  {
    main: "ソイチューバー",
    sub: subWeapons.torpedo,
    special: specialWeapons.tentaMissiles,
  },
  {
    main: "R-PEN/5H",
    sub: subWeapons.sprinkler,
    special: specialWeapons.tacticooler,
  },
  {
    main: "R-PEN/5B",
    sub: subWeapons.splashWall,
    special: specialWeapons.inkStorm,
  },
  {
    main: "ソイチューバーカスタム",
    sub: subWeapons.fizzyBomb,
    special: specialWeapons.ultraStamp,
  },
  /** スピナー系統 */
  {
    main: "スプラスピナー",
    sub: subWeapons.burstBomb,
    special: specialWeapons.ultraStamp,
  },
  {
    main: "スプラスピナーコラボ",
    sub: subWeapons.poisonMist,
    special: specialWeapons.bigBarrier,
  },
  {
    main: "ノーチラス47",
    sub: subWeapons.pointSensor,
    special: specialWeapons.inkStorm,
  },
  {
    main: "イグザミナー",
    sub: subWeapons.curlingBomb,
    special: specialWeapons.tacticooler,
  },
  {
    main: "バレルスピナー",
    sub: subWeapons.sprinkler,
    special: specialWeapons.waveBreaker,
  },
  {
    main: "バレルスピナーデコ",
    sub: subWeapons.pointSensor,
    special: specialWeapons.krakenRoyale,
  },
  {
    main: "ハイドラント",
    sub: subWeapons.autobomb,
    special: specialWeapons.booyahBomb,
  },
  {
    main: "クーゲルシュライバー",
    sub: subWeapons.fizzyBomb,
    special: specialWeapons.jetPack,
  },
  {
    main: "クーゲルシュライバーヒュー",
    sub: subWeapons.inkMine,
    special: specialWeapons.inkVac,
  },
  /** スロッシャー系統 */
  {
    main: "バケットスロッシャー",
    sub: subWeapons.splatBomb,
    special: specialWeapons.tripleInkstrike,
  },
  /** マニューバー系統 */
  {
    main: "スプラマニューバー",
    sub: subWeapons.burstBomb,
    special: specialWeapons.crabTank,
  },
  /** ブラスター系統 */
  {
    main: "ホットブラスター",
    sub: subWeapons.autobomb,
    special: specialWeapons.bigBarrier,
  },
  {
    main: "ホットブラスターカスタム",
    sub: subWeapons.curlingBomb,
    special: specialWeapons.tripleSplashdown,
  },
  /** シェルター系統 */
  {
    main: "パラシェルター",
    sub: subWeapons.sprinkler,
    special: specialWeapons.jetPack,
  },
  /** ワイパー系統 */
  {
    main: "ドライブワイパー",
    sub: subWeapons.torpedo,
    special: specialWeapons.ultraStamp,
  },
  /** ストリンガー系統 */
  {
    main: "LACT-450",
    sub: subWeapons.curlingBomb,
    special: specialWeapons.tentaMissiles,
  },
];
