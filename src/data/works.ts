// =========================================================
// 作品データ（事実ベース・厳選）
// 出典: 各授業フォルダの成果物（ソース/レンダリング動画を確認）＋ x24231_portfolio.pdf。
// ※虚偽厳禁。「授業でやっただけ」の習作は載せず、見せられるものだけを厳選する方針。
// =========================================================

export type Category = "graphic" | "cg" | "imaging" | "web" | "planning";

export const categoryLabels: Record<Category, { ja: string; en: string; color: string }> = {
  graphic:  { ja: "グラフィック・ロゴ", en: "Graphic & Logo", color: "var(--accent)" },
  cg:       { ja: "CG・映像",          en: "CG & Video",    color: "var(--accent-2)" },
  imaging:  { ja: "画像処理・インタラクション", en: "Vision & Interaction", color: "var(--accent-3)" },
  web:      { ja: "Web・アプリ",        en: "Web & App",     color: "var(--c-blue)" },
  planning: { ja: "企画・発表",         en: "Planning & Slides", color: "var(--c-green)" },
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
  gallery?: string[];     // 複数画像（ライトボックスで拡大閲覧。スライド資料・スクショ等）
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
    summary: "1年次に学生チャレンジプロジェクトとして制作した体感型ゲーム。動物（カバ・チーター）の模型の歯を磨くと、ゲーム内の動きに反映されるインタラクティブ展示。",
    goal: "来場者（特に子ども）が直感的に楽しめる体験を、ハードウェアとデザインで実現する。",
    approach: "デザイン担当として発泡スチロールでカバ・チーターを造形。圧力センサーをレジンに埋め込み「模型の歯を磨く（触れる）とゲーム内が動く」ギミックを実装し、現実とデジタルを連動させた。東京ゲームショウ・ゲームマーケット・安城市Eフェスnext で出展。",
    status: "東京ゲームショー出展",
    thumb: "/assets/works/mushiba.jpg",
  },
  {
    slug: "mm2-cinematography",
    title: "映像制作 ― 構図とアクション繋ぎ",
    category: "cg",
    summary: "同じ被写体を「接写」と「望遠」で同じ大きさに見せ分け、複数カットをアクション繋ぎで1シーンにまとめた撮影・編集作品。",
    goal: "カメラワークと編集だけで、被写体の見え方と動きの流れをコントロールする。",
    approach: "三分割法・水平・アングルを意識して構図を設計。寄り（接写）と引き（望遠）で距離感を作り分け、動き出すタイミングでカットを切り替えるアクション繋ぎで一連の所作を一つのシーンに編集した。",
    tools: ["撮影", "Premiere Pro"],
    thumb: "/assets/works/mm2-cinematography.jpg",
    video: "/assets/works/video/mm2-cinematography.mp4",
  },
  {
    slug: "mv-short",
    title: "MV風ショート映像",
    category: "cg",
    summary: "時計の寄り、足元を追う移動ショット、人物の主観的なカットを組み合わせ、リズムとカット割りで“間”と時間の流れを演出したMV風のショート映像。",
    goal: "セリフに頼らず、構図・カット・テンポだけで雰囲気を伝える。",
    approach: "クローズアップ（時計）→ 追走（足元）→ 人物のカットを緩急をつけてつなぎ、シネマティックな比率（レターボックス）で画面を構成。撮影から編集までを担当した。",
    tools: ["撮影", "Premiere Pro"],
    thumb: "/assets/works/mv-tanpen.jpg",
    video: "/assets/works/video/mv-tanpen.mp4",
  },
  {
    slug: "manga-jitsuei",
    title: "漫画の実写化 ― 構図再現の映像",
    category: "cg",
    summary: "実在する漫画の構図を実写で再現するグループ制作。コマ割り・効果線の迫力を、カメラワークと編集でどう映像化するかに挑戦。",
    goal: "静止画である漫画の「迫力」を、動く映像の演出に翻訳する。",
    approach: "漫画の構図を16:9に変換し、望遠・接写で距離感を、アクション繋ぎと緩急で時間を演出。撮影はグループ、編集を担当。",
    tools: ["撮影", "Premiere Pro"],
    status: "制作中",
  },

  // ====================== グラフィック・ロゴ ======================
  {
    slug: "color-poster",
    title: "「光と色」ポスターシリーズ（加法・減法混色）",
    category: "graphic",
    summary: "RGBの光を重ねる加法混色、CMYのインクを重ねる減法混色を、理科の実験器具になぞらえて図解したポスター。可視光線の波長図とあわせた「光と色」のシリーズ。",
    goal: "色が生まれるしくみ（光の混色とインクの混色）を、ひと目で直感的に伝える。",
    approach: "加法混色はフラスコの中でRGBの光が白へ近づくイメージ、減法混色は試験管にCMYのインクが落ちて暗くなるイメージで対比。実験器具のモチーフと配色で、理屈を視覚的に体感できるよう構成した。",
    tools: ["Illustrator"],
    duration: "各2〜5時間",
    thumb: "/assets/works/color-additive.jpg",
    gallery: ["/assets/works/color-additive.jpg", "/assets/works/color-subtractive.jpg", "/assets/works/visible-light-poster.png"],
  },
  {
    slug: "character-design",
    title: "学科マスコット キャラクターデザイン",
    category: "graphic",
    summary: "メディア情報専攻のマスコット「メディーちゃん」「コンちゃん」を設計。",
    goal: "学科の役割（情報サポート／分析・プログラミング）をキャラに落とし込む。",
    approach: "各パーツに「情報処理」「トラブル対処」「発信力」を象徴するモチーフを配置。ノートPC＝冷静に頼れる情報端末、集中したまなざし＝デバッグ中、Wi-Fiマーク入りパーカー＝発信力、といった意味づけを一つずつ設計した。",
    tools: ["Illustrator"],
    duration: "約12時間",
    thumb: "/assets/works/character-poster.jpg",
    gallery: ["/assets/works/character-poster.jpg", "/assets/works/character-parts.jpg"],
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
    gallery: ["/assets/works/deathcomer-title.jpg", "/assets/works/deathcomer-boss.jpg", "/assets/works/deathcomer-rule.jpg", "/assets/works/deathcomer-scythe.jpg"],
    featured: true,
  },
  {
    slug: "shuwa-game",
    title: "手話認識ゲーム",
    category: "imaging",
    summary: "カメラに映した手話を認識して採点するゲームを実装。手と顔のランドマーク検出で、五十音や「ありがとう」「さようなら」などの手話をリアルタイムに判定する。",
    goal: "手の形・動きをコンピュータに認識させ、楽しく学べる“次世代の手話アプリ”をつくる。",
    approach: "MediaPipe の Hands / Face Mesh で指・顔の特徴点を取得し、各手話のポーズを判定するロジックを実装。初級（単音）・中級（フレーズ）・上級（ヒントなし）の難易度、ライブカメラへのランドマーク描画、制限時間とスコア、学習モード・手話辞典・成績確認（苦手な手話の集計）まで作り込んだ。実装とプレゼン資料を主に担当。",
    tools: ["Python", "MediaPipe", "OpenCV", "FreeSimpleGUI"],
    thumb: "/assets/works/shuwa-app-1.jpg",
    gallery: ["/assets/works/shuwa-slide.jpg", "/assets/works/shuwa-app-1.jpg", "/assets/works/shuwa-app-2.jpg", "/assets/works/shuwa-app-3.jpg", "/assets/works/shuwa-app-4.jpg"],
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
    summary: "ハッカソンで開発し企業賞を受賞した割り勘アプリ。グループの支払いを記録して精算できる。",
    goal: "支払いの記録と精算を、誰でも迷わず使えるシンプルなUIで実現する。",
    approach: "フロントエンド実装を早期に固めつつ、レシート読み込みなどのバックエンドも担当。発表の構成・登壇も引き受けた。この開発が評価され、外部企業からのドローンアプリ受託にもつながった。",
    tools: ["Vue 3", "Firebase"],
    status: "ハッカソン企業賞",
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
  {
    slug: "uriko-site",
    title: "売り子 応援サイト",
    category: "web",
    summary: "球場でのビール売り子としての活動を発信するWebサイトをHTML/CSS/JSで制作中。詳細は近日公開。",
    tools: ["HTML", "CSS", "JavaScript"],
    status: "制作中",
  },

  // ====================== 企画・発表（スライド制作・プレゼン・企画） ======================
  {
    slug: "presentation-slides",
    title: "プレゼン・スライド制作",
    category: "planning",
    summary: "事業発表やサークルの場で、伝わるスライドを数多く制作・登壇。情報の優先順位と見せ方を設計し、ストーリーで聴衆を引き込むことを重視している。",
    goal: "「何を・どの順で・どう見せるか」を設計し、内容の価値が伝わる発表にする。",
    approach: "CEEDの新入生向けプレゼンを一から制作したり、ワークショップ（Amazon Prime のCM構成分析など）の資料をデザイン。配色・余白・図解で視認性と説得力を両立させる。",
    tools: ["Keynote", "PowerPoint", "デザイン"],
    thumb: "/assets/works/ceed-slides.jpg",
    gallery: [...[1, 2, 3, 4, 5, 6].map((n) => `/assets/slides/nyu-${n}.jpg`), ...[1, 2, 3, 4, 5, 6].map((n) => `/assets/slides/ws-${n}.jpg`)],
  },
  {
    slug: "todofuken-battle",
    title: "都道府県バトル（教育カードゲーム）",
    category: "planning",
    summary: "実在の統計データ（経済力・面積・観光力）を強さに変換した2人対戦型の教育カードゲーム。実際にカード・説明書・パッケージまで印刷し、製品として形にしたチーム制作。",
    goal: "遊びながら日本の地理・経済を体感的に学べるコンテンツを、実際に手に取って遊べる形にする。",
    approach: "発表スライドとプレゼン構成、ルール改定・各都道府県の特殊能力設計、データ処理のPythonを担当（カードのグラフィックデザインは他メンバーが担当）。「運ゲー」から心理戦へとゲームバランスを再構築。各県のG（経済力）・M（面積）・K（観光力）を★で表し、名物にちなんだ特殊能力を設定。カード・説明書・ケースまで印刷して実物に仕上げた。",
    tools: ["Python", "プレゼン設計", "ゲーム企画"],
    status: "実物カード制作",
    thumb: "/assets/works/card-real.jpg",
    gallery: ["/assets/works/card-real.jpg", "/assets/works/card-kagawa.jpg", "/assets/works/card-all.jpg", "/assets/works/card-case.jpg"],
  },
];

export const featuredWorks = works.filter((w) => w.featured);
