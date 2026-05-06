---
layout: content
title: Resume - 斎藤 健二
permalink: /resume/adobe-senior-sde-jp/
---

# 斎藤　健二

[English](/resume/adobe-senior-sde/)

[ポートフォリオ](https://www.kenji-special.info/) ｜ [GitHub](https://github.com/kenjiSpecial) ｜ [LinkedIn](https://www.linkedin.com/in/kenji-saito-5a327340) ｜ k.saito.1985@gmail.com

---

## サマリー

フロントエンドエンジニアとして 13 年の経験を積んできた。WebGL / Three.js を中心とした 3D・インタラクティブ開発を主軸に、ドイツ・アメリカ・オランダ・日本の 7 社で、プロダクトの設計から実装・運用までを一貫して担当。シェーダー・行列演算・アフィン変換といった線形代数も日常的に扱ってきた。WebGL の理解を深めるため、自作の軽量フレームワーク dan-shari-gl を npm に公開している。直近の NOT A HOTEL では Claude Code や Figma MCP を中心にした AI 駆動の開発フローづくりに取り組んでいる。

日本語ネイティブ／英語ビジネスレベル。

---

## 職務経歴

### NOT A HOTEL 株式会社（2025年5月〜現在）

**フロントエンドエンジニア**（2025年5-6月 業務委託、2025年7月〜 フルタイム） ／ [notahotel.com](https://notahotel.com/)

- React / Next.js / Astro による 10 以上のサイト開発
- Google Cloud・Cloudflare を中心としたインフラの設計・管理
- Claude Code と Figma MCP を組み合わせた AI 駆動の開発フローを構築し、デザインから実装・フィードバックまでのリードタイムを大きく短縮
- AI によるデプロイ頻度の増加を見越して Next.js から Astro への移行を主導

使用技術: TypeScript, React, Next.js, Astro, Google Cloud, Cloudflare, Docker, Claude Code, Figma MCP

### Industry One 株式会社（2021年11月〜2022年12月）

**マネージャー** ／ 三菱商事子会社、DX コンサルティング ／ [industry-one.com](https://www.industry-one.com/)

- 開発・デザインチームの立ち上げ・採用
- クライアント向けアプリ・ウェブサイトのデザイン・開発

### 日本経済新聞社（2018年11月〜2021年10月）

**エンジニア** ／ [nikkei.com](https://www.nikkei.com/)

- ウェブ向けインタラクティブニュースコンテンツの作成・開発
- データビジュアライゼーションコンテンツの作成・開発
- フォトグラメトリー、AR など新技術を用いた試作

### Superhero Cheesecake（オランダ・2016年12月〜2018年10月）

**WebGL Developer** ／ [superherocheesecake.com](https://www.superherocheesecake.com/)

- クライアント向け WebGL コンテンツ開発・プロジェクトリード
- Web ゲームの技術選定・チームリード
- Three.js / WebGL を用いた 3D コンテンツ開発（行列演算・アフィン変換を日常的に使用）
- FWA / Awwwards 受賞案件に参画

### Watson.la（アメリカ・2015年7月〜2016年11月）

**Creative Developer** ／ [watson.la](https://watson.la/)

- 映画・ゲームのプロモーションサイト、ゲームのフロントエンド・WebGL 開発
- Oculus 向け VR コンテンツの試作

### tha ltd.（日本・2014年7月〜2015年6月）

**デザイナー・エンジニア** ／ [tha.jp](https://tha.jp/)

- openFrameworks（C++）を用いたデジタルインスタレーション開発
- クライアント向けウェブデザイン・開発

### Luxurious Animals（アメリカ・2013年7月〜2014年6月）

**Junior Technologist** ／ [luxanimals.com](https://luxanimals.com/)

- 広告向けウェブアプリケーション・ゲームの開発

### Hi-ReS! / Meso（ドイツ・2012年6月〜2013年11月）

**フロントエンドエンジニア（インターンシップ）** ／ Meso: [meso.design](https://meso.design/en)

- 広告向けウェブアプリケーションのフロントエンド開発

### フリーランス（フロントエンド・WebGL 開発、2012 年〜）

SNS や元同僚から声をかけてもらい、フロントエンドや WebGL コンテンツ開発を不定期に受託してきた。1 ヶ月で完了するものから 1 年以上関わるものまで規模はさまざま。

---

## 個人プロジェクト

### dan-shari-gl — 自作 WebGL フレームワーク

シェーダー管理、バッファ抽象化、ジオメトリ生成などをまとめた軽量な WebGL フレームワークを TypeScript で実装し、npm に公開している。付随ツールとして `dan-shari-gl-mesh-generator` も提供。「ライブラリを使うだけでなく、内側を作って理解する」スタンスで WebGL に向き合ってきた成果。

- GitHub: [github.com/kenjiSpecial/dan-shari-gl](https://github.com/kenjiSpecial/dan-shari-gl)
- Demo: [kenjispecial.github.io/dan-shari-gl](https://kenjispecial.github.io/dan-shari-gl/)

### WebGL テキストレンダリング実験

WebGL 上にテキストを描画してみたいという動機から、OpenType フォントファイルをパースしてグリフアウトラインを抽出、ポリゴンメッシュに変換する小さなパーサーを試作した。グリフメトリクス、ベースライン計算、シェーダーでのアフィン変換などを自分の手で書いた。実装の過程でカーニング、GPOS / GSUB テーブル、複合グリフなど、普段ブラウザが内部で処理してくれていた領域の複雑さに直接触れ、タイポグラフィという領域に興味を持つようになった。

### NNVisualizer / CNNVisualizer

ニューラルネットワークと畳み込みニューラルネットワークをブラウザ上でリアルタイムに可視化する個人プロジェクト。

### infection-simulation

感染症シミュレーションのリアルタイム可視化。

---

## 技術スキル

| カテゴリ | スキル |
|---|---|
| プログラミング言語 | JavaScript, TypeScript（10 年以上）, C++, C#, Python, PHP, Rust, Solidity, Move |
| フロントエンド | React, Next.js, Astro, Vue, HTML5, CSS |
| グラフィックス | WebGL, Three.js, OpenGL, GLSL, openFrameworks, Processing ／ 自作 WebGL フレームワーク dan-shari-gl |
| 3D・ツール | Unity, Unreal Engine 5, Blender, After Effects |
| クラウド・インフラ | Google Cloud, AWS, Cloudflare, Docker, Contentful |
| AI 開発 | Claude Code, Figma MCP, LLM 統合開発, プロンプトエンジニアリング |
| 言語 | 日本語（ネイティブ）／ 英語（ビジネスレベル） |

---

## 学歴

| 期間 | 学校・学部 |
|------|-----------|
| 2010 〜 2012 年 | 岐阜県立国際情報科学芸術アカデミー（IAMAS）DIT コース 修了 |
| 2007 〜 2009 年 | 東京大学 農学部 地域環境工学科 卒業 |

---

## 自己 PR

React / Next.js / TypeScript を早期から採用し、WebGL を 2011 年頃から扱うなど、新しい技術への適応を続けてきた。Three.js / GSAP を使ったインタラクティブ LP 開発、シェーダーや行列演算の実装、Blender / Unity / Unreal Engine を用いた CG デザイナーとの協業など、グラフィクス領域を業務で幅広く扱っている。

直近は Claude Code を中心とした AI 駆動開発に深く関わっている。生成 AI を「実験」ではなく「日常的な開発の一部」として組織に定着させる仕事をしてきた。

ドイツ・アメリカ・オランダ・日本の 4 ヶ国・7 社で就労してきた経験から、英語環境のチームで設計・実装・コミュニケーションまで完遂できる。ワーキングホリデーでドイツ語を話せない状態でドイツに渡って就職活動をするなど、未知の領域に飛び込む姿勢を大事にしている。
