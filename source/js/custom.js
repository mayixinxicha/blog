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

/* 导航右侧图标组：间距收紧（主题默认 1rem） */
#nav-right > div{margin-left:0.5rem;}

/* 首页顶部两列等分（右列原为固定 600px，窄窗口下 flex 收缩失衡导致左右不均） */
#home_top .swiper_container_card{gap:1rem;}
#home_top div#bannerGroup{width:50%!important;flex:1 1 0!important;min-width:0;}
#home_top .topGroup{width:50%!important;flex:1 1 0!important;min-width:0;}
#home_top .topGroup .todayCard{width:100%!important;}

/* 右侧大卡：原主题浅色系（薄荷绿→白→粉渐变 + 中央彩虹手写 Shop） */
#todayCard{background:linear-gradient(120deg,#e8f6f2 0%,#f7fafc 45%,#fdeef3 100%)!important;}
#todayCard .todayCard-cover{display:none!important;}
#todayCard .xe-shop-word{position:absolute;top:50%;left:0;width:100%;transform:translateY(-58%);text-align:center;z-index:1;
  font-family:"Segoe Script","Brush Script MT","Comic Sans MS",cursive;font-size:86px;font-weight:700;line-height:1;pointer-events:none;
  background:linear-gradient(90deg,#ff5e7a 0%,#ff9d42 22%,#ffd53d 40%,#4fc97e 58%,#3fa9f5 76%,#9b6bf2 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;}
#todayCard .todayCard-info .todayCard-tips{color:#5a6a75!important;opacity:1;}
#todayCard .todayCard-info .todayCard-title{color:#2e9bab!important;font-size:22px;line-height:1.35;margin-top:4px;}
#todayCard .xe-shop-sub{color:#5a6a75!important;font-size:13px;margin-top:8px;line-height:1.4;}
.topGroup .banner-button{background:#fff!important;color:#333!important;box-shadow:0 3px 10px rgba(46,155,171,.25)!important;}

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

/* ---------------- 右侧大卡：小店信息 + 彩虹 Shop 大字 + 按钮跳转 ---------------- */
function xeInitTodayCard() {
  var card = document.getElementById("todayCard");
  if (!card) return;
  // 中央彩虹手写大字（呼应原主题 hello 的版式语言）
  if (!card.querySelector(".xe-shop-word")) {
    var word = document.createElement("div");
    word.className = "xe-shop-word";
    word.textContent = "Shop";
    card.insertBefore(word, card.firstChild);
  }
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

/* ---------------- 作者卡：固定「欢迎光临」胶囊 ---------------- */
function xeInitSayhi() {
  var el = document.getElementById("author-info__sayhi");
  if (el && el.textContent !== "欢迎光临") el.textContent = "欢迎光临";
}

/* ---------------- 统一初始化 ---------------- */
function xeInitAll() {
  xeInjectStyle();
  xeFixPageName();
  xeInitBadge();
  xeInitCategorySub();
  xeInitIconWall();
  xeInitTodayCard();
  xeInitSayhi();
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
