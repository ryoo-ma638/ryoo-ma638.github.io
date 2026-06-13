// =========================================================
// 作品データ（事実ベース・厳選）
// 出典: 各授業フォルダの成果物（ソース/レンダリング動画を確認）＋ x24231_portfolio.pdf。
// ※虚偽厳禁。「授業でやっただけ」の習作は載せず、見せられるものだけを厳選する方針。
// =========================================================

export type Category = "graphic" | "cg" | "imaging" | "web";

export const categoryLabels: Record<Category, { ja: string; en: string; color: string }> = {
  graphic: { ja: "グラフィック・ロゴ", en: "Graphic & Logo", color: "var(--accent)" },
  cg:      { ja: "CG・映像",          en: "CG & Video",    color: "var(--accent-2)" },
  imaging: { ja: "画像処理・インタラクション", en: "Vision & Interaction", color: "var(--accent-3)" },
  web:     { ja: "Web・アプリ",        en: "Web & App",     color: "var(--c-blue)" },
};

export interface Work {
  slug: string;
  title: string;
  category: Category;
  summary: string;        // 一覧用の短い説明
  goal?: string;          // 狙い
  approach?: string;      // 工夫
  tools?: string[];       // 使用ツール
  duration?: string;      // 制作時間
  thumb?: string;         // サムネイル画像パス
  video?: string;         // ループ再生する軽量mp4（任意）
  featured?: boolean;     // トップのBentoで大きく見せる
  link?: string;          // 外部/別サイトへのリンク（Web作品など）
  status?: string;        // 進行中・公開予定・出展 などのバッジ（任意）
}

