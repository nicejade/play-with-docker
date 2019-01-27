### 功能描述

>[Ghost](https://ghost.org/?utm_source=nicelinks.site) 一个简洁、纯粹的内容创作与发布平台，目由非盈利性组织 Ghost Foundation 和一群优秀的独立贡献者共同维护。她是基于 Node.js 构建，具有易用的书写界面和体验；官方提供 Docker 镜像，部署颇为简单；博客内容默认采用 [Markdown](https://nicelinks.site/tags/Markdown) 语法书写，其目标是取代臃肿的 Wordpress。另外，她具有一个非常强劲好用的后台，丰富的编辑功能，让你触手可及；允许注入代码，结构化数据，自定义 Facebook 和 Twitter 的社交媒体共享卡，使您能够为社交媒体添加自定义图像，标题和说明，十分利于 **SEO**；并且集成大量外部服务，允许您创建和自定义各种连接的应用程序；并且支持自定义主题，允许多人协作等等等等，更多功能可以参见[强大如斯，Ghost 开源博客平台](https://quickapp.lovejade.cn/ghost-open-source-blog-platform/?utm_source=nicelinks.site)；另附 [Ghost 文档地址](https://docs.ghost.org/?utm_source=nicelinks.site)。── 出自[倾城之链 | Docker](https://nicelinks.site/post/5b7036890f8719053c094d68)。

可以基于 [Docker](https://nicelinks.site/post/5b7036890f8719053c094d68) 运行此目录下的 `docker-compose.yml`，可快速构建 [Ghost](https://nicelinks.site/post/5c3f3151a5957e07a40b30ff) 博客。

### 运行方式

```
docker-compose up
```

**备注：** 当部署在服务器，打开 http://your-server-ip:2368 地址，即可访问该博客（当然，你的服务器要打开 `2368` 端口）。另外，如果想自定义域名，可使用 `Nginx`，将该域名进行反向代理即可。