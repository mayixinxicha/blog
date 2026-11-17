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
/* 「最新文章」标题条：桌面全局隐藏（手机端媒体查询内启用），DOM 由 JS 注入 */
.xe-sec-title{display:none;}
/* 桌面端封面：宽度保持完整展示（不裁左右），仅底部裁掉卡面圆角条（SVG rx=42，
   裁到 y=633 圆角与白边消失、底缘变平直卡面），VISA 基线 588 完整保留 */
@media screen and (min-width: 769px){
  #recent-posts>.recent-post-item .post_cover{height:auto!important;aspect-ratio:1200/633!important;}
  #recent-posts>.recent-post-item .post_cover img.post_bg{height:100%!important;object-position:top!important;}
}
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

/* 图注：灰色小字居中（替代旧版 *斜体* 图注语法） */
#article-container .fig-cap{color:#949dae;font-size:.85em;line-height:1.9;margin:-6px 0 20px;text-align:center;}

/* 正文文字色对齐原主题演示站观感：加深为 --anzhiyu-fontcolor，加粗与正文同色 */
body{color:var(--anzhiyu-fontcolor);}
/* 版本兼容锁：远端构建若装到新版主题（会给加粗染主题蓝），这里强制拉回正文色 */
#article-container strong,#article-container b{color:var(--anzhiyu-fontcolor)!important;}

/* 分类/标签/独立页头部垫层归零：导航是 fixed 不占流空间（高60px），内容起点由 .layout
   padding-top 精确控制——65px = 导航底边 60px + 5px，内容贴住导航下方。
   类名双代兼容：1.7.0 主题产出 not-home-page，新版产出 not-top-img（分类页实测两者都有）；
   首页头部也是 not-top-img，用 body:not(:has(#home_top)) 排除，不伤首页占位带。
   旧浏览器不支持 :has 时规则整体跳过 = 维持原状，失效即安全 */