export const works: Work[] = [
  // ====================== CG・映像 ======================
  {
    slug: "shibuya-crossing",
    title: "渋谷スクランブル交差点 CG",
    category: "cg",
    summary: "リアルな街並みの再現と光の表現に挑戦した3DCG作品。",
    goal: "実在の風景を題材に、空間スケールと光のリアリティを出す。",
    approach: "建物配置と人流のスケール感、ライティングで都市の空気感を再現。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/01.png",
    video: "/assets/works/video/shibuya.mp4",
    featured: true,
  },
  {
    slug: "strikeout",
    title: "海賊船ストラックアウト（3Dゲーム）",
    category: "cg",
    summary: "C++とOpenGLで自作した3Dシューティングゲーム。大砲から砲弾を撃ち、海に浮かぶ海賊船を撃ち落とす。スコア・コンボ・制限時間つき。",
    goal: "物理挙動・当たり判定からスコア・コンボ・制限時間まで実装した、“ちゃんと遊べる”ゲームを完成させる。",
    approach: "砲弾の放物運動と船との衝突判定、撃沈数・スコア・コンボ・残り時間のUI、ラウンド制を実装。授業の総合演習として作り込み、講評でも高い評価をもらえた一番の自信作。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/strikeout.jpg",
    video: "/assets/works/video/strikeout.mp4",
    featured: true,
  },
  {
    slug: "aitland",
    title: "AITランド（3D遊園地）",
    category: "cg",
    summary: "歩いて見渡せる3Dの遊園地。観覧車・コースター・噴水・キャラクターを配置し、テクスチャで世界観を作り込んだ総合作品。",
    goal: "広い3D空間を破綻なく構成し、テーマパークの“居る感”を出す。",
    approach: "多数のオブジェクトとテクスチャを配置し、視点移動で全体を見渡せるよう設計。授業の集大成として一番作り込んだ作品。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/aitland.jpg",
    video: "/assets/works/video/aitland.mp4",
  },
  {
    slug: "music-video",
    title: "ミュージックビデオ（ライブ演出）",
    category: "cg",
    summary: "導入をゆっくり明るくし、カメラワークと照明で臨場感を作った映像。",
    goal: "視聴者を自然に世界観へ引き込み、被写体の存在感を段階的に拡大する。",
    approach: "導入にストーリー性を持たせ、構図・明るさの変化とライブの歓声・照明で一体感を強調。",
    tools: ["Photoshop"],
    duration: "約12時間",
    thumb: "/assets/works/09.png",
    featured: true,
  },
  {
    slug: "jojo-scene",
    title: "『ジョジョ』カーズ ― 3Dシーン再現",
    category: "cg",
    summary: "『ジョジョの奇妙な冒険』第2部ラスト、宇宙へ飛ばされ“考えるのをやめた”カーズの場面を3Dで再現したオマージュ作品。",
    goal: "原作の象徴的な“静寂”の場面を、宇宙空間のスケールで表現する。",
    approach: "惑星や太陽を配した宇宙空間に究極生命体カーズを置き、永遠に閉じ込められた孤独と静けさが伝わるよう構図とライティングを調整した。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/04.png",
  },
  {
    slug: "live-stage",
    title: "ライブ会場の紙吹雪演出",
    category: "cg",
    summary: "3Dのライブ会場に無数の紙吹雪が舞う瞬間を演出。ステージと花道を見下ろす構図で、クライマックスの華やかさを表現。",
    goal: "物体移動アニメーションを使って、ライブのクライマックスの高揚感を作り出す。",
    approach: "大量の紙吹雪に一つずつ速度と回転を与えて舞い落とし、色とりどりに散らす。ステージ・花道・客席を配置し、上空からの構図でスケール感を出した。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/livestage.jpg",
    video: "/assets/works/video/livestage.mp4",
  },
  {
    slug: "mushiba-animals",
    title: "虫歯アニマルズ（東京ゲームショー出展）",
    category: "cg",
    summary: "1年次に「学生チャレンジプロジェクト」として参加・制作し、東京ゲームショーに出展された体感型ゲーム。動物の口を模した造形コントローラで遊ぶインタラクティブ展示。",
    status: "東京ゲームショー出展",
    thumb: "/assets/works/mushiba.jpg",
  },

  // ====================== グラフィック・ロゴ ======================
  {
    slug: "visible-light-poster",
    title: "可視光線ポスター「その光見えてる？」",
    category: "graphic",
    summary: "可視光線（約380〜780nm）と波長の関係を図解と配色で可視化。",
    goal: "人の目に見える光の範囲を直感的に伝える。",
    approach: "波長スケールと暖色→寒色のグラデーションで、波長とエネルギーの関係を視覚化。",
    tools: ["Illustrator"],
    duration: "約5時間",
    thumb: "/assets/works/visible-light.png",
  },
  {
    slug: "character-design",
    title: "学科マスコット キャラクターデザイン",
    category: "graphic",
    summary: "メディア情報専攻のマスコット「メディーちゃん」「コンちゃん」を設計。",
    goal: "学科の役割（情報サポート／分析・プログラミング）をキャラに落とし込む。",
    approach: "各パーツに「情報処理」「トラブル対処」「発信力」を象徴するモチーフを配置。",
    tools: ["Illustrator"],
    duration: "約12時間",
    thumb: "/assets/works/character.png",
  },
  {
    slug: "animal-logo",
    title: "海の動物ロゴ",
    category: "graphic",
    summary: "ペンギン・セイウチ・カメをシンプルな線で表現したロゴ。",
    approach: "カメは泳ぐように配置して動きを出し、実写とロゴの対比で変化の面白さを表現。",
    tools: ["Illustrator"],
    duration: "約1.5時間",
    thumb: "/assets/works/animal-logo.png",
  },
  {
    slug: "personal-logo",
    title: "自分のロゴ／名刺デザイン",
    category: "graphic",
    summary: "名前・イニシャルを活かしたロゴと、それを使った名刺を制作。",
    approach: "モノクロで媒体を選ばない汎用性を確保。名刺は緑の帯で情報を整理し信頼感を演出。",
    tools: ["Illustrator"],
    thumb: "/assets/works/logo-meishi.png",
  },
  {
    slug: "club-poster",
    title: "サークル募集ポスター",
    category: "graphic",
    summary: "新入部員募集ポスター。視線誘導と行動導線を意識した構成。",
    approach: "タイトルの迫力で視線をキャッチし、QRコードで興味→行動へ。情報は吹き出しで整理。",
    tools: ["Illustrator"],
    duration: "約1時間",
    thumb: "/assets/works/club-poster.png",
  },

  // ====================== 画像処理・インタラクション（研究室＝CG・画像処理・インタラクションに直結） ======================
  {
    slug: "death-comer",
    title: "Death カマー ― 身体で操る空間アクション",
    category: "imaging",
    summary: "プレイヤーが死神となり、大鎌を振って迫る敵を迎撃する全身体感型アクション。床のLiDARで現実の立ち位置を、手に持つM5Stickの動きで攻撃を検知し、壁・床への投影と連動させた体験型コンテンツ。",
    goal: "ボタン操作では得られない“全身を使った没入感”を、空間とプロジェクションで作り出す。",
    approach: "「移動は足（LiDARの位置測位）」「攻撃は手（M5Stickの6軸センサー）」と入力を物理的に分離して誤検知を解消。縦振り＝強攻撃・横振り＝範囲攻撃・静止＝防御を実装し、ウェーブ制（タイムアタック→ミッション→ボス）で構成。企画・ハード実装・C++/OpenGL描画まで個人制作（2000行超）。",
    tools: ["C++", "OpenGL", "LiDAR", "M5Stick"],
    thumb: "/assets/works/death-comer.jpg",
    video: "/assets/works/video/death-comer.mp4",
    featured: true,
  },
  {
    slug: "optical-flow",
    title: "オプティカルフロー可視化",
    category: "imaging",
    summary: "水中の魚群の動きをオプティカルフロー（Lucas-Kanade法）で推定し、動きの向きを色で可視化した映像。",
    goal: "映像の中の「動き」そのものを、目に見える形にする。",
    approach: "各フレームから特徴点を抽出して前後のフレーム間で追跡し、移動ベクトルの角度を8方向8色に分類して描画。群れの流れが色の帯として浮かび上がる。",
    tools: ["C++", "OpenCV"],
    thumb: "/assets/works/optical-flow.jpg",
    video: "/assets/works/video/optical-flow.mp4",
    featured: true,
  },
  {
    slug: "color-tracking",
    title: "色追跡とレインボー軌跡",
    category: "imaging",
    summary: "特定の色の物体をリアルタイムに検出して重心を追跡し、その軌跡を虹色で描く映像。",
    goal: "色を手がかりにした物体追跡を、見て楽しい形で実装する。",
    approach: "HSV色空間で対象色を抽出し、最大領域の重心を求めて追跡。中心座標の履歴をHSVで連続的に色変化させながら線でつなぎ、動きをレインボーの軌跡として残す。",
    tools: ["C++", "OpenCV"],
    thumb: "/assets/works/color-tracking.jpg",
    video: "/assets/works/video/color-tracking.mp4",
  },
  {
    slug: "anime-render",
    title: "アニメ・漫画風レンダリング",
    category: "imaging",
    summary: "実写映像をリアルタイムでアニメ調・漫画調に変換するフィルタ。",
    goal: "写真的な映像を、絵のような表現へ変換する。",
    approach: "バイラテラルフィルタで色を平滑化し、HSVの明度を数階調に量子化してセル画調の塗りを作成。ラプラシアンフィルタで抽出した輪郭線や網点（ハーフトーン）と合成すると漫画風になる。",
    tools: ["C++", "OpenCV"],
    thumb: "/assets/works/anime-render.jpg",
    video: "/assets/works/video/anime-render.mp4",
  },

  // ====================== Web・アプリ ======================
  {
    slug: "chuo-seisakusho",
    title: "中央製作所 採用サイト リデザイン",
    category: "web",
    summary: "学生・若手求職者に向けた企業採用サイトのリデザイン。サークル CEED のWEB班でのクライアント案件。",
    goal: "応募者が必要な情報にたどり着き、企業の魅力が伝わる導線にして応募数を増やす。",
    approach: "技術紹介ページの設計を担当。Figmaでレイアウトを組み、写真と文章の構成・撮影イメージをディレクション。電気／機械／化学の専門性を直感的に見せる構成にした。",
    tools: ["Figma", "Webデザイン"],
    thumb: "/assets/works/chuo-seisakusho.jpg",
    status: "進行中",
    featured: true,
  },
  {
    slug: "drone-note",
    title: "ドローン点検・飛行日誌アプリ",
    category: "web",
    summary: "無人航空機の飛行記録・点検・機体／操縦者管理を行う業務用アプリ。企業からの受託制作。",
    goal: "現場の点検と飛行記録をスマホひとつで完結できるようにする。",
    approach: "飛行記録／日常点検／点検整備／機体・操縦者管理、CSV・PDF出力、日の出・日の入り表示などを実装。",
    tools: ["React Native / Expo", "Firebase"],
    thumb: "/assets/works/drone.jpg",
    status: "受託制作",
    featured: true,
  },
  {
    slug: "yumiki-world",
    title: "推しサイト「YUMIKI WORLD」",
    category: "web",
    summary: "乃木坂46・弓木奈於さんのファンサイト。デザインと実装を一貫して担当。",
    goal: "好きな対象の魅力を、構成・配色・写真で伝えるWebサイトを作る。",
    tools: ["HTML", "CSS", "JavaScript"],
    thumb: "/assets/works/yumiki.png",
    featured: true,
    link: "/yumiki/",
  },
  {
    slug: "ceed-site",
    title: "CEED 公式サイト",
    category: "web",
    summary: "所属サークル CEED（愛知工業大学マルチクリエイティブサークル）の公式サイト。WEB班として構築を進行中。",
    tools: ["Webデザイン"],
    status: "公開予定",
  },
  {
    slug: "toka-club",
    title: "藤華クラブ 公式サイト",
    category: "web",
    summary: "中学軟式野球チームの公式サイト。Astro で制作中のクライアント案件。",
    tools: ["Astro"],
    status: "制作中",
  },
  {
    slug: "settlo",
    title: "Settlo（割り勘アプリ）",
    category: "web",
    summary: "グループの支払いを記録し精算する割り勘Webアプリ。Vue 3 と Firebase で開発中。",
    tools: ["Vue 3", "Firebase"],
    status: "制作中",
  },
  {
    slug: "meegri",
    title: "ミーグリ シミュレーター",
    category: "web",
    summary: "アイドルのミート＆グリート体験をシミュレートするWebアプリ。制作中。",
    tools: ["Web"],
    status: "制作中",
  },
  {
    slug: "nogi-photo",
    title: "NogiPhotoManager（iOSアプリ）",
    category: "web",
    summary: "生写真コレクションを管理するiOSアプリ。Swift で制作中。",
    tools: ["Swift", "iOS"],
    status: "制作中",
  },
];

export const featuredWorks = works.filter((w) => w.featured);
