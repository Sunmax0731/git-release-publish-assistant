# git-release-publish-assistant

Git・リリース・公開支援 の MVP リポジトリです。

## 概要

Git状態、ブランチ、リモート、検証コマンド、公開先を確認し、リリース前の抜け漏れを減らす。

## 現在の範囲

- 入力データを検査し、必須項目の不足と注意状態をレポート化する。
- 自動テストで正常系と必須項目不足を検証する。
- 手動テスト手順は `docs/manual-test.md` にまとめる。
- 公開前チェックは `docs/release-checklist.md` を基準にする。

## 検証

```powershell
npm test
```

Unity パッケージの場合は `tools/test-package-structure.ps1` が構造検証を実行します。
