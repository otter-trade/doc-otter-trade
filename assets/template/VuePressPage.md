---
icon: book
date: '{{date}}'
isOriginal: true
order: 3
description: GFM语法Demo
category:
  - 演示
tags:
  - 语法
cover: https://file.mo7.cc/api/public/bz?idx=-1
permalink: /posts/article_template.html
---

# 文章主标题

## 选择一个 icon

https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=4563845

## 脚注语法 【Obsidian 也支持】

这里是一筐土豆[^1]，那里是一袋马铃薯[^2]。

[^1]: 土豆是一种很好吃的食物
[^2]: 马铃薯其实就是土豆

    甚至这里可以使用代码块

## 上下角标 【仅 VuePress 支持】

- 19^th^
- H~2~O

## 导入文件 【仅 VuePress 支持】

```js title=".vuepress/sidebar/en.ts"
<!-- @include: @src/.vuepress/sidebar/en.ts -->
```

## 选项卡 【仅 VuePress 支持】

::: tabs

@tab 标题 1

内容 1

@tab 标题 2

内容 2

@tab:active 标题 3

内容三，默认激活

:::

## GFM 警告 【Obsidian 也支持】

> [!important]
> 重要文字

> [!info]
> 信息文字

> [!tip]
> 提示文字

> [!warning]
> 注意文字

> [!caution]
> 警告文字

> [!note]
> 注释文字

## 提示容器

::: details
详情容器
:::

## 标记 【Obsidian 也支持】

> 使用 `==  ==` 包裹的文字被高亮显示

VuePress Theme Hope ==非常== 强大!

## ECharts 图表 【仅 VuePress 支持】

::: echarts A nightingale chart

```json
{
  "legend": {
    "top": "bottom"
  },
  "toolbox": {
    "show": true,
    "feature": {
      "mark": {
        "show": true
      },
      "dataView": {
        "show": true,
        "readOnly": false
      },
      "restore": {
        "show": true
      },
      "saveAsImage": {
        "show": true
      }
    }
  },
  "series": [
    {
      "name": "Nightingale Chart",
      "type": "pie",
      "radius": [20, 100],
      "center": ["50%", "50%"],
      "roseType": "area",
      "itemStyle": {
        "borderRadius": 8
      },
      "data": [
        {
          "value": 40,
          "name": "rose 1"
        },
        {
          "value": 38,
          "name": "rose 2"
        },
        {
          "value": 32,
          "name": "rose 3"
        },
        {
          "value": 30,
          "name": "rose 4"
        },
        {
          "value": 28,
          "name": "rose 5"
        },
        {
          "value": 26,
          "name": "rose 6"
        },
        {
          "value": 22,
          "name": "rose 7"
        },
        {
          "value": 18,
          "name": "rose 8"
        }
      ]
    }
  ]
}
```

:::
