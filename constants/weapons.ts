// ブキデータの型定義
export interface Weapon {
  main: string;
  sub: string;
  special: string;
  mainImg: string;
  subImg: string;
  specialImg: string;
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

const subImg = {
  スプラッシュボム: "/sub/1.png",
  キューバンボム: "/sub/2.png",
  クイックボム: "/sub/3.png",
  カーリングボム: "/sub/4.png",
  ロボットボム: "/sub/5.png",
  スプリンクラー: "/sub/6.png",
  スプラッシュシールド: "/sub/7.png",
  タンサンボム: "/sub/8.png",
  トーピード: "/sub/9.png",
  トラップ: "/sub/10.png",
  ポイズンミスト: "/sub/11.png",
  ポイントセンサー: "/sub/12.png",
  ラインマーカー: "/sub/13.png",
  ジャンプビーコン: "/sub/14.png",
};

const specialImg = {
  ウルトラショット: "/special/1.png",
  グレートバリア: "/special/2.png",
  ショクワンダー: "/special/3.png",
  マルチミサイル: "/special/4.png",
  アメフラシ: "/special/5.png",
  ナイスダマ: "/special/6.png",
  ホップソナー: "/special/7.png",
  キューインキ: "/special/8.png",
  "メガホンレーザー5.1ch": "/special/9.png",
  ジェットパック: "/special/10.png",
  ウルトラハンコ: "/special/11.png",
  カニタンク: "/special/12.png",
  サメライド: "/special/13.png",
  トリプルトルネード: "/special/14.png",
  エナジースタンド: "/special/15.png",
  デコイチラシ: "/special/16.png",
  テイオウイカ: "/special/17.png",
  ウルトラチャクチ: "/special/18.png",
  スミナガシート: "/special/19.png",
};

/**
 * ブキデータ
 * TODO: この辺はリファクタ案件
 */
export const weapons: Weapon[] = [
  /** シューター系統 */
  {
    main: "スプラシューター",
    sub: subWeapons.suctionBomb,
    special: specialWeapons.trizooka,
    mainImg: "/main/8.png",
    subImg: subImg.キューバンボム,
    specialImg: specialImg.ウルトラショット,
  },
  {
    main: "スプラシューターコラボ",
    sub: subWeapons.splatBomb,
    special: specialWeapons.tripleInkstrike,
    mainImg: "/main/9.png",
    subImg: subImg.スプラッシュボム,
    specialImg: specialImg.トリプルトルネード,
  },
  {
    main: "わかばシューター",
    sub: subWeapons.splatBomb,
    special: specialWeapons.bigBarrier,
    mainImg: "/main/2.png",
    subImg: subImg.スプラッシュボム,
    specialImg: specialImg.グレートバリア,
  },
  {
    main: "プロモデラーMG",
    sub: subWeapons.fizzyBomb,
    special: specialWeapons.reefslider,
    mainImg: "/main/3.png",
    subImg: subImg.タンサンボム,
    specialImg: specialImg.サメライド,
  },
  {
    main: "もみじシューター",
    sub: subWeapons.torpedo,
    special: specialWeapons.waveBreaker,
    mainImg: "/main/4.png",
    subImg: subImg.トーピード,
    specialImg: specialImg.ホップソナー,
  },
  {
    main: "プロモデラーRG",
    sub: subWeapons.sprinkler,
    special: specialWeapons.booyahBomb,
    mainImg: "/main/5.png",
    subImg: subImg.スプリンクラー,
    specialImg: specialImg.ナイスダマ,
  },
  {
    main: "52ガロン",
    sub: subWeapons.splashWall,
    special: specialWeapons.killerWail,
    mainImg: "/main/6.png",
    subImg: subImg.スプラッシュシールド,
    specialImg: specialImg["メガホンレーザー5.1ch"],
  },
  {
    main: "N-ZAP85",
    sub: subWeapons.suctionBomb,
    special: specialWeapons.tacticooler,
    mainImg: "/main/11.png",
    subImg: subImg.キューバンボム,
    specialImg: specialImg.エナジースタンド,
  },
  {
    main: "N-ZAP89",
    sub: subWeapons.autobomb,
    special: specialWeapons.superChump,
    mainImg: "/main/10.png",
    subImg: subImg.ロボットボム,
    specialImg: specialImg.デコイチラシ,
  },
  {
    main: ".96ガロン",
    sub: subWeapons.sprinkler,
    special: specialWeapons.inkVac,
    mainImg: "/main/7.png",
    subImg: subImg.スプリンクラー,
    specialImg: specialImg.キューインキ,
  },
  /** フデ系統 */
  {
    main: "パブロ",
    sub: subWeapons.splatBomb,
    special: specialWeapons.killerWail,
    mainImg: "/main/12.png",
    subImg: subImg.スプラッシュボム,
    specialImg: specialImg["メガホンレーザー5.1ch"],
  },
  {
    main: "パブロヒュー",
    sub: subWeapons.inkMine,
    special: specialWeapons.ultraStamp,
    mainImg: "/main/13.png",
    subImg: subImg.トラップ,
    specialImg: specialImg.ウルトラハンコ,
  },
  /** ローラー系統 */
  {
    main: "スプラローラー",
    sub: subWeapons.curlingBomb,
    special: specialWeapons.bigBarrier,
    mainImg: "/main/14.png",
    subImg: subImg.カーリングボム,
    specialImg: specialImg.グレートバリア,
  },
  {
    main: "ワイドローラー",
    sub: subWeapons.splashWall,
    special: specialWeapons.inkVac,
    mainImg: "/main/15.png",
    subImg: subImg.スプラッシュシールド,
    specialImg: specialImg.キューインキ,
  },
  /** チャージャー系統 */
  {
    main: "スプラチャージャー",
    sub: subWeapons.splatBomb,
    special: specialWeapons.inkVac,
    mainImg: "/main/16.png",
    subImg: subImg.スプラッシュボム,
    specialImg: specialImg.キューインキ,
  },
  {
    main: "リッター4K",
    sub: subWeapons.inkMine,
    special: specialWeapons.waveBreaker,
    mainImg: "/main/17.png",
    subImg: subImg.トラップ,
    specialImg: specialImg.ホップソナー,
  },
  {
    main: "14式竹筒銃・甲",
    sub: subWeapons.autobomb,
    special: specialWeapons.killerWail,
    mainImg: "/main/18.png",
    subImg: subImg.ロボットボム,
    specialImg: specialImg["メガホンレーザー5.1ch"],
  },
  {
    main: "スクイックリンα",
    sub: subWeapons.pointSensor,
    special: specialWeapons.bigBarrier,
    mainImg: "/main/19.png",
    subImg: subImg.ポイントセンサー,
    specialImg: specialImg.グレートバリア,
  },
  {
    main: "ソイチューバー",
    sub: subWeapons.torpedo,
    special: specialWeapons.tentaMissiles,
    mainImg: "/main/20.png",
    subImg: subImg.トーピード,
    specialImg: specialImg.マルチミサイル,
  },
  {
    main: "R-PEN/5H",
    sub: subWeapons.sprinkler,
    special: specialWeapons.tacticooler,
    mainImg: "/main/21.png",
    subImg: subImg.スプリンクラー,
    specialImg: specialImg.エナジースタンド,
  },
  {
    main: "R-PEN/5B",
    sub: subWeapons.splashWall,
    special: specialWeapons.inkStorm,
    mainImg: "/main/22.png",
    subImg: subImg.スプラッシュシールド,
    specialImg: specialImg.アメフラシ,
  },
  {
    main: "ソイチューバーカスタム",
    sub: subWeapons.fizzyBomb,
    special: specialWeapons.ultraStamp,
    mainImg: "/main/23.png",
    subImg: subImg.タンサンボム,
    specialImg: specialImg.ウルトラハンコ,
  },
  /** スピナー系統 */
  {
    main: "スプラスピナー",
    sub: subWeapons.burstBomb,
    special: specialWeapons.ultraStamp,
    mainImg: "/main/24.png",
    subImg: subImg.クイックボム,
    specialImg: specialImg.ウルトラハンコ,
  },
  {
    main: "スプラスピナーコラボ",
    sub: subWeapons.poisonMist,
    special: specialWeapons.bigBarrier,
    mainImg: "/main/25.png",
    subImg: subImg.ポイズンミスト,
    specialImg: specialImg.グレートバリア,
  },
  {
    main: "ノーチラス47",
    sub: subWeapons.pointSensor,
    special: specialWeapons.inkStorm,
    mainImg: "/main/26.png",
    subImg: subImg.ポイントセンサー,
    specialImg: specialImg.アメフラシ,
  },
  {
    main: "イグザミナー",
    sub: subWeapons.curlingBomb,
    special: specialWeapons.tacticooler,
    mainImg: "/main/27.png",
    subImg: subImg.カーリングボム,
    specialImg: specialImg.エナジースタンド,
  },
  {
    main: "バレルスピナー",
    sub: subWeapons.sprinkler,
    special: specialWeapons.waveBreaker,
    mainImg: "/main/28.png",
    subImg: subImg.スプリンクラー,
    specialImg: specialImg.ホップソナー,
  },
  {
    main: "バレルスピナーデコ",
    sub: subWeapons.pointSensor,
    special: specialWeapons.krakenRoyale,
    mainImg: "/main/29.png",
    subImg: subImg.ポイントセンサー,
    specialImg: specialImg.テイオウイカ,
  },
  {
    main: "ハイドラント",
    sub: subWeapons.autobomb,
    special: specialWeapons.booyahBomb,
    mainImg: "/main/30.png",
    subImg: subImg.ロボットボム,
    specialImg: specialImg.ナイスダマ,
  },
  {
    main: "クーゲルシュライバー",
    sub: subWeapons.fizzyBomb,
    special: specialWeapons.jetPack,
    mainImg: "/main/31.png",
    subImg: subImg.タンサンボム,
    specialImg: specialImg.ジェットパック,
  },
  {
    main: "クーゲルシュライバーヒュー",
    sub: subWeapons.inkMine,
    special: specialWeapons.inkVac,
    mainImg: "/main/32.png",
    subImg: subImg.トラップ,
    specialImg: specialImg.キューインキ,
  },
  /** スロッシャー系統 */
  {
    main: "バケットスロッシャー",
    sub: subWeapons.splatBomb,
    special: specialWeapons.tripleInkstrike,
    mainImg: "/main/33.png",
    subImg: subImg.スプラッシュボム,
    specialImg: specialImg.トリプルトルネード,
  },
  /** マニューバー系統 */
  {
    main: "スプラマニューバー",
    sub: subWeapons.burstBomb,
    special: specialWeapons.crabTank,
    mainImg: "/main/34.png",
    subImg: subImg.スプラッシュボム,
    specialImg: specialImg.カニタンク,
  },
  /** ブラスター系統 */
  {
    main: "ホットブラスター",
    sub: subWeapons.autobomb,
    special: specialWeapons.bigBarrier,
    mainImg: "/main/35.png",
    subImg: subImg.ロボットボム,
    specialImg: specialImg.グレートバリア,
  },
  {
    main: "ホットブラスターカスタム",
    sub: subWeapons.curlingBomb,
    special: specialWeapons.tripleSplashdown,
    mainImg: "/main/36.png",
    subImg: subImg.カーリングボム,
    specialImg: specialImg.ウルトラチャクチ,
  },
  /** シェルター系統 */
  {
    main: "パラシェルター",
    sub: subWeapons.sprinkler,
    special: specialWeapons.jetPack,
    mainImg: "/main/37.png",
    subImg: subImg.スプリンクラー,
    specialImg: specialImg.ジェットパック,
  },
  /** ワイパー系統 */
  {
    main: "ドライブワイパー",
    sub: subWeapons.torpedo,
    special: specialWeapons.ultraStamp,
    mainImg: "/main/38.png",
    subImg: subImg.トーピード,
    specialImg: specialImg.ウルトラハンコ,
  },
  /** ストリンガー系統 */
  {
    main: "LACT-450",
    sub: subWeapons.curlingBomb,
    special: specialWeapons.tentaMissiles,
    mainImg: "/main/39.png",
    subImg: subImg.カーリングボム,
    specialImg: specialImg.マルチミサイル,
  },
];
