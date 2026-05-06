---
layout: content
title: Resume (JP) - Adobe Senior SDE
permalink: /resume_jp/
---

# 斎藤 健二 — Resume for Adobe Senior SDE (R167122)

## Senior Software Development Engineer @ Adobe Tokyo

[English](/resume/)

> **このレジュメは Adobe 社 Senior Software Development Engineer（東京、R167122）ポジション向けに特化して作成したものです。** 一般的な転職用の汎用レジュメではなく、求人記載の要件・キーワードに沿って職歴・スキル・成果を構成しています。他社のポジションを検討される方は、別途汎用レジュメの提供をご相談ください。

[ポートフォリオ](https://www.kenji-special.info/) ｜ [GitHub](https://github.com/kenjiSpecial) ｜ [LinkedIn](https://www.linkedin.com/in/kenji-saito-5a327340) ｜ k.saito.1985@gmail.com

**応募先:** Adobe Inc. — Senior Software Development Engineer (R167122) ／ **日付:** 2026年5月6日

---

## プロフェッショナルサマリー

13年のフロントエンドエンジニア。WebGL / Three.js を中心とした 3D・インタラクティブ開発を主軸に、ドイツ・アメリカ・オランダ・日本の 7 社で **エンドツーエンドにプロダクトを設計・実装・運用** してきた。シェーダー・行列演算・**アフィン変換**を日常的に扱い、線形代数の実務適用に習熟。WebGL の理解を深めるために自作の軽量フレームワーク **dan-shari-gl** を npm に公開（17★）。直近の NOT A HOTEL では Claude Code と Figma MCP を活用した **AI 駆動開発** を推進し、1 ページの開発サイクルを **1〜2 日 → 約 20 分（60〜144 倍）** に圧縮。日本語ネイティブ・英語ビジネスレベルのバイリンガル。

---

## ポジションへの適合性

### 必須要件とのマッチング（エビデンスベース）

| 要件 | 経験・スキル | エビデンス |
|------|-------------|-----------|
| 10年以上の開発経験 | 2012年〜現在（13年） | 海外 4 社・国内 3 社での実務（後述の職務経歴） |
| 日本語ネイティブ + 英語ビジネスレベル | 日本語ネイティブ／英語環境 4 社で就労 | 独・米・蘭での 5 年超の英語環境就労実績 |
| CS 学士以上 | 東京大学 農学部 地域環境工学科 卒業（2009年3月） | + IAMAS 修了（2012年）でメディアアート / プログラミング基礎 |
| フロントエンド + REST API | React / Next.js / TypeScript 10年以上 | NOT A HOTEL で 10 以上のサイトを実装、Next.js → Astro 移行を主導 |
| C/C++ または JavaScript | C++（openFrameworks）／ TypeScript 10年以上 | tha ltd. での C++ インスタレーション開発、長期 JS / TS 実務 |
| **線形代数・アフィン変換** | WebGL / Three.js でシェーダー・行列演算を日常的に使用 | 自作 WebGL フレームワーク **dan-shari-gl** を実装、Three.js でテキスト・ジオメトリのアフィン変換を実装 |
| **生成AI実務（LLM / RAG / fine-tuning）** | NOT A HOTEL で Claude Code + Figma MCP の AI 駆動開発を実装・運用 | 開発・FB サイクルを **60〜144 倍** に高速化、Astro 移行で AI デプロイ頻度増に対応 |
| 日本語テキスト処理・タイポグラフィへの興味 | 個人プロジェクトで OpenType フォントパーサーを試作 | グリフメトリクス・ベースライン計算等の文字データ構造を、自作 WebGL フレームワーク上で実装 |

### 歓迎要件

| 要件 | 経験・関心 |
|------|----------|
| コンピュータグラフィックス / レイアウト / テキスト処理 | WebGL / Three.js / OpenGL / openFrameworks の業務実装 + 自作 WebGL フレームワーク |
| 日本語タイポグラフィへの興味 | 個人プロジェクトでフォント構造に手で触れた経験あり |
| RAG・モデルファインチューニング | NOT A HOTEL の AI 開発フロー設計を通じ、業務文脈での適用検討中 |
| Japan-specific use cases / world-ready products | 日経新聞社で日本語コンテンツの可視化、海外 4 社で英語環境の制作 |

---

## 主要成果（STAR）

### NOT A HOTEL — AI 駆動開発による開発サイクル 60〜144 倍の高速化

- **Situation**: ラグジュアリーホテルブランドのウェブ部門で 10 以上のサイトを並行運用。手作業中心の開発フローでは事業速度に追いつかなくなりつつあった
- **Task**: デザインから実装・フィードバック反映までのリードタイムを大幅に短縮し、AI 駆動でのデプロイ頻度に耐えるフロントエンド基盤を確立する
- **Action**:
  - Claude Code をメインツールに据え、繰り返し作業を **再利用可能な Skill** として体系化
  - **Figma MCP** を導入し、デザインデータからコンポーネントを自動生成するパイプラインを構築
  - AI デプロイ頻度の増加に対応するため、フレームワークを **Next.js → Astro へ移行**（ビルド時間最適化を意図した判断）
- **Result**: 1 ページあたりの開発・フィードバック期間が **1〜2 日 → 約 20 分**（**60〜144 倍** の高速化）。AI とフロントエンドが噛み合った開発フローを組織に定着

---

## 職務経歴

### NOT A HOTEL株式会社（2025年5月〜現在）
**フロントエンドエンジニア**（2025年5-6月 業務委託、2025年7月〜 フルタイム）／ URL: [https://notahotel.com/](https://notahotel.com/)

- React / Next.js / Astro による 10 以上のサイト開発
- Google Cloud / Cloudflare を中心としたインフラの設計・管理
- **Claude Code Skill 化** と **Figma MCP** によるデザイン → コード自動生成パイプラインの構築
- Next.js → Astro 移行の主導（AI デプロイ頻度増へのフレームワーク選定判断）
- **使用技術**: TypeScript, React, Next.js, Astro, Google Cloud, Cloudflare, Docker, Claude Code, Figma MCP

### Industry One株式会社（2021年11月〜2022年12月）
**マネージャー** ／ 三菱商事子会社、DX コンサルティング ／ URL: [https://www.industry-one.com/](https://www.industry-one.com/)

- 開発・デザインチームの立ち上げ・採用を主導
- クライアント向けアプリ・ウェブサイトのデザイン・開発

### 日本経済新聞社（2018年11月〜2021年10月）
**エンジニア** ／ URL: [https://www.nikkei.com/](https://www.nikkei.com/)

- ウェブ向けインタラクティブニュースコンテンツの作成・開発
- データビジュアライゼーションコンテンツの作成・開発
- フォトグラメトリー、AR など新技術を用いた試作
- **使用技術**: JavaScript, React, D3.js, HTML5, CSS, REST API

### Superhero Cheesecake（オランダ）（2016年12月〜2018年10月）
**WebGL Developer** ／ URL: [https://www.superherocheesecake.com/](https://www.superherocheesecake.com/)

- クライアント向け WebGL コンテンツ開発・プロジェクトリード
- Web ゲーム開発の技術選定・チームリード
- Three.js / WebGL を用いた 3D コンテンツ開発（**行列演算・アフィン変換を日常的に使用**）
- FWA / Awwwards 受賞案件への参画
- **使用技術**: JavaScript, WebGL, Three.js, GLSL

### Watson.la（アメリカ）（2015年7月〜2016年11月）
**Creative Developer** ／ URL: [https://watson.la/](https://watson.la/)

- 映画・ゲームのプロモーションサイト、ゲームのフロントエンド・WebGL 開発
- Oculus 向け VR コンテンツの試作

### tha ltd.（日本）（2014年7月〜2015年6月）
**デザイナー・エンジニア** ／ URL: [https://tha.jp/](https://tha.jp/)

- openFrameworks（C++）を用いたデジタルインスタレーション開発
- クライアント向けウェブデザイン・開発
- **使用技術**: C++, openFrameworks, OpenGL

### Luxurious Animals（アメリカ）（2013年7月〜2014年6月）
**Junior Technologist** ／ URL: [https://luxanimals.com/](https://luxanimals.com/)

- 広告向けウェブアプリケーション・ゲームの開発

### Hi-ReS! / Meso（ドイツ）（2012年6月〜2013年11月）
**フロントエンドエンジニア（インターンシップ）** ／ Meso URL: [https://meso.design/en](https://meso.design/en)

- 広告向けウェブアプリケーションのフロントエンド開発

### 副業: フリーランス WebGL 開発（2012年〜不定期）

- SNS・元同僚経由で WebGL コンテンツ開発の受託（1ヶ月〜1年規模のプロジェクト）

---

## 個人プロジェクト

### WebGL テキストレンダリング実験 — Adobe 応募の起点

WebGL 上にテキストを描画したいという素朴な動機から、OpenType フォントファイルをパースしてグリフアウトラインを抽出、ポリゴンメッシュに変換する小規模なパーサーを試作した個人プロジェクト。グリフメトリクスに基づく文字配置、ベースライン計算、シェーダーでの **アフィン変換** を自分の手で実装した。

実装の過程で、ブラウザが無意識に処理してくれていたレイヤー（カーニング、GPOS / GSUB テーブル、複合グリフ、ヒンティング等）の複雑さに直接触れ、**タイポグラフィという領域への関心が芽生えた**。本ポジションへの応募の動機は、ここにある。

タイポグラフィの専門家ではないが、文字データの内部構造を「実装したことがある」状態であり、Adobe の日本語組版領域に飛び込むための足がかりとして活かしたいと考えている。

### dan-shari-gl — 自作 WebGL フレームワーク（npm 公開、17★）

上記のテキストレンダリング実験は、自作の軽量 WebGL フレームワーク **dan-shari-gl** を基盤として行っている。本フレームワーク本体は WebGL の最小限のラッパーを TypeScript で設計・実装したもので、シェーダー管理、バッファ抽象化、ジオメトリ生成などを提供。npm に公開しており、付随ツールとして `dan-shari-gl-mesh-generator` も提供している。

- GitHub: [https://github.com/kenjiSpecial/dan-shari-gl](https://github.com/kenjiSpecial/dan-shari-gl)
- Demo: [https://kenjispecial.github.io/dan-shari-gl/](https://kenjispecial.github.io/dan-shari-gl/)

「ライブラリを使うだけでなく、内側を作って理解する」スタンスで WebGL に向き合ってきた成果であり、上述のテキストレンダリングをはじめ、自身の実験的グラフィクスプロジェクトの基盤となっている。

### その他の個人プロジェクト

- **NNVisualizer / CNNVisualizer**（51★ / 29★） — ニューラルネットワーク・CNN をブラウザ上でリアルタイム可視化。WebGL とフロントエンドの応用例
- **infection-simulation** — 感染症シミュレーションのリアルタイム可視化

---

## 技術スキル

| カテゴリ | スキル |
|---|---|
| **プログラミング言語** | JavaScript, TypeScript（10年以上）, C++, C#, Python, PHP, Rust, Solidity, Move |
| **フロントエンド** | React, Next.js, Astro, Vue, HTML5, CSS |
| **グラフィックス** | WebGL, Three.js, OpenGL, GLSL, openFrameworks, Processing ／ 自作 WebGL フレームワーク `dan-shari-gl` |
| **3D・ツール** | Unity, Unreal Engine 5, Blender, After Effects |
| **クラウド・インフラ** | Google Cloud, AWS, Cloudflare, Docker, Contentful |
| **AI 開発** | Claude Code, Figma MCP, LLM 統合開発, RAG 設計検討, プロンプトエンジニアリング |
| **言語** | 日本語（ネイティブ）／ 英語(ビジネスレベル、海外 4 社での就労経験) |

---

## 学歴

| 期間 | 学校・学部 |
|------|-----------|
| 2010年〜2012年 | 岐阜県立国際情報科学芸術アカデミー（IAMAS）DITコース 修了 |
| 2007年〜2009年 | 東京大学 農学部 地域環境工学科 卒業 |

---

## 自己PR

### 強み

**13年のフロントエンド開発と新技術への継続的な適応力**
React / Next.js / TypeScript を早期から採用し、WebGL を 2011 年頃から扱うなど、新しい技術スタックへの適応を継続してきた。直近では生成 AI ツール群を最初期から実務に取り込み、Learning Velocity を維持している。

**WebGL・3D グラフィクスの実務経験 + 自作フレームワーク**
業務での Three.js / GSAP / シェーダー実装に加え、自身で **WebGL の薄いフレームワーク（dan-shari-gl）を npm に公開** してきた経験がある。「使う側」と「作る側」の両方を経験することで、内部の挙動・トレードオフを身体化している。

**Agent Leverage（エージェントへのデリゲーション能力）**
Claude Code Skill の自作・運用と Figma MCP の統合により、生成 AI を「実験」ではなく「日常的な実装エージェント」として組織に定着させた。AI-assisted development tools を活用したプロダクト統合の実績がある。

**システム判断とフレームワーク選定**
NOT A HOTEL における Next.js → Astro 移行は、AI デプロイ頻度の増加というフォースを起点にした **意図的なフレームワーク選定** だった。「動くもの」だけでなく「適切な選択」を考えるシステム判断を磨いてきた。

**英語環境での協業力**
ドイツ・アメリカ・オランダ・日本の 4 ヶ国・7 社で就労。英語環境のチームで設計・実装・コミュニケーションを完遂できる。

### 個人的資質

- **行動力**: ワーキングホリデーでドイツ語を話せない状態でドイツ就活を行うなど、未知の領域に飛び込む姿勢
- **探求心**: 興味を持った分野（タイポグラフィ、LLM、WebGL 等）を体系的に深く学ぶ
- **多文化適応力**: 5 ヶ国での就労経験を通じた異文化・異組織への適応

---

*本レジュメは Adobe Senior Software Development Engineer（東京、R167122）ポジション向けに作成*
