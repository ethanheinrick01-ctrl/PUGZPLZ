#!/usr/bin/env bash
# Runs every check. Needs Node 18+; the browser test also needs Playwright + Chromium and python3 (for the localhost check).
set -e
cd "$(dirname "$0")/.."
for f in js/core/*.js js/data/*.js js/ui/*.js js/app.js; do node --check "$f"; done
echo "Syntax: PASS"
node tests/validate-content.cjs
node tests/unit.cjs
node tests/exam1.cjs
node tests/question-quality.cjs
node tests/browser.cjs
