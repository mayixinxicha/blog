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
/* 免费角标：贴住「清单」右上角（只留一丝白） */
span.xe-free-parent{display:inline-block;position:relative;}
.menu-badge{position:absolute;left:calc(100% + 1px);top:-3px;padding:0 5px;font-size:10px;line-height:15px;
  border-radius:7px;background:#425aeb;color:#fff;font-weight:600;white-space:nowrap;}

/* 三彩色卡片：大字/横杠/小字纵向排列，整组在卡片内垂直居中，间距均匀 */
a.categoryButton.xe-has-sub{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;
  line-height:1.4;padding-left:21px;}
a.categoryButton.xe-has-sub .categoryButtonText{padding-left:0;font-size:1.05rem;order:0;}
a.categoryButton.xe-has-sub:after{position:static;order:1;margin:6px 0 3px;}
.category-sub{display:block;font-size:12px;line-height:1.3;opacity:.8;
  margin:0;position:relative;z-index:1;order:2;}

/* 导航站点名：颜色加深 + 加粗，与菜单项协调 */
#blog_name #site-name .title{color:var(--anzhiyu-fontcolor);font-weight:600;}

/* 问候卡：白底（主题原生），仅调图标条起始高度（居中穿过卡片）和网址字号 */
#random-banner.xe-wall .banners-title-small{font-size:15px;}
#random-banner.xe-wall .tags-group-wrapper{margin-top:2rem!important;}
#random-banner #skills-tags-group-all{margin-left:-3rem;}

/* 右侧大卡：深色底 + 彩色光斑（纯 CSS 绘制，0 图片体积），隐藏原生封面图 */
#todayCard{background:radial-gradient(circle at 76% 28%,rgba(52,211,153,.75) 0,rgba(52,211,153,.75) 34px,transparent 62px),
  radial-gradient(circle at 60% 56%,rgba(167,139,250,.7) 0,rgba(167,139,250,.7) 26px,transparent 52px),
  radial-gradient(circle at 86% 66%,rgba(251,146,60,.75) 0,rgba(251,146,60,.75) 24px,transparent 48px),
  radial-gradient(circle at 70% 12%,rgba(96,165,250,.55) 0,rgba(96,165,250,.55) 30px,transparent 58px),
  radial-gradient(circle at 48% 22%,rgba(244,114,182,.5) 0,rgba(244,114,182,.5) 18px,transparent 38px),
  radial-gradient(circle at 90% 84%,rgba(45,212,191,.35) 0,rgba(45,212,191,.35) 20px,transparent 44px),
  linear-gradient(135deg,#0b1220 0%,#16294d 60%,#1e2a4a 100%)!important;}
#todayCard .todayCard-cover{display:none!important;}
#todayCard .todayCard-info .todayCard-title{font-size:24px;line-height:1.3;margin-top:4px;}
#todayCard .xe-shop-sub{font-size:13px;opacity:.85;margin-top:8px;line-height:1.4;}

/* 页脚：隐藏主题作者外链（配置空数组会被 Hexo 数组合并还原，故用 CSS 隐藏） */
a.footer-bar-link[href*="hexo-theme-anzhiyu"]{display:none!important;}
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

/* ---------------- 右侧大卡：小店信息 + 按钮跳转 ---------------- */
function xeInitTodayCard() {
  var card = document.getElementById("todayCard");
  if (!card) return;
  // 第三行小字：主题模板只有两行文字位，这里补一行
  var title = card.querySelector(".todayCard-title");
  if (title && !card.querySelector(".xe-shop-sub")) {
    var sub = document.createElement("div");
    sub.className = "xe-shop-sub";
    sub.textContent = "ChatGPT、Claude 等热门AI账号，这里都有";
    title.parentNode.insertBefore(sub, title.nextSibling);
  }
  // 按钮：改文字 + 移除"展开文章宫格"拦截，让点击跟随整卡链接跳转
  var btn = card.querySelector(".banner-button");
  if (btn) {
    btn.removeAttribute("onclick");
    var txt = btn.querySelector(".banner-button-text");
    if (txt) txt.textContent = "进店选购 ↗";
    var icon = btn.querySelector("i");
    if (icon) icon.remove();
  }
}

/* ---------------- 统一初始化 ---------------- */
function xeInitAll() {
  xeInjectStyle();
  xeFixPageName();
  xeInitBadge();
  xeInitCategorySub();
  xeInitIconWall();
  xeInitTodayCard();
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
