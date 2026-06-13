// =========================================================
// 作品データ（事実ベース）
// 出典: x24231_portfolio.pdf（本人制作・制作意図記載）＋各授業フォルダの成果物。
// ※虚偽厳禁。画像/動画パスは public/assets 配下に後で配置する想定の暫定値。
// =========================================================

export type Category = "graphic" | "cg" | "imaging" | "web";

export const categoryLabels: Record<Category, { ja: string; en: string; color: string }> = {
  graphic: { ja: "グラフィック・ロゴ", en: "Graphic & Logo", color: "var(--accent)" },
  cg:      { ja: "CG・映像",          en: "CG & Video",    color: "var(--accent-2)" },
  imaging: { ja: "画像処理",          en: "Computer Vision", color: "var(--accent-3)" },
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
  // ---- CG・映像（最大の差別化要素） ----
  {
    slug: "shibuya-crossing",
    title: "渋谷スクランブル交差点 CG",
    category: "cg",
    summary: "リアルな街並みの再現と光の表現に挑戦したCG作品。",
    goal: "実在の風景を題材に、空間スケールと光のリアリティを出す。",
    approach: "建物配置と人流のスケール感、ライティングで都市の空気感を再現。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/01.png",
    video: "/assets/works/video/shibuya.mp4",
    featured: true,
  },
  {
    slug: "jojo-scene",
    title: "JOJO風シーンの3D再現",
    category: "cg",
    summary: "人気アニメの印象的なシーンを3Dで再構成。",
    goal: "構図と決めポーズの“間”をCGで表現する。",
    approach: "カメラアングルとライティングで原典の緊張感を再現。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/04.png",
  },
  {
    slug: "earth-rotation",
    title: "地球の回転 CG",
    category: "cg",
    summary: "昼夜の移ろいを表現した地球のアニメーション。",
    goal: "回転と陰影で時間の流れを感じさせる。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/08.png",
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
    slug: "live-stage",
    title: "ライブステージ CG",
    category: "cg",
    summary: "仮想のライブステージを題材にした空間演出のCG。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/02.png",
  },
  {
    slug: "glossy-reflection",
    title: "光沢反射のCG実験",
    category: "cg",
    summary: "物理ベースのライティングと光沢反射を検証した習作。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/03.png",
  },
  {
    slug: "amusement-ride",
    title: "遊園地アトラクション CG",
    category: "cg",
    summary: "動きとタイミングを合わせて表現したアトラクションのCG。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/05.png",
  },
  {
    slug: "sunrise-reflection",
    title: "日の出と反射 CG",
    category: "cg",
    summary: "空と水面のグラデーション・反射を表現したCG。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/06.png",
  },
  {
    slug: "ground-expansion",
    title: "地面の隆起・膨張 CG",
    category: "cg",
    summary: "操作に連動して地面が変化するインタラクティブなCG。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/07.png",
  },

  {
    slug: "mushiba-animals",
    title: "虫歯アニマルズ（東京ゲームショー出展）",
    category: "cg",
    summary: "サークル CEED が制作し東京ゲームショーに出展した体感型ゲーム。動物の口を模した造形コントローラで遊ぶインタラクティブ展示。",
    status: "東京ゲームショー出展",
    thumb: "/assets/works/mushiba.jpg",
  },

  // ---- グラフィック・ロゴ ----
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
    featured: true,
  },
  {
    slug: "additive-color",
    title: "加法混色ポスター",
    category: "graphic",
    summary: "RGBの光を重ねると白に近づく性質を、理科の実験器具風に表現。",
    tools: ["Illustrator"],
    duration: "約2時間",
    thumb: "/assets/works/additive.png",
  },
  {
    slug: "subtractive-color",
    title: "減法混色ポスター",
    category: "graphic",
    summary: "CMYの色が暗くなる性質を、インクと筆でビジュアル化。",
    tools: ["Illustrator"],
    duration: "約3時間",
    thumb: "/assets/works/subtractive.png",
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
    featured: true,
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
    slug: "business-card",
    title: "名刺デザイン",
    category: "graphic",
    summary: "自作ロゴを活かした名刺。緑の帯で情報を整理し、信頼感と親しみを両立。",
    approach: "色とレイアウトで信頼感を演出し、裏面ではロゴと連動したブランド感を表現。",
    tools: ["Illustrator"],
    duration: "約1時間",
    thumb: "/assets/works/business-card.png",
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

  // ---- 画像処理 / Computer Vision（3年・ディジタル映像処理／C++・OpenCV。研究室の専門に直結） ----
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
  {
    slug: "chroma-key",
    title: "クロマキー合成と映像変形",
    category: "imaging",
    summary: "緑背景の被写体を切り抜いて別の背景に合成し、回転・拡大などの変形を加える映像。",
    goal: "前景の切り抜き合成（クロマキー）と幾何変換を組み合わせる。",
    approach: "HSVで緑領域をマスク化して前景だけを抽出し、別の背景に重ねて合成。アフィン変換で前景を回転・拡大させ、時間とともに動く合成映像を生成した。",
    tools: ["C++", "OpenCV"],
    thumb: "/assets/works/chroma-key.jpg",
    video: "/assets/works/video/chroma-key.mp4",
  },
  {
    slug: "shape-detection",
    title: "図形・輪郭の検出",
    category: "imaging",
    summary: "映像から動く領域を取り出し、輪郭を検出して図形ごとに色分け表示する。",
    goal: "画像の中から「もの」の領域と形を取り出す。",
    approach: "背景差分で動いた領域を二値化し、findContours で輪郭を抽出。面積や円形度でノイズを除き、各図形を黒背景にその色で描画する。",
    tools: ["C++", "OpenCV"],
    thumb: "/assets/works/shape-detection.jpg",
    video: "/assets/works/video/shape-detection.mp4",
  },
  {
    slug: "image-processing",
    title: "画像処理の基礎（Python・OpenCV）",
    category: "imaging",
    summary: "2年次にPython＋OpenCVで画像処理の基礎（二値化・フィルタ・色変換など）を学び、3年次のディジタル映像処理（C++）へと発展させた土台。",
    goal: "研究室（CGメディア）の専門に直結する画像・動画処理の実装力をつける。",
    tools: ["Python", "OpenCV"],
    thumb: "/assets/works/imgproc.png",
  },

  // ---- Web ----
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
    slug: "web-programming",
    title: "Webプログラミング作品集（JavaScript）",
    category: "web",
    summary: "授業で制作したインタラクティブなWeb作品集。疑似3Dレース・レイトレーシング・各種パズルなどをJavaScriptで実装。",
    approach: "箱入り娘・ハノイの塔・ライツアウト・Hit&Blow・疑似3Dレース・簡易レイトレーシング・画像二値化ツールなど、アルゴリズムと描画をブラウザ上で実装した。",
    tools: ["HTML", "CSS", "JavaScript"],
    thumb: "/assets/works/webpro.jpg",
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

  // ---- 制作中（枠組み・今後公開）----
  {
    slug: "settlo",
    title: "Settlo（割り勘アプリ）",
    category: "web",
    summary: "グループの支払いを記録し精算する割り勘Webアプリ。Vue 3 と Firebase で開発中。",
    tools: ["Vue 3", "Firebase"],
    status: "制作中",
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
