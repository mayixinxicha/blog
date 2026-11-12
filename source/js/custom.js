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

/* 问候卡：白底（主题原生），图标带回归主题原生间距（7rem），网址字号加大 */
#random-banner.xe-wall .banners-title-small{font-size:15px;}

/* 导航右侧图标组：间距收紧（主题默认 1rem） */
#nav-right > div{margin-left:0.5rem;}

/* 首页顶部两列等分（右列原为固定 600px，窄窗口下 flex 收缩失衡导致左右不均）；
   间隙收紧为 0.75rem 并去掉左列自带的 margin-right:10px（原 26px+ 太宽，原主题观感约 10-15px） */
#home_top .swiper_container_card{gap:0.5rem!important;justify-content:flex-start!important;}
#home_top div#bannerGroup{width:50%!important;flex:1 1 0!important;min-width:0;margin-right:0!important;}
#home_top .topGroup{width:50%!important;flex:1 1 0!important;min-width:0;}
#home_top .topGroup .todayCard{width:100%!important;}

/* 右侧大卡：原主题浅色系（薄荷绿→白→粉渐变 + 中央彩虹手写 Shop） */
#todayCard{background:linear-gradient(120deg,#d5f2e3 0%,#f4fbf7 45%,#fbe0ec 100%)!important;}
/* 删除主题为照片背景设计的黑色内阴影压暗层（否则浅色渐变会被整体罩暗） */
#todayCard::after{display:none!important;}
#todayCard .todayCard-cover{display:none!important;}
#todayCard .xe-shop-word{position:absolute;top:50%;left:0;width:100%;transform:translateY(-58%);text-align:center;z-index:1;
  font-family:"Segoe Script","Brush Script MT","Comic Sans MS",cursive;font-size:86px;font-weight:700;line-height:1;pointer-events:none;
  background:linear-gradient(90deg,#ff5e7a 0%,#ff9d42 22%,#ffd53d 40%,#4fc97e 58%,#3fa9f5 76%,#9b6bf2 100%);
  background-size:200% auto;
  -webkit-background-clip:text;background-clip:text;color:transparent;
  animation:xe-rainbow 8s linear infinite,xe-float 3.2s ease-in-out infinite;}