#page-header.not-home-page,
body:not(:has(#home_top)) #page-header.not-top-img{height:0!important;min-height:0!important;margin-bottom:0!important;}
#page-header.not-home-page #page-site-info{display:none!important;}
body:has(#page-header.not-home-page) .layout,
body:has(#page-header.not-top-img):not(:has(#home_top)) .layout{padding-top:65px!important;}

/* 粘性页脚修正（"分类页导航下方大空隙"的真正根源）：主题给 #body-wrap 设了
   justify-content:space-between，当内容不足一屏（如只有 1 篇文章的分类页），
   剩余空间被平分到 header↔main 和 main↔footer 之间——main 被推向屏幕正中，
   导航下方凭空多出 ~170px。改用 flex:1 让 main 自己撑满剩余空间：
   main 顶到 header 下方（配合上面的 65px = 距导航 5px），页脚依旧贴底 */
main#blog-container{flex:1 0 auto!important;}

/* 侧栏与文章卡片顶部对齐：主题在 min-width:1201px 给 .recent-post-item 加了
   margin-top:1rem(16px)，左列首卡顶到 65+16=81px，而侧栏与其他左列容器仍是 65px。
   同断点给侧栏 + 自定义页(#page) + 归档(#archive) + 标签页(#tag) 补同款 margin，
   全站非首页左列/侧栏统一 81px 起点（排除首页：横幅与侧栏本就 65px 对齐） */
@media screen and (min-width:1201px){
  body:not(:has(#home_top)) #aside-content,
  body:not(:has(#home_top)) #page,
  body:not(:has(#home_top)) #archive,
  body:not(:has(#home_top)) #tag{margin-top:16px!important;}
}

/* 非文章页导航白底深字兜底（原生此状态无配色规则，部分浏览器下白字落浅底） */
#page-header.not-home-page #nav,
body:not(:has(#home_top)) #page-header.not-top-img #nav{background:rgba(255,255,255,.85);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);}
#page-header.not-home-page #nav .site-page,#page-header.not-home-page #nav #site-name .title,
body:not(:has(#home_top)) #page-header.not-top-img #nav .site-page,body:not(:has(#home_top)) #page-header.not-top-img #nav #site-name .title{color:var(--anzhiyu-fontcolor)!important;}
[data-theme="dark"] #page-header.not-home-page #nav,
[data-theme="dark"] body:not(:has(#home_top)) #page-header.not-top-img #nav{background:rgba(19,20,23,.85);}

/* 导航站点名：浅色导航下加深 + 加粗；压在深色封面上的透明态强制白字（否则深灰站名隐入深蓝背景） */
#blog_name #site-name .title{color:var(--anzhiyu-fontcolor);font-weight:600;}
#page-header.post-bg #nav:not(.nav-fixed) #blog_name #site-name .title{color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.35);}

/* 文章底部彩色标签（版权卡 tag_share）：主题容器 flex-wrap 却无 row-gap，
   标签多换行后两行贴死——补 8px 行距（此前误修页头 meta-firstline，已全部还原） */
#post .tag_share .post-meta__box__tag-list{row-gap:8px;}

/* 文末发文时间行：灰色小字（替代旧版 *斜体* 语法） */
#article-container .xe-timeline{color:#949dae;font-size:.85em;text-align:center;margin:28px 0 0;}

/* ---------------- 正文排版优化（标题间距 / 数字等宽 / 结论卡 / 列表呼吸感） ---------------- */

/* 标题间距铁律："离上文远、离下文近"——上边距约 2 倍于下边距，扫读时标题归属清晰 */
#article-container h2,#article-container h3,#article-container h4{margin:2em 0 .8em;}

/* 金额/数字防跳动：等宽数字对齐 + 深色强调，攻略文的 $12-15、0.01 这类数值扫读一眼可辨。
   套用方式：写作时 <span class="xe-num">$12-15 U</span> */
#article-container .xe-num{font-variant-numeric:tabular-nums;font-weight:600;}

/* note 提示块描边卡（方案五）：无左条、无阴影，近白底 + 1px 细描边 + 10px 圆角，
   语义收进标题色——info 标题品牌蓝、warning 标题暖金；深色模式半透明描边。
   容器用 :is(#article-container,#page)：自定义聚合页（/card/ /about 等）同享一套语言 */
:is(#article-container,#page) .note{border-radius:10px!important;padding:12px 16px!important;
  background:#FBFCFE!important;border:1px solid #E3E8F0!important;box-shadow:none!important;}
:is(#article-container,#page) .note .note-hd{font-weight:700;color:#2c3fbe;}
:is(#article-container,#page) .note.warning{border-color:#EDDFC8!important;}
:is(#article-container,#page) .note.warning .note-hd{color:#B07A2A;}
/* info 标题染蓝只走 .note-hd span（文章页 7 个「卡住了怎么办」已改为该结构）；
   不再用 strong:only-child 判断——聚合页(/card/ 等)与文内无标题 note 的正文加粗
   都会被误染蓝，现已全部回归正文字色 */
[data-theme="dark"] :is(#article-container,#page) .note{background:rgba(255,255,255,.04)!important;
  border-color:rgba(255,255,255,.12)!important;}
[data-theme="dark"] :is(#article-container,#page) .note.warning{border-color:rgba(217,154,61,.35)!important;}
[data-theme="dark"] :is(#article-container,#page) .note .note-hd{color:#9db1ff;}
[data-theme="dark"] :is(#article-container,#page) .note.warning .note-hd{color:#d9b06a;}

/* blockquote 结论卡同步改描边款：与 note 卡同一套语言（细描边、无阴影、无左条） */
:is(#article-container,#page) blockquote{position:relative;background:#FBFCFE;
  border:1px solid #E3E8F0;border-radius:10px;
  padding:14px 18px;margin:1.5em 0;box-shadow:none;}
:is(#article-container,#page) blockquote p{margin:0 0 8px;color:var(--anzhiyu-fontcolor);}
:is(#article-container,#page) blockquote p:last-child{margin-bottom:0;}
[data-theme="dark"] :is(#article-container,#page) blockquote{background:rgba(255,255,255,.04);
  border-color:rgba(255,255,255,.12);box-shadow:none;}

/* 列表呼吸感：相邻列表项 6px 间距（步骤条目呼吸感），嵌套列表 4px 收紧一级。
   主题有同权重 li 间距规则，需 !important 压住 */
#article-container ul li + li,#article-container ol li + li{margin-top:6px!important;}
#article-container ul ul,#article-container ol ol,#article-container ul ol,#article-container ol ul{margin-top:4px;}

/* 行内 code 药丸降饱和：主题默认高饱和品牌蓝底，正文药丸一多就喧宾夺主。
   改"浅蓝底+深蓝字"（抄原作者降对比的意图，不抄其灰蓝色值，保持品牌色系）。
   :not(pre)>code 只命中行内药丸，不伤代码块。
   字体/字号均 inherit：等宽字体字形高度只有中文的 2/3（Consolas 10px vs 中文 15px），
   同字号看着像图注小字；改继承正文字体后中英文数字与正文完全同尺寸，
   「代码感」由底色承担，数字等宽由全局 tabular-nums 兜底 */
:is(#article-container,#page) :not(pre) > code{background:#EBF0FF!important;color:#2c3fbe!important;
  padding:2px 6px!important;border-radius:2px!important;font-size:inherit!important;font-family:inherit!important;}
[data-theme="dark"] :is(#article-container,#page) :not(pre) > code{background:rgba(66,90,239,.18)!important;color:#9db1ff!important;}

/* 表格格内松紧：主题 td 行高 2.0 过松，长句格显得散——行高收 1.7、内边距收紧 */
#article-container td,#article-container th{line-height:1.7;padding:.45rem .6rem;}

/* 表格圆角：主题 border-collapse:collapse 下 border-radius 不生效（直角）。
   换 separate + 外框 + overflow:hidden 裁角，格线改为右/下单边避免相邻加倍，
   末行/末列去边收口。注意 --style-border-always 变量本身含完整 "1px solid 色" 值，
   直接引用即可，不能再补 1px solid 前缀（会声明失效） */
#article-container table{border-collapse:separate!important;border-spacing:0!important;
  border-radius:10px!important;overflow:hidden;border:var(--style-border-always);}
#article-container th,#article-container td{border-top:none;border-left:none;
  border-right:var(--style-border-always);border-bottom:var(--style-border-always);}
#article-container tr th:last-child,#article-container tr td:last-child{border-right:none;}
#article-container tbody tr:last-child td{border-bottom:none;}

/* note 提示块行高 1.8：正文 2.0 在小块内显稀疏 */
#article-container .note{line-height:1.8;}

/* 标题行高 1.4：中文长标题折行时不散架 */
#article-container h2,#article-container h3,#article-container h4{line-height:1.4;}

/* 正文数字全局等宽：金额/版本号纵向对齐（.xe-num 为手动强调用法，此为全量兜底） */
#article-container{font-variant-numeric:tabular-nums;}

/* /card/ 聚合页实测徽章：绿色胶囊（呼应"测过才上榜"原则） */
.xe-tested-badge{display:inline-block;background:var(--anzhiyu-green,#57bd6a);color:#fff;font-size:12px;
  font-weight:600;padding:3px 12px;border-radius:20px;margin:2px 0 12px;}

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
#todayCard .todayCard-info .todayCard-tips{color:#5a6a75!important;opacity:1;font-size:13px;}
/* 桌面端信息块（标题+小字）下移：主题基准 bottom 2rem 偏高，贴向卡底更稳（手机端有自己的 34px 覆盖） */
.todayCard .todayCard-info{bottom:1.25rem!important;}
#todayCard .todayCard-info .todayCard-title{color:#2e9bab!important;font-size:24px;line-height:1.35;margin-top:4px;}
#todayCard .xe-shop-sub{color:#5a6a75!important;font-size:14px;margin-top:10px;line-height:1.45;}
.topGroup .banner-button{background:#fff!important;color:#333!important;box-shadow:0 3px 10px rgba(46,155,171,.25)!important;}
/* 恢复原主题的悬停变色（上一轮的 !important 把主题 hover 规则压死了，这里同级覆盖回来） */
.topGroup .banner-button:hover{background:var(--anzhiyu-theme)!important;color:#fff!important;}
.xe-btn-arrow{display:inline-block;transition:transform .3s;}
.topGroup .banner-button:hover .xe-btn-arrow{transform:translateX(2px);}

/* 六宫格（开卡/订AI/eSIM/AppleID/卡库/工具箱）：手机端 Shop 卡下方的 3×2 彩色导航宫格
   （对齐 zibll 参考版式）。基准隐藏，仅手机端显示；全部链接为站内真实页面 */
.xe-grid6{display:none;width:100%;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:12px;}
.xe-grid6 a{display:flex;flex-direction:row;align-items:center;gap:7px;height:52px;padding:0 9px;
  border-radius:12px;color:#fff;text-decoration:none;transition:transform .3s;overflow:hidden;
  box-shadow:0 3px 9px rgba(30,60,80,.16);position:relative;}
.xe-grid6 a::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,0) 55%);pointer-events:none;}
.xe-grid6 a:active{transform:scale(.96);}
.xe-grid6 .xe-g6-ico{flex:none;width:22px;height:22px;border-radius:7px;background:rgba(255,255,255,.3);
  display:flex;align-items:center;justify-content:center;font-size:12px;line-height:1;}
.xe-grid6 .xe-g6-txt{display:flex;flex-direction:column;gap:1px;min-width:0;}
.xe-grid6 .xe-g6-title{font-size:12.5px;font-weight:700;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.xe-grid6 .xe-g6-sub{font-size:9px;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}

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
/* 第二档 ≤768px（手机竖屏）：问候卡隐藏，小店卡升级首屏规格（对齐安知鱼演示站手机首屏卡比例） */
@media screen and (max-width:768px){
  /* 手机端文章头图：复刻主题 mainTone 分支的移动端形态（head.styl:162-199 主分支几何）——
     原生非 mainTone 分支把封面拉满整个视口高（height:100vh + 图片 height:100%），
     宽图被放大裁切成"巨型圆圈怼脸"、标题压花图看不清。改为：封面高 30rem、图片占 70%、
     边缘用品牌色 inset 渐隐融入背景，标题落在干净渐隐区。桌面端在媒体查询外零影响。
     （旧版 28% 蒙版已删：它与封面同为 z-index:1 但画序在前，实际被图片盖住从未显示过） */
  #page-header.post-bg #post-top-cover{position:absolute;height:30rem;}
  #page-header.post-bg #post-top-cover #post-top-bg{height:70%!important;}
  #page-header.post-bg #post-top-cover::after{display:block!important;
    box-shadow:0 0 205px 59px var(--anzhiyu-main) inset;}
  #page-header #post-info{z-index:2;}
  /* 问候卡（支付图标拼图）手机端整体隐藏，首屏让位给口令条+小店卡；平板与桌面档不受影响 */
  #random-banner{display:none!important;}
  #home_top .swiper_container_card{flex-wrap:wrap!important;overflow:hidden!important;}
  #home_top div#bannerGroup{width:100%!important;flex:none!important;}
  /* 只藏推荐小卡（绿色残影根源），不再整组隐藏 .topGroup——小店卡是手机端唯一进店入口 */
  #home_top .topGroup{display:block!important;height:auto!important;width:100%!important;flex:none!important;}
  #home_top .topGroup .recent-post-item{display:none!important;}
  /* ===== 统一垂直节奏：导航→Shop 16px、Shop→宫格 12px、宫格→文章卡 12px ===== */
  #home_top .topGroup{margin-top:3px!important;}
  #home_top .swiper_container_card{gap:0!important;}
  /* ===== 首屏纵向栈（原版式同比缩小）：Shop 字居中 → 按钮 → 标题 → 小字 ===== */
  #home_top .topGroup .todayCard{position:relative!important;display:flex!important;width:100%!important;height:200px!important;margin:0!important;}
  /* Shop 大字：居中招牌位（加大至 56px，下移至 34%） */
  #todayCard .xe-shop-word{left:0!important;right:0!important;width:100%!important;top:34%!important;transform:translateY(-50%)!important;font-size:56px!important;text-align:center!important;}
  /* 按钮：Shop 字正下方居中（缩小+下移，退为辅助入口） */
  #todayCard .banner-button-group{left:0!important;right:0!important;top:auto!important;bottom:62px!important;transform:none!important;display:flex!important;justify-content:center!important;}
  #todayCard .banner-button{width:auto!important;height:27px!important;padding:0 13px!important;font-size:11.5px!important;}
  #todayCard .xe-btn-arrow{transform:rotate(45deg)!important;}
  /* 文字块：整体居中贴卡底 */
  #todayCard .todayCard-info{left:16px!important;right:16px!important;top:auto!important;bottom:12px!important;transform:none!important;text-align:center!important;max-width:none!important;}
  #todayCard .todayCard-info .todayCard-title{font-size:16px!important;line-height:1.3!important;margin-top:0!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  /* 小字居中，超宽省略 */
  #todayCard .xe-shop-sub{font-size:11px!important;margin-top:3px!important;line-height:1.4!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:0!important;}
  #todayCard .xe-btn-arrow{transform:rotate(45deg)!important;}
  .categoryGroup{display:none!important;}
  /* 手机端 QQ 卡收紧：字号收一档（二维码 80px 与桌面统一，无需再覆盖） */
  .xe-wx-sub{font-size:18px!important;}
  .xe-wx-tip2{font-size:11px!important;margin-top:8px!important;}
  .xe-wx-sub,.xe-wx-tip2{white-space:nowrap;}
  /* ===== 尾部节奏收口：宫格→文章卡 12px、文章卡→QQ 卡 16px、QQ 卡→页脚 16px ===== */
  /* 文章卡 mt 用主题同款特异性选择器压掉（.lastestpost-item 两 class 比 div 元素选择器高一档） */
  #recent-posts>.recent-post-item.lastestpost-item{margin:0!important;}
  /* 分页是网格第二行，row-gap 10px 会垫出空隙——负 margin 抵消 + 内部高度归零 */
  /* 分页是网格第二行，row-gap 10px 会垫出空隙——空壳分页（无页码链接）直接隐藏，
     :has(a) 保证多页时恢复显示 */
  #recent-posts>#pagination:not(:has(a)){display:none!important;}
  /* 主题 #page 撑满视口 + body-wrap 弹性列把 footer 推到屏底，内容不足一屏时
     页脚上方留出大段空白——两者归零后 footer 紧跟内容，QQ 卡→页脚 16px */
  #page{min-height:0!important;}
  #body-wrap{justify-content:flex-start!important;}
  #aside-content{padding-bottom:calc(16px + env(safe-area-inset-bottom))!important;}
  /* iPhone 底部安全区：页脚让位，防止最后一行被小白条遮挡 */
  #footer{padding-bottom:calc(10px + env(safe-area-inset-bottom))!important;}
  /* 触屏按压反馈（移动端无 hover）：文章卡/宫格/QQ 卡按下微透明 */
  #recent-posts .recent-post-item:active{opacity:.85!important;}
  .xe-grid6 a:active{opacity:.85!important;}
  #aside-content .card-widget#card-wechat:active{opacity:.9!important;}
  #aside-content .anzhiyu-right-widget{margin-top:16px!important;}
  /* QQ 卡压扁 110→85px：外壳与 flip-wrapper 内胆都要压（主题双重钉死 110px） */
  #aside-content .card-widget#card-wechat{height:85px!important;}
  #aside-content #card-wechat #flip-wrapper{height:85px!important;}
  #aside-content #card-wechat .xe-wx-front{padding-left:16px!important;}
  #aside-content #card-wechat .xe-wx-title{font-size:22px!important;}
  #aside-content #card-wechat .xe-wx-badge{font-size:11px!important;padding:2px 7px!important;}
  #aside-content #card-wechat .xe-wx-tip{font-size:11px!important;margin-top:5px!important;}
  #aside-content #card-wechat .xe-wx-mark{font-size:46px!important;}
  #aside-content #card-wechat .xe-wx-qr{width:64px!important;height:64px!important;}
  /* 六宫格：Shop 卡正下方 3×2 彩色导航（zibll 版式） */
  .xe-grid6{display:grid!important;}
  /* 双列文章卡（常态启用，对齐 zibll 版式）：封面在上、标题在下，两列等宽网格；
     #categoryBar/#pagination 也在 #recent-posts 里，通栏占满避免被分列 */
  #recent-posts{display:grid!important;grid-template-columns:repeat(1,minmax(0,1fr))!important;gap:10px!important;padding:0 20px!important;margin-top:12px!important;}
  #recent-posts>#categoryBar,#recent-posts>#pagination{grid-column:1/-1!important;}
  #recent-posts .recent-post-item{flex-direction:column!important;height:auto!important;min-height:0!important;margin:0!important;}
  #recent-posts .recent-post-item .post_cover{width:100%!important;height:auto!important;flex:none!important;}
  /* 封面不硬裁：高度跟随图片原始比例（width 100% + height auto），VISA/图标完整显示 */
  #recent-posts .recent-post-item .post_cover img{width:100%!important;height:auto!important;object-fit:contain;}
  #recent-posts .recent-post-item .recent-post-info{padding:10px 14px 12px!important;width:100%!important;}
  #recent-posts .article-title{font-size:13px!important;line-height:1.45!important;
    display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;overflow:hidden!important;}
  /* 文字区同比缩小对齐全宽卡版式：去主题 32px 侧缩进、140px 最小高、meta 行 absolute 钉位
     （top:118px 造成标题与标签间大空档）；文字区起点贴封面底 4px */
  #recent-posts .recent-post-info{min-height:0!important;height:auto!important;}
  #recent-posts .recent-post-info-top{margin:0!important;padding:0!important;}
  #recent-posts .article-meta-wrap{position:static!important;flex-direction:row!important;margin-top:5px!important;padding:0!important;line-height:1.5!important;}
  #recent-posts .recent-post-info .content{margin:0!important;}
  /* 徽章行（虚拟卡/最新/未读）整行去掉：单篇文章下全是冗余信息，且与标签行重复 */
  #recent-posts .recent-post-info-top-tips{display:none!important;}
  /* 标签+日期同行整体靠左：标签在前、日期紧跟其后，不再顶到右端 */
  #recent-posts .article-meta-wrap{justify-content:flex-start!important;}
  #recent-posts .article-meta-wrap .article-meta.tags{flex:0 1 auto!important;order:1!important;min-width:0!important;overflow:hidden!important;white-space:nowrap!important;text-overflow:clip!important;}
  #recent-posts .article-meta-wrap .article-meta__tags{display:inline-block!important;font-size:10px!important;padding:1px 3px!important;margin-right:2px!important;}
  /* # 号是图标字体（13px/伪元素17px），同步压到 10px 与文字一致 */
  #recent-posts .article-meta-wrap .anzhiyufont{font-size:10px!important;}
  #recent-posts .article-meta-wrap .anzhiyufont:before{font-size:10px!important;}
  #recent-posts .article-meta-wrap .post-meta-date{flex:none!important;order:2!important;font-size:10px!important;margin-left:6px!important;margin-right:0!important;}
  #recent-posts .article-meta-wrap .article-meta-label{display:none!important;}
  /* 日期行同步缩小 */
  #recent-posts .article-meta-wrap{font-size:10px!important;}
  #recent-posts .article-meta-wrap .post-meta-date{font-size:10px!important;}
  /* 分类条手机端隐藏：zibll 版式无此块，文章卡直接顶上宫格（桌面端不受影响） */
  #recent-posts>#categoryBar{display:none!important;}
  /* 文章页头图压缩：主题手机端 min-height 450px（基础 500px）+ post-info 顶部 padding 11rem，
     头图独占真机视口 65%+、正文被推出首屏——压到 300px 档，标题左对齐降一档并钳 2 行 */
  #page-header.post-bg{height:300px!important;min-height:0!important;}
  #page-header #post-info{padding:3.5rem 6% 0!important;align-items:flex-start!important;}
  #page-header #post-info .post-title{font-size:1.3rem!important;line-height:1.4!important;
    -webkit-line-clamp:2!important;text-align:left!important;margin:.4rem 0!important;}
  /* 「最新文章」小标题条：宫格与文章卡之间的衔接（zibll 式），桌面端由全局规则隐藏；
     轻胶囊形态：浅蓝底圆角包文字，右侧淡细线，不与六宫格彩块抢视觉 */
  /* 左缘对齐：宿主 .swiper_container_card 自带 20px 偏移，再写 20px margin 会双重缩进（40px），
     归零后与宫格/文章卡左缘一致 */
  .xe-sec-title{display:flex!important;align-items:center!important;gap:8px!important;margin:12px 0 0!important;}
  .xe-sec-title .xe-sec-bar{display:none!important;}
  .xe-sec-title .xe-sec-txt{font-size:14px!important;font-weight:500!important;color:#185fa5!important;
    background:#e6f1fb!important;padding:6px 16px!important;border-radius:15px!important;line-height:1.2!important;}
  .xe-sec-title .xe-sec-line{flex:1!important;height:1px!important;background:rgba(0,0,0,.08)!important;}
  /* 手机端去掉侧栏标签/归档/建站整块：6 个标签同指一篇无分流价值、归档「1 篇」暴露内容量；
     CSS 隐藏保 DOM 内链给爬虫，桌面端侧栏原样；文章攒多后删此行即可恢复 */
  #aside-content .sticky_layout{display:none!important;}
  /* 手机抽屉菜单：去主题作者推广块（网页-博客/项目-安知鱼图床，JS remove 双保险）；
     六分类胶囊化（白底圆角块+图标，两列网格），按压 :active 反馈 */
  #sidebar-menus .back-menu-list-groups{display:none!important;}
  #sidebar-menus .menus_items{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important;padding:4px 16px 8px!important;}
  #sidebar-menus .menus_item{margin:0!important;}
  #sidebar-menus .menus_item a.site-page{display:flex!important;align-items:center!important;gap:8px!important;
    height:auto!important;padding:9px 12px!important;font-size:13px!important;line-height:1.3!important;
    background:var(--anzhiyu-card-bg,#fff)!important;border:0.5px solid rgba(0,0,0,.08)!important;border-radius:10px!important;}
  #sidebar-menus .menus_item a.site-page:active{background:#eceef2!important;}
  #sidebar-menus .xe-drawer-ico{font-size:15px!important;flex:none!important;}
  /* 聚合页 6 列对比表手机端放不下（322px 挤成一字一行）：转横向滚动块、单元格不折行，
     标准响应式表格方案（display:block + overflow-x:auto），桌面端不受影响 */
  #page table{display:block;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;white-space:nowrap;}
  /* 侧栏建站信息卡（文章总数/建站天数）手机端隐藏：内容量小易露怯、对读者无决策价值；
     同卡内的标签云（内链入口）和归档保留。桌面端不受影响 */
  #aside-content .card-widget .card-webinfo{display:none!important;}
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
.xe-wx-back{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:10px;height:100%;padding:0 10px 0 16px;color:#fff;}
.xe-wx-left{display:flex;flex-direction:column;justify-content:center;}
.xe-wx-sub{font-size:20px;font-weight:700;letter-spacing:1px;white-space:nowrap;}
.xe-wx-tip2{font-size:12px;opacity:.92;margin-top:10px;white-space:nowrap;}
.xe-wx-qr{width:80px;height:80px;border-radius:8px;background:#fff;object-fit:cover;flex:none;}

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
    "办号": "eSIM卡 + Apple ID",
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
  // 两行结构：模板的品牌行(tips)移除，信息合并进下方小字行
  var tips = card.querySelector(".todayCard-tips");
  if (tips) tips.remove();
  // 第二行小字：交付方式 + 商品
  var title = card.querySelector(".todayCard-title");
  if (title && !card.querySelector(".xe-shop-sub")) {
    var sub = document.createElement("div");
    sub.className = "xe-shop-sub";
    sub.textContent = "自动发货 · GPT、Claude 等热门现成账号拍下秒发";
    title.parentNode.insertBefore(sub, title.nextSibling);
  }
  // 按钮：改文字 + 移除"展开文章宫格"拦截，让点击跟随整卡链接跳转
  // 箭头单独包 span：桌面保持 ↗，手机端 CSS 旋转 45° 变朝右 →
  var btn = card.querySelector(".banner-button");
  if (btn) {
    btn.removeAttribute("onclick");
    var txt = btn.querySelector(".banner-button-text");
    if (txt && !txt.querySelector(".xe-btn-arrow")) {
      txt.textContent = "进店选购";
      txt.insertAdjacentHTML("beforeend", '&nbsp;<span class="xe-btn-arrow">↗</span>');
    }
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
  // 清除模板内联的作者图床背景图（CSS 已用 background:none 兜底，这里从 DOM 彻底移除 URL 痕迹）
  if (face) face.removeAttribute("style");
  if (back) back.removeAttribute("style");
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

/* ---------------- 手机端六宫格：Shop 卡下方 3×2 彩色导航（基准 CSS 隐藏，仅 ≤768px 显示） ---------------- */
function xeInitGrid6() {
  var top = document.querySelector("#home_top .swiper_container_card");
  var group = document.querySelector("#home_top .topGroup");
  if (!top || !group || document.querySelector(".xe-grid6")) return;
  /* 前三格链接动态读电脑端「开卡/办号/订AI」聚合卡（categoryGroup 手机端仅 CSS 隐藏、DOM 仍在），两端永不脱钩 */
  var agg = [];
  document.querySelectorAll(".categoryGroup .categoryItem a[href]").forEach(function (a) {
    agg.push(a.getAttribute("href"));
  });
  var items = [
    { t: "开卡", s: "实测·费率对比", href: agg[0] || "/card/", bg: "linear-gradient(135deg,#4fc97e,#2f9e63)", ico: "💳" },
    { t: "办号", s: "eSIM + AppleID", href: agg[1] || "/esim/", bg: "linear-gradient(135deg,#3fa9f5,#2f86c9)", ico: "🪪" },
    { t: "订AI", s: "GPT·Claude 等", href: agg[2] || "/ai-subscription/", bg: "linear-gradient(135deg,#ff5e7a,#e6455f)", ico: "🤖" },
    { t: "攻略", s: "教程·项目实测", href: "/p/roogoo/", bg: "linear-gradient(135deg,#ff9d42,#ef8325)", ico: "📝" },
    { t: "工具", s: "站长自用", href: "/toolbox/", bg: "linear-gradient(135deg,#2e9bab,#237a88)", ico: "🧰" },
    { t: "资源", s: "开源·素材", href: "/free-list/", bg: "linear-gradient(135deg,#9b6bf2,#7d51cf)", ico: "🧩" }
  ];
  var grid = document.createElement("div");
  grid.className = "xe-grid6";
  items.forEach(function (it) {
    var a = document.createElement("a");
    a.href = it.href;
    a.style.background = it.bg;
    a.innerHTML = '<span class="xe-g6-ico">' + it.ico + '</span><span class="xe-g6-txt"><span class="xe-g6-title">' + it.t + '</span><span class="xe-g6-sub">' + it.s + "</span></span>";
    grid.appendChild(a);
  });
  group.after(grid);
}

/* ---------------- 手机端「最新文章」标题条：宫格与文章卡之间的衔接（桌面端隐藏） ---------------- */
function xeInitSectionTitle() {
  var grid = document.querySelector(".xe-grid6");
  if (!grid || document.querySelector(".xe-sec-title")) return;
  var bar = document.createElement("div");
  bar.className = "xe-sec-title";
  bar.innerHTML = '<span class="xe-sec-bar"></span><span class="xe-sec-txt">最新文章</span><span class="xe-sec-line"></span>';
  grid.after(bar);
}

/* ---------------- 手机抽屉菜单：移除主题作者推广块 + 分类项注入图标 ---------------- */
function xeInitDrawer() {
  if (!window.matchMedia("(max-width:768px)").matches) return;
  var menus = document.getElementById("sidebar-menus");
  if (!menus) return;
  var promo = menus.querySelector(".back-menu-list-groups");
  if (promo) promo.remove();
  var map = { "虚拟卡": "💳", "eSIM": "📶", "Apple ID": "🍎", "AI订阅": "🤖", "工具箱": "🧰", "清单": "🎁" };
  menus.querySelectorAll(".menus_item").forEach(function (item) {
    var a = item.querySelector("a.site-page");
    if (!a || a.querySelector(".xe-drawer-ico")) return;
    var name = a.querySelector(".xe-free-parent") ? "清单" : (a.textContent || "").trim();
    var ico = map[name];
    if (!ico) return;
    var s = document.createElement("span");
    s.className = "xe-drawer-ico";
    s.textContent = ico;
    a.insertBefore(s, a.firstChild);
  });
}

/* ---------------- 统一初始化 ---------------- */
function xeInitAll() {
  xeInjectStyle();
  xeInitDrawer();
  xeFixPageName();
  xeInitBadge();
  xeInitCategorySub();
  xeInitIconWall();
  xeInitGrid6();
  xeInitSectionTitle();
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
