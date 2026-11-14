const puppeteer = require('puppeteer-core');
(async () => {
  const url = process.argv[2], w = +process.argv[3] || 1080;
  const b = await puppeteer.launch({executablePath:'C://Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', headless:'new', args:['--disable-gpu']});
  const p = await b.newPage();
  await p.setViewport({width:w, height:900});
  await p.goto(url, {waitUntil:'networkidle2', timeout:60000});
  await new Promise(r=>setTimeout(r,1500));
  const d = await p.evaluate(() => {
    const vis = (sel) => [...document.querySelectorAll(sel)].map(el => {
      if (!el.offsetParent && getComputedStyle(el).position !== 'fixed') return null;
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      return {top: Math.round(r.top), h: Math.round(r.height), mt: cs.marginTop, pt: cs.paddingTop, pos: cs.position};
    }).filter(Boolean);
    return {
      firstPostCard: vis('#recent-posts .recent-post-item').slice(0,1),
      asideWidgets: vis('#aside-content .card-widget').slice(0,2),
      asideContent: vis('#aside-content').slice(0,1),
      stickyLayout: vis('#aside-content .sticky_layout').slice(0,1),
    };
  });
  console.log(JSON.stringify(d, null, 1));
  await b.close();
})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