#todayCard:hover .xe-shop-word{animation-duration:3s,3.2s;}
@keyframes xe-rainbow{0%{background-position:0% 50%;}100%{background-position:200% 50%;}}
@keyframes xe-float{0%,100%{margin-top:0;}50%{margin-top:-7px;}}
#todayCard .todayCard-info .todayCard-tips{color:#5a6a75!important;opacity:1;}
#todayCard .todayCard-info .todayCard-title{color:#2e9bab!important;font-size:22px;line-height:1.35;margin-top:4px;}
#todayCard .xe-shop-sub{color:#5a6a75!important;font-size:13px;margin-top:8px;line-height:1.4;}
.topGroup .banner-button{background:#fff!important;color:#333!important;box-shadow:0 3px 10px rgba(46,155,171,.25)!important;}
/* 恢复原主题的悬停变色（上一轮的 !important 把主题 hover 规则压死了，这里同级覆盖回来） */
.topGroup .banner-button:hover{background:var(--anzhiyu-theme)!important;color:#fff!important;}

/* 作者卡：隐藏 social 渲染出的两个社交圆钮（social 配置必须保留，名称区依赖它渲染），
   图标隐藏后名称块独占整行 */
.author-info__bottom-group .card-info-social-icons{display:none!important;}
/* 名称大字与副题小字拉开呼吸间距 */
.author-info__bottom-group .author-info__desc{margin-top:9px;}

/* 页脚：隐藏主题作者外链（配置空数组会被 Hexo 数组合并还原，故用 CSS 隐藏） */
a.footer-bar-link[href*="hexo-theme-anzhiyu"]{display:none!important;}

/* ============ 移动端分两档：主题旧版 ≤1200px 硬隐藏问候卡，这里对齐演示站新版行为 ============ */
/* 第一档 769~1200px（窄窗口/平板）：保持两列并排 = 桌面端等比缩小版，高度与字号统一收一档 */
@media screen and (min-width:769px) and (max-width:1200px){
  #home_top .swiper_container_card{flex-wrap:nowrap!important;}
  #home_top div#bannerGroup{width:50%!important;flex:1 1 0!important;}
  #home_top .topGroup{width:50%!important;flex:1 1 0!important;}
  #random-banner{display:flex!important;height:280px!important;}
  #random-banner .banners-title-big{font-size:30px!important;}
  #random-banner .banners-title-small{font-size:13px!important;}
  #todayCard .xe-shop-word{font-size:64px!important;}
  #todayCard .todayCard-info .todayCard-title{font-size:18px!important;}
  #todayCard .xe-shop-sub{font-size:12px!important;}
  .topGroup .banner-button{padding:6px 14px!important;font-size:12px!important;}
  .categoryItem{height:56px!important;}
  a.categoryButton.xe-has-sub .categoryButtonText{font-size:.9rem!important;}
  .category-sub{font-size:10px!important;}
}
/* 第二档 ≤768px（手机竖屏）：三彩卡与大卡整组不显示，问候卡独占顶部 */
@media screen and (max-width:768px){
  #random-banner{display:flex!important;height:230px!important;}
  #home_top .swiper_container_card{flex-wrap:wrap!important;overflow:hidden!important;}
  #home_top div#bannerGroup{width:100%!important;flex:none!important;}
  #home_top .topGroup{display:none!important;}
  .categoryGroup{display:none!important;}
  #random-banner .banners-title-big{font-size:26px!important;}
  #random-banner .banners-title-small{font-size:12px!important;}
  /* QQ翻转卡手机端：字号收一档 + 不折行 + 二维码缩小（与文字的 gap:10px 保底留白全局生效） */
  .xe-wx-sub{font-size:18px!important;}
  .xe-wx-tip2{font-size:11px!important;margin-top:8px!important;}
  .xe-wx-sub,.xe-wx-tip2{white-space:nowrap;}
  .xe-wx-qr{width:82px!important;height:82px!important;}
  .xe-wx-back{padding:0 12px 0 16px!important;}
}

/* ============ 加小二 QQ 翻转卡（纯 CSS 绘制，排版对齐原主题公众号卡） ============ */
#aside-content .card-widget#card-wechat{background:linear-gradient(135deg,#3a7bd5 0%,#5a8ff0 60%,#6f79f2 100%)!important;}
[data-theme="dark"] #aside-content .card-widget#card-wechat{background:linear-gradient(135deg,#2a4a8f 0%,#3a5cc0 60%,#4a4fc0 100%)!important;}
#card-wechat .face{background:none!important;}
.xe-wx-front{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;padding-left:20px;color:#fff;position:relative;overflow:hidden;}
.xe-wx-brand{display:flex;align-items:center;gap:10px;}
.xe-wx-title{font-size:30px;font-weight:700;letter-spacing:1px;line-height:1.2;}
.xe-wx-badge{background:#fff;color:#3a7bd5;font-size:13px;font-weight:700;border-radius:6px;padding:3px 9px;}
.xe-wx-tip{font-size:13px;opacity:.92;margin-top:8px;line-height:1.3;}
.xe-wx-mark{position:absolute;right:2px;top:50%;transform:translateY(-50%);font-size:64px;font-weight:800;font-style:italic;
  color:rgba(255,255,255,.16);letter-spacing:2px;pointer-events:none;line-height:1;}
.xe-wx-back{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px;height:100%;padding:0 14px 0 20px;color:#fff;}
.xe-wx-left{display:flex;flex-direction:column;justify-content:center;}
.xe-wx-sub{font-size:22px;font-weight:700;letter-spacing:1px;}
.xe-wx-tip2{font-size:12px;opacity:.92;margin-top:10px;}
.xe-wx-qr{width:96px;height:96px;border-radius:8px;background:#fff;object-fit:cover;flex:none;}

/* ============ AI小店按钮（替换打赏作者位置） ============ */
.xe-share-btn{display:inline-flex;align-items:center;gap:8px;background:#425aeb;color:#fff!important;border-radius:20px;
  padding:8px 22px;font-size:14px;font-weight:600;cursor:pointer;transition:.3s;box-shadow:0 3px 10px rgba(66,90,235,.3);}
.xe-share-btn:hover{background:#3450d8!important;color:#fff!important;transform:translateY(-2px);}
.xe-share-btn svg{width:16px;height:16px;fill:currentColor;}
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
    sub.textContent = "GPT、Claude 等热门现成账号拍下秒发";
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

/* ---------------- 加小二 QQ 翻转卡（纯 CSS 卡面 + 压缩二维码） ---------------- */
function xeInitWechatCard() {
  var wrap = document.querySelector("#card-wechat #flip-content");
  if (!wrap) return;
  var face = wrap.querySelector(".face:not(.back)");
  var back = wrap.querySelector(".back.face");
  if (face && !face.querySelector(".xe-wx-front")) {
    face.innerHTML =
      '<div class="xe-wx-front">' +
      '<div class="xe-wx-brand"><span class="xe-wx-title">加小二</span><span class="xe-wx-badge">QQ</span></div>' +
      '<div class="xe-wx-tip">有事，找小二 ▶</div>' +
      '<span class="xe-wx-mark">QQ</span>' +
      "</div>";
  }
  if (back && !back.querySelector(".xe-wx-back")) {
    back.innerHTML =
      '<div class="xe-wx-back">' +
      '<div class="xe-wx-left"><div class="xe-wx-sub">扫码加好友</div><div class="xe-wx-tip2">QQ扫一扫，直接加 ▶</div></div>' +
      '<img class="xe-wx-qr" src="/img/qq-qr.jpg" alt="QQ二维码">' +
      "</div>";
  }
}

/* ---------------- AI小店按钮（替换打赏作者位置；原分享逻辑弃用：系统分享API桌面端常静默失败且与主题自带分享图标重复） ---------------- */
function xeInitShareButton() {
  var slot = document.querySelector("#post-tools .post-tools-left .rewardLeftButton");
  if (!slot || slot.querySelector(".xe-share-btn")) return;
  var b = document.createElement("a");
  b.className = "xe-share-btn";
  b.href = "https://shop.xiaomimiai.com/";
  b.target = "_blank";
  b.rel = "noopener";
  b.textContent = "AI小店 ↗";
  slot.appendChild(b);
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
  xeInitWechatCard();
  xeInitShareButton();
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
