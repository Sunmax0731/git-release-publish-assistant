# 競合・公式基準ベンチマーク

## 比較方針

Gitリリース公開アシスタント は、競合の全機能を再実装するのではなく、GUI系クライアントの広いGit操作ではなく、公開直前の確認事項に絞って迷いを減らす。

| 参照先 | URL | 競合・公式標準の強み | 採用する評価基準 | 差別化 |
| --- | --- | --- | --- | --- |
| GitHub CLI release | https://cli.github.com/manual/gh_release_create | ローカルからリリース作成、添付ファイル、下書き公開を短いコマンドで扱える。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | GUI系クライアントの広いGit操作ではなく、公開直前の確認事項に絞って迷いを減らす。 |
| GitHub Desktop | https://docs.github.com/en/desktop/overview/about-github-desktop | Git の状態確認、ブランチ操作、差分確認をGUIで扱える。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | GUI系クライアントの広いGit操作ではなく、公開直前の確認事項に絞って迷いを減らす。 |
| GitKraken | https://www.gitkraken.com/features/pr-and-code-review | PR、ブランチ、コードレビューをGUIで可視化できる。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | GUI系クライアントの広いGit操作ではなく、公開直前の確認事項に絞って迷いを減らす。 |

## 改善へ反映した点

- QCDS評価に競合比較と公式標準の確認を追加した。
- 実装だけでなく、README、導入手順、ユーザーガイド、手動テスト、リリース前資料を評価対象にした。
- 文字化けをQCDSのQuality/Satisfactionリスクとして検出する。
