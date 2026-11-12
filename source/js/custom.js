/**
 * 谢小二｜新视界 - 自定义脚本
 * 功能（均带开关）：导航页面名 / 清单徽章 / 三彩色卡片小字 / 问候卡深色底
 * 图标流动动效由主题原生组件（_data/creativity.yml）提供
 */
var XE_CONFIG = {
  freeBadge: true,   // 「清单」菜单项显示蓝色"免费"角标
  iconWall: true,    // 问候卡深色渐变底 + 白色标题（配合原生标签云）
  categorySub: true, // 三彩色卡片下方小字说明
};

/* ---------------- 注入样式 ---------------- */
function xeInjectStyle() {
  if (document.getElementById("xe-style")) return;
  var css = `
/* 免费角标：定位到「清单」右上角（上标样式，贴近文字） */
span.xe-free-parent{display:inline-block;position:relative;}
.menu-badge{position:absolute;left:calc(100% + 3px);top:-9px;padding:0 5px;font-size:10px;line-height:15px;
  border-radius:7px;background:#425aeb;color:#fff;font-weight:600;white-space:nowrap;}

/* 三彩色卡片小字：压缩布局、字号 11px 并上移，卡片高度不变 */
a.categoryButton.xe-has-sub{line-height:3.05em;}
a.categoryButton.xe-has-sub .categoryButtonText{font-size:1.05rem;}
.category-sub{display:block;font-size:11px;line-height:1.25;opacity:.78;
  margin:-3px 0 0 21px;position:relative;z-index:1;transform:translateY(-2px);}

/* 问候卡：深色渐变底 + 白色标题（原生标签云在其上流动） */
#random-banner.xe-wall{background:linear-gradient(135deg,#0b1220 0%,#1e3a8a 55%,#4c1d95 100%)!important;}
#random-banner.xe-wall .banners-title{position:relative;z-index:2;padding:1.5rem 2rem;}
#random-banner.xe-wall .banners-title-big,
#random-banner.xe-wall .banners-title-small{color:#fff!important;text-shadow:0 2px 12px rgba(0,0,0,.35);}
#random-banner.xe-wall #skills-tags-group-all{position:absolute;top:1rem;right:-3rem;z-index:1;opacity:.95;}
#random-banner.xe-wall .tags-group-wrapper{margin-top:2.5rem!important;}
#random-banner.xe-wall .tags-group-icon{width:92px;height:92px;border-radius:22px;font-size:48px;}
#random-banner.xe-wall .tags-group-icon img{width:46px;}
`;
  var style = document.createElement("style");
  style.id = "xe-style";
  style.textContent = css;
  document.head.appendChild(style);
}

/* ---------------- 导航中间页面名 ---------------- */
function xeFixPageName() {
  var el = document.getElementById("page-name");
  if (!el) return;
  var path = window.location.pathname;
  if (path === "/" || path === "/index.html") {
    el.innerText = "卡、号、AI订阅，一站式配齐";
  }
}

/* ---------------- 清单徽章 ---------------- */
function xeInitBadge() {
  if (!XE_CONFIG.freeBadge) return;
  document.querySelectorAll(".menus_items a.site-page").forEach(function (a) {
    var span = a.querySelector("span");
    if (!span || span.textContent.indexOf("清单") === -1) return;
    span.classList.add("xe-free-parent");
    if (span.querySelector(".menu-badge")) return;
    var b = document.createElement("span");
    b.className = "menu-badge";
    b.textContent = "免费";
    span.appendChild(b);
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
    var btn = item.querySelector(".categoryButtonText");
    if (!btn || item.querySelector(".category-sub")) return;
    var name = btn.textContent.trim();
    if (map[name]) {
      var sub = document.createElement("span");
      sub.className = "category-sub";
      sub.textContent = map[name];
      btn.parentNode.appendChild(sub);
      btn.parentNode.classList.add("xe-has-sub");
    }
  });
}

/* ---------------- 问候卡深色底 ---------------- */
function xeInitIconWall() {
  if (!XE_CONFIG.iconWall) return;
  var card = document.getElementById("random-banner");
  if (card && !card.classList.contains("xe-wall")) card.classList.add("xe-wall");
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
