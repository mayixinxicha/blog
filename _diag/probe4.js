const puppeteer = require('puppeteer-core');
(async () => {
  const url = process.argv[2], w = +process.argv[3] || 2048;
  const b = await puppeteer.launch({executablePath:'C://Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless:'new', args:['--disable-gpu']});
  const p = await b.newPage();
  await p.setViewport({width:w, height:900});
  await p.goto(url, {waitUntil:'networkidle2', timeout:60000});
  await new Promise(r=>setTimeout(r,1500));
  const d = await p.evaluate(() => {
    const out = [];
    const layout = document.querySelector('.layout');
    if (layout) [...layout.children].forEach(el => {
      const r = el.getBoundingClientRect();
      out.push({tag: el.tagName + (el.id?'#'+el.id:'') + (el.className?'.'+String(el.className).split(' ').join('.'):''),
        top: Math.round(r.top), mt: getComputedStyle(el).marginTop});
    });
    return out;
  });
  console.log(JSON.stringify(d, null, 1));
  await b.close();
})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
