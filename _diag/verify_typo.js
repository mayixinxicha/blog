const puppeteer = require('puppeteer-core');
(async () => {
  const b = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new', args: ['--disable-gpu']
  });
  const p = await b.newPage();
  await p.setViewport({width: 1440, height: 1600});
  const url = process.argv[2] || 'http://localhost:4000/2026/11/14/roogoo-enjoy-card/';
  await p.goto(url, {waitUntil: 'networkidle2', timeout: 60000});
  await new Promise(r => setTimeout(r, 2500));
  const m = await p.evaluate(() => {
    const lis = [...document.querySelectorAll('#article-container ul li + li')].slice(0, 3).map(li => getComputedStyle(li).marginTop);
    const h = document.querySelector('#article-container h3');
    const q = document.querySelector('#article-container blockquote');
    return {
      liGaps: lis,
      h3Top: h && getComputedStyle(h).marginTop,
      h3Bottom: h && getComputedStyle(h).marginBottom,
      quoteBorder: q && getComputedStyle(q).borderLeftWidth,
      quoteRadius: q && getComputedStyle(q).borderRadius
    };
  });
  console.log(JSON.stringify(m, null, 1));
  await b.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
