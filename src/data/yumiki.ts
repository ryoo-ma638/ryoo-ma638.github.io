// =========================================================
// 「YUMIKI WORLD」コンテンツ（事実＋本人が書いた文章ベース）
// 出典: 旧 yumiki サイト（最終課題/yumiki/*.html）の本人記述。
// ※非公式ファンサイト。画像は引用、著作権尊重。ねつ造禁止。
// =========================================================

export const img = (f: string) => `/assets/yumiki/${f}`;

export const nav = [
  { href: "/yumiki/", label: "トップ", emoji: "✦" },
  { href: "/yumiki/profile", label: "プロフィール", emoji: "📖" },
  { href: "/yumiki/charm", label: "魅力", emoji: "✿" },
  { href: "/yumiki/memory", label: "思い出", emoji: "💭" },
  { href: "/yumiki/relations", label: "つながり", emoji: "🤝" },
  { href: "/yumiki/gallery", label: "写真", emoji: "📷" },
];

export const sns = [
  { label: "Instagram", href: "https://www.instagram.com/nao.yumiki_official/", icon: "instagram-icon.png" },
  { label: "X", href: "https://x.com/yumiki_1st", icon: "x-icon.png" },
  { label: "乃木坂ブログ", href: "https://www.nogizaka46.com/s/n46/diary/MEMBER/list?ct=55387", icon: "nogizaka-icon-square.png" },
];

export const profile = {
  name: "弓木 奈於",
  kana: "ゆみき なお",
  en: "YUMIKI NAO",
  facts: [
    { k: "生年月日", v: "1999年2月3日" },
    { k: "出身地", v: "京都府" },
    { k: "所属", v: "乃木坂46（4期生）" },
    { k: "ニックネーム", v: "ゆみっきー・なおちゃん・弓木ちゃん" },
    { k: "血液型", v: "A型" },
    { k: "星座", v: "みずがめ座" },
    { k: "身長", v: "165cm" },
    { k: "サイリウムカラー", v: "赤 × 黄緑" },
    { k: "趣味", v: "シルバニアファミリー、ドラマ鑑賞、料理、お笑い など" },
    { k: "特技", v: "水泳、バスケ、英語の発音" },
    { k: "家族構成", v: "7人兄弟の次女（弟は俳優・弓木大和）" },
  ],
  intro:
    "乃木坂46 4期生。京都府出身。天真爛漫なキャラクターと、バラエティ番組で見せる予測不能なトークで人気を集める一方、影での努力を惜しまない真摯な姿勢もファンから高く評価されています。",
};

export const timeline = [
  { date: "2013.6", text: "芸名「弓木 菜生」で劇団ハーベスト入団" },
  { date: "2017.7", text: "ミスiD2018 セミファイナリストに選出" },
  { date: "2018.8", text: "劇団ハーベスト卒団／坂道合同オーディション合格" },
  { date: "2019.9", text: "坂道研修生として活動開始" },
  { date: "2020.2", text: "乃木坂46への配属が発表" },
  { date: "2020.10", text: "『沈黙の金曜日』アシスタント就任" },
  { date: "2022.7", text: "30th「好きというのはロックだぜ!」で初選抜" },
  { date: "2023.4", text: "「水曜日のハウマッチ」ナレーター就任" },
  { date: "2023.10", text: "「ラヴィット！」金曜シーズンレギュラー出演" },
  { date: "2024.4", text: "35th「チャンスは平等」で初の福神入り" },
  { date: "2024.7", text: "写真集「天使だったのか」発売／オリコン書籍部門1位" },
  { date: "2025.1", text: "ドラマ「未恋」で初主演" },
  { date: "2025.6", text: "39th「Same Numbers」に選抜入り（10作連続）" },
  { date: "2026.4", text: "41st「最後に階段を駆け上がったのはいつだ？」に参加" },
  { date: "2026.5", text: "「B.L.T. 2026年5月号」にグラビア掲載" },
];

