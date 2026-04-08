# 淘宝种草 AI 协作平台 - 部署指南

## 快速部署（推荐 Vercel）

### 方式一：Vercel 部署（5 分钟完成）

**步骤 1：准备代码**

打开终端，进入 app 目录：
```bash
cd C:\Users\高有才\.qoderwork\workspace\mncv91pk7f82ff12\app
```

**步骤 2：创建 Git 仓库**

```bash
git init
git add .
git commit -m "Initial commit: 淘宝种草 AI 协作平台"
```

**步骤 3：推送到 GitHub**

在 GitHub 创建一个新仓库（公开或私有均可），然后：
```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

**步骤 4：在 Vercel 部署**

1. 打开 https://vercel.com
2. 用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你刚创建的仓库
5. 点击 "Deploy"
6. 等待 1-2 分钟，部署完成
7. 你会获得一个 https://xxx.vercel.app 的访问链接

**Vercel 免费版包含：**
- 自动 HTTPS
- 每月 100GB 带宽
- 无限部署次数
- 自动从 GitHub 同步更新

---

### 方式二：Netlify 部署（5 分钟完成）

**步骤 1-3：同上（创建 Git 仓库并推送到 GitHub）**

**步骤 4：在 Netlify 部署**

1. 打开 https://netlify.com
2. 用 GitHub 账号登录
3. 点击 "Add new site" > "Import an existing project"
4. 选择 GitHub 仓库
5. 点击 "Deploy site"
6. 等待部署完成
7. 你会获得一个 https://xxx.netlify.app 的访问链接

---

### 方式三：GitHub Pages 部署（零配置）

**步骤 1：推送到 GitHub（同上）**

**步骤 2：启用 GitHub Pages**

1. 打开你的 GitHub 仓库
2. 点击 Settings > Pages
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"，目录选择 "/ (root)"
5. 点击 Save
6. 等待 1-2 分钟
7. 你会获得一个 https://你的用户名.github.io/仓库名 的访问链接

---

### 方式四：本地直接使用

直接双击 `index.html` 文件即可在浏览器中打开使用。

或者在终端运行：
```bash
cd C:\Users\高有才\.qoderwork\workspace\mncv91pk7f82ff12\app
start index.html
```

---

## 功能说明

### 当前版本（4 月）已上线功能

**1. Brief 评估**
- 查看商家提交的 Brief
- AI 自动评估（5 维度：完整性、卖点准确性、目标合理性、人群清晰度、内容方向）
- 下发给直管或退回给上行

**2. 智能选号**
- 基于 Brief 推荐达人（含 CPM/CPE/CPUV/达人属性）
- 达人属性标注（代理/矩阵号/个人号）
- 推送给商家/直管/矩阵号团队

**3. 内容审核**
- AI 自动审核达人稿件
- 三栏对比：Brief 要求 / 达人初稿 / 修正后内容
- 推送给商家审核或直接发送

**4. 发布&投流监测**
- 稿件进度跟踪（初稿/修改中/完稿/已发布）
- 发布日期管理（预计 vs 实际）
- 发布链接收集
- YES/NO 加入投放决策
- CPUV 实时监测（实际 vs 目标完成率）

**5. 投后复盘**
- 过往复盘报告查看
- 内部复盘（4 月上线）：投放策略分析 + 执行效率评估
- 商家复盘（5 月上线）
- Show Case（5 月上线）

### 直管执行看板

- 项目总览卡片
- 各环节进度状态
- 审核确认操作

---

## 数据说明

**当前版本使用浏览器 localStorage 存储数据**

这意味着：
- 数据保存在你的浏览器中
- 刷新页面数据不会丢失
- 清除浏览器数据会导致数据丢失
- 不同浏览器/设备之间的数据不共享

**5 月版本将接入后端数据库**

届时将实现：
- 多用户数据隔离
- 跨设备数据同步
- 数据备份与恢复
- 团队协作

---

## 登录说明

**演示模式：任意用户名密码即可登录**

登录时选择你的角色：
- **下行内容**：进入下行内容工作台
- **直管执行**：进入直管执行看板

---

## 常见问题

**Q：数据会丢失吗？**
A：只要不清除浏览器数据，数据会一直保存。建议定期导出重要数据。

**Q：多人可以同时使用吗？**
A：当前版本数据存储在各自浏览器中，多人使用互不影响。5 月版本将支持团队协作。

**Q：如何更新代码？**
A：如果用 Vercel/Netlify/GitHub Pages 部署，推送到 GitHub 后会自动更新。

**Q：可以在手机上使用吗？**
A：可以，页面已做响应式适配，支持手机浏览器访问。

---

## 技术支持

如遇问题，请通过以下方式反馈：
- 在仓库中提 Issue
- 直接联系开发团队
