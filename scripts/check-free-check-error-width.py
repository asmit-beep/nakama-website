#!/usr/bin/env python3
"""Guard: field errors in lib/free-check.ts must be <= 254px at 13px Manrope."""
import asyncio, re, sys
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
SRC = (ROOT / 'lib/free-check.ts').read_text()
MAX = 254
FIELD_KEYS = ['emailRequired', 'emailInvalid', 'siteRequired', 'siteInvalid', 'competitors', 'prompts']
block = re.search(r'export const ERRORS = \{([\s\S]*?)\} as const;', SRC)
if not block:
    sys.exit('Could not parse ERRORS from lib/free-check.ts')
errors = {}
for key in FIELD_KEYS:
    m = re.search(rf"{key}:\s*'([^']*)'", block.group(1))
    if not m:
        sys.exit(f'Missing ERRORS.{key}')
    errors[key] = m.group(1)

spans = ''.join(f'<span class="m" id="{k}"></span>' for k in FIELD_KEYS)
html = f'''<!doctype html><meta charset="utf-8">
<style>
  @font-face{{font-family:Manrope;font-style:normal;font-weight:400 800;font-display:swap;
    src:url('https://fonts.gstatic.com/s/manrope/v19/xn7gYHE41ni1AdIRggexSg.woff2') format('woff2');}}
  body{{margin:0}}
  .m{{font:13px/1.4 Manrope,sans-serif;white-space:nowrap;display:inline-block;padding:0}}
</style>
{spans}
<script>
  const errors = {repr(errors).replace("'", '"') if False else __import__('json').dumps(errors)};
  for (const [k,v] of Object.entries(errors)) document.getElementById(k).textContent = v;
</script>
'''
# build html with json in python
import json
html = f'''<!doctype html><meta charset="utf-8">
<style>
  @font-face{{font-family:Manrope;font-style:normal;font-weight:400 800;font-display:swap;
    src:url('https://fonts.gstatic.com/s/manrope/v19/xn7gYHE41ni1AdIRggexSg.woff2') format('woff2');}}
  body{{margin:0}}
  .m{{font:13px/1.4 Manrope,sans-serif;white-space:nowrap;display:inline-block;padding:0}}
</style>
{spans}
<script>
  const errors = {json.dumps(errors)};
  for (const [k,v] of Object.entries(errors)) document.getElementById(k).textContent = v;
</script>
'''

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='/usr/bin/google-chrome')
        page = await browser.new_page()
        await page.set_content(html, wait_until='networkidle')
        await page.evaluate('document.fonts.ready')
        await page.wait_for_timeout(200)
        rows = await page.evaluate('''(keys) => keys.map(k => {
          const el = document.getElementById(k);
          return {key:k, text:el.textContent, width:el.getBoundingClientRect().width};
        })''', FIELD_KEYS)
        await browser.close()
    failed = 0
    for row in rows:
        ok = row['width'] <= MAX
        if not ok:
            failed += 1
        print(f"{'OK' if ok else 'FAIL'} {row['key']}: {row['width']:.1f}px — {row['text']}")
    if failed:
        print(f'{failed} field error(s) exceed {MAX}px at 13px Manrope.', file=sys.stderr)
        return 1
    print(f'All {len(rows)} field errors are <= {MAX}px at 13px Manrope.')
    return 0

if __name__ == '__main__':
    raise SystemExit(asyncio.run(main()))