// 参加シングル（30thで初選抜、以降ずっと選抜入り）。画像は /assets/yumiki/singles/{no}.jpg を後日追加。
// タイトル・発売時期は公開情報。立ち位置は 30th=初選抜 / 35th=初福神 / 以降=選抜継続。
export const singles = [
  { no: 30, title: "好きというのはロックだぜ！", date: "2022.8", pos: "初選抜" },
  { no: 31, title: "ここにはないもの", date: "2022.12", pos: "選抜" },
  { no: 32, title: "人は夢を二度見る", date: "2023.3", pos: "選抜" },
  { no: 33, title: "おひとりさま天国", date: "2023.8", pos: "選抜" },
  { no: 34, title: "Monopoly", date: "2023.12", pos: "選抜" },
  { no: 35, title: "チャンスは平等", date: "2024.4", pos: "初福神" },
  { no: 36, title: "チートデイ", date: "2024.8", pos: "選抜" },
  { no: 37, title: "歩道橋", date: "2024.12", pos: "選抜" },
  { no: 38, title: "ネーブルオレンジ", date: "2025.3", pos: "選抜" },
  { no: 39, title: "Same numbers", date: "2025.7", pos: "選抜" },
  { no: 40, title: "ビリヤニ", date: "2025.11", pos: "選抜" },
  { no: 41, title: "最後に階段を駆け上がったのはいつだ？", date: "2026.4", pos: "選抜" },
];

// 軍団「首ンセス（くびんせす）」：2024年7月『乃木坂工事中』の新軍団ドラフトバトルで結成。軍団長＝弓木。
export const unit = {
  name: "首ンセス",
  reading: "くびんせす",
  formed: "2024年7月",
  origin: "『乃木坂工事中』の企画「新軍団ドラフトバトル」で結成された3軍団のひとつ。軍団長は弓木奈於。",
  song: "ユニット曲『君にDitto』（36thシングル『チートデイ』収録）",
  leader: { name: "弓木 奈於", role: "軍団長", gen: "4期生" },
  members: [
    { name: "筒井 あやめ", gen: "4期生" },
    { name: "五百城 茉央", gen: "5期生" },
    { name: "奥田 いろは", gen: "5期生" },
    { name: "川﨑 桜", gen: "5期生" },
  ],
};

// 人物相関：弓木さんのつながり（2026年6月時点・公開情報ベース・事実のみ）
// generations = 世代別の現役メンバー全員。bond があれば特に縁の深い人としてハイライト。
// groups = 卒業生・他グループ・番組など別枠のつながり。
export const relations = {
  generations: [
    {
      gen: "3期生", color: "var(--y-sky)",
      members: [
        { name: "伊藤 理々杏" },
        { name: "岩本 蓮加" },
        { name: "吉田 綾乃クリスティー" },
      ],
    },
    {
      gen: "4期生（同期）", color: "var(--y-pink)",
      members: [
        { name: "遠藤 さくら", bond: "2人旅『乃木坂、逅避行。』で島根・鳥取へ。4期生の思いを語り合う仲。" },
        { name: "賀喜 遥香", bond: "田村真佑との旅行トリオ。" },
        { name: "田村 真佑", bond: "賀喜遥香との旅行仲間。櫻坂46・中嶋優月とも交流。" },
        { name: "筒井 あやめ", bond: "軍団「首ンセス」をともに組む同期。" },
        { name: "黒見 明香", bond: "坂道研修生から弓木と同時配属の“新4期生”。" },
        { name: "林 瑠奈", bond: "“新4期生”の同期。" },
        { name: "金川 紗耶" },
        { name: "柴田 柚菜" },
      ],
    },
    {
      gen: "5期生", color: "var(--y-mint)",
      members: [
        { name: "五百城 茉央", bond: "軍団「首ンセス」のメンバー。" },
        { name: "奥田 いろは", bond: "軍団「首ンセス」のメンバー。" },
        { name: "川﨑 桜", bond: "軍団「首ンセス」のメンバー。" },
        { name: "池田 瑛紗" },
        { name: "一ノ瀬 美空" },
        { name: "井上 和" },
        { name: "岡本 姫奈" },
        { name: "小川 彩" },
        { name: "菅原 咲月" },
        { name: "冨里 奈央" },
        { name: "中西 アルノ" },
      ],
    },
    {
      gen: "6期生", color: "var(--y-lav)",
      members: [
        { name: "小津 玲奈", bond: "弓木さんを慕う後輩。雰囲気やトークのテンポが似ていると話題。" },
        { name: "愛宕 心響" },
        { name: "大越 ひなの" },
        { name: "海邉 朱莉" },
        { name: "川端 晃菜" },
        { name: "鈴木 佑捺" },
        { name: "瀬戸口 心月" },
        { name: "長嶋 凛桜" },
        { name: "増田 三莉音" },
        { name: "森平 麗心" },
        { name: "矢田 萌華" },
      ],
    },
  ],
  groups: [
    {
      group: "お世話になった先輩（卒業生）", color: "var(--y-butter)",
      people: [
        { name: "与田 祐希", role: "3期生（卒業）", note: "「祐希ちゃん」と呼び合う深い親交。卒業コンサートも見届けた特別な先輩。" },
        { name: "梅澤 美波", role: "前キャプテン（卒業）", note: "全国ツアーで「みんなで梅澤さんをギュッと」と呼びかけたエピソードも。" },
        { name: "久保 史緒里", role: "3期生（卒業）", note: "頼れる先輩としてお世話になった。" },
        { name: "早川 聖来", role: "4期生（卒業）", note: "賀喜・田村との旅行トリオの、もう一人の仲間だった。" },
        { name: "和田 まあや", role: "1期生（卒業）", note: "なんと高校の同級生。学生時代の思い出を共有する間柄。" },
      ],
    },
    {
      group: "他グループの友達", color: "var(--y-peach)",
      people: [
        { name: "中嶋 優月", role: "櫻坂46", note: "田村真佑とともに仲が良く、ツーショットも公開されている。" },
        { name: "大沼 晶保", role: "櫻坂46", note: "“トリッキーキャラ”の次世代バラドル仲間として並び称される存在。" },
        { name: "森本 茉莉", role: "日向坂46", note: "坂道研修生時代からの縁。同じく個性派の愛されキャラ。" },
      ],
    },
    {
      group: "番組でお世話になっている方々", color: "var(--y-sky)",
      people: [
        { name: "バナナマン", role: "乃木坂工事中 MC", note: "グループの冠番組。天然トークで何度も場を沸かせている。" },
        { name: "川島 明（麒麟）", role: "ラヴィット！ MC", note: "金曜レギュラーとして共演。コメント力を高く評価。" },
        { name: "アルコ&ピース 酒井 健太", role: "沈黙の金曜日 MC", note: "弓木とMCを担当。テンポのよい掛け合いが魅力。" },
      ],
    },
    {
      group: "ラヴィット！の先輩", color: "var(--y-mint)",
      people: [
        { name: "近藤 千尋", role: "ラヴィット！ 先輩", note: "明るい先輩方に可愛がられ、のびのびと共演している。" },
        { name: "若槻 千夏", role: "ラヴィット！ 先輩" },
        { name: "丸山 桂里奈", role: "ラヴィット！ 先輩" },
      ],
    },
  ],
};

