// =========================================================
// 作品データ（事実ベース・厳選）
// 出典: 各授業フォルダの成果物（ソース/レンダリング動画を確認）＋ x24231_portfolio.pdf。
// ※虚偽厳禁。「授業でやっただけ」の習作は載せず、見せられるものだけを厳選する方針。
// =========================================================

export type Category = "graphic" | "cg" | "imaging" | "web" | "planning" | "sound";

// 分野＝色（プリズムで分光した1分野＝1色のスペクトル・マップ）。6分野すべて別色にして、
// サムネ・タグ・番号・フィルタで一貫して使う＝「色々な色＝色々な分野に手を出している」を視覚化する。
export const categoryLabels: Record<Category, { ja: string; en: string; color: string }> = {
  graphic:  { ja: "グラフィック・ロゴ", en: "Graphic & Logo", color: "var(--c-violet)" },
  cg:       { ja: "CG・映像",          en: "CG & Video",    color: "var(--c-red)" },
  imaging:  { ja: "画像処理・インタラクション", en: "Vision & Interaction", color: "var(--c-cyan)" },
  web:      { ja: "Web・アプリ",        en: "Web & App",     color: "var(--c-blue)" },
  planning: { ja: "企画・発表",         en: "Planning & Slides", color: "var(--c-green)" },
  sound:    { ja: "サウンド・音楽",      en: "Sound & Music", color: "var(--c-orange)" },
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
  audio?: { title: string; src: string; note?: string }[]; // 試聴用の音源（モーダルにプレイヤー表示）
  slideGroups?: { title: string; images: string[] }[];     // 発表/種類ごとに分けた横スクロールのスライド群
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
    thumb: "/assets/works/shibuya-cg.jpg",
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
    slug: "robot-argus",
    title: "オリジナル3DCGロボット",
    category: "cg",
    summary: "Mayaでモデリングからアニメーションまで手がけた、オリジナルのヒーロー型ロボット。ジャンプ・キックのアクションを付け、After Effectsで青空を舞う空中シーンに仕上げた。",
    goal: "一体のキャラクターを、デザインからモデリング・動きまで一貫して作り上げる。",
    approach: "頭部センサー・背面装甲・脚部機構などのディテールを設計し、Mayaでモデリング〜リギング〜アニメーション。仕様や設定資料まで作り込んだうえで、After Effectsで青空を背景にした空中アクションのカットに仕上げた。",
    tools: ["Maya", "After Effects"],
    thumb: "/assets/works/robot-argus.jpg",
    video: "/assets/works/video/robot-argus.mp4",
    gallery: ["/assets/works/robot-slide-1.jpg", "/assets/works/robot-slide-2.jpg"],
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
    thumb: "/assets/works/jojo-kars.jpg",
    video: "/assets/works/video/jojo-kars.mp4",
  },
  {
    slug: "live-stage",
    title: "ライブ会場の紙吹雪演出",
    category: "cg",
    summary: "3Dのライブ会場に無数の紙吹雪が舞う瞬間を演出。ステージと花道を見下ろす構図で、クライマックスの華やかさを表現。",
    goal: "物体移動アニメーションを使って、ライブのクライマックスの高揚感を作り出す。",
    approach: "大量の紙吹雪に一つずつ速度と回転を与えて舞い落とし、色とりどりに散らす。ステージ・花道・客席を配置し、上空からの構図でスケール感を出した。",
    tools: ["C++", "OpenGL / GLUT"],
    thumb: "/assets/works/ls-render-1.jpg",
    video: "/assets/works/video/livestage.mp4",
    slideGroups: [
      { title: "完成レンダリング（こんな感じです）", images: ["/assets/works/ls-render-1.jpg", "/assets/works/ls-render-2.jpg", "/assets/works/ls-render-3.jpg"] },
    ],
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
    slug: "manga-jitsuei",
    title: "漫画「ひゃくえむ。」再現映像 ― 全力疾走のワンシーン",
    category: "cg",
    summary: "魚豊の漫画「ひゃくえむ。」（100m走に人生を懸ける物語）の走るシーンを実写で再現した映像。スタート前の緊張から全力疾走、こみ上げる感情までを構図とカット割りで再構成した。",
    goal: "静止画である漫画の「疾走感」と「熱量」を、実写の映像演出に翻訳する。",
    approach: "原作の象徴的な走りの場面をモチーフに、時計の寄りで緊張を、低いアングルの追走ショットでスピード感を、人物の表情のカットで感情のピークを表現。シネマティックな比率（レターボックス）でまとめ、撮影から編集までを担当した。",
    tools: ["撮影", "Premiere Pro"],
    thumb: "/assets/works/hyakuemu.jpg",
    video: "/assets/works/video/hyakuemu.mp4",
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
    slideGroups: [
      { title: "アプリの画面", images: ["/assets/works/shuwa-app-1.jpg", "/assets/works/shuwa-app-2.jpg", "/assets/works/shuwa-app-3.jpg", "/assets/works/shuwa-app-4.jpg"] },
      { title: "開発レポート（発表スライド）", images: ["/assets/works/shuwa-rep-1.jpg", "/assets/works/shuwa-rep-2.jpg", "/assets/works/shuwa-rep-3.jpg", "/assets/works/shuwa-rep-4.jpg", "/assets/works/shuwa-rep-5.jpg"] },
    ],
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
    summary: "ドローン点検事業を行う企業からの受託制作。無人航空機の飛行記録・日常点検・点検整備をスマホひとつで記録し、飛行日誌をPDF/CSVで出力できる業務用アプリ。PC・スマホ両対応。",
    goal: "現場の点検と飛行記録を“その場でスマホ完結”にし、法定の飛行日誌づくりの手間をなくす。",
    approach: "飛行記録／日常点検／点検整備の登録・編集、機体管理・操縦者管理（総飛行時間・回数を自動集計）、飛行予定の通知、離陸地点の住所自動入力と日の出・日の入り表示を実装。オフライン保存とクラウド同期を両立し、飛行日誌様式のPDF一括出力・記録のCSV出力にも対応。React Native(Expo)＋Firebase で、1つのコードからPC・スマホ両対応のアプリとして納品した。",
    tools: ["React Native / Expo", "Firebase", "TypeScript"],
    thumb: "/assets/works/drone-home.jpg",
    status: "受託制作",
    slideGroups: [
      { title: "アプリ画面（PC）", images: ["/assets/works/drone-home.jpg", "/assets/works/drone-records.jpg", "/assets/works/drone-form.jpg", "/assets/works/drone-operators.jpg"] },
      { title: "アプリ画面（スマホ）", images: ["/assets/works/drone-m-home.jpg", "/assets/works/drone-m-drawer.jpg"] },
    ],
    featured: true,
  },
  {
    slug: "yumiki-world",
    title: "推しサイト「YUMIKI WORLD」",
    category: "web",
    summary: "乃木坂46・弓木奈於さんの魅力を、ファン目線でめいっぱい詰め込んだ非公式ファンサイト。「推し活ノート」のようなスクラップブックの世界観で、トップ・プロフィール・魅力・思い出・つながり（相関図）・ことばの全6ページを一冊にまとめた。デザインから実装まで一人で手がけ、Astro で構築している。",
    goal: "「好き」という気持ちを、そのままWebの体験に。弓木さんの魅力が、初めて知る人にも自然と伝わるサイトをめざした。（非公式ファンサイトとして、著作権・肖像権に配慮して制作）",
    approach: "ポートフォリオ本体のダーク基調とは対照的に、クリーム色×パステルの“可愛い別世界”を全面設計。チェキ・マスキングテープ・付箋・方眼ノートを共通部品化し、全ページで一貫した「推し活ノート」の手触りに。線で結ぶ人物相関図、チケット半券風のライブ年表、名場面コラージュ、写真のライトボックス、誕生日カウントダウン、隠しハート集めなど「めくって楽しい」仕掛けを実装。情報は読みやすく整理しつつ、推し活ならではの高揚感を表現した。",
    slideGroups: [
      { title: "トップ — 「推し活ノート」を開く入口。流れる見出し・誕生日カウントダウン・チェキ風インデックス", images: ["/assets/works/yumiki/top.jpg", "/assets/works/yumiki/nav.jpg"] },
      { title: "つながり — 線で結ぶ人物相関図。関係を色分けし、タップでエピソードが開く", images: ["/assets/works/yumiki/relations.jpg"] },
      { title: "思い出 — チケット半券風のライブ年表と、手書き風の現場レポ", images: ["/assets/works/yumiki/memory.jpg"] },
      { title: "魅力 — 名場面を絵文字シールのコラージュで。公式動画にもリンク", images: ["/assets/works/yumiki/charm.jpg"] },
      { title: "ことば — 本人の発言を、付箋・吹き出し・便箋で読ませる", images: ["/assets/works/yumiki/words.jpg"] },
      { title: "プロフィール — レコード棚のディスコグラフィーと1st写真集", images: ["/assets/works/yumiki/discography.jpg", "/assets/works/yumiki/photobook.jpg"] },
    ],
    tools: ["Astro", "HTML", "CSS", "JavaScript"],
    thumb: "/assets/works/yumiki.jpg",
    featured: true,
    link: "/yumiki/",
  },
  {
    slug: "meegri",
    title: "ミーグリ練習シミュレーター「meegri」",
    category: "web",
    status: "公開中・開発中",
    summary: "坂道系の「ミーグリ（オンライン・ミート＆グリート）」を、本番そっくりに練習できるWebアプリ。持ち時間・通信ラグ・時間切れ・緊張、そしてアイドルの機嫌や反応までリアルに再現。架空のオリジナルキャラと、AIによる自然な会話で“場数”を踏める。企画・デザイン・実装をすべて一人で手がけている。",
    goal: "本番のミーグリは一瞬で緊張して、頭が真っ白になりがち。だからこそ、事前に“場数”を踏める場をつくりたかった。初めての人でも安心して練習でき、何を話すか・どう振る舞うかを体で覚えられる体験をめざした。（登場キャラは実在の人物・団体とは無関係の架空オリジナル）",
    approach: "単一HTML・ビルド不要の軽量構成。背景はWebGL/GLSLシェーダー、アイドルはインラインSVGの立ち絵（まばたき・口パク・呼吸）で表現。会話は2段構え＝内蔵の「台本＋ルール」エンジンを基本に、Gemini による本物のAI会話・AI講評を上乗せし、失敗時は自動で台本へフォールバック。APIキーはサーバー側だけに置き、フロントには一切出さない設計。機嫌システム・会話メモリ・エンディング図鑑（全23種）・本番リハーサル・端末内で完結するカメラ（録画/送信なし）まで実装。UI/UXはApple HIG・Material 3・8ptグリッド等を調べ、デザイントークンで体系化した。",
    slideGroups: [
      { title: "ホーム — 相手・チケット・難易度をスキャンしやすい3カードUI（デザイントークンで体系化）", images: ["/assets/works/meegri/home.jpg"] },
      { title: "本番（通話） — 推しの立ち絵×WebGL背景と、Geminiによる自然なAI会話。持ち時間・通信ラグ・機嫌までリアルに", images: ["/assets/works/meegri/call.jpg"] },
      { title: "結果・AI講評 — 会話全体をAIが採点（スコア／ランク／良かった点／助言）", images: ["/assets/works/meegri/result.jpg"] },
      { title: "エンディング図鑑 — 全23種（通常/特殊/シークレット）＋コンプ率で“もう一回”を誘う", images: ["/assets/works/meegri/zukan.jpg"] },
    ],
    tools: ["JavaScript", "WebGL / GLSL", "Node.js", "Gemini API"],
    thumb: "/assets/works/meegri.jpg",
    link: "https://meegri.vercel.app/",
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
    summary: "バンテリンドームナゴヤでのビールの売り子活動を、もっと知ってもらうために制作した個人サイト。『「応援したくなる」を、めざして。』をテーマに、活動の紹介・おしながき・うりこ日記などを、明るくポップな世界観でまとめた。デザインから実装まで、Web制作を学びながら手がけた一枚。",
    goal: "ビールの売り子という活動をより多くの人に知ってもらい、球場での時間をもっと楽しんでもらうこと。Webでの発信を通じて、活動のイメージアップにつなげる。",
    approach: "初めて訪れた人にも雰囲気が伝わるよう、親しみやすくポップな世界観で統一。活動紹介・おしながき・うりこ日記・キャッシュレス決済の案内などを、見やすく一枚に構成した。HTML / CSS / JavaScript でデザインから実装まで対応。",
    slideGroups: [
      { title: "トップ — 『「応援したくなる」を、めざして。』", images: ["/assets/works/uriko/top.jpg"] },
      { title: "ABOUT — 1年目・ピンクのユニフォームの自己紹介", images: ["/assets/works/uriko/about.jpg"] },
      { title: "MY STORY — 状況→行動→結果で見せる、はじめかた", images: ["/assets/works/uriko/story.jpg"] },
      { title: "おしながき — メニューとキャッシュレス決済の案内", images: ["/assets/works/uriko/menu.jpg"] },
      { title: "うりこ日記 — 球場・道具・オフの日のこと", images: ["/assets/works/uriko/note.jpg"] },
    ],
    tools: ["HTML", "CSS", "JavaScript"],
    thumb: "/assets/works/uriko.jpg",
    link: "https://uriko-v-dome-ryoma.vercel.app",
  },

  // ====================== 企画・発表（スライド制作・プレゼン・企画） ======================
  {
    slug: "presentation-slides",
    title: "プレゼン・スライド制作",
    category: "planning",
    summary: "発表やサークルの場で制作・登壇したスライド。ここでは代表的な2つ ―『CEED新入生説明会』と『Amazon Prime CM分析ワークショップ』― を、発表ごとに分けて横スクロールで紹介する。情報の優先順位と見せ方を設計し、ストーリーで聴衆を引き込むことを重視。",
    goal: "「何を・どの順で・どう見せるか」を設計し、内容の価値が伝わる発表にする。",
    approach: "『新入生説明会』は活動の魅力が一番に伝わる構成を一から設計。『ワークショップ』はAmazon PrimeのCM構成を分析するテーマで、配色・余白・図解を整理。いずれも視認性と説得力の両立を狙った。",
    tools: ["Keynote", "PowerPoint", "デザイン"],
    thumb: "/assets/works/ceed-slides.jpg",
    slideGroups: [
      { title: "CEED 新入生説明会", images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/slides/nyu-${n}.jpg`) },
      { title: "Amazon Prime CM分析ワークショップ", images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/slides/ws-${n}.jpg`) },
    ],
  },
  {
    slug: "todofuken-battle",
    title: "都道府県バトル（教育カードゲーム）",
    category: "planning",
    summary: "日本の都道府県を題材にした2人対戦型の教育カードゲーム（チーム名「ビタミンB」4人で制作）。各県の経済力・面積・観光力を実在データから★に変換し、特殊能力で駆け引きする。カード・説明書・ケースまで印刷し、製品として完成させた。",
    goal: "遊びながら地理・経済・観光を学べて、しかも運任せでなく“戦略”で勝てるゲームにする。",
    approach: "全7ラウンド制で、毎ラウンド G（経済力）・M（面積）・K（観光力）のどれで勝負するかを“前ラウンドの敗者”が選べる読み合いが核。16県それぞれに「愛知＝ものづくり一筋」「京都＝古都の風格」など土地にちなんだ特殊能力を設定した。初期版は運要素が強く能力も複雑だったため、1カード1能力への統一・カードを10→16枚へ拡張・テストプレイ反復でバランスを再構築。僕は発表資料／プレゼン構成と各県の特殊能力の設計＋データ処理を担当（カードのグラフィックは他メンバー）。",
    tools: ["プレゼン設計", "ゲーム企画", "Python"],
    status: "実物カード制作",
    thumb: "/assets/works/card-real.jpg",
    slideGroups: [
      { title: "どんなゲーム？（発表スライド）", images: [1, 2, 3, 4, 5, 6, 7].map((n) => `/assets/works/card-slide-${n}.jpg`) },
      { title: "カードのデザイン（表・裏・全16枚・能力一覧）", images: ["/assets/works/card-kagawa.jpg", "/assets/works/card-back.jpg", "/assets/works/card-all.jpg", "/assets/works/card-abilities.jpg"] },
      { title: "説明書（ルールブック）", images: ["/assets/works/card-manual-1.jpg", "/assets/works/card-manual-2.jpg"] },
      { title: "カードケースのデザイン", images: ["/assets/works/card-case-front.jpg", "/assets/works/card-case-back.jpg"] },
    ],
  },

  // ====================== サウンド・音楽（DTM／アレンジ） ======================
  {
    slug: "sound-arrange",
    title: "楽曲アレンジ（DTM・GarageBand）",
    category: "sound",
    summary: "好きなアイドル楽曲を GarageBand で耳コピ・アレンジしたDTM作品。ピアノ・ストリングス・サックス・ギター・ドラムを重ね、原曲の雰囲気を残しつつ自分なりの編曲に仕上げた。（原曲の著作権は各権利者に帰属／学習目的の非商用アレンジ）",
    goal: "原曲を聴き取って各パートを打ち込み直し、“伝わる”アレンジに再構成する。",
    approach: "コード進行とメロディを耳コピし、ピアノロールで各楽器を打ち込み。テンポ・音色・ミックスを調整して、原曲の良さを保ちながら自分の解釈を加えた。",
    tools: ["GarageBand", "DTM・打ち込み"],
    thumb: "/assets/works/sound-garageband.jpg",
    gallery: ["/assets/works/sound-garageband.jpg"],
    audio: [
      { title: "君にDitto", src: "/assets/audio/arrange-kimi-ni-ditto.mp3", note: "乃木坂46 楽曲のアレンジ" },
      { title: "条件反射で泣けてくる", src: "/assets/audio/arrange-jokenhansha.mp3", note: "櫻坂46 楽曲のアレンジ" },
    ],
    status: "アレンジ音源",
  },
];

export const featuredWorks = works.filter((w) => w.featured);
