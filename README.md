# ポートフォリオ Vol.1（旧版）

**Osaki Ryoma — Portfolio & YUMIKI WORLD**

> つくって、光を放つ。

大崎稜馬（おおさき りょうま）のポートフォリオサイト。
愛知工業大学 情報科学部 情報科学科 メディア情報専攻／水野慎士研究室（CG・画像処理・インタラクション）。

[Vol.1の公開版](https://ryoo-ma638.github.io/vol1/) · [現行ポートフォリオ Vol.3](https://osaki-ryoma-portfolio.vercel.app/)

名刺QRで使っているルートURL `https://ryoo-ma638.github.io/` は、現行のVol.3へ転送します。このリポジトリではVol.1とYUMIKI WORLDを公開しています。

大学生活で実際に手がけた作品を、7つの分野で横断的にまとめています：

**Web・アプリ／画像処理・インタラクション／CG・3D／映像／企画・発表／グラフィック・ロゴ／サウンド・音楽**

分野ごとに色を割り当て、サイト全体を可視光線スペクトラム（虹）で貫く配色をアイデンティティにしています。

## サイト構成

**ポートフォリオ本体**

| ページ | 内容 |
|---|---|
| `/vol1/` | Vol.1のトップ（ヒーロー＋代表作） |
| `Works` | 分野別のケーススタディ（狙い・工夫・使用ツール・制作時間） |
| `About` | プロフィール・活動・使用ツール |
| `CEED` | サークル CEED（副部長）での発表・イベント企画・WEB 制作 |
| `Contact` | 連絡先 |

**推しサイト「YUMIKI WORLD」**（`/yumiki/`）

- 乃木坂46・弓木奈於さんの非公式ファンサイト（noindex・非営利）
- トップ／プロフィール／魅力／思い出／つながり／ことば の 6 ページ

## 技術

- **Astro**（静的サイト生成）＋ HTML / CSS / TypeScript
- 共通レイアウトをコンポーネント化（Header / Footer / Lightbox など）
- 動画・音源・画像は遅延読み込み（`preload="none"` ＋ IntersectionObserver）で軽量化
- Webフォントは自前配信（サブセット化した woff2・太さごとに必要な文字だけ）
- **GitHub Pages**：`main` への push で GitHub Actions が自動デプロイ

## ローカル開発

```bash
npm install
npm run dev      # 開発サーバを起動
npm run build    # 本番ビルド（dist/ に静的出力）
npm run preview  # ビルド結果をプレビュー
npm run fonts:usage  # 太さごとの実使用文字を dist から集める（要: ビルド済み）
npm run fonts    # Webフォントのサブセット再生成（文字を足したら build → fonts:usage → fonts）
```

## プロジェクト構成

```
src/
├─ components/   共通部品（Header, Footer, Lightbox …）
├─ data/         作品・コンテンツのデータ（works.ts, yumiki.ts …）
├─ layouts/      ベースレイアウト
├─ pages/        各ページ（/ , /works , /about , /ceed , /contact , /yumiki/* …）
└─ styles/       デザインシステム（配色トークン・タイポ・ダーク/ライト）
public/assets/   画像・動画・音源などのアセット
```

## ライセンス・権利について

- 本リポジトリのコード・デザインは大崎稜馬の個人ポートフォリオです。
- 受託案件の紹介は、案件ごとに公開できる範囲に限っています。
- 「YUMIKI WORLD」は個人が趣味で制作した**非公式ファンサイト**（非営利・`noindex`）です。弓木奈於さん（乃木坂46）の氏名・肖像・楽曲・映像・写真等に関する権利は、ご本人および所属事務所・レコード会社等の各権利者に帰属します。ファンとしての紹介を目的としており、権利者からのご連絡があれば速やかに対応します。

---

© Osaki Ryoma

