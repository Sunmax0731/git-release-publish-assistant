import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "git-release-publish-assistant-1",
  "title": "Gitリリース公開アシスタント サンプル1",
  "status": "ready",
  "repository": "Sunmax0731/git-release-publish-assistant",
  "branch": "main",
  "remote": "https://github.com/Sunmax0731/git-release-publish-assistant.git",
  "validationCommand": "npm test",
  "releaseTarget": "GitHub Release"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "git-release-publish-assistant-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "branch": "main",
  "remote": "https://github.com/Sunmax0731/git-release-publish-assistant.git",
  "validationCommand": "npm test",
  "releaseTarget": "GitHub Release"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
