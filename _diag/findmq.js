const fs = require('fs');
const css = fs.readFileSync('D:/blog/public/css/index.css', 'utf8');
const re = /#recent-posts>\.recent-post-item\s*\{[^}]*margin-top:\s*1rem/;
const m = re.exec(css);
console.log('found:', !!m, m && m.index);
if (m) {
  const before = css.slice(0, m.index);
  const all = [...before.matchAll(/@media([^{]+)\{/g)];
  for (let i = all.length - 1; i >= 0; i--) {
    const start = all[i].index + all[i][0].length;
    let d = 0, ok = true;
    for (let j = start; j < before.length; j++) {
      if (before[j] === '{') d++;
      else if (before[j] === '}') { d--; if (d < 0) { ok = false; break; } }
    }
    if (ok) { console.log('media:', all[i][1].trim()); break; }
  }
  // 同时打印该规则完整内容和前 300 字符上下文
  console.log('ctx:', JSON.stringify(css.slice(m.index - 200, m.index + 120)));
}
