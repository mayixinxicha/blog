const puppeteer = require('puppeteer-core');
(async () => {
  const url = process.argv[2], w = +process.argv[3] || 1080;
  const b = await puppeteer.launch({executablePath:'C://Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless:'new', args:['--disable-gpu']});
  const p = await b.newPage();
  await p.setViewport({width:w, height:900});
  await p.goto(url, {waitUntil:'networkidle2', timeout:60000});
  await new Promise(r=>setTimeout(r,1500));
  const d = await p.evaluate(() => {
    const pick = (sel) => { const el = document.querySelector(sel); if (!el) return null;
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      return {top: Math.round(r.top), mt: cs.marginTop, pt: cs.paddingTop, sel}; };
    return {
      nav: pick('#nav'),
      recent: pick('#recent-posts'),
      archive: pick('#archive'),
      aside: pick('#aside-content'),
      asideCard: pick('#aside-content .card-widget:first-child'),
      layout: pick('.layout'),
    };
  });
  console.log(JSON.stringify(d, null, 1));
  await b.close();
})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
