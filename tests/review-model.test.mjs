import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, buildReviewModel, renderHtmlReport } from '../src/core.mjs';

test('review model exposes status cards and next actions', () => {
  const report = analyzeItems({ items: [{
  "id": "git-release-publish-assistant-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "branch": "main",
  "remote": "https://github.com/Sunmax0731/git-release-publish-assistant.git",
  "validationCommand": "npm test",
  "releaseTarget": "GitHub Release"
}] });
  const model = buildReviewModel(report);
  assert.equal(model.statusLabel, '修正が必要');
  assert.ok(model.completionRate < 100);
  assert.ok(model.cards.length >= 4);
  assert.match(renderHtmlReport(report), /Next Actions/);
});
