### 功能描述

>使用 locust.io 和 Docker Swarm 进行负载测试；具体请参加 [Load Testing with Locust.io & Docker Swarm](https://wheniwork.engineering/load-testing-with-locust-io-docker-swarm-d78a2602997a) 。

### 前提条件

安装 `python`。因为 `locust` 是基于 python 运行的（**locust**：Scalable user load testing tool written in Python）；安装可通过如下命令：

```
docker pull python // 默认最新版本
Or
docker pull python:3.6 // 指定版本 3.6
```

### 运行方式

```
cd locusts && docker-compose up
```

浏览器打开地址：http://localhost:8089/

**备注：** 当然你可以在 `locust.config.json` 文件中，修改你要测试的目标网站（target 字段）；如需测试更多，请参见 [locust 官网](https://locust.io/)，修改 `locustfile.py` 即可。