export const shows = [
  { name: "乃木坂工事中", desc: "グループの冠番組で天然トークが炸裂" },
  { name: "沈黙の金曜日", desc: "アルコ&ピース酒井とMC。鋭いツッコミも話題" },
  { name: "ラヴィット！", desc: "TBS朝の人気バラエティ。明るさが光る" },
  { name: "東京パソコンクラブ", desc: "意外なITスキルを発揮" },
  { name: "未恋（ドラマ）", desc: "繊細な表情と自然な演技で初主演" },
];

// 本人が書いた「魅力」の文章
export const charms = [
  {
    tag: "弓木ワールド",
    title: "唯一無二の“弓木ワールド”へようこそ",
    img: "bg-world.jpg",
    body: [
      "デビュー時の自己紹介「京都府出身、はんなりすっとこどっこい」。この一言に彼女の全てが詰まっています。",
      "上品（はんなり）かと思えば、予測不能（すっとこどっこい）。この強烈なギャップこそ、人々を惹きつける「弓木ワールド」の入り口です。",
      "ネイティブ並みの発音の「Alligator🐊」、独特すぎる擬音、突拍子もない質問。すべては物事を純粋な目で見つめた結果生まれる、計算では作れない天然のエンターテインメントです。",
    ],
  },
  {
    tag: "会話力",
    title: "天才たちも唸る、生放送の魔術師",
    img: "bg-talk.jpg",
    body: [
      "『ラヴィット！』では料理中に突然「おひとりさま天国」を踊り出し、共演者を驚かせるなど、生放送での爆発力は折り紙付き。",
      "MCの麒麟・川島さんも認めるコメント力と対応力は、もはや「面白い」を超えた「才能」。トークのプロ相手でも物怖じせず、自分のペースに引き込みます。",
      "それは「造られたキャラ」ではなく、真っ直ぐな心で会話している何よりの証拠です。",
    ],
  },
  {
    tag: "努力家",
    title: "みんなのお姉さん的存在と、密かな努力",
    img: "bg-effort.jpg",
    body: [
      "7人兄弟の次女として培われた責任感と面倒見の良さ。グループの精神的支柱であり「姉さん」と慕われる理由は、その人間性にあります。",
      "その根底にあるのは、見えない場所での泥臭いまでの努力。『乃木坂工事中』で大反響を呼んだ怪談話も、「人を惹きつける話術」を磨いた努力の賜物です。",
    ],
  },
  {
    tag: "まとめ",
    title: "弓木が愛される、本当の理由",
    img: "bg-summary.jpg",
    body: [
      "なぜこれほど惹かれるのか——それは「アイドルらしからぬ無邪気さ」と「誰よりも頼れる人間力」という、究極のギャップにあります。",
      "その集大成が、ラジオから生まれ公式動画にまでなった「ドンストップエナジー」。意味不明な企画を最高のクオリティでやりきる姿は、まさに弓木奈於そのもの。",
      "面白くて、格好良くて、少しだけ謎。この魅力に気づいたら、もう応援するしかなくなるのです。",
    ],
  },
];

