#!/bin/bash

## 环境变量
function GitSet {
  echo " ====== git设置大小写敏感,文件权限变更 ====== "
  git config core.ignorecase false
  git config --global core.fileMode false
  git config core.filemode false
  git config pull.rebase false
  git config --global init.defaultBranch main
  chmod -R 777 ./
}

# 项目根目录
NowPath=$(pwd)

# 最终的输出目录
OutPutPath="${NowPath}/dist"

# 远程仓库目录地址
DeployPath="git@github.com:otter-trade/otter-trade.github.io.git" # 待定

# Deploy 完成之后的输出  待定
DeployEndText="
请查看:
https://github.com/otter-trade/otter-trade.github.io
https://doc.ottertrade.com
https://ot-doc.mo7.cc
https://otter-trade.github.io
"

echo "
===== 初始化变量 =====

当前目录: ${NowPath}
输出目录: ${OutPutPath}
远程仓库目录: ${DeployPath}
完成之后的输出: ${DeployEndText}

"
