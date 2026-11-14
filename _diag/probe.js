/* 诊断脚本：量出分类页导航底边→卡片顶部之间每一层的坐标与来源 */
const puppeteer = require("puppeteer-core");

(async () => {
  const url = process.argv[2] || "https://xiexiaoer.net/categories/%E8%99%9A%E6%8B%9F%E5%8D%A1/";
  const width = parseInt(process.argv[3] || "864", 10);
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: "new",
    args: ["--disable-gpu", "--no-first-run"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width, height: 800 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));

  const data = await page.evaluate(() => {
    const out = {};
    const g = sel => document.querySelector(sel);
    const rect = el => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        top: Math.round(r.top), height: Math.round(r.height), width: Math.round(r.width),
        marginTop: cs.marginTop, paddingTop: cs.paddingTop, display: cs.display,
        position: cs.position,
      };
    };
    out.viewport = { w: innerWidth, h: innerHeight, dpr: devicePixelRatio };
    out.header = rect(g("#page-header"));
    out.headerClass = g("#page-header") ? g("#page-header").className : null;
    out.nav = rect(g("#nav"));
    out.main = rect(g("main#blog-container"));
    out.contentInner = rect(g("#content-inner"));
    const ci = g("#content-inner");
    out.contentInnerChildren = ci ? [...ci.children].map(c => ({
      tag: c.tagName, id: c.id, cls: c.className, ...rect(c),
    })) : null;
    const card = g("#recent-posts > .recent-post-item") || g("#page");
    out.card = rect(card);
    if (card) {
      const cs = getComputedStyle(card);
      out.cardMarginTopSource = cs.marginTop;
    }
    out.xeStyleExists = !!document.getElementById("xe-style");
    // 找出所有 top 在 0~300 之间且高度>0 的元素，看谁占住了导航下方的空隙
    out.elementsInGap = [...document.querySelectorAll("body *")].filter(el => {
      const r = el.getBoundingClientRect();
      return r.top >= -5 && r.top < 300 && r.height > 0 && r.width > 100 &&
        !["NAV", "SCRIPT", "STYLE", "LINK", "META"].includes(el.tagName);
    }).slice(0, 25).map(el => ({
      tag: el.tagName, id: el.id, cls: String(el.className).slice(0, 50),
      top: Math.round(el.getBoundingClientRect().top),
      bottom: Math.round(el.getBoundingClientRect().bottom),
    }));
    return out;
  });

  console.log(JSON.stringify(data, null, 1));
  await browser.close();
})().catch(e => { console.error("ERR", e.message); process.exit(1); });
