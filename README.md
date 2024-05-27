# doc-otter-trade

https://OtterTrade.com 的文档站，在这里你将找到关于 OtterTrade 的一切。

该仓库编译后推送到 Github 仓库:

https://github.com/otter-trade/otter-trade.github.io

可以访问 GitHub Pages 进行查看

https://otter-trade.github.io

同时也会通过 Webhooks 部署在以下站点

https://doc.ottertrade.com

https://ot-doc.mo7.cc

## 使用方法

运行环境:

node 版本: v20.x

pnpm 版本: 9.x

```bash

# 启用 pnpm
npm install -g pnpm

# 安装依赖
pnpm install

# 更新依赖
pnpm run update-package

# 本地运行
pnpm run dev

# 编译打包
pnpm run build

# 更新同步至 <https://github.com/otter-trade/doc-otter-trade>
pnpm run sync

# 打包并推送至 <https://github.com/otter-trade/otter-trade.github.io> 仓库
pnpm run deploy

```
