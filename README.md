# Osaki Ryoma — Portfolio

> つくって、光を放つ。

大崎稜馬（おおさき りょうま）のポートフォリオサイト。
愛知工業大学 情報科学部 情報科学科 メディア情報専攻／水野慎士研究室（CG・画像処理・インタラクション）。

🌐 **公開サイト → https://ryoo-ma638.github.io/**

大学生活で実際に手がけた作品を、7つの分野で横断的にまとめています：

**Web・アプリ／画像処理・インタラクション／CG・3D／映像／企画・発表／グラフィック・ロゴ／サウンド・音楽**

分野ごとに色を割り当て、サイト全体を可視光線スペクトラム（虹）で貫く配色をアイデンティティにしています。

## サイト構成

**ポートフォリオ本体**

| ページ | 内容 |
|---|---|
| `Home` | ヒーロー＋代表作（Bento グリッド） |
| `Works` | 分野別のケーススタディ（狙い・工夫・使用ツール・制作時間） |
| `About` | プロフィール・活動・使用ツール |
| `CEED` | サークル CEED（副部長）での発表・イベント企画・WEB 制作 |
| `Contact` | 連絡先 |

**推しサイト「YUMIKI WORLD」**（`/yumiki/`）

- 乃木坂46・弓木奈於さんの非公式ファンサイト（noindex・非営利）
- トップ／プロフィール／魅力／思い出／つながり／ことば の 6 ページ

## 技術

- **Astro**（静的サイト生成）＋ HTML / CSS / TypeScript
- 共通レイアウトをコンポーネント化（Header / Footer / WorkModal / Lightbox など）
- 動画・音源・画像は遅延読み込み（`preload="none"` ＋ IntersectionObserver）で軽量化
- **GitHub Pages**：`main` への push で GitHub Actions が自動デプロイ

## ローカル開発

```bash
npm install
npm run dev      # 開発サーバを起動
npm run build    # 本番ビルド（dist/ に静的出力）
npm run preview  # ビルド結果をプレビュー
```

## プロジェクト構成

```
src/
├─ components/   共通部品（Header, Footer, WorkModal, Lightbox …）
├─ data/         作品・コンテンツのデータ（works.ts, yumiki.ts …）
├─ layouts/      ベースレイアウト
├─ pages/        各ページ（/ , /works , /about , /ceed , /contact , /yumiki/* …）
└─ styles/       デザインシステム（配色トークン・タイポ・ダーク/ライト）
public/assets/   画像・動画・音源などのアセット
```

## ライセンス・権利について

- 本リポジトリのコード・デザインは大崎稜馬の個人ポートフォリオです。
- 受託案件は守秘に配慮し、画像のみ掲載・クライアント情報（社名・URL・拠点等）は非掲載としています。
- 「YUMIKI WORLD」は個人制作の非公式ファンサイト（非営利）であり、関連する楽曲・写真等の著作権は各権利者に帰属します。

---

© Osaki Ryoma
