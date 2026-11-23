---
title: MPChat 云影卡开卡实测：开卡返 5 U，微信 / 支付宝 / Apple Pay / AI 订阅均支持，无需海外资料（2026 版）
date: 2026-11-23
categories: [虚拟卡库]
tags: [MPChat, 云影卡, 虚拟卡, VISA, 微信支付, Google 钱包, ChatGPT订阅, 开卡教程]
cover: /images/2026-11/mpchat/cover.svg
description: 边做边截图的 MPChat 云影卡开卡实录：大陆身份证一级认证、绑邮箱前置、链上充值 15 USDT 起步、微信绑卡首刷 ¥27.30 亲测明细，附费用全表与避坑清单。
---

先说清楚这张卡是什么：MPChat 是一款把即时通讯和加密资产钱包装在一起的 App，云影卡是它家的 VISA 虚拟卡——新加坡卡段、美元计价、无月费年费。本文讲主力玩法：用大陆身份证开虚拟卡，从注册一路讲到绑上微信、刷出第一杯奶茶。

我这次（2026 年 11 月 22 日实测）：从手机号注册到微信首笔消费，全程约 2 小时，纯操作大概 20-30 分钟左右。所有费用数字都跟官方文档逐条核过，实测口径和官方口径分得清清楚楚。

这篇是写给谁的：想把加密资产变成能花的钱、绑进微信/支付宝/Apple Pay 消费、订 ChatGPT/Claude 这类 AI 服务，手上只有大陆身份证、没有国际信用卡的人（还没搞定订阅环境的，先看[订AI 指南](/ai-subscription/)）。

**这张卡能用在哪些场景**

- **微信支付** —— ✅ 能用 · 已测：绑卡 + 首刷 ¥27.30 走通，微信侧免国际卡手续费（见第三节）
- **Google 钱包** —— ✅ 能用 · 已测：绑卡走通（0 元预授权，见第三节）
- **AI 订阅（ChatGPT / Claude 这类）** —— ✓ 能用 · 官方：官方场景清单明牌列出，扣款我还没实测
- **支付宝 / Apple Pay / PayPal / Wise** —— ✓ 能用 · 官方：官方卡片页钱包栏列出
- **购物 / 出行 / 流媒体等商户场景** —— ✓ 能用 · 官方：四大类清单明细见第⑦步

> 「✅ 能用 · 已测」有截图佐证；「✓ 能用 · 官方」出自官方卡片页和场景清单，我没走过；「未测」是官方也没写，能不能用没人知道。测过即回填。和 Roogoo 乐享卡、Bybit 卡、BiyaPay 速捷卡的场景对照收在[虚拟卡库聚合页](/card/)。

先把利益摆在桌上：注册和开卡填邀请码 `12899331`（或走我的邀请链接），**你拿开卡 5 USDT 奖励**；我这边按平台邀请政策拿到对应的邀请回报——这就是这篇教程的全部回报，除此之外没有任何其他收费。

先看四个数：

| 你可能关心 | 答案 | 出处 |
| --- | --- | --- |
| 开卡要花多少 | 10 USD 开卡费，填邀请码返 5 USDT，实付净 5 USD（**限时活动，以 App 内显示为准**）；无月费年费 | 官方+实测 |
| 消费手续费多少 | 0.8%/笔；美元消费综合约 1%，非美元约 1.8%-2.2%（官方综合成本公式） | 官方 |
| 多久拿到卡 | 充值几分钟到账；卡片审核标注 1-3 个工作日，实际几分钟通过 | 实测 |
| 绑卡要花验证费吗 | 每月前 10 笔免费，超出每笔 1 USDT；绑卡验证多为 0 元预授权，但占免费额度 | 官方+实测 |

---

## 一、开卡前：先算账，再准备

