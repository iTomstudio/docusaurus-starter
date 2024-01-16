---
sidebar_position: 6
title: DevOps
---

### 常用工具
- [可视化git](https://learngitbranching.js.org/?NODEMO=&locale=zh_CN)
	- [github链接](https://github.com/pcottle/learnGitBranching)
- [markdown 折叠块](https://keatonlao.gitee.io/a-study-note-for-markdown/syntax/%E8%AF%A6%E7%BB%86%E7%89%88/markdown-%E6%8A%98%E5%8F%A0%E5%86%85%E5%AE%B9/)
	- 折叠快，流程图，数学公式，[表情](https://keatonlao.gitee.io/a-study-note-for-markdown/syntax/%E8%AF%A6%E7%BB%86%E7%89%88/markdown-%E7%89%B9%E6%AE%8A%E7%AC%A6%E5%8F%B7/)，居然md都支持，刷新了认知
- [GitHub托管静态HTML页面](https://github.com/we11cheng/WCStudy/blob/master/GitHub%E6%89%98%E7%AE%A1%E9%9D%99%E6%80%81HTML%E9%A1%B5%E9%9D%A2.md#github%E6%89%98%E7%AE%A1%E9%9D%99%E6%80%81html%E9%A1%B5%E9%9D%A2)
	- 原理：GitHub有个设定， 就是每个项目的`gh-pages`分支可以通过user-domain/项目名来访问。


- 现代化、开源的 Linux 服务器运维管理面板。 宝塔平替工具 [1Panel](https://github.com/1Panel-dev/1Panel)
	- Linux 相关知识， [自己gitbook](https://gitbook.jerry21.top/fu-wu/linux-yun-hang-shi-ming-ling)
- Linux命令大全搜索工具 [github](https://github.com/jaywcjlove/linux-command) [官网](https://wangchujiang.com/linux-command/)
- [open-source remote desktop](https://github.com/rustdesk/rustdesk) 平替向日葵、TeamViewer
- 镜像管理工具 [Harbor](https://github.com/goharbor/harbor)
- 完全免费开源的 Git 代码托管服务 [CodeFever](https://github.com/PGYER/codefever) 平替gitlab github
- [内网开发运维](https://www.yuque.com/cifar/tech/tefi29adzdtgpe9a?singleDoc# 《内网开发运维》):  LDAP、Confluence、DNS、[VMware ESXi](https://www.bing.com/search?q=vmware+ESXI&PC=U316&FORM=CHROMN) 等等
- 磁盘
	- 磁盘空间可视化 [dua-cli](https://github.com/Byron/dua-cli)
- lazy 系列
	- [lazydocker](https://github.com/jesseduffield/lazydocker)
- K8S
	- [k8s_PaaS](https://github.com/ben1234560/k8s_PaaS)


#### git 加速
##### 不使用魔法
- [github1s](https://github.com/conwnet/github1s)        （必须关掉魔法使用）
##### 使用魔法
git clone 如何使用 clash 代理
```
git config --global http.proxy [http://127.0.0.1:7890](http://127.0.0.1:7890)
git config --global https.proxy [https://127.0.0.1:7890](https://127.0.0.1:7890)
```
git clone           repository_url
移除 Git 的代理设置：
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### 环境类
- 一个简单、易用的开源个人云系统[「CasaOS」](https://github.com/IceWhaleTech/CasaOS) : 具体使用可以百度
- [web-server-chrome](https://github.com/kzahel/web-server-chrome)  ： linux 桌面版借chrome简易操作Nginx
- 服务器性能
	- [YABS-Linux 服务器性能测试脚本](https://www.ahhhhfs.com/51266/)


### 云服务
- 灾备
	- [从阿里云全面崩溃看，真的需要「快速跨云迁移」](https://www.v2ex.com/t/991920)