// 本人の思い出
export const memories = {
  lives: [
    { title: "真夏の全国ツアー2024", date: "2024.08.25 @ バンテリンドーム名古屋", img: "live_summer2024_goods.jpg",
      text: "人生初の全ツ参戦！席は遠かったけれど、ソロで抜かれた時の表情やMCでの一言で、終わる頃には完全に虜になっていた。" },
    { title: "与田祐希 卒業コンサート", date: "2024.02.22–23 @ 福岡PayPayドーム", img: "live_yoda_dome_outside.jpg",
      text: "与田ちゃんと弓木さんの過去の絡みで思わずもらい泣き。笑顔で卒業していく姿を最後まで見届けられてよかった。" },
    { title: "13th YEAR BIRTHDAY LIVE", date: "2025.05.17–18 @ 味の素スタジアム", img: "live_13th_stage.jpg",
      text: "乃木坂13周年！人気曲をノンストップで披露。自作うちわを作り、ファンサもたくさんもらえて最高の思い出に。" },
  ],
  meet: [
    { title: "38thシングル「ネーブルオレンジ」リアルミーグリ", date: "2025.05.06 @ ポートメッセなごや", img: "realkai_lane.jpg",
      text: "ついに来た対面の時！1〜4部すべて参戦。6期生の話や直近のライブの話などたくさん話せて幸せな1日でした。" },
  ],
  others: [
    { title: "真夏のデジタルスタンプラリー2024", text: "推しを追いかけた電車の旅！集めたスタンプ、コラボ車両との出会いなど道中のワクワクが印象的。", img: "event_stamp_rally.jpg" },
    { title: "東京ゲームショウ × 東京パソコンクラブ", text: "ゲームショウでたまたま「東パソ」ブースに遭遇！自作PC展示やスタッフとのトークで盛り上がった。", img: "event_tgs_pcclub.jpg" },
    { title: "感謝祭2024 ライブ配信", text: "お家で全力参戦。センター曲「君にDitto」をライブで初披露してくれた。", img: "streaming_nao_live.jpg" },
    { title: "乃木坂カフェ2024 @ パルコ栄店", text: "乃木坂一色の空間。グッズやコラボメニューで幸せなひととき。", img: "event_nogizaka_cafe.jpg" },
  ],
};

export const gallery = {
  photobook: {
    title: "1st 写真集『天使だったのか』",
    cover: "photobook_cover.jpg",
    text: "25歳の誕生日に夢が叶った一冊。「素の表情」をテーマにタイのプーケットとバンコクで撮影。大人びた表情から太陽のような笑顔まで、彼女の魅力が凝縮。タイトルは秋元康氏が命名し、「大人の色気とかわいらしさが同居する“天使”」という意味が込められています。",
    offshots: ["photobook_offshot_1.jpg","photobook_offshot_2.jpg","photobook_offshot_3.jpg","photobook_offshot_4.jpg","photobook_offshot_5.jpg","photobook_offshot_6.jpg"],
  },
  namashashin: [
    { label: "ヨリ", img: "namashashin_yori.jpg" },
    { label: "チュウ", img: "namashashin_chuu.jpg" },
    { label: "ヒキ", img: "namashashin_hiki.jpg" },
    { label: "座りヨリ", img: "namashashin_suwariyori.jpg", rare: true },
    { label: "座りチュウ", img: "namashashin_suwarichuu.jpg", rare: true },
  ],
  favs: ["fav_shot_01.jpg","fav_shot_02.jpg","fav_shot_03.jpg","fav_shot_04.jpg","fav_shot_05.jpg","fav_shot_06.jpg","fav_shot_07.jpg","fav_shot_08.jpg"],
};
