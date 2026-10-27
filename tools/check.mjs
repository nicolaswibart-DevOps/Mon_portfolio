import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import assert from 'node:assert/strict';
const pages = ['index.html', ...readdirSync('articles').filter(p => p.endsWith('.html')).map(p => `articles/${p}`)];
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${page}: duplicate IDs`);
  for (const [, attribute, value] of html.matchAll(/\b(src|href)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(value)) continue;
    const [file, hash] = value.split('#');
    const target = file ? resolve(dirname(page), decodeURI(file)) : resolve(page);
    assert.ok(existsSync(target), `${page}: missing ${attribute} ${value}`);
    if (hash && target.endsWith('.html')) assert.ok(readFileSync(target, 'utf8').includes(`id="${hash}"`), `${page}: missing anchor ${value}`);
  }
  assert.ok(!/<style>|onclick=|cdn.tailwindcss.com/.test(html), `${page}: inline behavior/runtime CSS`);
}
assert.ok(!/getContext\(['"]webgl/.test(readFileSync('index.html', 'utf8')));
console.log(`Checked ${pages.length} pages: local files, anchors, IDs and extracted assets OK.`);
