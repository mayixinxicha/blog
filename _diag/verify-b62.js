/* 批次62验证：手机六宫格终局形态（开卡/办号/订AI聚合页 + 网络/项目/资源分类页·两字卡面新副题）
   + 抽屉顶部「快捷入口」聚合三动词块 + 缓存版本 v=20261120b */
const puppeteer = require("puppeteer-core");
const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUT = "D:/blog/_diag/shots/";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ok = (name, cond, detail) => console.log((cond ? "✅ " : "❌ ") + name + (detail ? "  → " + detail : ""));

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: "new" });

  // ===== 1. 桌面端：导航六词不受影响 + 版本号 b =====
  const d = await browser.newPage();
  await d.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await d.goto("http://localhost:4000/", { waitUntil: "networkidle2" });
  await sleep(2500);
  const nav = await d.evaluate(() => {
    const items = [...document.querySelectorAll("#nav .menus_item a.site-page")].map((a) => (a.textContent || "").trim());
    const jsV = [...document.querySelectorAll('script[src*="custom.js"]')].map((s) => s.getAttribute("src"))[0] || "";
    return { items, jsV };
  });
  console.log("D-NAV:", JSON.stringify(nav.items), nav.jsV);
  ok("桌面导航六词不变", JSON.stringify(nav.items) === JSON.stringify(["AI订阅", "虚拟卡库", "网络环境", "海外账号", "实测项目", "资源清单"]));
  ok("缓存版本 v=20261120b", nav.jsV.includes("v=20261120b"), nav.jsV);
  await d.screenshot({ path: OUT + "b62-d-nav.png" });

  // ===== 2. 手机端：六宫格终局六卡 =====
  const m = await browser.newPage();
  await m.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await m.goto("http://localhost:4000/", { waitUntil: "networkidle2" });
  await sleep(2500);
  const grid = await m.evaluate(() => ({
    titles: [...document.querySelectorAll(".xe-grid6 .xe-g6-title")].map((e) => e.textContent),
    subs: [...document.querySelectorAll(".xe-grid6 .xe-g6-sub")].map((e) => e.textContent),
    hrefs: [...document.querySelectorAll(".xe-grid6 a")].map((a) => a.getAttribute("href"))
  }));
  console.log("M-GRID:", JSON.stringify(grid));
  ok("六卡命名=开卡/办号/订AI/网络/项目/资源", JSON.stringify(grid.titles) === JSON.stringify(["开卡", "办号", "订AI", "网络", "项目", "资源"]));
  ok("新副题三连", grid.subs[3] === "环境 · IP 验收" && grid.subs[4] === "实测 · 教程" && grid.subs[5] === "清单 · 持续更新", JSON.stringify(grid.subs));
  ok("卡4网络→网络环境分类", grid.hrefs[3].includes("%E7%BD%91%E7%BB%9C%E7%8E%AF%E5%A2%83") || grid.hrefs[3].includes("网络环境"), grid.hrefs[3]);
  ok("卡5项目→实测项目分类", grid.hrefs[4].includes("%E5%AE%9E%E6%B5%8B%E9%A1%B9%E7%9B%AE") || grid.hrefs[4].includes("实测项目"), grid.hrefs[4]);
  ok("卡6资源→资源清单页", grid.hrefs[5] === "/free-list/", grid.hrefs[5]);
  ok("前三卡仍指聚合页", grid.hrefs[0] === "/card/" && grid.hrefs[1] === "/esim/" && grid.hrefs[2] === "/ai-subscription/", JSON.stringify(grid.hrefs.slice(0, 3)));
  await m.evaluate(() => document.querySelector(".xe-grid6").scrollIntoView({ block: "center" }));
  await sleep(1000);
  await m.screenshot({ path: OUT + "b62-m-grid.png" });

  // ===== 3. 手机端：抽屉快捷入口块 + 六分类图标 =====
  await m.evaluate(() => { const t = document.getElementById("toggle-menu"); if (t) t.click(); });
  await sleep(1200);
  const drawer = await m.evaluate(() => {
    const quick = document.querySelector("#sidebar-menus .xe-drawer-quick");
    const quickLinks = quick ? [...quick.querySelectorAll("a")].map((a) => ({ t: a.textContent.trim(), h: a.getAttribute("href") })) : null;
    const icos = [...document.querySelectorAll("#sidebar-menus a.site-page")].map((a) => ({
      n: (a.textContent || "").trim().replace(/^[^\u4e00-\u9fa5A-Za-z]+/, ""),
      ico: a.querySelector(".xe-drawer-ico") ? a.querySelector(".xe-drawer-ico").textContent : "(无)"
    })).filter(p => p.n.length > 0).slice(0, 8);
    return { quick: quickLinks, icos };
  });
  console.log("M-QUICK:", JSON.stringify(drawer.quick));
  console.log("M-DRAWER:", JSON.stringify(drawer.icos));
  ok("快捷入口块存在且三动词指向聚合页",
    drawer.quick && drawer.quick.map(q => q.t).join() === "开卡,办号,订AI"
    && drawer.quick.map(q => q.h).join() === "/card/,/esim/,/ai-subscription/",
    JSON.stringify(drawer.quick));
  const wantIco = { "AI订阅": "🤖", "虚拟卡库": "💳", "网络环境": "🌐", "海外账号": "🛂", "实测项目": "📋", "资源清单": "🧩" };
  ok("抽屉六分类图标映射完好", drawer.icos.every(p => wantIco[p.n] === undefined || p.ico === wantIco[p.n]));
  await m.screenshot({ path: OUT + "b62-m-drawer.png" });

  // ===== 4. 手机端：宫格「网络」卡点击 → 守卫弹提示不跳转 =====
  await m.goto("http://localhost:4000/", { waitUntil: "networkidle2" });
  await sleep(2000);
  const guardM = await m.evaluate(async () => {
    const a = document.querySelector('.xe-grid6 a[href*="%E7%BD%91%E7%BB%9C%E7%8E%AF%E5%A2%83"], .xe-grid6 a[href*="网络环境"]');
    if (!a) return { found: false };
    a.click();
    await new Promise(r => setTimeout(r, 1800));
    return { found: true, stillHome: location.pathname === "/" };
  });
  console.log("M-GUARD-GRID:", JSON.stringify(guardM));
  ok("宫格网络卡守卫拦截（未跳404）", guardM.found && guardM.stillHome === true);

  await browser.close();
})();
