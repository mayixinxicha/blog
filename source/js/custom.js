/**
 * 自定义脚本：优化导航栏中间的"页面名"显示
 * 首页时显示「首页」而不是重复的站点标题；
 * 文章页等保持主题默认行为（显示文章名）。
 */
(function () {
  function fixPageName() {
    var el = document.getElementById("page-name");
    if (!el) return;
    var path = window.location.pathname;
    if (path === "/" || path === "/index.html") {
      el.innerText = "首页";
    }
  }
  // 首次加载（custom.js 在主题脚本之后注入，晚注册晚执行）
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(fixPageName, 30);
  });
  // 主题使用 pjax 做站内跳转，跳转完成后再次修正
  document.addEventListener("pjax:complete", function () {
    setTimeout(fixPageName, 50);
  });
  document.addEventListener("pjax:success", function () {
    setTimeout(fixPageName, 50);
  });
})();
