/**
 * 谢小二｜新视界 - 自定义脚本
 * 功能（均带开关）：导航页面名优化 / 免费清单徽章 / 三彩色卡片小字 / 首页图标墙动效
 */
var XE_CONFIG = {
  freeBadge: true,   // 「免费清单」菜单项显示蓝色“免费”徽章
  iconWall: true,    // 首页问候卡右侧品牌图标墙
  breathe: true,     // 图标墙呼吸循环动效（false 则只有入场波浪+鼠标点亮）
  categorySub: true, // 三彩色卡片下方小字说明
};

/* ---------------- 注入样式 ---------------- */
function xeInjectStyle() {
  if (document.getElementById("xe-style")) return;
  var css = `
/* 免费徽章 */
.menu-badge{display:inline-block;margin-left:5px;padding:0 6px;font-size:11px;line-height:16px;
  border-radius:8px;background:#425aeb;color:#fff;font-weight:600;transform:translateY(-1px);}

/* 三彩色卡片小字 */
.categoryItem{overflow:hidden;}
.category-sub{display:block;font-size:12px;line-height:16px;opacity:.72;margin-top:2px;position:relative;z-index:1;}

/* 图标墙 */
#random-banner.xe-wall{background:linear-gradient(135deg,#0b1220 0%,#1e3a8a 55%,#4c1d95 100%)!important;}
#random-banner.xe-wall .banners-title{position:relative;z-index:2;}
#random-banner.xe-wall .banners-title-big,
#random-banner.xe-wall .banners-title-small{color:#fff!important;text-shadow:0 2px 12px rgba(0,0,0,.35);}
.iconwall{position:absolute;top:50%;right:5%;transform:translateY(-50%);z-index:1;
  display:grid;grid-template-columns:repeat(6,42px);gap:16px 18px;}
.iconwall-item{width:42px;height:42px;opacity:.38;filter:grayscale(1) brightness(1.9);
  transition:filter .35s,opacity .35s,transform .35s;}
@keyframes iwWave{from{opacity:0;transform:translateY(16px) scale(.55);}
  to{opacity:.38;transform:translateY(0) scale(1);}}
@keyframes iwBreathe{0%,100%{opacity:.38;filter:grayscale(1) brightness(1.9);}
  50%{opacity:.85;filter:grayscale(.35) brightness(1.25);}}
.iconwall-item.iw-anim{animation:iwWave .6s cubic-bezier(.22,.9,.36,1) both,iwBreathe 6s ease-in-out infinite;}
.iconwall-item:hover{animation-play-state:paused!important;opacity:1!important;
  filter:none!important;transform:scale(1.25)!important;}
@media (max-width:860px){.iconwall{display:none;}}
@media (prefers-reduced-motion:reduce){.iconwall-item.iw-anim{animation:none;opacity:.5;filter:grayscale(1) brightness(1.9);}}
`;
  var style = document.createElement("style");
  style.id = "xe-style";
  style.textContent = css;
  document.head.appendChild(style);
}

/* ---------------- 导航中间页面名优化 ---------------- */
function xeFixPageName() {
  var el = document.getElementById("page-name");
  if (!el) return;
  var path = window.location.pathname;
  if (path === "/" || path === "/index.html") {
    el.innerText = "首页";
  }
}

/* ---------------- 免费清单徽章 ---------------- */
function xeInitBadge() {
  if (!XE_CONFIG.freeBadge) return;
  document.querySelectorAll(".menus_items a.site-page").forEach(function (a) {
    if (a.querySelector(".menu-badge")) return;
    var span = a.querySelector("span");
    if (span && span.textContent.indexOf("免费清单") !== -1) {
      var b = document.createElement("span");
      b.className = "menu-badge";
      b.textContent = "免费";
      a.appendChild(b);
    }
  });
}

/* ---------------- 三彩色卡片小字 ---------------- */
function xeInitCategorySub() {
  if (!XE_CONFIG.categorySub) return;
  var map = {
    "开卡": "费率对比 + 开卡直达",
    "办号": "eSIM卡 + 海外ID",
    "订AI": "ChatGPT / Claude 开通指南",
  };
  document.querySelectorAll(".categoryGroup .categoryItem").forEach(function (item) {
    if (item.querySelector(".category-sub")) return;
    var btn = item.querySelector(".categoryButtonText");
    if (!btn) return;
    var name = btn.textContent.trim();
    if (map[name]) {
      var sub = document.createElement("span");
      sub.className = "category-sub";
      sub.textContent = map[name];
      btn.parentNode.appendChild(sub);
    }
  });
}

/* ---------------- 首页图标墙 ---------------- */
var XE_ICONS = [
  "visa","mastercard","americanexpress","jcb","paypal","apple",
  "google","telegram","whatsapp","anthropic","deepseek","googlegemini",
  "mistralai","perplexity","huggingface","ollama","github","cloudflare",
];
function xeInitIconWall() {
  if (!XE_CONFIG.iconWall) return;
  var card = document.getElementById("random-banner");
  if (!card || card.querySelector(".iconwall")) return;
  card.classList.add("xe-wall");

  var wall = document.createElement("div");
  wall.className = "iconwall";
  wall.setAttribute("aria-hidden", "true");
  XE_ICONS.forEach(function (slug, i) {
    var img = document.createElement("img");
    img.className = "iconwall-item iw-anim";
    img.src = "/iconwall/" + slug + ".svg";
    img.alt = "";
    img.loading = "lazy";
    img.style.animationDelay = (i * 0.07) + "s, " + (2 + i * 0.35) + "s";
    if (!XE_CONFIG.breathe) {
      img.style.animation = "iwWave .6s cubic-bezier(.22,.9,.36,1) both";
      img.style.animationDelay = (i * 0.07) + "s";
    }
    wall.appendChild(img);
  });
  card.appendChild(wall);
}

/* ---------------- 统一初始化 ---------------- */
function xeInitAll() {
  xeInjectStyle();
  xeFixPageName();
  xeInitBadge();
  xeInitCategorySub();
  xeInitIconWall();
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(xeInitAll, 30);
});
document.addEventListener("pjax:complete", function () {
  setTimeout(xeInitAll, 60);
});
document.addEventListener("pjax:success", function () {
  setTimeout(xeInitAll, 60);
});
