# Install Gitea with Docker

## 简介

自用的 Gitea 配置文件，其中包含了自定义的模板文件和静态文件。

> 前往 Gitea 官方文档了解更多：<https://docs.gitea.io/en-us/install-with-docker/>

## 使用

```bash
docker compose up -d
```

## 经验

- 使用 SQLite3 作为数据库，运行 Gitea 只需要不超过 100M 的内存。一台 1G 内存的服务器就可以满足小团队的日常使用。

- 使用 MySQL 8 作为数据库， MySQL 最少会占用 400M 的内存。经过实测，低于 2G 内存的服务器无法正常使用。

## 附：服务器安装 Docker

```bash
# 工具包
sudo yum install -y yum-utils
# 添加仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# 安装
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
# 启动
sudo systemctl start docker
# 检验
sudo docker run hello-world
```
