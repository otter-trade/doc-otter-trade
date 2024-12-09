#!/bin/bash

## git 设置初始化
function GitConfigInit() {
  if [[ $(uname) == 'Darwin' || $(uname) == 'Linux' ]]; then
    echo "修改文件权限"
    chmod -R 777 ./
    echo "Mac OS || Linux"
  fi
  echo "覆盖 Git 默认设置。"
  # 设置大小写敏感
  git config core.ignorecase false
  # 忽略文件权限的变更
  git config core.filemode false
  # 禁用 pull.rebase
  git config pull.rebase false
  # 提交时转换为 LF，检出时不转换
  git config --global core.autocrlf input
  # 提交包含混合换行符的文件时，发出警告
  git config --global core.safecrlf warn
  # init 默认分支设置为 main
  git config --global init.defaultBranch main
  # 关闭分支显示分页 显示
  git config --global pager.branch false
  # 修改文件权限为开放
}

# 项目根目录
NowPath=$(pwd)

# 最终的输出目录
OutPutPath="${NowPath}/dist"

# 需要发布的远程仓库目录地址
GitRemotePackagePath="git@github.com:otter-trade/otter-trade.github.io.git" # 待定

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
远程仓库目录: ${GitRemotePackagePath}
请查看: ${DeployEndText}

"