先把费用表放上，数字以官方[《MPChat 卡的限制和费率》](https://help.mp.net/zh-CN/articles/12351033-mpchat%E5%8D%A1%E7%9A%84%E9%99%90%E5%88%B6%E5%92%8C%E8%B4%B9%E7%8E%87)为主，个别项来源不同，都在「说明」列里注明了：

| 费用项 | 数字 | 说明 |
| --- | --- | --- |
| 开卡费 | 10 USD | 填邀请码开卡返 5 USDT，实付净 5 USD |
| 月费/年费 | 0 | 官方口径 |
| 交易手续费 | 0.8%/笔 | 每笔消费都收 |
| 虚拟货币转法币 | 0 | 官方口径 |
| 外汇/跨境费 | Pass through | 发卡行直接收、按地区浮动 |
| 3DS 安全验证费 | $0.03/笔 | 无月度豁免，订阅付款场景常见 |
| 账户验证授权费 | 每月前 10 笔免费，超出 $1/笔 | 绑微信/支付宝/Google 时的验证扣款归这类 |
| 小额签账费 | ≤$1 的交易收 $0.10/笔 | 固定费用，笔越小占比越明显 |
| 拒付费 | $0.80/笔 | 余额不足等用户原因导致，每月前 5 笔免 |
| 撤销费 | $0.8/笔 | 撤销率≥15% 时触发，且只算 $5 以上被撤销的交易 |
| 争议处理费 | $35/笔 | 发起争议才收，全表最贵的一项 |
| 退款费 | 0 | 按原金额退回 |
| 销卡清算费 | 3 USDT | App 内主动销卡时显示的费用（官方[MPCard 社区常见问题（用卡指南）](https://help.mp.net/zh-CN/articles/16392627-mpcard-%E7%A4%BE%E5%8C%BA%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E7%94%A8%E5%8D%A1%E6%8C%87%E5%8D%97)口径）；欠费强制销卡另有红线（见避坑清单） |
| 线上提现手续费 | 2.1 USDT/笔；当日累计超 5,000 USDT 的部分 +0.1% | **账户级功能，与卡无关**——不是刷卡费 |

撤销、争议、退款、线上提现这几项不是日常成本：退款免费，撤销和拒付各 $0.80 一笔（撤销还有前置条件：撤销率≥15% 才触发），真走到争议要 $35——比很多笔消费本身还贵。线上提现那一行是账户功能费，和卡片消费无关，别把它算进刷卡成本。

官方文档里还给了一个综合成本公式：**美元消费综合约 1%，非美元消费约 1.8%-2.2%**。翻译成人话：这张卡的甜点区在订阅境外服务和微信小额日常——成本结构透明，按公式一算就知道每笔花多少。

限额方面（云影卡官方口径）：单笔 $100,000、日 $250,000、月 $1,000,000、年 $2,000,000——上限很宽裕；虚拟卡不支持 ATM 取现（那是实体卡的权益，见第四节）。

准备四样东西：

1. 一个能收验证码的 +86 手机号；
2. 身份证（一级认证用的证件）；
3. 一个邮箱（Gmail、QQ 邮箱都行，开卡前必须绑定）；
4. 至少 15 USDT（链上充值最低 15，见第⑥步）。

第五样不用你准备，我直接给你——**邀请链接 <https://mp.net/i/mp_fkrgj2>** 或邀请码 `12899331`，开卡返 5 USDT，两条路效果一样（第②步有详细位置）。

---

## 二、开卡八步（图1-图41）

### 第①步 注册登录：手机号就行，不用海外号

App Store 或应用商店搜 MPChat 下载。如果你正打算开卡拿 5 USDT 奖励，先看这张海报——扫码直接注册并开卡，邀请码自动带上（走第②步的邀请链接或手动填码，效果一样）：

![图1｜MPChat 开卡邀请海报](/images/2026-11/mpchat/fig01-invite-poster.webp)
<div class="fig-cap">图1｜邀请码 12899331 印在海报正中，扫码直接注册并开卡，一样拿 5 USDT 奖励。</div>

登录页有两个 Tab：手机号/邮箱，国家选「中国」，+86 直接能收验证码——**新用户首次登录自动注册**，不用单独找注册入口。底部勾选服务条款，点「登录」。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig02-login.webp" alt="登录页"><div class="fig-cap">左：登录页｜手机号 Tab + 中国 +86，底部「新用户首次登录自动注册」</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig03-home.webp" alt="聊天主界面"><div class="fig-cap">右：聊天主界面｜别懵，底部 Tab 的「资产」「我的」才是开卡要用的</div></figure>
</div>

> 卡住了怎么办：验证码收不到 → 检查是否被短信拦截；登录页提示条款未勾选 → 最底下那行小字也要点。都试过还不行 → 别硬耗，文末「写在最后」有联系入口和付费陪跑。

### 第②步 填邀请码：5 USDT 奖励从这一步解锁

**邀请链接：<https://mp.net/i/mp_fkrgj2>**——手机点开直接进注册，邀请人信息自动带上，推荐走这条；习惯手动填的，下载 App 后在「完善资料」页填**邀请码 `12899331`**；也可以扫第①步那张海报（图1）的二维码，三条路都拿 5 USDT 奖励。

首次登录会让你完善资料：设置昵称、填邀请码。**邀请码选填，但不填就拿不到开卡奖励**——填完后页面直接显示「我的推荐人」和「开卡后你可得 5 USDT 奖励」。这笔奖励在开卡通过后自动到卡（第⑧步图37 能看到入账记录），等于开卡费 10 USD 只实付净 5 USD。

**但这 5 USDT 是限时活动，不是长期条款。** 官方通知的原话是「绑定邀请码开卡，还可领取限时返现奖励」——活动一停就是 10 USD 全额。**以你开卡当时 App 内显示的奖励为准**，别拿这篇的数字去跟客服争。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig04-profile.webp" alt="完善资料页"><div class="fig-cap">左：完善资料页｜邀请码 12899331 填在这里，填完出现「开卡后你可得 5 USDT 奖励」</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig05-mine.webp" alt="我的页面"><div class="fig-cap">右：「我的」页｜身份认证、申请卡片两个入口都在这页</div></figure>
</div>

### 第③步 一级认证（KYC）：身份证 + 人脸，几分钟过

这是全流程最讲究的一步，六个小关口一个都别跳。

先看权益账：不认证每日提现限 1,000 USD；一级认证后不限额转账、提现 200,000 USD/日，**关键是解锁卡片申请**。

![图6｜身份认证权益页](/images/2026-11/mpchat/fig06-kyc-benefits.webp)
<div class="fig-cap">图6｜一级认证的权益清单，「开始认证」按钮在底部。</div>

认证流程依次是：

1. **主国籍选「中国」**（图7）；
2. **居住地选「除美国外的所有国家/地区」**（图8）——别手滑选成美国；
3. 流程预告页，证件+自拍两件事（图9）；
4. **签发国家选中国、证件类型选身份证**（图10）——身份证就行，不用护照；
5. 拍证件、拍自拍，提交后进入「正在验证您的证件，可能需要几分钟」等待页（图11、图12）。

<div class="fig-row" style="--cols:3">
  <figure><img src="/images/2026-11/mpchat/fig07-nationality.webp" alt="主国籍选中国"><div class="fig-cap">左：主国籍｜选中国</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig08-residence.webp" alt="居住地选择"><div class="fig-cap">中：居住地｜选「除美国外的所有国家/地区」，别手滑选成美国</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig09-flow.webp" alt="流程预告"><div class="fig-cap">右：流程预告｜证件 + 自拍两件事</div></figure>
</div>

选完这三步，接着选证件、拍证件：

<div class="fig-row" style="--cols:3">
  <figure><img src="/images/2026-11/mpchat/fig10-document.webp" alt="证件类型选择"><div class="fig-cap">左：证件类型｜签发国中国 + 身份证，不用护照</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig11-reviewing.webp" alt="证件审核等待页"><div class="fig-cap">中：证件审核等待页｜「可能需要几分钟」</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig12-submitted.webp" alt="证件已提交弹窗"><div class="fig-cap">右：「证件已提交」弹窗</div></figure>
</div>

证件审核完，认证还没结束——还要**补一份英文居住地址表单**。这里是最容易卡住的环节：省份、城市、详细地址、邮编**全部要英文**，而且官方提示要具体到门牌号，否则可能影响认证结果。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig13-kyc-mid.webp" alt="认证中间状态"><div class="fig-cap">左：认证中间状态｜按钮变「继续认证」，说明还差地址这步</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig14-address-form.webp" alt="英文地址表单"><div class="fig-cap">右：英文地址表单｜空表单的红色报错就是没填英文的后果</div></figure>
</div>

填好、核对、提交，长这样：

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig15-address-filled.webp" alt="地址填好状态"><div class="fig-cap">左：地址填好状态（信息已打码）</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig16-confirm.webp" alt="提交前核对页"><div class="fig-cap">右：提交前核对页｜国籍、证件类型、地址确认一遍再点「确认提交」</div></figure>
</div>

提交后几分钟，通知栏跳出「一级身份认证通过审核」——实测这个「几分钟」名副其实，比官方标注的 5 个工作日口径快得多。

![图17｜一级认证通过](/images/2026-11/mpchat/fig17-kyc-pass.webp)
<div class="fig-cap">图17｜通知「一级身份认证通过审核」+ 页面变「已完成认证」，实测几分钟。</div>

> 卡住了怎么办：地址表单报错 → 九成是用了中文，全部改英文；认证长时间没结果 → 别重复提交，等通知，重复提交反而排队。都试过还不行 → 别硬耗，文末「写在最后」有联系入口和付费陪跑。

### 第④步 开钱包 + 通行密钥

进「资产」页，会弹「开启钱包」引导——点「立即开启」，这是充值和开卡的地基。开启后 App 会引导添加**通行密钥**（指纹/面容识别），一次设置，后面大额操作都靠它验证，建议当场做完。

<div class="fig-row" style="--cols:3">
  <figure><img src="/images/2026-11/mpchat/fig18-wallet-open.webp" alt="开启钱包弹层"><div class="fig-cap">左：开启钱包弹层｜点「立即开启」</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig19-passkey-intro.webp" alt="通行密钥介绍页"><div class="fig-cap">中：通行密钥介绍页</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig20-passkey-done.webp" alt="通行密钥创建完成"><div class="fig-cap">右：通行密钥创建完成｜生物识别方式即可</div></figure>
</div>

### 第⑤步 选卡种 + 绑邮箱：一个前置坑点

「申请卡片」页里有两个 Tab：虚拟卡和实体卡。**选虚拟卡的云影卡**：VISA·虚拟卡·新加坡，计价 USD，开卡费 10 USD、交易手续费 0.8%，最多可持 5 张。旁边的无界实体卡开卡费 100 USD，放第四节细说。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig21-cardpage.webp" alt="云影卡主页"><div class="fig-cap">左：云影卡主页｜开卡费 10 USD、手续费 0.8%，钱包栏一排 Apple Pay/Google Pay/PayPal/Wise/支付宝徽章</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig22-physical.webp" alt="无界实体卡"><div class="fig-cap">右：无界实体卡｜100 USD 开卡费，和云影卡不是一个价位档</div></figure>
</div>

点「立即申请」会先弹一个提示：**申请卡片前请先前往安全中心绑定邮箱**。这是很多人漏掉的前置步骤——绑完邮箱才能继续。

<div class="fig-row" style="--cols:3">
  <figure><img src="/images/2026-11/mpchat/fig23-email-hint.webp" alt="绑邮箱提示弹窗"><div class="fig-cap">左：绑邮箱提示弹窗｜「去完成」跳转</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig24-email-bind.webp" alt="绑定邮箱页"><div class="fig-cap">中：绑定邮箱页｜输邮箱 → 收验证码 → 确定（验证码已打码）</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig25-email-done.webp" alt="绑完邮箱回申请页"><div class="fig-cap">右：绑完邮箱回申请页｜「现在即可申请 MP 卡」</div></figure>
</div>

> 卡住了怎么办：弹「请先绑定邮箱」→ 去我的 → 安全中心把邮箱绑了再回来；邮箱验证码收不到 → 查垃圾箱，Gmail 尤其容易进去。都试过还不行 → 别硬耗，文末「写在最后」有联系入口和付费陪跑。

### 第⑥步 下单 → 余额不足 → 充值（新手丢币高发区，慢一点）

邮箱绑完，点「立即申请」进订单页：卡片类型虚拟卡、开卡费用 10 USD。点支付，如果你的钱包余额是 0（大概率），会提示**余额不足**，顺便带你进入充值流程。

![图26｜申请卡片订单](/images/2026-11/mpchat/fig26-order.webp)
<div class="fig-cap">图26｜开卡费用 10 USD，「余额不足」和「充值」按钮。</div>

充值方式二选一：

- **链上充值**：TRC20 / BEP20 / ERC20 三条网络，**最低充值 15 USDT**——注意不是 10，低于 15 不入账；
- **Binance Pay**：1-5000 USDT，适合币安用户，即时到账。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig27-deposit-options.webp" alt="支付方式选择页"><div class="fig-cap">左：支付方式选择页｜三条链各标 15 USDT 起充，Binance Pay 1-5000</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig28-deposit-address.webp" alt="充值地址页"><div class="fig-cap">右：充值地址页（BEP20）｜橙字警告 ≥15 USDT 才入账——复制地址用按钮，别手抄</div></figure>
</div>

我走的链上路线：从交易所提现 **15.01 USDT**（15 本金 + 0.01 预留交易所手续费），网络选 BEP20，和充值页显示的网络保持一致。提现发起后，MPChat 侧显示区块确认进度，要求 63 个确认，实际几分钟就到账 +15.00 USDT。

<div class="fig-row" style="--cols:3">
  <figure><img src="/images/2026-11/mpchat/fig29-withdraw.webp" alt="交易所提现页"><div class="fig-cap">左：交易所提现｜15.01 USDT（15 本金 + 0.01 手续费预留）</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig30-arrived.webp" alt="MPChat 到账详情"><div class="fig-cap">中：MPChat 到账详情｜+15.00 USDT、区块确认 80/63</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig31-balance.webp" alt="资产页余额"><div class="fig-cap">右：资产页｜总资产 15.00 USDT</div></figure>
</div>
>
> 小提示：资产页分「支付」和「Web3」两个栏，充值进来的钱在「支付」栏，开卡、划转、消费全用它；Web3 栏是另一套钱包资产，不能直接用于卡片。

> 卡住了怎么办：充值不到账 → 先查网络是否和地址一致（三选一必须一样），再查金额是否 ≥15 USDT；用错网络 → 立刻截图找客服，越快越有机会找回。都试过还不行 → 别硬耗，文末「写在最后」有联系入口和付费陪跑。

### 第⑦步 开卡：扣 10 USD，返 5 USDT

余额到位，回云影卡页点「立即申请」。下单前，这页值得往下滑两屏，信息分两层：

**第一层是钱包支持**：卡片详情顶部一排徽章——Apple Pay、Google Pay、PayPal、Wise、支付宝、微信支付，这是官方列出的可绑定支付工具（微信、支付宝都在这一层，它们是钱包能力，不在下面的商户场景清单里）；

**第二层是商户场景**，官方分成四大类：

- **AI 与工具**：ChatGPT、Claude、Cursor、Grok、Gemini、Kimi、Midjourney、TradingView——订阅 AI 服务是官方明牌支持的用途，也是很多人开这张卡的第一理由；
- **日常与出行**：Starbucks、McDonald's、KFC、7-Eleven、全家、美团，出行有 Uber、Grab、Booking、Airbnb、滴滴；
- **购物**：Amazon、Apple、Shopee、AliExpress、eBay、Shopify，连淘宝、京东都在官方场景清单里；
- **影视与广告**：Netflix、Spotify、YouTube、PlayStation、Google Play、TikTok、Meta、Google Ads。

<div class="fig-row" style="--cols:3">
  <figure><img src="/images/2026-11/mpchat/fig32-scene-ai.webp" alt="钱包徽章与AI场景"><div class="fig-cap">左：钱包徽章行（Apple Pay/Google Pay/PayPal/Wise/支付宝/微信支付）+ AI 场景：ChatGPT/Claude/Cursor/Grok/Gemini/Kimi/Midjourney/TradingView</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig33-scene-daily.webp" alt="日常与出行场景"><div class="fig-cap">中：日常与出行｜Starbucks、美团、Uber、Booking 一整屏</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig34-scene-shop.webp" alt="购物与影视场景"><div class="fig-cap">右：购物与影视｜淘宝、京东、Netflix、Spotify 都印在官方清单里</div></figure>
</div>

场景看完，确认申请。资产页跳出「开通卡片 -10.00 USDT」的扣费记录，紧接着开卡成功页提示**已解锁 5 USDT 奖励**——实付 10、奖励返 5，净成本 5 USD。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig35-card-fee.webp" alt="开卡扣费凭证"><div class="fig-cap">左：开卡扣费凭证｜-10.00 USDT，带划转指引标注</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig36-card-created.webp" alt="开卡成功页"><div class="fig-cap">右：开卡成功页｜「已解锁 5 USDT 奖励」，实付 10 返 5</div></figure>
</div>

卡片审核官方标注 1-3 个工作日，实测**几分钟**就收到「卡片审核通过」——中间那段时间别反复刷新，等通知就行。

### 第⑧步 划转到卡 + 查卡号：消费前的最后一公里

开卡成功不等于能刷。卡片页有一行绿色提示：**「卡片消费前请将资金划转到该卡片账户中」**——钱在「支付余额」里，要先划转到卡。操作很简单：点「划转」→ 从支付余额 → 到虚拟卡 → 金额输 5（开卡奖励 5 USD 已经在卡里，这里划的是扣费后剩的那 5 USDT）→ 确认划转。

<div class="fig-row" style="--cols:3">
  <figure><img src="/images/2026-11/mpchat/fig37-card-manage.webp" alt="卡片管理页"><div class="fig-cap">左：卡片管理页｜划转提示 + 「开卡奖励 +5.00 USD」入账</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig38-transfer-form.webp" alt="划转表单"><div class="fig-cap">中：划转表单｜支付余额 → 虚拟卡，5 USDT</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig39-transfer-ok.webp" alt="划转成功弹窗"><div class="fig-cap">右：划转成功｜5.00 USDT 到卡</div></figure>
</div>

划完再看卡片页，卡内余额 10.00 USDT（奖励 5 + 划转 5），随时能消费。绑卡前点「显示」查看卡片信息：卡号、有效期、安全码（CVV）——这三样是绑微信、Google Pay、Apple Pay 都要用的。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig40-card-balance.webp" alt="卡内余额"><div class="fig-cap">左：卡内余额 10.00｜奖励 5 + 划转 5，就绪</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig41-card-info.webp" alt="卡片信息弹窗"><div class="fig-cap">右：卡片信息弹窗｜卡号/持卡人已打码，有效期和安全码点「显示」才出现</div></figure>
</div>

> 卡住了怎么办：绑卡提示余额不足 → 八成是忘了划转，钱在支付余额里躺着呢；卡信息看不了 → 先做通行密钥/生物识别验证。都试过还不行 → 别硬耗，文末「写在最后」有联系入口和付费陪跑。

---

## 三、开卡之后：绑卡与首刷实测

卡激活、钱划好，接下来把它挂进你的支付工具。微信和 Google Pay 是实测走通的；Apple Pay 和支付宝在官方钱包支持名单里（官方费率页截至 2026-11-12 明确微信、支付宝、Apple Pay、Google Pay 四类均支持），卡种页的钱包栏还列了 PayPal、Wise，口径写在对应位置。

先分清一个词：VISA 是卡组织，「云影卡·新加坡」是这张卡的发卡计划——能不能绑某个支付工具、在哪个地区能用，以 App 卡片详情和官方支持表为准。

### 1. 微信绑卡 + 首刷实测：一杯奶茶钱跑通全流程

微信 → 服务 → 钱包 → 添加银行卡，输图41 里的卡号、有效期、CVV，过短信验证，卡就挂进去了。绑卡时微信侧会发起一笔交易验证（官方通知里显示为 WEIXIN*TENCENT），这类验证每月前 10 笔免费，超出每笔 1 USDT——绑卡验证虽然花额度但不花钱，留意额度就行。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig42-wechat-card.webp" alt="微信卡详情页"><div class="fig-cap">左：微信卡详情｜VISA ····2318 已加入</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig43-wechat-notice.webp" alt="官方通知时间线"><div class="fig-cap">右：官方通知｜审核通过 + WEIXIN*TENCENT 验证，「每月 10 次免费额度」白纸黑字</div></figure>
</div>

绑完我直接消费试试水——在古茗点了一单 ¥27.30，微信账单备注写着**「微信支付已免除国际卡手续费」**：微信侧有个国际银行卡手续费减免活动，所以微信这边没额外收钱。

![图44｜微信账单](/images/2026-11/mpchat/fig44-wechat-bill.webp)
<div class="fig-cap">图44｜古茗 ¥27.30，备注「微信支付已免除国际卡手续费」（首笔 ¥20.60 商户已打码）。</div>

再看 MPChat 侧的记账：这笔授权为 -27.30 CNY，折合 **4.19 USDT**。注意这里的折算逻辑：非美元消费按发卡行当日牌价折算，再叠加 0.8% 手续费，授权金额和最终入账金额可能有差（以入账为准）。官方综合成本公式说非美元消费约 1.8%-2.2%，这笔授权折算下来比公式偏高——**非美元消费的汇率损耗是真实存在的，大额消费建议先小额试一笔**。美元计价的消费（AI 订阅这类）没这个变量，成本更可控。

<div class="fig-row">
  <figure><img src="/images/2026-11/mpchat/fig45-mp-transaction.webp" alt="MPChat 交易详情"><div class="fig-cap">左：MPChat 交易详情｜-27.30 CNY 已授权 / 4.19 USDT，商户、时间、交易 ID 齐全</div></figure>
  <figure><img src="/images/2026-11/mpchat/fig46-after-spend.webp" alt="消费后卡片余额"><div class="fig-cap">右：消费后卡片余额｜10.00 - 4.19 = 5.81 USDT</div></figure>
</div>

首刷小结：¥27.30 的奶茶，微信侧 0 手续费，卡侧扣 4.19 USDT（含折算损耗）——小额日常消费可用，非美元消费留意折算成本，美元消费按官方公式综合约 1%。

### 2. Google Pay（Google 钱包）绑定实测

官方支持表里这一项叫 Google Pay，产品端叫 Google 钱包（Google Wallet），同一个东西。安卓党走 Google 钱包：wallet.google.com 或 App 里「添加支付方式」→ 输卡号 → 过验证。我的卡已经挂进支付方式列表（Visa •••• 2318，列表里其余无关卡已打码隐去）。绑卡验证是 GOOGLE *TEMPORARY HOLD 的 0 元预授权，通知里能看到它也占免费验证额度（已用 2 次）。

![图47｜Google Wallet 支付方式页](/images/2026-11/mpchat/fig47-gwallet.webp)
<div class="fig-cap">图47｜Visa •••• 2318（11/31）在列，其余无关记录已打码。</div>

![图48｜通知·Google 验证](/images/2026-11/mpchat/fig48-google-verify.webp)
<div class="fig-cap">图48｜GOOGLE *TEMPORARY HOLD 验证，每月 10 次免费额度规则同上。</div>

### 3. Apple Pay 与其他方式

官方费率页的支持表里，云影卡对微信、支付宝、Apple Pay、Google Pay 四类均支持（截至 2026-11-12 官方口径），卡种页的钱包栏还列了 PayPal、Wise，图1 海报上的钱包图标也是同一口径。官方同时提醒：绑定成功不代表所有国家/地区都能付款，实际交易受地区限制、商户终端和授权结果影响——以你操作时页面显示为准。

绑 Apple Pay 还有个社区经验提醒：Apple ID 地区常需要和卡段一致（云影卡是新加坡卡段，ID 对应地区），账单地址按卡的注册地址填，不一致时容易报「不支持添加此卡」——这条我没实测，添加失败时先往这个方向排查。

---

## 四、云影卡之外：无界实体卡

「申请卡片」页还有一个 Tab：无界卡，VISA·实体卡·新加坡，开卡费 100 USD、交易手续费同样 0.8%。这张我没开，以下是官方口径，供有需要的人参考。

先说一个容易想错的点：MPChat 的卡全是**借记卡，不是信用卡**，官方[用卡指南](https://help.mp.net/zh-CN/articles/16392627-mpcard-%E7%A4%BE%E5%8C%BA%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E7%94%A8%E5%8D%A1%E6%8C%87%E5%8D%97)原话是「不具备透支功能，消费前请确保余额充足（余额需覆盖消费金额 + 手续费）」——无界卡也一样。

| | 云影卡（本文主角） | 无界卡 |
| --- | --- | --- |
| 形态 | 虚拟借记卡 | 实体借记卡 |
| 开卡费 | 10 USD | 100 USD |
| 交易手续费 | 0.8% | 0.8% |
| ATM 取现 | 不支持 | 支持，手续费 2%；**单笔 $1,500 / 每日 $1,500 / 每日 5 笔 / 每月 $15,000** |
| 可用地区 | 线上为主，全球通用 | 新加坡与中国大陆不可用——**这条限的是 ATM 取现，不是整张卡** |
| 钱包支持 | 微信/支付宝/Apple Pay/Google Pay（官方） | 微信/支付宝/Apple Pay/Google Pay（官方） |

几点补充（官方《卡片申请》与《MPCard 社区常见问题》口径）：

- 无界卡申请后还需要**激活**——App 卡片页有「已有实体卡，去激活」的入口，实体卡涉及制卡和邮寄，到手周期比虚拟卡长得多；
- 取现是无界卡的核心差异化权益：2% 费率，限额按官方四项原文——单笔 $1,500、每日 $1,500、每日 5 笔、每月 $15,000；「新加坡与中国大陆不可用」限的是**ATM 取现这个动作**，不是卡片本身在两地不能用。四项原文照录，若与你操作时 App 的提示有出入，以 App 为准。
- 它和云影卡共用一套账户体系：都是先充值到 Pay 余额、再划转到卡，费用表和验证费规则完全一致。

一句话：纯线上消费和订阅，云影卡就够了；要线下刷卡或 ATM 取现再考虑无界卡。另外提一句背景：MPChat 早前的瞬行卡已于 2026-09-30 永久下线，不能申请也不能继续使用，存量卡已全部替换成云影卡、余额转到总资产——所以现在申请页只有云影、无界两条线，网上还能搜到的瞬行卡教程已经过时。

---

## 五、避坑清单

1. **邀请码在开卡前填**——进 App 首次登录就填（第②步），开完卡再填拿不到 5 USDT 奖励；
2. **绑邮箱是开卡前置**——不绑邮箱点「立即申请」直接被弹回，先去安全中心绑定；
3. **链上充值最低 15 USDT**——低于 15 不入账且可能无法找回，还要预留交易所提现手续费（实测提 15.01）；
4. **充值网络必须和地址一致**——TRC20/BEP20/ERC20 三选一，两边选同一个，这是丢币最高发的位置；
5. **认准「支付」栏**——资产页分「支付」和「Web3」两栏，开卡、充值、划转、消费全部走支付栏余额，Web3 栏的资产不能直接用于卡片；
6. **消费前先划转**——钱在支付余额里不能直接刷，要先划到卡片账户；
7. **CVV 别乱试**——24 小时内连续 3 次输错 CVV 会触发发卡行风控冻结，得联系客服向发卡行发函解锁；主动冻结可以在 App 里自行解冻，单纯余额不足导致交易失败不会冻卡；
8. **欠费有红线**——账户验证费和拒付费的未结清欠款累计 8 USDT 预警、累计 10 USDT 强制销卡且不可恢复；另外主动补卡目前无法办理，到期后是换卡还是延长有效期以发卡行届时政策为准、官方不承诺卡号不变——绑在卡上的订阅到期换卡后要重绑；卡余额用完即走，别把它当储蓄账户；
9. **验证扣款每月 10 次免费**——绑卡、部分商户验卡都占额度，超出每笔 1 USDT，别反复删了重绑；
10. **失败别连刷**——官方明确提醒：网络出口地区、账单地址、卡片信息保持一致，余额留缓冲，短时间连续重试支付容易触发风控；
11. **留意小额签账费**——≤$1 的交易额外收 $0.10/笔，叠加 0.8% 手续费，笔越小固定成本占比越明显，下单前心里有数即可；
12. **别把争议当客服**——先找商户退款（退款免费），谈不拢再考虑争议（$35/笔）；撤销和拒付各 $0.80 一笔，撤销还有「撤销率≥15% 才触发」的前置条件，别频繁改单。

---

## 六、常见问题

{% folding Q：订阅付款失败怎么排查？ %}
[官方用卡指南](https://help.mp.net/zh-CN/articles/16392627-mpcard-%E7%A4%BE%E5%8C%BA%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E7%94%A8%E5%8D%A1%E6%8C%87%E5%8D%97)给的排查顺序：先核对网络出口地区、账单地址、卡片信息三者一致（不同商户对账单地址要求不同，填错会绑卡/支付失败），再确认卡内余额留有覆盖手续费的缓冲，最后别短时间连续重试。官方帮助中心还有专门的[「服务订阅教程」栏目](https://help.mp.net/zh-CN/collections/17773060-%E6%9C%8D%E5%8A%A1%E8%AE%A2%E9%98%85%E6%95%99%E7%A8%8B)（165 篇），把各家服务的订阅流程、账单地址填法都写好了，照着走基本不会翻车。
{% endfolding %}

{% folding Q：卡被锁了/冻结了怎么办？ %}
分三种情况（[官方用卡指南](https://help.mp.net/zh-CN/articles/16392627-mpcard-%E7%A4%BE%E5%8C%BA%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E7%94%A8%E5%8D%A1%E6%8C%87%E5%8D%97)口径）：主动冻结在 App 里点解冻即可；24 小时内连续 3 次输错 CVV 触发发卡行风控冻结，要联系官方客服向发卡行发函申请，等确认；单纯余额不足导致交易失败不会冻卡，充值划转后接着用就行。
{% endfolding %}

{% folding Q：能付 ChatGPT 吗？ %}
官方支持——云影卡申请页的场景清单里明确列着 ChatGPT、Claude、Cursor、Grok、Gemini、Kimi、Midjourney 等（图32），美元计价消费按官方公式综合约 1%（公式出处见[官方费率文档](https://help.mp.net/zh-CN/articles/12351033-mpchat%E5%8D%A1%E7%9A%84%E9%99%90%E5%88%B6%E5%92%8C%E8%B4%B9%E7%8E%87)），比非美元消费的折算损耗更可控。
{% endfolding %}

{% folding Q：为什么扣款金额比消费标价高？ %}
三个来源叠加：0.8% 交易手续费、非美元消费的汇率折算（发卡行牌价）、扣款按汇率折 USDT 并向上取整到 2 位小数——金额略高是取整不是多收。另外官方把一笔交易分为「已拒绝 / 已授权 / 已清算」三种状态，授权金额和最终清算金额可能有差，以清算入账为准（取整口径见[官方费率文档](https://help.mp.net/zh-CN/articles/12351033-mpchat%E5%8D%A1%E7%9A%84%E9%99%90%E5%88%B6%E5%92%8C%E8%B4%B9%E7%8E%87)、交易三态见[官方用卡指南](https://help.mp.net/zh-CN/articles/16392627-mpcard-%E7%A4%BE%E5%8C%BA%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E7%94%A8%E5%8D%A1%E6%8C%87%E5%8D%97)）。
{% endfolding %}

{% folding Q：这张卡是信用卡吗？ %}
不是。官方明确 MPCard 是借记卡（[官方用卡指南](https://help.mp.net/zh-CN/articles/16392627-mpcard-%E7%A4%BE%E5%8C%BA%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E7%94%A8%E5%8D%A1%E6%8C%87%E5%8D%97)原话），不具备透支功能，只能用卡内余额，消费前余额要覆盖消费金额加手续费——余额不足会直接交易失败，还要收拒付费。
{% endfolding %}

{% folding Q：Apple Pay 能绑吗？ %}
官方费率文档（[2026-11-12 更新版](https://help.mp.net/zh-CN/articles/12351033-mpchat%E5%8D%A1%E7%9A%84%E9%99%90%E5%88%B6%E5%92%8C%E8%B4%B9%E7%8E%87)）明确云影卡支持 Apple Pay，海报上也挂着 Apple Pay 图标；官方同时说明绑定成功不代表所有地区都能付款，以实际授权结果为准。
{% endfolding %}

{% folding Q：支付宝能绑吗？ %}
官方支持名单里有支付宝（[官方费率文档](https://help.mp.net/zh-CN/articles/12351033-mpchat%E5%8D%A1%E7%9A%84%E9%99%90%E5%88%B6%E5%92%8C%E8%B4%B9%E7%8E%87)）。绑定入口在支付宝 → 我的 → 银行卡 → 添加，流程和微信同一个套路，能不能绑成功、绑上后有没有附加费用，以你操作时页面显示为准——微信侧是实测通过的。
{% endfolding %}

{% folding Q：卡片交易验证费是怎么回事？ %}
绑卡或部分商户验卡会发起一笔验证交易（如 WEIXIN*TENCENT、GOOGLE *TEMPORARY HOLD），每月前 10 笔免费，超出每笔 1 USDT（[官方费率文档](https://help.mp.net/zh-CN/articles/12351033-mpchat%E5%8D%A1%E7%9A%84%E9%99%90%E5%88%B6%E5%92%8C%E8%B4%B9%E7%8E%87)口径）。验证多为 0 元预授权，但占免费额度，别没事反复绑。
{% endfolding %}

{% folding Q：能帮我代开吗？ %}
不做代开，方向正好相反：代开是把身份证交出去、别人替你操作，资料一旦脱离你的手，泄露了就没人替你负责。想省事走付费陪跑：你自己的手机、自己的身份证、亲手点每一步，我只在视频里告诉你点哪里、看到什么该停下，平台只认识你一个人（见文末「写在最后」）。
{% endfolding %}

{% folding Q：和 Roogoo 乐享卡、Bybit 卡、BiyaPay 速捷卡怎么选？ %}
一句话——[Roogoo](/p/roogoo/) 交易费 1%、[Bybit](/p/bybit/) 0 开卡费带返现、[BiyaPay 速捷卡](/p/biyapay/) 1 美元开卡专供 AI 订阅，MPChat 云影卡的卖点是官方明牌支持 AI 订阅 + 四钱包官方全支持 + 10 USD 入场门槛。几张不冲突：订阅走 Roogoo/云影/速捷，微信日常走 Bybit/云影，按你手上的使用习惯分配好各自的活。
{% endfolding %}

{% folding Q：卡审核真的要 1-3 个工作日吗？ %}
官方口径是 1-3 个工作日，实测几分钟就通过了。提交后安心等通知，不用反复刷新。
{% endfolding %}

---

## 写在最后

三句话收尾：

- **想低成本跑通加密支付**：10 USD 开卡、返 5 USDT，净 5 USD 拿到一张四钱包官方全支持的 VISA 虚拟卡，无月费年费；
- **主要拿来订 AI 服务**：官方场景清单直接把 ChatGPT/Claude/Cursor 列在明面上，美元消费综合约 1%，比非美元消费的折算损耗省心；
- **日常消费**：微信侧有国际卡手续费减免活动，小额日常用起来顺手；大额消费前按官方公式把成本算清楚（美元约 1%、非美元 1.8%-2.2%），心中有数。

**三张卡的分工**（另两篇：[Roogoo 乐享卡](/p/roogoo/)、[Bybit Card](/p/bybit/)）：

| 场景 | 用哪张 | 为什么 |
| --- | --- | --- |
| ChatGPT / Claude 订阅 | Roogoo / 云影卡 | Roogoo 消费 1%；云影官方明牌支持 AI，美元综合约 1% |
| 微信 / 国内小额 | Bybit / 云影卡 | Bybit 0 开卡费带返现；云影微信侧免国际卡手续费 |
| 要 ATM 取现 | 云影无界卡 | 云影虚拟卡不支持 ATM，实体卡 2% 可取现（官方口径） |
| 专订 AI（GPT/Claude）最便宜 | BiyaPay 速捷卡 AI 段 | 1 USD 开卡，但锁死 AI 平台、禁绑微信支付宝（官方明文） |

四张卡的完整费率对照，收在 → [虚拟卡库](/card/)。

> **拿到卡只是第一步**——如果你想要 ChatGPT Plus / Claude 等 AI 现成账号、不想自己折腾开卡绑卡，**[谢小二AI小店](https://shop.xiaomimiai.com)** 里直接挑。

**注册入口**：<https://mp.net/i/mp_fkrgj2>
**邀请码**：`12899331`（完善资料页填，开卡返 5 USDT，不影响你任何权益）

**想省事，但要自己名下**——付费陪跑：微信 / TG 视频一对一。你自己的手机、自己的身份证、自己亲手操作，**资料全程不过我手**；卡住的每一步我实时指。陪到「卡片出号 + 绑进微信」为止，**99 元/次**；走上面邀请码注册的 **49 元/次**。两句丑话说在前面：KYC 与风控结果以平台审核为准，我不替平台保证任何结果；出号之后的冻卡、拒付、销卡不在陪跑范围内——这些正文都写了，照着做就行。约陪跑加 TG / QQ（见下表），备注「**MPChat陪跑**」，我看到优先排期。

开卡后的规则细节和疑难排查，官方的两份文档值得收藏：[《MPChat卡的限制和费率》](https://help.mp.net/zh-CN/articles/12351033-mpchat%E5%8D%A1%E7%9A%84%E9%99%90%E5%88%B6%E5%92%8C%E8%B4%B9%E7%8E%87)——本文费用表和综合成本公式的出处；[《MPCard 社区常见问题（用卡指南）》](https://help.mp.net/zh-CN/articles/16392627-mpcard-%E7%A4%BE%E5%8C%BA%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-%E7%94%A8%E5%8D%A1%E6%8C%87%E5%8D%97)——冻卡、销卡、账单地址、汇率这些硬规则，写得比任何第三方都全。

这篇就到这里。开卡路上撞到什么坑，微信 / TG 上说一声，我补进避坑清单里。限时奖励随时会停，所有费率和数字以你打开 App 那一刻页面显示的为准；**费率、限额、活动有变动，我直接改这篇文章，以文末日期为准。**

**怎么找到我**（加好友备注「**MPChat云影卡**」，我看到优先通过）：

| 通道 | 账号 | 适合问什么 |
| --- | --- | --- |
| **Telegram** | **@xiexiaoer88** | 优先，能发图、不吞消息，长问题在这儿聊 |
| **QQ** | **3911953728** | 次选，传文件 / 截图方便 |

<div class="xe-qr-duo">
  <div class="xe-qr-item"><img src="/img/qq-qr.jpg" alt="QQ 二维码"><div class="xe-qr-label">QQ 扫一扫<span>QQ 内扫码直接加好友</span></div></div>
  <div class="xe-qr-item"><img src="/images/2026-11/mpchat/wechat-qr.jpg" alt="微信二维码"><div class="xe-qr-label">微信扫一扫<span>手机长按识别加好友</span></div></div>
</div>

---

{% note warning %}<span class="note-hd">风险提示</span>：文章实测收录的虚拟卡 / U 卡大多由非持牌或监管较弱的机构发行，可能出现冻卡、扣款、停止服务甚至跑路的情况，资金安全没有保障。本站只是信息整理和站长实测分享，不为任何虚拟卡或平台背书，也不构成任何金融或投资建议。请自行判断风险，投资需谨慎。{% endnote %}

<div class="xe-timeline">本文首发：2026-11-23｜费率、限额、活动有变动会直接更新本文，以文末日期为准。</div>
