// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub ユーザーサイト（ryoo-ma638.github.io）としてルート配信。
// → base 不要。/works や /yumiki/ などの絶対パスのリンクがそのまま動く。
// ポートフォリオ:  https://ryoo-ma638.github.io/
// 弓木サイト:      https://ryoo-ma638.github.io/yumiki/
export default defineConfig({
  site: 'https://ryoo-ma638.github.io',
  integrations: [
    // 作品ページ（/works/[slug]）を含む全ページを自動でサイトマップ化する。
    // 手書きの public/sitemap.xml は廃止（増減に追従しないため）。
    // 非公式ファンサイト（/yumiki）は noindex 方針なので除外。
    sitemap({
      filter: (page) => !page.includes('/yumiki'),
    }),
  ],
});
